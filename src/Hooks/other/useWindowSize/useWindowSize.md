
# useWindowSize

A custom React hook that tracks the size of the browser window.

## Usage

```typescript
import React from 'react';
import { useWindowSize } from './hooks/useWindowSize';

function ResponsiveComponent() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
      {width < 768 ? <MobileView /> : <DesktopView />}
    </div>
  );
}