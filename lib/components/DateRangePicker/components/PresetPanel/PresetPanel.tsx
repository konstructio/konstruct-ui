import { FC, useCallback, useMemo } from 'react';

import { cn } from '@/utils';

import { RadioGroup } from '../../../RadioGroup/RadioGroup';
import { Typography } from '../../../Typography/Typography';
import { useDateRangePicker } from '../../contexts';
import { DateRangePreset } from '../../DateRangePicker.types';
import { PRESET_OPTIONS } from '../../utils';

import { PresetPanelProps } from './PresetPanel.types';
import {
  presetPanelVariants,
  presetTitleVariants,
} from './PresetPanel.variants';

const PRESET_LABEL_MAP: Record<
  string,
  keyof NonNullable<PresetPanelProps['presetLabels']>
> = {
  today: 'today',
  'current-month': 'currentMonth',
  custom: 'custom',
  'last-7-days': 'last7Days',
  'last-2-weeks': 'last2Weeks',
};

export const PresetPanel: FC<PresetPanelProps> = ({
  className,
  labelTimePeriod = 'Time period',
  ariaLabelTimePeriod = 'Time period options',
  presetLabels,
  classNames,
}) => {
  const { preset, setPreset, disabled } = useDateRangePicker();

  const handlePresetChange = useCallback(
    (value: string) => {
      setPreset(value as DateRangePreset);
    },
    [setPreset],
  );

  const radioOptions = useMemo(
    () =>
      PRESET_OPTIONS.map((option) => {
        const labelKey = PRESET_LABEL_MAP[option.value];
        const customLabel = labelKey && presetLabels?.[labelKey];

        return {
          value: option.value,
          label: customLabel || option.label,
          disabled,
        };
      }),
    [disabled, presetLabels],
  );

  return (
    <div className={cn(presetPanelVariants({ className }), classNames?.root)}>
      <Typography
        component="span"
        className={cn(presetTitleVariants(), classNames?.title)}
        aria-label={ariaLabelTimePeriod}
      >
        {labelTimePeriod}
      </Typography>

      <RadioGroup
        name="date-range-preset"
        options={radioOptions}
        defaultChecked={preset}
        onValueChange={handlePresetChange}
        direction="col"
        wrapperClassName={cn('gap-4 pl-2', classNames?.radioGroup)}
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
