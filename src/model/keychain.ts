import { captureException, captureMessage } from '@sentry/react-native';
import { forEach, isNil } from 'lodash';
import DeviceInfo from 'react-native-device-info';
import {
  ACCESS_CONTROL,
  ACCESSIBLE,
  AUTHENTICATION_TYPE,
  canImplyAuthentication,
  // @ts-expect-error ts-migrate(2724) FIXME: '"react-native-keychain"' has no exported member n... Remove this comment to see the full error message
  getAllInternetCredentials,
  // @ts-expect-error ts-migrate(2305) FIXME: Module '"react-native-keychain"' has no exported m... Remove this comment to see the full error message
  getAllInternetCredentialsKeys,
  getInternetCredentials,
  getSupportedBiometryType,
  hasInternetCredentials,
  Options,
  resetInternetCredentials,
  Result,
  setInternetCredentials,
  UserCredentials,
} from 'react-native-keychain';
import { delay } from '../helpers/utilities';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'logger' or its corresponding t... Remove this comment to see the full error message
import logger from 'logger';

interface AnonymousKey {
  length: number;
  nil: boolean;
  type: string;
}

interface AnonymousKeyData {
  [key: string]: AnonymousKey;
}

export async function saveString(
  key: string,
  value: string,
  accessControlOptions: Options
): Promise<void> {
  return new Promise(async (resolve, reject) => {
    try {
      await setInternetCredentials(key, key, value, accessControlOptions);
      logger.sentry(`Keychain: saved string for key: ${key}`);
      resolve();
    } catch (e) {
      logger.sentry(`Keychain: failed to save string for key: ${key}`, e);
      captureMessage('Keychain write first attempt failed');
      await delay(1000);
      try {
        await setInternetCredentials(key, key, value, accessControlOptions);
        logger.sentry(
          `Keychain: saved string for key: ${key} on second attempt`
        );
        resolve();
      } catch (e) {
        logger.sentry(`Keychain: failed to save string for key: ${key}`, e);
        captureMessage('Keychain write second attempt failed');
        reject(e);
      }
    }
  });
}

export async function loadString(
  key: string,
  options?: Options
): Promise<null | string | -1 | -2> {
  try {
    const credentials = await getInternetCredentials(key, options);
    if (credentials) {
      logger.log(`Keychain: loaded string for key: ${key}`);
      return credentials.password;
    }
    logger.sentry(`Keychain: string does not exist for key: ${key}`);
  } catch (err: any) {
    if (err.toString() === 'Error: User canceled the operation.') {
      return -1;
    }
    if (err.toString() === 'Error: Wrapped error: User not authenticated') {
      return -2;
    }
    if (
      err.toString() ===
      'Error: The user name or passphrase you entered is not correct.'
    ) {
      // Try reading from keychain once more
      captureMessage('Keychain read first attempt failed');
      await delay(1000);
      try {
        const credentials = await getInternetCredentials(key, options);
        if (credentials) {
          logger.log(
            `Keychain: loaded string for key on second attempt: ${key}`
          );
          return credentials.password;
        }
        logger.sentry(`Keychain: string does not exist for key: ${key}`);
      } catch (e) {
        if (err.toString() === 'Error: User canceled the operation.') {
          return -1;
        }
        if (err.toString() === 'Error: Wrapped error: User not authenticated') {
          return -2;
        }
        captureMessage('Keychain read second attempt failed');
        logger.sentry(
          `Keychain: failed to load string for key: ${key} error: ${err}`
        );
        captureException(err);
      }
      return null;
    }
    logger.sentry(
      `Keychain: failed to load string for key: ${key} error: ${err}`
    );
    captureException(err);
  }
  return null;
}

export async function saveObject(
  key: string,
  value: Object,
  accessControlOptions: Options
): Promise<void> {
  const jsonValue = JSON.stringify(value);
  return saveString(key, jsonValue, accessControlOptions);
}

export async function loadObject(
  key: string,
  options?: Options
): Promise<null | Object | -1 | -2> {
  const jsonValue = await loadString(key, options);
  if (!jsonValue) return null;
  if (jsonValue === -1 || jsonValue === -2) {
    return jsonValue;
  }
  try {
    const objectValue = JSON.parse(jsonValue);
    logger.log(`Keychain: parsed object for key: ${key}`);
    return objectValue;
  } catch (err) {
    logger.sentry(
      `Keychain: failed to parse object for key: ${key} error: ${err}`
    );
    captureException(err);
  }
  return null;
}

export async function remove(key: string): Promise<void> {
  try {
    await resetInternetCredentials(key);
    logger.log(`Keychain: removed value for key: ${key}`);
  } catch (err) {
    logger.log(
      `Keychain: failed to remove value for key: ${key} error: ${err}`
    );
    captureException(err);
  }
}

export async function loadAllKeys(): Promise<null | UserCredentials[]> {
  try {
    const response = await getAllInternetCredentials();
    if (response) {
      return response.results;
    }
  } catch (err) {
    logger.sentry(`Keychain: failed to loadAllKeys error: ${err}`);
    captureException(err);
  }
  return null;
}

export async function getAllKeysAnonymized(): Promise<null | AnonymousKeyData> {
  const data: AnonymousKeyData = {};
  const results = await loadAllKeys();
  forEach(results, result => {
    data[result?.username] = {
      length: result?.password?.length,
      nil: isNil(result?.password),
      type: typeof result?.password,
    };
  });
  return data;
}

export async function loadAllKeysOnly(): Promise<null | string[]> {
  try {
    const response = await getAllInternetCredentialsKeys();
    if (response) {
      return response.results;
    }
  } catch (err) {
    logger.log(`Keychain: failed to loadAllKeys error: ${err}`);
    captureException(err);
  }
  return null;
}

export async function hasKey(key: string): Promise<boolean | Result> {
  try {
    const result = await hasInternetCredentials(key);
    return result;
  } catch (err) {
    logger.sentry(
      `Keychain: failed to check if key ${key} exists -  error: ${err}`
    );
    captureException(err);
  }
  return false;
}

export async function wipeKeychain(): Promise<void> {
  try {
    const results = await loadAllKeys();
    if (results) {
      await Promise.all(
        results?.map(result => resetInternetCredentials(result.username))
      );
      logger.log('keychain wiped!');
    }
  } catch (e) {
    logger.sentry('error while wiping keychain');
    captureException(e);
  }
}

export async function getPrivateAccessControlOptions(): Promise<Options> {
  let res = {};
  try {
    let canAuthenticate;

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'ios'.
    if (ios) {
      canAuthenticate = await canImplyAuthentication({
        authenticationType: AUTHENTICATION_TYPE.DEVICE_PASSCODE_OR_BIOMETRICS,
      });
    } else {
      const hasBiometricsEnabled = await getSupportedBiometryType();
      canAuthenticate = !!hasBiometricsEnabled;
    }

    let isSimulator = false;

    if (canAuthenticate) {
      isSimulator = __DEV__ && (await DeviceInfo.isEmulator());
    }
    if (canAuthenticate && !isSimulator) {
      res = {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'ios'.
        accessControl: ios
          ? ACCESS_CONTROL.USER_PRESENCE
          : ACCESS_CONTROL.BIOMETRY_CURRENT_SET_OR_DEVICE_PASSCODE,
        accessible: ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
      };
    }
    // eslint-disable-next-line no-empty
  } catch (e) {}

  return res;
}
