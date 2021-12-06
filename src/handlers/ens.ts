import { debounce, isEmpty, sortBy } from 'lodash';
import { ensClient } from '../apollo/client';
import { ENS_SUGGESTIONS } from '../apollo/queries';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@rainbow-me/utils' or its corr... Remove this comment to see the full error message
import { profileUtils } from '@rainbow-me/utils';

export const fetchSuggestions = async (
  recipient: any,
  setSuggestions: any,
  // eslint-disable-next-line no-unused-vars
  setIsFetching = (_unused: any) => {}
) => {
  if (recipient.length > 2) {
    setIsFetching(true);
    const recpt = recipient.toLowerCase();
    let result = await ensClient.query({
      query: ENS_SUGGESTIONS,
      variables: {
        amount: 75,
        name: recpt,
      },
    });

    if (!isEmpty(result?.data?.domains)) {
      const ensSuggestions = result.data.domains
        .map((ensDomain: any) => ({
          address: ensDomain?.resolver?.addr?.id || ensDomain?.name,

          color: profileUtils.addressHashedColorIndex(
            ensDomain?.resolver?.addr?.id || ensDomain.name
          ),

          ens: true,
          network: 'mainnet',
          nickname: ensDomain?.name,
          uniqueId: ensDomain?.resolver?.addr?.id || ensDomain.name,
        }))
        .filter((domain: any) => !domain?.nickname?.includes?.('['));
      const sortedEnsSuggestions = sortBy(
        ensSuggestions,
        domain => domain.nickname.length,
        ['asc']
      );

      const slicedSortedSuggestions = sortedEnsSuggestions.slice(0, 3);
      setSuggestions(slicedSortedSuggestions);
    }
  } else {
    setSuggestions([]);
  }
  setIsFetching(false);
};

export const debouncedFetchSuggestions = debounce(fetchSuggestions, 200);
