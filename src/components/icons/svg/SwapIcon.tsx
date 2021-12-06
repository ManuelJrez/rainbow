import PropTypes from 'prop-types';
import React from 'react';
import { Path } from 'react-native-svg';
import Svg from '../Svg';

const smallPath =
  'M 5.289 21.149 L 8.397 16.847 C 9.035 15.977 8.734 15.142 7.736 15.142 L 5.846 15.142 L 5.846 6.919 C 5.846 5.122 6.925 3.962 8.49 3.962 C 10.056 3.962 11.158 5.11 11.158 6.919 L 11.158 14.852 C 11.158 18.435 13.489 20.975 16.771 20.975 C 20.192 20.975 22.361 18.47 22.361 14.852 L 22.361 6.525 L 24.263 6.525 C 25.26 6.525 25.561 5.69 24.924 4.82 L 21.816 0.518 C 21.305 -0.178 20.493 -0.167 19.983 0.518 L 16.864 4.82 C 16.226 5.678 16.516 6.525 17.525 6.525 L 19.415 6.525 L 19.415 15.049 C 19.415 16.847 18.336 18.006 16.771 18.006 C 15.205 18.006 14.103 16.858 14.103 15.049 L 14.103 7.116 C 14.103 3.533 11.772 0.993 8.49 0.993 C 5.069 0.993 2.9 3.498 2.9 7.116 L 2.9 15.142 L 1.01 15.142 C -0.011 15.142 -0.3 15.988 0.337 16.847 L 3.457 21.149 C 3.967 21.833 4.779 21.845 5.289 21.149 Z';

const defaultPath =
  'M7.015 15.812c.825 0 1.18.863.673 1.498l-2.336 2.996c-.61.787-1.371.787-1.98 0L1.034 17.31c-.508-.635-.152-1.498.673-1.498h1.524V6.291c0-3.682 2.26-6.018 5.433-6.018 3.161 0 5.472 2.336 5.472 6.018v8.696c0 2.209 1.37 3.567 3.199 3.567 1.84 0 3.174-1.384 3.174-3.567V5.275h-1.524c-.825 0-1.18-.85-.685-1.498L20.637.78c.622-.775 1.37-.775 1.993 0l2.336 2.996c.508.647.152 1.498-.673 1.498H22.77v9.534c0 3.682-2.26 6.018-5.434 6.018-3.161 0-5.472-2.336-5.472-6.018V6.113c0-2.222-1.37-3.58-3.199-3.58-1.84 0-3.174 1.384-3.174 3.58v9.7h1.524z';

const SwapIcon = ({ color, colors, small, ...props }: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Svg height="21" viewBox="0 0 26 21" width="26" {...props}>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
    '--jsx' flag is provided... Remove this comment to see the full error
    message
    <Path
      d={small ? smallPath : defaultPath}
      fill={color || colors.white}
      fillRule="nonzero"
    />
  </Svg>
);

SwapIcon.propTypes = {
  color: PropTypes.string,
};

export default React.memo(SwapIcon);
