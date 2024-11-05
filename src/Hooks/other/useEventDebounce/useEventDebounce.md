
## useEventDebounce Hook

## Description

The `useEventDebounce` hook is a custom React hook that debounces event handlers. It's useful for optimizing performance in scenarios where you want to limit the frequency of event-driven operations.


## Usage

```typescript

import React from 'react';
import { useEventDebounce } from './hooks/useEventDebounce';

function ResizeHandler() {
  const handleResize = useEventDebounce(() => {
    console.log('Window resized');
    // Perform expensive operation here
  }, 300);

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return <div>Resize the window to see the debounced event in action</div>;
}

```
In this example, the resize event handler is debounced. It will only be called 300ms after the user stops resizing the window, reducing unnecessary operations and improving performance.