import { useCallback, useEffect, useState } from "react";

export default function useWebShare() {
    const [isSupported, setIsSupported] = useState(false);
  
    useEffect(() => {
      setIsSupported('share' in navigator);
    }, []);
  
    const share = useCallback(async (data: ShareData) => {
      if (isSupported) {
        try {
          await navigator.share(data);
          return true;
        } catch (error) {
          console.error('Error sharing:', error);
          return false;
        }
      } else {
        console.warn('Web Share API is not supported in this browser.');
        return false;
      }
    }, [isSupported]);
  
    return { isSupported, share };
  }