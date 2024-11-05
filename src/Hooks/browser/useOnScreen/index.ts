import { useEffect, useState } from "react";

// useOnScreen
export function useOnScreen(ref: React.RefObject<HTMLElement>, rootMargin: string = "0px") {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        { rootMargin }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, [ref, rootMargin]);
  
    return isIntersecting;
  }