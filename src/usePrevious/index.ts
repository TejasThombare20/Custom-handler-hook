import { useEffect, useRef } from "react";

// usePrevious
export function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T>();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }