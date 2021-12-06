import { addHexPrefix } from '@walletconnect/utils';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components';
import { PERSONAL_SIGN, SIGN_TYPED_DATA } from '../../utils/signingMethods';
import { Row } from '../layout';
import { Text } from '../text';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@rainbow-me/handlers/web3' or ... Remove this comment to see the full error message
import { isHexString } from '@rainbow-me/handlers/web3';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@rainbow-me/styles' or its cor... Remove this comment to see the full error message
import { padding } from '@rainbow-me/styles';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@rainbow-me/utils' or its corr... Remove this comment to see the full error message
import { deviceUtils } from '@rainbow-me/utils';

const deviceWidth = deviceUtils.dimensions.width;
const horizontalPadding = 24;

const Container = styled(Row)`
  max-height: ${({ maxHeight }) => maxHeight};
  min-height: ${({ minHeight }) => minHeight};
`;
const MessageWrapper = styled(ScrollView)`
  ${padding(12, 15)}
  border-color: ${({ theme: { colors } }) =>
    colors.alpha(colors.blueGreyDark, 0.08)};
  border-radius: 20;
  border-width: 1;
  margin-bottom: 14;
  min-width: ${deviceWidth - horizontalPadding * 2};
`;

const TransactionMessage = ({ maxHeight = 150, message, method }: any) => {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'useTheme'.
  const { colors } = useTheme();
  let msg = message;
  let maximumHeight = maxHeight;
  let minimumHeight = 150;
  if (method === SIGN_TYPED_DATA) {
    maximumHeight = 200;
    minimumHeight = 200;
    try {
      msg = JSON.parse(message);
      // eslint-disable-next-line no-empty
    } catch (e) {}
    msg = JSON.stringify(msg, null, 4);
  } else if (method === PERSONAL_SIGN) {
    if (isHexString(addHexPrefix(msg))) {
      const normalizedMsg = addHexPrefix(msg);
      const stripped = normalizedMsg.substring(2);
      const buff = Buffer.from(stripped, 'hex');
      msg = buff.toString('utf8');
    }
  }

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container maxHeight={maximumHeight} minHeight={minimumHeight}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
      '--jsx' flag is provided... Remove this comment to see the full error
      message
      <MessageWrapper>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
        '--jsx' flag is provided... Remove this comment to see the full error
        message
        <Text color={colors.alpha(colors.blueGreyDark, 0.6)} size="lmedium">
          {msg}
        </Text>
      </MessageWrapper>
    </Container>
  );
};

export default TransactionMessage;
