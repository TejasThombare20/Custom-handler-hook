import { useCallback, useState } from "react";

export function useStateHistory<T>(initialState: T) {
  const [state, setState] = useState<T>(initialState);
  const [history, setHistory] = useState<T[]>([initialState]);
  const [index, setIndex] = useState(0);

  const goBack = useCallback(() => {
    if (index > 0) {
      setIndex(index - 1);
      setState(history[index - 1]);
    }
  }, [index, history]);

  const goForward = useCallback(() => {
    if (index < history.length - 1) {
      setIndex(index + 1);
      setState(history[index + 1]);
    }
  }, [index, history]);

  const updateState = useCallback(
    (newState: T) => {
      setState(newState);
      setHistory((prev) => [...prev.slice(0, index + 1), newState]);
      setIndex((prev) => prev + 1);
    },
    [index]
  );

  return {
    state,
    updateState,
    goBack,
    goForward,
    canUndo: index > 0,
    canRedo: index < history.length - 1,
  };
}


