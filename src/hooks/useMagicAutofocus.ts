import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useCallback, useRef } from 'react';
import { InteractionManager, TextInput } from 'react-native';
import isNativeStackAvailable from '../helpers/isNativeStackAvailable';
import { setListener } from '../navigation/nativeStackHelpers';
import useInteraction from './useInteraction';

const { currentlyFocusedInput, focusTextInput } = TextInput.State;

let timeout: any = null;
let delay = false;

export function delayNext() {
  if (timeout !== null) {
    clearTimeout(timeout);
    timeout = null;
  }
  delay = true;
}

export default function useMagicAutofocus(
  defaultAutofocusInputRef: any,
  customTriggerFocusCallback: any,
  shouldFocusOnNavigateOnAndroid = false
) {
  const isScreenFocused = useIsFocused();
  const lastFocusedInputHandle = useRef(null);

  const handleFocus = useCallback(({ target }) => {
    lastFocusedInputHandle.current = target.getNativeRef();
  }, []);

  const setLastFocusedInputHandle = useCallback(ref => {
    lastFocusedInputHandle.current = ref.current;
  }, []);

  const triggerFocus = useCallback(() => {
    if (!lastFocusedInputHandle.current) {
      return focusTextInput(defaultAutofocusInputRef.current);
    }

    if (customTriggerFocusCallback) {
      const nextInput = customTriggerFocusCallback(lastFocusedInputHandle);
      return nextInput && focusTextInput(nextInput);
    }

    if (lastFocusedInputHandle.current !== currentlyFocusedInput()) {
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'null' is not assignable to param... Remove this comment to see the full error message
      return focusTextInput(lastFocusedInputHandle.current);
    }
  }, [customTriggerFocusCallback, defaultAutofocusInputRef]);

  const [createRefocusInteraction] = useInteraction();
  const fallbackRefocusLastInput = useCallback(() => {
    // @ts-expect-error ts-migrate(2349) FIXME: This expression is not callable.
    createRefocusInteraction(() => {
      if (isScreenFocused) {
        triggerFocus();
      }
    });
  }, [createRefocusInteraction, isScreenFocused, triggerFocus]);

  // ✨️ Make the magic happen
  useFocusEffect(
    useCallback(() => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'android'.
      if (android && !shouldFocusOnNavigateOnAndroid) {
        return;
      }

      setListener(triggerFocus);
      if (delay) {
        InteractionManager.runAfterInteractions(() => {
          if (timeout !== null) {
            clearTimeout(timeout);
            timeout = null;
          }
          timeout = setTimeout(() => {
            triggerFocus();
            delay = false;
          }, 200);
        });
      } else {
        triggerFocus();
      }

      // We need to do this in order to assure that the input gets focused
      // when using fallback stacks.
      if (!isNativeStackAvailable) {
        InteractionManager.runAfterInteractions(fallbackRefocusLastInput);
      }

      return () => {
        setListener(null);
      };
    }, [fallbackRefocusLastInput, shouldFocusOnNavigateOnAndroid, triggerFocus])
  );

  return {
    handleFocus,
    lastFocusedInputHandle,
    setLastFocusedInputHandle,
    triggerFocus,
  };
}
