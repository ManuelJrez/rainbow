import produce from 'immer';
import {
  getKeyboardHeight as loadKeyboardHeights,
  setKeyboardHeight as saveKeyboardHeight,
  // @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@rainbow-me/handlers/localstor... Remove this comment to see the full error message
} from '@rainbow-me/handlers/localstorage/globalSettings';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@rainbow-me/helpers/keyboardTy... Remove this comment to see the full error message
import KeyboardTypes from '@rainbow-me/helpers/keyboardTypes';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@rainbow-me/utils' or its corr... Remove this comment to see the full error message
import { deviceUtils } from '@rainbow-me/utils';

// -- Constants --------------------------------------- //
const LOAD = 'keyboardHeight/LOAD';
const SAVE = 'keyboardHeight/SAVE';

function getDefaultKeyboardHeight() {
  let keyboardHeight = 0;
  switch (deviceUtils.dimensions.height) {
    case 568:
      keyboardHeight = 216;
      break;
    case 667:
      keyboardHeight = 216;
      break;
    case 736:
      keyboardHeight = 226;
      break;
    case 812:
      keyboardHeight = 291;
      break;
    case 844:
      keyboardHeight = 291;
      break;
    case 896:
      keyboardHeight = 301;
      break;
    default:
      keyboardHeight = Math.floor(deviceUtils.dimensions.height * 0.333);
  }
  return keyboardHeight;
}

const INITIAL_STATE = {
  keyboardHeight: {
    [KeyboardTypes.default]: getDefaultKeyboardHeight(),
  },
};

export const keyboardHeightsLoadState = () => async (dispatch: any) => {
  const cachedKeyboardHeights = await loadKeyboardHeights();

  dispatch({
    payload: {
      ...INITIAL_STATE.keyboardHeight,
      ...cachedKeyboardHeights,
    },
    type: LOAD,
  });
};

export const setKeyboardHeight = ({
  height,
  keyboardType = KeyboardTypes.default,
}: any) => async (dispatch: any, getState: any) => {
  await dispatch({
    height,
    keyboardType,
    type: SAVE,
  });

  const prevState = getState().keyboardHeight.keyboardHeight;
  saveKeyboardHeight({
    ...prevState,
    [keyboardType]: height,
  });
};

// -- Reducer ----------------------------------------- //
export default (state = INITIAL_STATE, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD:
        draft.keyboardHeight = action.payload;
        break;
      case SAVE:
        draft.keyboardHeight[action.keyboardType] = action.height;
        break;
      default:
        break;
    }
  });
