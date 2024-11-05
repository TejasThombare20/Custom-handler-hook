import { useEffect, useState } from "react";

export function useDynamicImport<T>(
  importFunction: () => Promise<{ default: T }>
) {
  const [component, setComponent] = useState<T | null>(null);

  useEffect(() => {
    importFunction().then((module) => {
      setComponent(module.default);
    });
  }, [importFunction]);

  return component;
}
