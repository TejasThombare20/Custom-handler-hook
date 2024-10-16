
## useAnimationFrame Hook

## Description

The `useAnimationFrame` hook provides a way to perform smooth animations using requestAnimationFrame.


## Usage

```typescript

import React from 'react';
import { useAnimationFrame } from './hooks/useAnimationFrame';

function MovingBox() {
  const [position, setPosition] = React.useState(0);

  useAnimationFrame((deltaTime) => {
    setPosition((prevPosition) => (prevPosition + 0.1 * deltaTime) % window.innerWidth);
  });

  return (
    <div style={{
      width: '50px',
      height: '50px',
      backgroundColor: 'red',
      position: 'absolute',
      left: `${position}px`,
      top: '50%'
    }} />
  );
}
```

This example shows a box moving smoothly across the screen using useAnimationFrame