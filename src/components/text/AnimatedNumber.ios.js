import AnimatedNumber from '@rainbow-me/react-native-animated-number';
import styled from '@terrysahaidak/style-thing';
import { buildTextStyles } from '@rainbow-me/styles';

const AnimatedNumberWithTextStyles = styled(AnimatedNumber)(
  buildTextStyles.object
);

export default AnimatedNumberWithTextStyles;
