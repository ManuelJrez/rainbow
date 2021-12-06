import { concat, filter, isEmpty, map, uniqBy } from 'lodash';
/* eslint-disable-next-line import/no-cycle */
import { emitChartsRequest } from './explorer';
import {
  getLiquidity,
  saveLiquidity,
  // @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@rainbow-me/handlers/localstor... Remove this comment to see the full error message
} from '@rainbow-me/handlers/localstorage/uniswap';

// -- Constants ------------------------------------------------------------- //
const UNISWAP_UPDATE_LIQUIDITY_TOKENS =
  'uniswap/UNISWAP_UPDATE_LIQUIDITY_TOKENS';
const UNISWAP_LP_TOKENS_CLEAR_STATE = 'uniswap/UNISWAP_LP_TOKENS_CLEAR_STATE';

const UNISWAP_POOLS_DETAILS = 'uniswap/UNISWAP_POOLS_DETAILS';

// -- Actions --------------------------------------------------------------- //

export const uniswapLiquidityLoadState = () => async (
  dispatch: any,
  getState: any
) => {
  const { accountAddress, network } = getState().settings;
  try {
    const liquidityTokens = await getLiquidity(accountAddress, network);
    dispatch({
      payload: liquidityTokens,
      type: UNISWAP_UPDATE_LIQUIDITY_TOKENS,
    });
    // eslint-disable-next-line no-empty
  } catch (error) {}
};

export const uniswapLiquidityResetState = () => (dispatch: any) =>
  dispatch({ type: UNISWAP_LP_TOKENS_CLEAR_STATE });

export const setPoolsDetails = (fees: any) => (dispatch: any) =>
  dispatch({ payload: fees, type: UNISWAP_POOLS_DETAILS });

export const uniswapUpdateLiquidityTokens = (
  liquidityTokens: any,
  appendOrChange: any
) => (dispatch: any, getState: any) => {
  if (appendOrChange && isEmpty(liquidityTokens)) return;
  let updatedLiquidityTokens = liquidityTokens;
  if (appendOrChange) {
    const {
      liquidityTokens: existingLiquidityTokens,
    } = getState().uniswapLiquidity;
    updatedLiquidityTokens = filter(
      uniqBy(
        concat(updatedLiquidityTokens, existingLiquidityTokens),
        token => token.address
      ),
      token => !!Number(token?.balance?.amount ?? 0)
    );
  } else {
    const assetCodes = map(liquidityTokens, token => token.address);
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 1.
    dispatch(emitChartsRequest(assetCodes));
  }
  const { accountAddress, network } = getState().settings;
  dispatch({
    payload: updatedLiquidityTokens,
    type: UNISWAP_UPDATE_LIQUIDITY_TOKENS,
  });
  saveLiquidity(updatedLiquidityTokens, accountAddress, network);
};

// -- Reducer --------------------------------------------------------------- //
export const INITIAL_UNISWAP_LIQUIDITY_STATE = {
  liquidityTokens: [],
  poolsDetails: {},
};

export default (state = INITIAL_UNISWAP_LIQUIDITY_STATE, action: any) => {
  switch (action.type) {
    case UNISWAP_UPDATE_LIQUIDITY_TOKENS:
      return { ...state, liquidityTokens: action.payload };
    case UNISWAP_POOLS_DETAILS:
      return {
        ...state,
        poolsDetails: { ...state.poolsDetails, ...action.payload },
      };
    case UNISWAP_LP_TOKENS_CLEAR_STATE:
      return INITIAL_UNISWAP_LIQUIDITY_STATE;
    default:
      return state;
  }
};
