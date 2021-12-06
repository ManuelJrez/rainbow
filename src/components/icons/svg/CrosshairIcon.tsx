import PropTypes from 'prop-types';
import React from 'react';
import { Path } from 'react-native-svg';
import Svg from '../Svg';

const CrosshairIcon = ({ color, colors, ...props }: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Svg viewBox="0 0 231 231" {...props}>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
    '--jsx' flag is provided... Remove this comment to see the full error
    message
    <Path
      clip-rule="evenodd"
      d="M50.5514 2.91228C50.5998 4.56842 49.2965 5.95027 47.6404 5.99871C34.7518 6.37572 29.6321 8.08857 24.5037 10.8313C18.6017 13.9877 13.9877 18.6017 10.8313 24.5037C8.0886 29.6321 6.37575 34.7517 5.99874 47.6403C5.9503 49.2964 4.56845 50.5997 2.91231 50.5513C1.25616 50.5028 -0.0471372 49.121 0.00130798 47.4648C0.397084 33.9348 2.24271 27.8403 5.54043 21.6741C9.25605 14.7265 14.7265 9.25602 21.6741 5.5404C27.8403 2.24267 33.9349 0.397049 47.4649 0.00127766C49.1211 -0.0471668 50.5029 1.25613 50.5514 2.91228Z"
      fill={color || colors.white}
      fill-rule="evenodd"
    />
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
    '--jsx' flag is provided... Remove this comment to see the full error
    message
    <Path
      clip-rule="evenodd"
      d="M2.91229 180.449C4.56844 180.401 5.95029 181.704 5.99874 183.36C6.3758 196.248 8.08863 201.368 10.8313 206.496C13.9877 212.398 18.6017 217.012 24.5037 220.169C29.633 222.912 34.7536 224.625 47.6475 225.001C49.3037 225.05 50.607 226.432 50.5587 228.088C50.5103 229.744 49.1285 231.047 47.4724 230.999C33.9372 230.604 27.8415 228.758 21.6741 225.459C14.7265 221.744 9.25603 216.273 5.54041 209.326C2.24275 203.16 0.397132 197.065 0.0013084 183.536C-0.0471447 181.88 1.25615 180.498 2.91229 180.449Z"
      fill={color || colors.white}
      fill-rule="evenodd"
    />
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
    '--jsx' flag is provided... Remove this comment to see the full error
    message
    <Path
      clip-rule="evenodd"
      d="M228.088 180.45C229.744 180.498 231.047 181.88 230.999 183.536C230.603 197.065 228.757 203.16 225.46 209.326C221.744 216.273 216.273 221.744 209.326 225.459C203.159 228.757 197.065 230.603 183.534 230.999C181.878 231.047 180.496 229.744 180.448 228.088C180.399 226.431 181.702 225.05 183.359 225.001C196.248 224.624 201.368 222.911 206.496 220.169C212.398 217.012 217.012 212.398 220.169 206.496C222.911 201.368 224.624 196.248 225.001 183.361C225.05 181.705 226.431 180.401 228.088 180.45Z"
      fill={color || colors.white}
      fill-rule="evenodd"
    />
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
    '--jsx' flag is provided... Remove this comment to see the full error
    message
    <Path
      clip-rule="evenodd"
      d="M180.449 2.91227C180.497 1.25613 181.879 -0.04717 183.535 0.00127759C197.065 0.397069 203.16 2.24269 209.326 5.54039C216.273 9.25601 221.744 14.7265 225.46 21.6741C228.757 27.8407 230.603 33.9357 230.999 47.4676C231.047 49.1237 229.744 50.5056 228.088 50.554C226.432 50.6024 225.05 49.2991 225.001 47.6429C224.624 34.7524 222.912 29.6324 220.169 24.5037C217.012 18.6017 212.398 13.9877 206.496 10.8313C201.368 8.08858 196.248 6.37574 183.36 5.99871C181.704 5.95026 180.4 4.56842 180.449 2.91227Z"
      fill={color || colors.white}
      fill-rule="evenodd"
    />
  </Svg>
);

CrosshairIcon.propTypes = {
  color: PropTypes.string,
};

export default CrosshairIcon;
