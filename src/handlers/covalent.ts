import { captureException } from '@sentry/react-native';
import {
  // @ts-expect-error ts-migrate(2305) FIXME: Module '"react-native-dotenv"' has no exported mem... Remove this comment to see the full error message
  COVALENT_ANDROID_API_KEY,
  // @ts-expect-error ts-migrate(2305) FIXME: Module '"react-native-dotenv"' has no exported mem... Remove this comment to see the full error message
  COVALENT_IOS_API_KEY,
} from 'react-native-dotenv';
import { rainbowFetch } from '../rainbow-fetch';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@rainbow-me/entities' or its c... Remove this comment to see the full error message
import { EthereumAddress } from '@rainbow-me/entities';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'logger' or its corresponding t... Remove this comment to see the full error message
import Logger from 'logger';

export const getAssetsFromCovalent = async (
  chainId: Number,
  accountAddress: EthereumAddress,
  currency: string
) => {
  try {
    const url = `https://api.covalenthq.com/v1/${chainId}/address/${accountAddress}/balances_v2/`;

    const params = {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'ios'.
      'key': ios ? COVALENT_IOS_API_KEY : COVALENT_ANDROID_API_KEY,
      'nft': 'false',
      'quote-currency': currency,
    };

    const response = await rainbowFetch(url, {
      method: 'get',
      params,
      timeout: 10000, // 10 secs
    });

    if (response?.data?.data && !response?.data.error) {
      return response.data.data;
    }
  } catch (e) {
    Logger.sentry('error fetching assets from covalent for chainId:', chainId);
    Logger.sentry('Error:', e);
    captureException(new Error('Covalent assets exception'));
  }
  return null;
};
