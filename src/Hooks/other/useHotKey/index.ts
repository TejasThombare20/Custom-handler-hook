import { useEffect } from "react";

export function useHotkeys(hotkeys: Record<string, () => void>) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (hotkeys[key] && !event.ctrlKey && !event.altKey && !event.metaKey) {
        event.preventDefault();
        hotkeys[key]();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hotkeys]);
}
