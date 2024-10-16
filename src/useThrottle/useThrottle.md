
# useThrottle

A custom React hook that throttles value changes over a specified time interval.

## Usage

```typescript
import React, { useState } from 'react';
import { useThrottle } from './hooks/useThrottle';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const throttledSearchTerm = useThrottle(searchTerm, 300);

  // Use throttledSearchTerm for API calls

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}

```

This example demonstrates a search input that throttles the search term updates.