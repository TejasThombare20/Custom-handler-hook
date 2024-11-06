import { useEffect, useRef, useState } from "react";

export default function useThrottle<T>(value: T, interval: number): T {
    const [throttledValue, setThrottledValue] = useState<T>(value);
    const lastUpdated = useRef<number>(Date.now());
  
    useEffect(() => {
      const now = Date.now();
      if (now - lastUpdated.current >= interval) {
        setThrottledValue(value);
        lastUpdated.current = now;
      } else {
        const timeoutId = setTimeout(() => {
          setThrottledValue(value);
          lastUpdated.current = Date.now();
        }, interval - (now - lastUpdated.current));
  
        return () => clearTimeout(timeoutId);
      }
    }, [value, interval]);
  
    return throttledValue;
  }