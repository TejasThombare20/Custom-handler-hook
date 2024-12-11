# useUrlState

A custom React hook that persist data across refresh the application.

## Usage

```typescript
import { useUrlState } from './hooks/useWindowSize';


function ProductFilterPage() {
  // URL state for category and price filter
  const [category, setCategory] = useUrlState(
    'category', 
    parseUrlAsString.withDefault('all')
  );

  const [maxPrice, setMaxPrice] = useUrlState(
    'price', 
    parseUrlAsInteger.withDefault(1000)
  );

  return (
    <div>
      {/* Filters automatically reflect and update URL */}
      <CategorySelector 
        value={category} 
        onChange={setCategory} 
      />
      <PriceSlider 
        value={maxPrice} 
        onChange={setMaxPrice} 
      />
    </div>
  );
}
```