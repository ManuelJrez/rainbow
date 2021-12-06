import { useIsFocused, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useSharedValue, withSpring } from 'react-native-reanimated';
import { useSafeArea } from 'react-native-safe-area-context';
import styled from 'styled-components';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Divider' was resolved to '/Users/nickby... Remove this comment to see the full error message
import Divider from '../Divider';
import { ExchangeHeader } from '../exchange';
import { FloatingPanel } from '../floating-panels';
import { GasSpeedButton } from '../gas';
import { Column } from '../layout';
import { SlackSheet } from '../sheet';
import { FeesPanel, FeesPanelTabs } from './custom-gas';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@rainbow-me/helpers/gas' or it... Remove this comment to see the full error message
import { getTrendKey } from '@rainbow-me/helpers/gas';
import {
  useAccountSettings,
  useBooleanState,
  useColorForAsset,
  useDimensions,
  useGas,
  useHeight,
  useKeyboardHeight,
  // @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@rainbow-me/hooks' or its corr... Remove this comment to see the full error message
} from '@rainbow-me/hooks';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@rainbow-me/navigation' or its... Remove this comment to see the full error message
import { useNavigation } from '@rainbow-me/navigation';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@rainbow-me/styles' or its cor... Remove this comment to see the full error message
import { margin } from '@rainbow-me/styles';

const springConfig = {
  damping: 500,
  mass: 3,
  stiffness: 1000,
};

const FOOTER_MIN_HEIGHT = 60;
const CONTENT_MIN_HEIGHT = 330;

function useAndroidDisableGesturesOnFocus() {
  const { params } = useRoute();
  const isFocused = useIsFocused();
  useEffect(() => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'android'.
    android && params?.toggleGestureEnabled?.(!isFocused);
  }, [isFocused, params]);
}

const FeesPanelWrapper = styled(Column)`
  ${margin(18, 19, 29, 24)}
`;

const FeesPanelTabswrapper = styled(Column)`
  ${margin(19, 0, 24, 0)}
`;

export default function CustomGasState({ asset }: any) {
  const { network } = useAccountSettings();
  const { setParams } = useNavigation();
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'longFormHeight' does not exist on type '... Remove this comment to see the full error message
  const { params: { longFormHeight, speeds } = {} } = useRoute();
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'useTheme'.
  const { colors } = useTheme();
  const { height: deviceHeight } = useDimensions();
  const keyboardHeight = useKeyboardHeight();
  const [isKeyboardVisible, showKeyboard, hideKeyboard] = useBooleanState();
  const insets = useSafeArea();
  const [footerHeight, setFooterHeight] = useHeight(FOOTER_MIN_HEIGHT);
  const [contentHeight, setContentHeight] = useHeight(CONTENT_MIN_HEIGHT);
  const contentScroll = useSharedValue(0);
  const colorForAsset = useColorForAsset(asset || {}, null, false, true);
  const { selectedGasFee, currentBlockParams } = useGas();
  useAndroidDisableGesturesOnFocus();

  const keyboardOffset = keyboardHeight + insets.bottom + 10;
  const sheetHeightWithoutKeyboard =
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'android'.
    contentHeight + footerHeight + (android ? 10 : 0);

  const sheetHeightWithKeyboard =
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'android'.
    sheetHeightWithoutKeyboard + keyboardHeight + (android ? 0 : -28);

  const additionalScrollForKeyboard =
    sheetHeightWithoutKeyboard + keyboardOffset >
    deviceHeight - insets.top + insets.bottom
      ? deviceHeight -
        insets.top +
        insets.bottom -
        (sheetHeightWithoutKeyboard + keyboardOffset)
      : 0;

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'useMemo'.
  const currentGasTrend = useMemo(
    () => getTrendKey(currentBlockParams?.trend),
    [currentBlockParams?.trend]
  );

  useEffect(() => {
    if (isKeyboardVisible) {
      contentScroll.value = withSpring(
        additionalScrollForKeyboard,
        springConfig
      );
      setParams({ longFormHeight: sheetHeightWithKeyboard });
    } else {
      contentScroll.value = withSpring(0, springConfig);
      setParams({ longFormHeight: sheetHeightWithoutKeyboard });
    }
  }, [
    additionalScrollForKeyboard,
    contentScroll,
    isKeyboardVisible,
    sheetHeightWithKeyboard,
    sheetHeightWithoutKeyboard,
    setParams,
  ]);
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <SlackSheet
      additionalTopPadding
      backgroundColor={colors.shadowBlack}
      borderBottomRadius={0}
      contentHeight={longFormHeight}
      deviceHeight={deviceHeight}
      hideHandle
      radius={39}
      removeTopPadding
      scrollEnabled={false}
    >
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
      '--jsx' flag is provided... Remove this comment to see the full error
      message
      <FloatingPanel onLayout={setContentHeight} radius={android ? 30 : 39}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
        '--jsx' flag is provided... Remove this comment to see the full error
        message
        <ExchangeHeader />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
        '--jsx' flag is provided... Remove this comment to see the full error
        message
        <FeesPanelWrapper>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
          '--jsx' flag is provided... Remove this comment to see the full error
          message
          <FeesPanel
            colorForAsset={colorForAsset}
            currentGasTrend={currentGasTrend}
            onCustomGasBlur={hideKeyboard}
            onCustomGasFocus={showKeyboard}
            selectedGasFee={selectedGasFee}
          />
        </FeesPanelWrapper>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
        '--jsx' flag is provided... Remove this comment to see the full error
        message
        <Divider color={colors.rowDividerExtraLight} inset={[0, 24, 0, 24]} />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
        '--jsx' flag is provided... Remove this comment to see the full error
        message
        <FeesPanelTabswrapper>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
          '--jsx' flag is provided... Remove this comment to see the full error
          message
          <FeesPanelTabs
            colorForAsset={colorForAsset}
            onPressTabPill={hideKeyboard}
            speeds={speeds}
          />
        </FeesPanelTabswrapper>
      </FloatingPanel>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
      '--jsx' flag is provided... Remove this comment to see the full error
      message
      <Column onLayout={setFooterHeight}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
        '--jsx' flag is provided... Remove this comment to see the full error
        message
        <GasSpeedButton
          asset={asset}
          currentNetwork={network}
          showGasOptions
          testID="swap-details-gas"
          theme="dark"
        />
      </Column>
    </SlackSheet>
  );
}
