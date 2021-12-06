import analytics from '@segment/analytics-react-native';
import React, { useCallback, useState } from 'react';
import { Linking } from 'react-native';
import { neverRerender } from '../../../utils';
// @ts-expect-error ts-migrate(6142) FIXME: Module './SheetActionButton' was resolved to '/Use... Remove this comment to see the full error message
import SheetActionButton from './SheetActionButton';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@rainbow-me/entities' or its c... Remove this comment to see the full error message
import { AssetTypes } from '@rainbow-me/entities';

function WithdrawActionButton({
  color: givenColor,
  symbol,
  token1Address,
  token2Address,
  type,
  ...props
}: any) {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'useTheme'.
  const { colors, isDarkMode } = useTheme();
  const color = givenColor || (isDarkMode ? colors.darkModeDark : colors.dark);
  const [didTrack, setDidTrack] = useState(false);
  const version = type === AssetTypes.uniswapV2 ? 'v2/' : '';

  const handlePress = useCallback(() => {
    if (!didTrack) {
      analytics.track('Tapped placeholder Withdraw button', {
        category: 'liquidity pool',
        label: symbol,
      });
      setDidTrack(true);
    }

    Linking.openURL(
      `https://app.uniswap.org/#/remove/${version}${token1Address}/${token2Address}`
    );
  }, [didTrack, symbol, token1Address, token2Address, version]);

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <SheetActionButton
      {...props}
      color={color}
      label="􀁏 Withdraw"
      onPress={handlePress}
    />
  );
}

export default neverRerender(WithdrawActionButton);
