# useVibration

A custom React hook that provides an interface to the Vibration API.

## Usage

```typescript
import React from 'react';
import { useVibration } from './hooks/useVibration';

function VibrationButton() {
  const { isSupported, vibrate } = useVibration();

  const handleClick = () => {
    vibrate([200, 100, 200]); // Vibrate for 200ms, pause for 100ms, then vibrate for 200ms
  };

  return (
    <button onClick={handleClick} disabled={!isSupported}>
      {isSupported ? 'Vibrate' : 'Vibration not supported'}
    </button>
  );
}