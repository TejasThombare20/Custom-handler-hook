
## useDebounce Hook

## Description

The `useDebounce` hook is a custom React hook that delays updating a value. It's useful for scenarios where you want to limit the frequency of operations triggered by state changes, such as API calls based on input values.

## Usage

```typescript

import { useDebounce } from './hooks/useDebounce';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    // Perform search operation here
    console.log('Searching for:', debouncedSearchTerm);
  }, [debouncedSearchTerm]);

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
In this example, the search operation is only triggered 300ms after the user stops typing, reducing unnecessary API calls or expensive operations.