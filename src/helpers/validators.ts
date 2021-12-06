import { isValidAddress } from 'ethereumjs-util';
import { parseDomain, ParseResultType } from 'parse-domain';
import {
  isHexStringIgnorePrefix,
  isValidMnemonic,
  resolveUnstoppableDomain,
  web3Provider,
  // @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@rainbow-me/handlers/web3' or ... Remove this comment to see the full error message
} from '@rainbow-me/handlers/web3';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@rainbow-me/utils' or its corr... Remove this comment to see the full error message
import { sanitizeSeedPhrase } from '@rainbow-me/utils';

// Currently supported Top Level Domains from Unstoppable Domains
const supportedUnstoppableDomains = [
  '888',
  'bitcoin',
  'coin',
  'crypto',
  'dao',
  'nft',
  'wallet',
  'x',
  'zil',
];

/**
 * @desc validate email
 * @param  {String}  email
 * @return {Boolean}
 */
export const isValidEmail = (email: any) =>
  !!email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

export const isENSAddressFormat = (address: any) => {
  const parts = address && address.split('.');
  if (
    !parts ||
    parts.length === 1 ||
    (parseDomain(parts[parts.length - 1].toLowerCase()).type ===
      ParseResultType.NotListed &&
      parts[parts.length - 1].toLowerCase() !== 'eth') ||
    supportedUnstoppableDomains.includes(parts[parts.length - 1].toLowerCase())
  ) {
    return false;
  }
  return true;
};

export const isUnstoppableAddressFormat = (address: any) => {
  const parts = address && address.split('.');
  if (
    !parts ||
    parts.length === 1 ||
    !supportedUnstoppableDomains.includes(parts[parts.length - 1].toLowerCase())
  ) {
    return false;
  }
  return true;
};

/**
 * @desc validate ethereum address, ENS, or Unstoppable name
 * @param  {String} address, ENS, or Unstoppable
 * @return {Boolean}
 */
export const checkIsValidAddressOrDomain = async (address: any) => {
  if (isENSAddressFormat(address)) {
    try {
      const resolvedAddress = await web3Provider.resolveName(address);
      return !!resolvedAddress;
    } catch (error) {
      return false;
    }
  }
  if (isUnstoppableAddressFormat(address)) {
    const resolvedAddress = await resolveUnstoppableDomain(address);
    return !!resolvedAddress;
  }
  return isValidAddress(address);
};

/**
 * @desc validate ENS or Unstoppable format
 * @param  {String} ENS, or Unstoppable
 * @return {Boolean}
 */
export const isValidDomainFormat = (domain: any) => {
  return isUnstoppableAddressFormat(domain) || isENSAddressFormat(domain);
};
/**
 * @desc validate seed phrase mnemonic
 * @param  {String} seed phrase mnemonic
 * @return {Boolean}
 */
const isValidSeedPhrase = (seedPhrase: any) => {
  const sanitizedSeedPhrase = sanitizeSeedPhrase(seedPhrase);
  return (
    sanitizedSeedPhrase.split(' ').length >= 12 &&
    isValidMnemonic(sanitizedSeedPhrase)
  );
};

/**
 * @desc validate private key string
 * @param  {String} private key string
 * @return {Boolean}
 */
const isValidPrivateKey = (key: any) => {
  return key.length >= 64 && isHexStringIgnorePrefix(key);
};

/**
 * @desc validate seed phrase mnemonic or private key
 * @param  {String} seed phrase mnemonic or private key
 * @return {Boolean}
 */
export const isValidSeed = (seed: any) =>
  seed && (isValidPrivateKey(seed) || isValidSeedPhrase(seed));

/**
 * @desc validates the input required to create a new wallet
 * @param  {String} seed, mnemonic, private key, address, ENS name, or Unstoppable name
 * @return {Boolean}
 */
export const isValidWallet = (seed: any) =>
  seed &&
  (isValidPrivateKey(seed) ||
    isValidSeedPhrase(seed) ||
    isValidAddress(seed) ||
    isUnstoppableAddressFormat(seed) ||
    isENSAddressFormat(seed));
