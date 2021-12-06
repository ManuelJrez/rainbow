import analytics from '@segment/analytics-react-native';
import { captureMessage } from '@sentry/react-native';
import { get } from 'lodash';
import React, { Fragment, useCallback } from 'react';
import { Linking } from 'react-native';
import styled from 'styled-components';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../context/ThemeContext' was resolved to '... Remove this comment to see the full error message
import { useTheme } from '../context/ThemeContext';
import networkInfo from '../helpers/networkInfo';
import networkTypes from '../helpers/networkTypes';
import showWalletErrorAlert from '../helpers/support';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../navigation/Navigation' was resolved to ... Remove this comment to see the full error message
import { useNavigation } from '../navigation/Navigation';
import { magicMemo } from '../utils';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Divider' was resolved to '/Users/nickbyt... Remove this comment to see the full error message
import Divider from './Divider';
import { ButtonPressAnimation, ScaleButtonZoomableAndroid } from './animations';
import { Icon } from './icons';
import { Centered, Row, RowWithMargins } from './layout';
import { Text } from './text';
import {
  useAccountSettings,
  useDimensions,
  useWallets,
  // @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@rainbow-me/hooks' or its corr... Remove this comment to see the full error message
} from '@rainbow-me/hooks';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@rainbow-me/routes' or its cor... Remove this comment to see the full error message
import Routes from '@rainbow-me/routes';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@rainbow-me/styles' or its cor... Remove this comment to see the full error message
import { padding, position } from '@rainbow-me/styles';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-native-shadow-stack' or ... Remove this comment to see the full error message
import ShadowStack from 'react-native-shadow-stack';

const ContainerWidth = 261;

const Container = styled(Centered).attrs({ direction: 'column' })`
  position: absolute;
  top: 60;
  width: ${ContainerWidth};
`;

const InterstitialButton = styled(ButtonPressAnimation).attrs(
  ({ theme: { colors } }) => ({
    backgroundColor: colors.alpha(colors.blueGreyDark, 0.06),
    borderRadius: 23,
  })
)`
  ${padding(11, 15, 14)};
`;

const InterstitialButtonRow = styled(Row)`
  margin-bottom: ${({ isSmallPhone }) => (isSmallPhone ? 19 : 42)};
`;

const InterstitialDivider = styled(Divider).attrs(({ theme: { colors } }) => ({
  color: colors.rowDividerExtraLight,
  inset: [0, 0, 0, 0],
}))`
  border-radius: 1;
`;

const CopyAddressButton = styled(ButtonPressAnimation).attrs(
  ({ theme: { colors } }) => ({
    backgroundColor: colors.alpha(colors.appleBlue, 0.06),
    borderRadius: 23,
  })
)`
  ${padding(10.5, 15, 14.5)};
`;

const AmountBPA = styled(ButtonPressAnimation)`
  border-radius: 25px;
  overflow: visible;
`;

const Paragraph = styled(Text).attrs(({ theme: { colors } }) => ({
  align: 'center',
  color: colors.alpha(colors.blueGreyDark, 0.4),
  letterSpacing: 'roundedMedium',
  lineHeight: 'paragraphSmall',
  size: 'lmedium',
  weight: 'semibold',
}))`
  margin-bottom: 24;
  margin-top: 19;
`;

const Title = styled(Text).attrs(({ theme: { colors } }) => ({
  align: 'center',
  color: colors.dark,
  lineHeight: 32,
  size: 'bigger',
  weight: 'heavy',
}))`
  margin-horizontal: 27;
`;

const Subtitle = styled(Title).attrs(({ theme: { colors } }) => ({
  color: colors.dark,
}))`
  margin-top: ${({ isSmallPhone }) => (isSmallPhone ? 19 : 42)};
`;

const AmountText = styled(Text).attrs(({ children }) => ({
  align: 'center',
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'android'.
  children: android ? `  ${children.join('')}  ` : children,
  letterSpacing: 'roundedTightest',
  size: 'bigger',
  weight: 'heavy',
}))`
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'android'.
  ${android ? padding(15, 4.5) : padding(24, 15, 25)};
  align-self: center;
  text-shadow: 0px 0px 20px ${({ color }) => color};
  z-index: 1;
`;

const AmountButtonWrapper = styled(Row).attrs({
  justify: 'center',
  marginLeft: 7.5,
  marginRight: 7.5,
})`
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'android'.
  ${android ? 'width: 100' : ''};
`;

const onAddFromFaucet = (network: any) => {
  const faucetUrl = get(networkInfo[network], 'faucet_url');
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'string | null' is not assignable... Remove this comment to see the full error message
  Linking.openURL(faucetUrl);
};

// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'android'.
const InnerBPA = android
  ? ButtonPressAnimation
  : ({ children }: any) => children;

// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'android'.
const Wrapper = android ? ScaleButtonZoomableAndroid : AmountBPA;

const AmountButton = ({ amount, backgroundColor, color, onPress }: any) => {
  const handlePress = useCallback(() => onPress?.(amount), [amount, onPress]);
  const { colors } = useTheme();
  const shadows = {
    [colors.swapPurple]: [
      [0, 5, 15, colors.shadow, 0.2],
      [0, 10, 30, colors.swapPurple, 0.4],
    ],
    [colors.purpleDark]: [
      [0, 5, 15, colors.shadow, 0.2],
      [0, 10, 30, colors.purpleDark, 0.4],
    ],
  };

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <AmountButtonWrapper>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
      '--jsx' flag is provided... Remove this comment to see the full error
      message
      <Wrapper disabled={android} onPress={handlePress}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
        '--jsx' flag is provided... Remove this comment to see the full error
        message
        <ShadowStack
          {...position.coverAsObject}
          backgroundColor={backgroundColor}
          borderRadius={25}
          shadows={shadows[backgroundColor]}
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'android'.
          {...(android && {
            height: 80,
            width: 100,
          })}
        />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
        '--jsx' flag is provided... Remove this comment to see the full error
        message
        <InnerBPA
          onPress={handlePress}
          reanimatedButton
          wrapperStyle={{
            zIndex: 10,
          }}
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
          '--jsx' flag is provided... Remove this comment to see the full error
          message
          <AmountText color={color} textShadowColor={color}>
            ${amount}
          </AmountText>
        </InnerBPA>
      </Wrapper>
    </AmountButtonWrapper>
  );
};

const AddFundsInterstitial = ({ network }: any) => {
  const { isSmallPhone } = useDimensions();
  const { navigate } = useNavigation();
  const { isDamaged } = useWallets();
  const { accountAddress } = useAccountSettings();
  const { colors } = useTheme();

  const handlePressAmount = useCallback(
    amount => {
      if (isDamaged) {
        showWalletErrorAlert();
        captureMessage('Damaged wallet preventing add cash');
        return;
      }
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'ios'.
      if (ios) {
        navigate(Routes.ADD_CASH_FLOW, {
          params: !isNaN(amount) ? { amount } : null,
          screen: Routes.ADD_CASH_SCREEN_NAVIGATOR,
        });
        analytics.track('Tapped Add Cash', {
          amount: amount,
          category: 'add cash',
          newWallet: true,
        });
      } else {
        navigate(Routes.WYRE_WEBVIEW_NAVIGATOR, {
          params: {
            address: accountAddress,
            amount: !isNaN(amount) ? amount : null,
          },
          screen: Routes.WYRE_WEBVIEW,
        });
        analytics.track('Tapped Add Cash', {
          amount: amount,
          category: 'add cash',
          newWallet: true,
        });
      }
    },
    [isDamaged, navigate, accountAddress]
  );

  const handlePressCopyAddress = useCallback(() => {
    if (isDamaged) {
      showWalletErrorAlert();
      return;
    }
    navigate(Routes.RECEIVE_MODAL);
  }, [navigate, isDamaged]);

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container>
      {network === networkTypes.mainnet ? (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Fragment>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
          '--jsx' flag is provided... Remove this comment to see the full error
          message
          <Title>
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'ios'.
            To get started, buy some ETH{ios ? ` with Apple Pay` : ''}
          </Title>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
          '--jsx' flag is provided... Remove this comment to see the full error
          message
          <Row justify="space-between" marginVertical={30}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless
            the '--jsx' flag is provided... Remove this comment to see the full
            error message
            <AmountButton
              amount={100}
              backgroundColor={colors.swapPurple}
              color={colors.neonSkyblue}
              onPress={handlePressAmount}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless
            the '--jsx' flag is provided... Remove this comment to see the full
            error message
            <AmountButton
              amount={200}
              backgroundColor={colors.swapPurple}
              color={colors.neonSkyblue}
              onPress={handlePressAmount}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless
            the '--jsx' flag is provided... Remove this comment to see the full
            error message
            <AmountButton
              amount={300}
              backgroundColor={colors.purpleDark}
              color={colors.pinkLight}
              onPress={handlePressAmount}
            />
          </Row>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
          '--jsx' flag is provided... Remove this comment to see the full error
          message
          <InterstitialButtonRow>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless
            the '--jsx' flag is provided... Remove this comment to see the full
            error message
            <InterstitialButton onPress={handlePressAmount} radiusAndroid={23}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless
              the '--jsx' flag is provided... Remove this comment to see the
              full error message
              <Text
                align="center"
                color={colors.alpha(colors.blueGreyDark, 0.6)}
                lineHeight="loose"
                size="large"
                weight="bold"
              >
                􀍡 Other amount
              </Text>
            </InterstitialButton>
          </InterstitialButtonRow>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
          '--jsx' flag is provided... Remove this comment to see the full error
          message
          {!isSmallPhone && <InterstitialDivider />}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
          '--jsx' flag is provided... Remove this comment to see the full error
          message
          <Subtitle isSmallPhone={isSmallPhone}>
            or send ETH to your wallet
          </Subtitle>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
          '--jsx' flag is provided... Remove this comment to see the full error
          message
          <Paragraph>
            Send from Coinbase or another exchange—or ask a friend!
          </Paragraph>
        </Fragment>
      ) : (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Fragment>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
          '--jsx' flag is provided... Remove this comment to see the full error
          message
          <Title>
            Request test ETH through the {get(networkInfo[network], 'name')}{' '}
            faucet
          </Title>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
          '--jsx' flag is provided... Remove this comment to see the full error
          message
          <Row marginTop={30}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless
            the '--jsx' flag is provided... Remove this comment to see the full
            error message
            <InterstitialButton onPress={() => onAddFromFaucet(network)}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless
              the '--jsx' flag is provided... Remove this comment to see the
              full error message
              <Text
                align="center"
                color={colors.alpha(colors.blueGreyDark, 0.6)}
                lineHeight="loose"
                size="large"
                weight="bold"
              >
                􀎬 Add from faucet
              </Text>
            </InterstitialButton>
          </Row>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
          '--jsx' flag is provided... Remove this comment to see the full error
          message
          {!isSmallPhone && <InterstitialDivider />}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
          '--jsx' flag is provided... Remove this comment to see the full error
          message
          <Subtitle isSmallPhone={isSmallPhone}>
            or send test ETH to your wallet
          </Subtitle>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
          '--jsx' flag is provided... Remove this comment to see the full error
          message
          <Paragraph>
            Send test ETH from another {get(networkInfo[network], 'name')}{' '}
            wallet—or ask a friend!
          </Paragraph>
        </Fragment>
      )}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
      '--jsx' flag is provided... Remove this comment to see the full error
      message
      <CopyAddressButton
        onPress={handlePressCopyAddress}
        radiusAndroid={23}
        testID="copy-address-button"
      >
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
        '--jsx' flag is provided... Remove this comment to see the full error
        message
        <RowWithMargins margin={6}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
          '--jsx' flag is provided... Remove this comment to see the full error
          message
          <Icon
            color={colors.appleBlue}
            marginTop={0.5}
            name="copy"
            size={19}
          />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
          '--jsx' flag is provided... Remove this comment to see the full error
          message
          <Text
            align="center"
            color={colors.appleBlue}
            lineHeight="loose"
            size="large"
            weight="bold"
          >
            Copy address
          </Text>
        </RowWithMargins>
      </CopyAddressButton>
    </Container>
  );
};

// @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
export default magicMemo(AddFundsInterstitial, ['network', 'offsetY']);
