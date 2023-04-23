import { useEffect, useRef } from "react";

import useCallbackRef from "./useCallbackRef";

type Callback = (...args: never[]) => unknown;

export type DebouncedCallback<T extends Callback> = (
  ...args: Parameters<T>
) => void;

const useDebouncedCallback = <T extends Callback>(
  callback?: T,
  delayMs = 500
): DebouncedCallback<T> => {
  const timeoutRef = useRef<number>();

  useEffect(() => {
    // Clear timeout on unmount
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return useCallbackRef((...args) => {
    const later = (): void => {
      clearTimeout(timeoutRef.current);

      if (callback) {
        callback(...args);
      }
    };

    clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(later, delayMs);
  });
};

export default useDebouncedCallback;
