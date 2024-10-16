# useScrollPosition

A custom React hook that tracks the scroll position of a specific element or the window.

## Usage

```typescript
import React, { useRef } from 'react';
import { useScrollPosition } from './hooks/useScrollPosition';

function ScrollTracker() {
  const containerRef = useRef(null);
  const { x, y } = useScrollPosition(containerRef);

  return (
    <div 
      ref={containerRef} 
      style={{ height: '200px', overflow: 'auto' }}
    >
      <div style={{ height: '1000px' }}>
        <p>Scroll position: {x}px horizontally, {y}px vertically</p>
      </div>
    </div>
  );
}

```

This example shows a scrollable container that displays its current scroll position.