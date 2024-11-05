import { useCallback, useRef } from "react";

export function useFocus() {
  const focusRef = useRef<HTMLElement | null>(null);

  const setFocus = useCallback((element: HTMLElement | null) => {
    if (element && element !== focusRef.current) {
      element.focus();
      focusRef.current = element;
    }
  }, []);

  const clearFocus = useCallback(() => {
    if (focusRef.current) {
      focusRef.current.blur();
      focusRef.current = null;
    }
  }, []);

  return { setFocus, clearFocus };
}



