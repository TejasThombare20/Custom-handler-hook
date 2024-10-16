## useHotkeys Hook

## Description

The `useHotkeys` hook enables easy setup of keyboard shortcuts in a React application.


## Usage

```typescript

import React from 'react';
import { useHotkeys } from './hooks/useHotkeys';

function ShortcutDemo() {
  const [count, setCount] = React.useState(0);

  useHotkeys({
    'a': () => setCount(c => c + 1),
    's': () => setCount(c => c - 1),
    'r': () => setCount(0)
  });

  return (
    <div>
      <p>Count: {count}</p>
      <p>Press 'A' to increase, 'S' to decrease, 'R' to reset</p>
    </div>
  );
}
```

This example demonstrates a simple counter that can be controlled using keyboard shortcuts