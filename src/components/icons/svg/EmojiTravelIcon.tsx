import PropTypes from 'prop-types';
import React from 'react';
import Svg, { Defs, Path, RadialGradient, Stop } from 'react-native-svg';

const EmojiTravelIcon = ({ color, ...props }: any) => (
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
      d="M17.3333333,6.75 L17.333,10.739 L23,10.7396667 L23,21.7396667 L22,21.739 L22,12.75 L21.999,12.75 L22,11.75 L17.3333333,11.75 L17.333,12.75 L16.333,12.75 L16.3333333,7.75 L11.3333333,7.75 L11.324,13.749 L8,13.75 L8,21.739 L7,21.7396667 L7,12.7396667 L10.34,12.739 L10.3333333,6.75 L17.3333333,6.75 Z M9,14.7396667 L10,14.7396667 L10,15.7396667 L9,15.7396667 L9,14.7396667 Z M14.3333333,10.75 L15.3333333,10.75 L15.3333333,11.75 L14.3333333,11.75 L14.3333333,10.75 Z M12.3333333,10.75 L13.3333333,10.75 L13.3333333,11.75 L12.3333333,11.75 L12.3333333,10.75 Z M20,12.7396667 L21,12.7396667 L21,13.7396667 L20,13.7396667 L20,12.7396667 Z M20,14.7396667 L21,14.7396667 L21,15.7396667 L20,15.7396667 L20,14.7396667 Z M12.3333333,8.73966667 L13.3333333,8.75 L13.3333333,9.75 L12.3333333,9.75 L12.3333333,8.73966667 L12.3333333,8.73966667 Z M14.3333333,8.75 L15.3333333,8.75 L15.3333333,9.75 L14.3333333,9.75 L14.3333333,8.75 Z M15.875,13.4166159 C17.5565007,13.4071552 18.9408994,14.736178 19,16.4166667 L19,17.4166667 L20,17.4166667 C20.3681898,17.4166667 20.6666667,17.7151435 20.6666667,18.0833333 L20.6666667,20.75 C20.6666667,21.1178517 20.3687377,21.4161184 20.0010141,21.4166659 L20,22.75 L18,22.75 L18,21.416 L12,21.416 L12,22.75 L10,22.75 L10,21.416 L10,21.4166667 C9.63181017,21.4166667 9.33333333,21.1181898 9.33333333,20.75 L9.33333333,18.0833333 C9.33333333,17.7151435 9.63181017,17.4166667 10,17.4166667 L11,17.4166667 L11,17.4166667 L11,16.4166667 C11.0591006,14.736178 12.4434993,13.4071552 14.125,13.4166159 L15.875,13.4166159 Z M20,20.7396667 L20,20.0833333 L17.5,20.083 L17.5,20.073 C17.5,19.9119169 17.3857393,19.7775209 17.233845,19.7464388 L17.1666667,19.7396667 L12.8333333,19.7396667 C12.6492384,19.7396667 12.5,19.8889051 12.5,20.073 L12.5,20.073 L12.5,20.083 L10,20.0833333 L10,20.7396667 L20,20.7396667 Z M11.146,18.1563333 C10.7317864,18.1563333 10.396,18.4921198 10.396,18.9063333 C10.396,19.3205469 10.7317864,19.6563333 11.146,19.6563333 C11.5602136,19.6563333 11.896,19.3205469 11.896,18.9063333 C11.896,18.4921198 11.5602136,18.1563333 11.146,18.1563333 Z M18.8333333,18.1563333 C18.41925,18.1565174 18.0836667,18.4922499 18.0836667,18.9063333 C18.0836667,19.3205469 18.4194531,19.6563333 18.8336667,19.6563333 C19.2478802,19.6563333 19.5836667,19.3205469 19.5836667,18.9063333 C19.5836667,18.4921198 19.2478802,18.1563333 18.8336667,18.1563333 Z M15,14.4166667 C12.1666667,14.4166667 12.0092593,15.7338169 12.0005144,17.1634551 L12,17.4166667 L18,17.4166667 C18,15.8916667 18,14.4166667 15,14.4166667 Z"
      fill={color ? color : 'url(#rainbow)'}
      fillRule="nonzero"
    />
  </Svg>
);

EmojiTravelIcon.propTypes = {
  color: PropTypes.string,
};

EmojiTravelIcon.defaultProps = {
  color: null,
};

export default EmojiTravelIcon;
