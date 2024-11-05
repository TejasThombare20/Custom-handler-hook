import { useEffect, useState } from "react";

export function useScrollPosition(element?: React.RefObject<HTMLElement>) {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (element && element.current) {
        setScrollPosition({
          x: element.current.scrollLeft,
          y: element.current.scrollTop,
        });
      } else {
        setScrollPosition({
          x: window.pageXOffset,
          y: window.pageYOffset,
        });
      }
    };

    const target = element?.current || window;
    target.addEventListener("scroll", handleScroll);
    return () => target.removeEventListener("scroll", handleScroll);
  }, [element]);

  return scrollPosition;
}
