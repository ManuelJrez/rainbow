import PropTypes from 'prop-types';
import React from 'react';
import Svg, { Defs, Path, RadialGradient, Stop } from 'react-native-svg';

const EmojiObjectsIcon = ({ color, ...props }: any) => (
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
      d="M15.0000001,7 C18.124316,7 20.6666352,9.39265334 20.6666352,12.3333036 C20.7208484,13.8091489 20.1177437,15.2330376 19.0199777,16.2209486 C18.1482365,16.9738024 17.587087,18.0235225 17.4453198,19.1665989 L17.3426537,20.0359274 L17.3426537,21.9882498 L17.2991417,21.9882498 L17.3426537,21.9892498 C17.3324938,22.4313278 17.0043541,22.8013306 16.566658,22.864245 C16.0484965,22.9480205 15.5248495,22.9933661 15.0000001,22.9999109 C14.4751507,22.9933661 13.9515037,22.9480205 13.4333421,22.864245 C12.995646,22.8013306 12.6675063,22.4313278 12.6573465,21.9892498 L12.6573465,20.0369274 L12.5546804,19.1665989 C12.4129131,18.0235225 11.8517637,16.9738024 10.9800225,16.2209486 C9.8822565,15.2330376 9.27915178,13.8091489 9.33336498,12.3333036 C9.33336498,9.39265334 11.8756841,7 15.0000001,7 Z M16.342,19.999 L13.657,19.999 L13.6570877,21.8872188 C14.105589,21.9566448 14.5574234,21.994334 14.9875314,21.9999944 C15.436441,21.9943964 15.8843799,21.9574714 16.3426593,21.8872761 L16.342,19.999 Z M15.0000001,20.6665905 L15.0000001,21.3332535 L13.6666742,21.3332535 L13.6666742,20.6665905 L15.0000001,20.6665905 Z M15.0000001,7.99999443 C12.4148211,7.99999443 10.3333594,9.95898736 10.3333594,12.3333036 C10.2893497,13.549741 10.7714462,14.6879377 11.6336319,15.464124 C12.6801778,16.3679427 13.358338,17.6238678 13.5413232,18.999143 L16.459,18.999 L16.4941332,18.7673088 C16.7177229,17.4861032 17.3766732,16.3188635 18.351046,15.4776322 C19.2285539,14.6879377 19.7106505,13.549741 19.6673147,12.3700123 C19.6666407,9.95898736 17.5851791,7.99999443 15.0000001,7.99999443 Z M16.333326,13.999961 C16.7015138,13.999961 16.9999889,14.2984362 16.9999889,14.666624 C16.9999889,15.0348117 16.7015138,15.3332869 16.333326,15.3332869 C16.2777773,15.3332869 16.2238155,15.3264931 16.172226,15.3136909 L15.333,16.086 L15.3333316,18.3332702 L14.6666686,18.3332702 L14.666,16.085 L13.8287659,15.313444 C13.807944,15.3186452 13.7867344,15.3228673 13.7651887,15.3260586 L13.6666742,15.3332869 C13.2984864,15.3332869 13.0000112,15.0348117 13.0000112,14.666624 C13.0000112,14.2984362 13.2984864,13.999961 13.6666742,13.999961 C14.034862,13.999961 14.3333371,14.2984362 14.3333371,14.666624 C14.3333371,14.7189679 14.3273046,14.7699028 14.3158968,14.8187714 L15,15.45 L15.684337,14.8197685 C15.6801195,14.8018271 15.6766268,14.7836062 15.6738914,14.7651385 L15.666663,14.666624 C15.666663,14.2984362 15.9651382,13.999961 16.333326,13.999961 Z"
      fill={color ? color : 'url(#rainbow)'}
      fillRule="nonzero"
    />
  </Svg>
);

EmojiObjectsIcon.propTypes = {
  color: PropTypes.string,
};

EmojiObjectsIcon.defaultProps = {
  color: null,
};

export default EmojiObjectsIcon;
