
## useEventDelegation Hook

## Description

The `useEventDelegation` hook implements event delegation, allowing efficient handling of events on multiple child elements.

## Usage

```typescript

import React from 'react';
import { useEventDelegation } from './hooks/useEventDelegation';

function TodoList() {
  const listRef = React.useRef(null);

  useEventDelegation(listRef, 'click', '.delete-btn', (event) => {
    const todoId = event.target.closest('li').dataset.id;
    console.log(`Deleting todo with id: ${todoId}`);
    // Delete todo logic
  });

  return (
    <ul ref={listRef}>
      <li data-id="1">Task 1 <button className="delete-btn">Delete</button></li>
      <li data-id="2">Task 2 <button className="delete-btn">Delete</button></li>
      {/* More list items */}
    </ul>
  );
}

```

This example shows a todo list where delete buttons use event delegation for efficient event handling.