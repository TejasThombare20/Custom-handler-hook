## useDynamicImport Hook

## Description

The `useDynamicImport` hook is a custom React hook that facilitates dynamic importing of components. It's useful for implementing code-splitting and lazy-loading in React applications.


## Usage

```typescript

import React from 'react';
import { useDynamicImport } from './hooks/useDynamicImport';

const LazyComponent = () => {
  const DynamicComponent = useDynamicImport(() => import('./HeavyComponent'));

  if (!DynamicComponent) {
    return <div>Loading...</div>;
  }

  return <DynamicComponent />;
};

```
In this example, HeavyComponent is dynamically imported and only loaded when LazyComponent is rendered, improving the initial load time of the application.