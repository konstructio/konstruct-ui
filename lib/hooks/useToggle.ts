import { useCallback, useState } from 'react';

export const useToggle = (initialState = false): [boolean, () => void] => {
  const [value, setValue] = useState(initialState);
  const toggleState = useCallback(() => setValue(!value), [value]);

  return [value, toggleState];
};
