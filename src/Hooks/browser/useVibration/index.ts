import { useCallback, useEffect, useState } from "react";

// Vibration API Hook
export function useVibration() {
    const [isSupported, setIsSupported] = useState(false);
  
    useEffect(() => {
      setIsSupported('vibrate' in navigator);
    }, []);
  
    const vibrate = useCallback((pattern: number | number[]) => {
      if (isSupported) {
        navigator.vibrate(pattern);
      } else {
        console.warn('Vibration API is not supported in this browser.');
      }
    }, [isSupported]);
  
    return { isSupported, vibrate };
  }