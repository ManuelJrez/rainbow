import Animated, {
  Clock,
  Easing,
  timing,
  Value,
} from 'react-native-reanimated';
import { updateState } from './updateState';

const { block, clockRunning, cond, set, startClock, stopClock } = Animated;

const timingProc = Animated.proc(
  (clock, finished, position, time, frameTime, toValue, duration) =>
    timing(
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Adaptable<Value> | undefined' is... Remove this comment to see the full error message
      clock,
      {
        finished,
        frameTime,
        position,
        time,
      },
      {
        duration,
        easing: Easing.linear,
        toValue,
      }
    )
);

const runTiming = (clock: any, state: any, config: any) =>
  timingProc(
    clock,
    state.finished,
    state.position,
    state.time,
    state.frameTime,
    config.toValue,
    config.duration
  );

export default function localTiming(params: any) {
  const { clock, duration, easing, from, to }: any = {
    clock: new Clock(),
    duration: 250,
    easing: Easing.linear,
    from: new Value(0),
    to: new Value(1),
    ...params,
  };

  const state = {
    finished: new Value(0),
    frameTime: new Value(0),
    position: new Value(0),
    time: new Value(0),
  };

  const config = {
    duration,
    easing,
    toValue: new Value(0),
  };

  return block([
    cond(clockRunning(clock), 0, [
      updateState(
        from,
        to,
        state.finished,
        state.position,
        state.time,
        state.frameTime,
        config.toValue
      ),
      startClock(clock),
    ]),
    runTiming(clock, state, config),
    cond(state.finished, stopClock(clock)),
    set(from, state.position),
  ]);
}
