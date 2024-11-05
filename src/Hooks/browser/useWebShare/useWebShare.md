# useWebShare

A custom React hook that provides an interface to the Web Share API.

## Usage

```typescript
import React from 'react';
import { useWebShare } from './hooks/useWebShare';

function ShareButton() {
  const { isSupported, share } = useWebShare();

  const handleShare = async () => {
    if (await share({
      title: 'Check out this cool website',
      text: 'I found this amazing content!',
      url: window.location.href,
    })) {
      console.log('Content shared successfully');
    }
  };

  return (
    <button onClick={handleShare} disabled={!isSupported}>
      {isSupported ? 'Share' : 'Sharing not supported'}
    </button>
  );
}