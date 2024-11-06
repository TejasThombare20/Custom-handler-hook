import { useEffect } from "react";

export default function useEventDelegation(
  parentRef: React.RefObject<HTMLElement>,
  eventType: string,
  selector: string,
  callback: (event: Event) => void
) {
  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    const handler = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.matches(selector)) {
        callback(event);
      }
    };

    parent.addEventListener(eventType, handler);

    return () => {
      parent.removeEventListener(eventType, handler);
    };
  }, [parentRef, eventType, selector, callback]);
}
