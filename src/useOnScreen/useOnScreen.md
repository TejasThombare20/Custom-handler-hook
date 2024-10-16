# useOnScreen

A custom React hook that detects when an element is visible on the screen using the Intersection Observer API.

## Usage

```typescript
import React, { useRef } from 'react';
import { useOnScreen } from './hooks/useOnScreen';

function LazyImage({ src, alt }) {
  const imgRef = useRef(null);
  const isVisible = useOnScreen(imgRef, '100px');

  return (
    <div ref={imgRef}>
      {isVisible ? (
        <img src={src} alt={alt} />
      ) : (
        <div style={{ height: '300px', background: '#f0f0f0' }}>Loading...</div>
      )}
    </div>
  );
}

```
This example demonstrates a lazy-loading image component that only loads the image when it's about to enter the viewport.