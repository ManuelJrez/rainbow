import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useMemo, useState } from 'react';
import { FlexItem } from '../components/layout';
import { TestnetToast } from '../components/toasts';
import { web3Provider } from '../handlers/web3';
import ENSConfirmRegisterSheet from '../screens/ENSConfirmRegisterSheet';
import ProfileScreen from '../screens/ProfileScreen';
import QRScannerScreen from '../screens/QRScannerScreen';
import WalletScreen from '../screens/WalletScreen';
import { deviceUtils } from '../utils';
import ScrollPagerWrapper from './ScrollPagerWrapper';
import Routes from './routesNames';
import {
  useAccountSettings,
  useCoinListEdited,
  useHideSplashScreen,
} from '@rainbow-me/hooks';

const Swipe = createMaterialTopTabNavigator();

const renderTabBar = () => null;

const renderPager = props => (
  <ScrollPagerWrapper {...props} initialScrollPosition={1} />
);

export function SwipeNavigator() {
  const { isCoinListEdited } = useCoinListEdited();
  const { network } = useAccountSettings();
  const [swipeEnabled, setSwipeEnabled] = useState(true);
  const params = useMemo(() => ({ setSwipeEnabled }), []);

  useHideSplashScreen();

  return (
    <FlexItem>
      <Swipe.Navigator
        initialLayout={deviceUtils.dimensions}
        initialRouteName={Routes.PROFILE_SCREEN}
        pager={renderPager}
        swipeEnabled={swipeEnabled && !isCoinListEdited}
        tabBar={renderTabBar}
      >
        {/* <Swipe.Screen
          component={ENSConfirmRegisterSheet}
          name={Routes.ENS_CONFIRM_REGISTER_SHEET}
        /> */}
        <Swipe.Screen component={ProfileScreen} name={Routes.PROFILE_SCREEN} />
        <Swipe.Screen component={WalletScreen} name={Routes.WALLET_SCREEN} />
        <Swipe.Screen
          component={QRScannerScreen}
          initialParams={params}
          name={Routes.QR_SCANNER_SCREEN}
        />
      </Swipe.Navigator>
      <TestnetToast network={network} web3Provider={web3Provider} />
    </FlexItem>
  );
}
