import PropTypes from 'prop-types';
import React from 'react';
import { Path } from 'react-native-svg';
import Svg from '../Svg';

const PinIcon = ({ color, colors, ...props }: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Svg height="13" viewBox="0 0 8 13" width="8" {...props}>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
    '--jsx' flag is provided... Remove this comment to see the full error
    message
    <Path
      d="M2.38206 5.16666C0.980101 5.67646 0.136963 6.79411 0.136963 7.83332C0.136963 8.25489 0.421277 8.5294 0.862453 8.5294H3.39187V10.2843C3.39187 11.3529 3.82324 12.2255 3.99971 12.2255C4.17618 12.2255 4.60755 11.3529 4.60755 10.2843V8.5294H7.13696C7.58794 8.5294 7.86245 8.25489 7.86245 7.83332C7.86245 6.79411 7.01932 5.67646 5.62716 5.16666L5.46049 2.87254C6.17618 2.47058 6.76441 2.00979 7.02912 1.67646C7.15657 1.49999 7.2252 1.32352 7.2252 1.16666C7.2252 0.862735 6.99971 0.647049 6.63696 0.647049H1.36245C1.00951 0.647049 0.774218 0.862735 0.774218 1.16666C0.774218 1.32352 0.842845 1.50979 0.989904 1.68626C1.25461 2.0196 1.83304 2.48038 2.54873 2.87254L2.38206 5.16666Z"
      fill={color || colors.black}
      fillRule="nonzero"
    />
  </Svg>
);

PinIcon.propTypes = {
  color: PropTypes.string,
};

export default PinIcon;
