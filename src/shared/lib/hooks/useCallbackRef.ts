import { DependencyList, useCallback, useEffect, useRef } from "react";

const useCallbackRef = <T extends (...args: never[]) => unknown>(
  callback: T,
  deps: DependencyList = []
): T => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
    return (): void => {
      callbackRef.current = undefined;
    };
  }, [callback]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(
    ((...args) => {
      return callbackRef.current?.(...args);
    }) as T,
    deps
  );
};

export default useCallbackRef;
