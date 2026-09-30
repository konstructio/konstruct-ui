import { useCallback, useState } from 'react';

import { ToastHeights } from '../../Toast.types';

import { UseToastHeightsResult } from './useToastHeights.types';

export const useToastHeights = (): UseToastHeightsResult => {
  const [heights, setHeights] = useState<ToastHeights>({});

  const setHeight = useCallback((id: string, height: number) => {
    setHeights((previous) => {
      return previous[id] === height ? previous : { ...previous, [id]: height };
    });
  }, []);

  const removeHeight = useCallback((id: string) => {
    setHeights((previous) => {
      if (!(id in previous)) {
        return previous;
      }

      const { [id]: _removed, ...rest } = previous;

      return rest;
    });
  }, []);

  return { heights, setHeight, removeHeight };
};
