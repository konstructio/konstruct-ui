import { useCallback, useState } from 'react';

export const useToggle = (
  initialState = false,
): [boolean, (value?: boolean) => void] => {
  const [value, setValue] = useState(initialState);

  const toggleState = useCallback(
    (newValue?: boolean) => setValue(newValue ?? !value),
    [value],
  );

  return [value, toggleState];
};
