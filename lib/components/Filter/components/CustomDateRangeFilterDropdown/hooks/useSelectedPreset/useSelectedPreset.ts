import { useCallback, useRef, useState } from 'react';

import { Props } from './useSelectedPreset.types';

export const useSelectedPreset = ({ defaultRange }: Props) => {
  const initialPreset = defaultRange ? 'custom' : null;
  const [selectedPreset, setSelectedPreset] = useState<string | null>(
    initialPreset,
  );
  const [appliedPreset, setAppliedPreset] = useState<string | null>(
    initialPreset,
  );
  const rangeComesFromPreset = useRef(false);

  const selectPreset = useCallback(
    (preset: string | null, resolvesToWindow: boolean) => {
      rangeComesFromPreset.current = resolvesToWindow;
      setSelectedPreset(preset);
    },
    [],
  );

  const markManualSelection = useCallback(() => {
    if (rangeComesFromPreset.current) {
      rangeComesFromPreset.current = false;

      return false;
    }

    setSelectedPreset('custom');

    return true;
  }, []);

  const applyPreset = useCallback((preset: string | null) => {
    setSelectedPreset(preset);
    setAppliedPreset(preset);
  }, []);

  const revertSelectedPreset = useCallback(() => {
    rangeComesFromPreset.current = false;
    setSelectedPreset(appliedPreset);
  }, [appliedPreset]);

  const clearSelectedPreset = useCallback(() => {
    rangeComesFromPreset.current = false;
    setSelectedPreset(null);
    setAppliedPreset(null);
  }, []);

  return {
    appliedPreset,
    selectedPreset,
    applyPreset,
    clearSelectedPreset,
    markManualSelection,
    revertSelectedPreset,
    selectPreset,
  };
};
