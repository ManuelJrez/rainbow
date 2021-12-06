import PropTypes from 'prop-types';
import React from 'react';
import Svg, { Defs, Path, RadialGradient, Stop } from 'react-native-svg';

const EmojiSmileysIcon = ({ color, ...props }: any) => (
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
      d="M15,7 C19.418278,7 23,10.581722 23,15 C23,19.418278 19.418278,23 15,23 C10.581722,23 7,19.418278 7,15 C7,10.581722 10.581722,7 15,7 Z M15.0103333,8 C11.1443401,8 8.01033333,11.1340068 8.01033333,15 C8.01033333,18.8659932 11.1443401,22 15.0103333,22 C18.8763266,22 22.0103333,18.8659932 22.0103333,15 C22.0103333,11.1340068 18.8763266,8 15.0103333,8 Z M17.75,12 C18.1643333,12 18.5,12.4476667 18.5,13 C18.5,13.5523333 18.1643333,14 17.75,14 C17.3356667,14 17,13.5523333 17,13 C17,12.4476667 17.3356667,12 17.75,12 L17.75,12 Z M12.7483333,12 C13.1616667,12 13.4966667,12.4473333 13.4966667,13 C13.4966667,13.5526667 13.1633333,14 12.7483333,14 C12.3333333,14 12,13.5526667 12,13 C12,12.4473333 12.335,12 12.7483333,12 L12.7483333,12 Z M20.006,16.1253333 C20.006,18.8867571 17.7674237,21.1253333 15.006,21.1253333 C12.2445763,21.1253333 10.006,18.8867571 10.006,16.1253333 C10.006,15.4953333 12.2446667,16.6756667 15.006,16.6756667 C17.7673333,16.6756667 20.006,15.4953333 20.006,16.1253333 Z M15,17.5953333 C12.57,17.5953333 11,16.656 11,17.0953333 C11,19.0093333 13.908,19.0953333 15,19.0953333 L15.1193408,19.0950273 C16.396666,19.088153 19,18.9491979 19,17.0953333 C19,16.656 17.43,17.5953333 15,17.5953333 Z"
      fill={color ? color : 'url(#rainbow)'}
      fillRule="nonzero"
    />
  </Svg>
);

EmojiSmileysIcon.propTypes = {
  color: PropTypes.string,
};

EmojiSmileysIcon.defaultProps = {
  color: null,
};

export default EmojiSmileysIcon;
