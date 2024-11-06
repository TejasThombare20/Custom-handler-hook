import { useEffect } from "react";

export default function useShortcutKeys(shortcuts: Record<string, () => void>) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = `${event.ctrlKey ? "Ctrl+" : ""}${
        event.altKey ? "Alt+" : ""
      }${event.shiftKey ? "Shift+" : ""}${event.key.toUpperCase()}`;
      if (shortcuts[key]) {
        event.preventDefault();
        shortcuts[key]();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shortcuts]);
}
