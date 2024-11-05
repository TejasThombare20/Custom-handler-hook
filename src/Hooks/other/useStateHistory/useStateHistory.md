# useStateHistory

A custom React hook that manages state with undo and redo functionality.

## Usage

```typescript
import React from "react";
import { useStateHistory } from "./hooks/useStateHistory";

function UndoableCounter() {
  const { state, updateState, goBack, goForward, canUndo, canRedo } =
    useStateHistory(0);

  return (
    <div>
      <p>Count: {state}</p>
      <button onClick={() => updateState(state + 1)}>Increment</button>
      <button onClick={() => updateState(state - 1)}>Decrement</button>
      <button onClick={goBack} disabled={!canUndo}>
        Undo
      </button>
      <button onClick={goForward} disabled={!canRedo}>
        Redo
      </button>
    </div>
  );
}
```

This example shows a counter with undo and redo capabilities.
