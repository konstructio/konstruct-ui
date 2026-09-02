import { useCallback, useState } from 'react';

export const useResetKey = (): [number, () => void] => {
  const [resetKey, setResetKey] = useState(0);

  const bumpResetKey = useCallback(() => {
    setResetKey((key) => {
      return key + 1;
    });
  }, []);

  return [resetKey, bumpResetKey];
};
