import { FC, useCallback } from 'react';

import { cn } from '@/utils';

import { RadioGroup } from '../../../RadioGroup/RadioGroup';
import { Typography } from '../../../Typography/Typography';
import { useDateRangePicker } from '../../contexts';
import { DateRangePreset } from '../../DateRangePicker.types';
import { PresetPanelProps } from './PresetPanel.types';
import {
  presetPanelVariants,
  presetTitleVariants,
} from '../../DateRangePicker.variants';
import { PRESET_OPTIONS } from '../../utils';

export const PresetPanel: FC<PresetPanelProps> = ({ className }) => {
  const { preset, setPreset, disabled } = useDateRangePicker();

  const handlePresetChange = useCallback(
    (value: string) => {
      setPreset(value as DateRangePreset);
    },
    [setPreset],
  );

  const radioOptions = PRESET_OPTIONS.map((option) => ({
    value: option.value,
    label: option.label,
    disabled,
  }));

  return (
    <div className={cn(presetPanelVariants({ className }))}>
      <Typography
        component="span"
        className={cn(presetTitleVariants())}
        aria-label="Time period options"
      >
        Time period
      </Typography>
      <RadioGroup
        name="date-range-preset"
        options={radioOptions}
        defaultChecked={preset}
        onValueChange={handlePresetChange}
        direction="col"
        wrapperClassName="gap-4 pl-2"
        className={cn(
          'text-sm',
          'text-zinc-700',
          'dark:text-zinc-300',
          '[&_span]:text-zinc-700',
          'dark:[&_span]:text-zinc-300',
        )}
      />
    </div>
  );
};

PresetPanel.displayName = 'DateRangePickerPresetPanel';
