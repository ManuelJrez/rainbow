import PropTypes from 'prop-types';
import React from 'react';
import Svg, { Defs, Path, RadialGradient, Stop } from 'react-native-svg';

const EmojiFlagsIcon = ({ color, ...props }: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Svg height="30" viewBox="0 0 30 30" width="30" {...props}>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
    '--jsx' flag is provided... Remove this comment to see the full error
    message
    <Defs>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
      '--jsx' flag is provided... Remove this comment to see the full error
      message
      <RadialGradient
        cx="100%"
        cy="49.9814195%"
        fx="100%"
        fy="49.9814195%"
        id="rainbow"
        r="108.068849%"
      >
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
        '--jsx' flag is provided... Remove this comment to see the full error
        message
        <Stop offset="0%" stopColor="#FFB114" />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
        '--jsx' flag is provided... Remove this comment to see the full error
        message
        <Stop offset="63.5417%" stopColor="#FF54BB" />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
        '--jsx' flag is provided... Remove this comment to see the full error
        message
        <Stop offset="100%" stopColor="#00F0FF" />
      </RadialGradient>
    </Defs>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
    '--jsx' flag is provided... Remove this comment to see the full error
    message
    <Path
      d="M18,15.75 C17.1093333,15.75 15.9306667,16.379 15.9306667,16.379 C15.1210751,16.7754489 14.2346051,16.9901266 13.3333333,17.008 C11.6666667,17.008 11,16.3036667 11,16.3036667 L11,15.0583333 C11,15.0583333 11.6666667,16.0456667 13.3333333,16.0456667 C14.1297002,15.999272 14.9036356,15.764258 15.5913333,15.36 C16.3425199,14.9898932 17.1632008,14.782054 18,14.75 C18.8186707,14.7574022 19.6218651,14.9739204 20.3333333,15.379 L21,15.8193333 L21,16.8193333 L20.3333333,16.379 C19.6218651,15.9739204 18.8186707,15.7574022 18,15.75 Z M10,8.04566667 L11,8.04566667 L11,22.0456667 L10,22.0456667 L10,8.04566667 Z M20,8.71233333 L21,8.95733333 L21,16.0456667 L20,16.0456667 L20,8.71233333 Z M18,8.75 C17.1093333,8.75 15.9306667,9.379 15.9306667,9.379 C15.1210715,9.77543871 14.2346037,9.99011591 13.3333333,10.008 C11.6666667,10.008 11,9.398 11,9.398 L11,8.05833333 C11,8.05833333 11.6666667,9.04566667 13.3333333,9.04566667 C14.1297002,8.99927201 14.9036356,8.76425797 15.5913333,8.36 C16.3425199,7.98989318 17.1632008,7.78205399 18,7.75 C18.8186707,7.75740216 19.6218651,7.9739204 20.3333333,8.379 L21,8.81933333 L21,9.81933333 L20.3333333,9.56766667 C19.6595322,9.0590562 18.8438915,8.77323237 18,8.75 Z"
      fill={color ? color : 'url(#rainbow)'}
      fillRule="nonzero"
    />
  </Svg>
);

EmojiFlagsIcon.propTypes = {
  color: PropTypes.string,
};

EmojiFlagsIcon.defaultProps = {
  color: null,
};

export default EmojiFlagsIcon;
