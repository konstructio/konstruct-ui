import { useMemo } from 'react';

import { createDefaultPresets } from '../../constants';

import { Props } from './usePresetOptions.types';

export const usePresetOptions = ({
  labelCustomRange,
  presets,
  rollingPresets,
  showCustomRange,
}: Props) => {
  return useMemo(() => {
    const options =
      presets ?? createDefaultPresets({ labelCustomRange, rollingPresets });

    if (showCustomRange) {
      return options;
    }

    const now = new Date();

    return options.filter((option) => {
      const range = option.resolve(now);

      return Boolean(range.from || range.to);
    });
  }, [labelCustomRange, presets, rollingPresets, showCustomRange]);
};
