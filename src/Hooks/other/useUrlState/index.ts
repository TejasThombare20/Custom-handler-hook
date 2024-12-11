import { useState, useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type ParseOptions<T> = {
  parse: (value: string) => T;
  serialize: (value: T) => string;
  defaultValue: T;
};

export default function useUrlState<T>(
  key: string, 
  parseOptions: ParseOptions<T>
): [T, (newValue: T) => void] {
  const location = useLocation();
  const navigate = useNavigate();

  // Parse current URL search params
  const searchParams = useMemo(() => 
    new URLSearchParams(location.search), 
    [location.search]
  );

  // Get initial state from URL or default
  const getInitialState = useCallback((): T => {
    const urlValue = searchParams.get(key);
    
    try {
      return urlValue !== null 
        ? parseOptions.parse(urlValue)
        : parseOptions.defaultValue;
    } catch {
      return parseOptions.defaultValue;
    }
  }, [key, searchParams, parseOptions]);

  // Initialize state
  const [state, setState] = useState<T>(getInitialState);

  // Update URL when state changes
  const setUrlState = useCallback((newValue: T) => {
    const newParams = new URLSearchParams(location.search);
    
    // Remove parameter if value is default/null
    if (newValue === parseOptions.defaultValue || newValue === null) {
      newParams.delete(key);
    } else {
      // Set new parameter value
      newParams.set(key, parseOptions.serialize(newValue));
    }


    navigate(`${location.pathname}?${newParams.toString()}`, { 
      replace: true 
    });

    // Update local state
    setState(newValue);
  }, [key, location, navigate, parseOptions]);

  return [state, setUrlState];
}


export const parseUrlAsString = {
  withDefault: (defaultValue = ''): ParseOptions<string> => ({
    parse: (value) => value,
    serialize: (value) => value,
    defaultValue
  })
};

export const parseUrlAsInteger = {
  withDefault: (defaultValue = 0): ParseOptions<number> => ({
    parse: (value) => parseInt(value, 10),
    serialize: (value) => value.toString(),
    defaultValue
  })
};

