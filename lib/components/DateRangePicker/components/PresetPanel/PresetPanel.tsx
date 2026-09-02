import { FC, useCallback, useMemo } from 'react';

import { ArrowRightIcon, CheckIcon } from '@/assets/icons/components';
import { cn } from '@/utils';

import { RadioGroup } from '@/components/RadioGroup/RadioGroup';
import { Typography } from '@/components/Typography/Typography';
import { useDateRangePicker } from '../../contexts';
import { DateRangePreset } from '../../DateRangePicker.types';

import { PresetPanelProps } from './PresetPanel.types';
import {
  presetOptionLabelVariants,
  presetOptionVariants,
  presetPanelVariants,
  presetSeparatorVariants,
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
  const { preset, presets, setPreset, disabled } = useDateRangePicker();

  const handlePresetChange = useCallback(
    (value: string) => {
      setPreset(value as DateRangePreset);
    },
    [setPreset],
  );

  const radioOptions = useMemo(() => {
    // An option that resolves to no window is a manual-selection entry ('custom'
    // among the built-ins). It opens the calendar rather than standing for a
    // window of its own, so it is marked with a chevron; the design also rules it
    // off from the rolling presets it follows, which only applies when it closes
    // the list — the built-in set keeps 'custom' mid-list, where there is nothing
    // to separate.
    const now = new Date();
    const lastIndex = presets.length - 1;
    const lastRange = lastIndex >= 0 ? presets[lastIndex].resolve(now) : {};
    const separatorIndex =
      presets.length > 1 && !lastRange.from && !lastRange.to ? lastIndex : -1;

    return presets.map((option, index) => {
      // `presetLabels` only knows the built-in ids; an option supplied through
      // `presets` carries its own label and needs no mapping.
      const labelKey = PRESET_LABEL_MAP[option.value];
      const customLabel = labelKey && presetLabels?.[labelKey];
      const isManualEntry = index === separatorIndex;

      return {
        value: option.value,
        label: (
          <>
            {customLabel || option.label}
            {isManualEntry ? (
              <ArrowRightIcon
                size={20}
                aria-hidden
                className="shrink-0 text-slate-400 dark:text-metal-400"
              />
            ) : (
              option.value === preset && (
                <CheckIcon
                  size={20}
                  aria-hidden
                  className="shrink-0 text-aurora-500"
                />
              )
            )}
          </>
        ),
        disabled,
        // The radio control itself is not drawn: the row shows selection with a
        // trailing check instead. The input stays in place for semantics.
        className: 'hidden',
        labelTextClassName: cn(presetOptionLabelVariants()),
        wrapperClassName: cn(
          presetOptionVariants({ disabled }),
          classNames?.option,
          isManualEntry && presetSeparatorVariants(),
          isManualEntry && classNames?.separator,
        ),
      };
    });
  }, [
    presets,
    preset,
    disabled,
    presetLabels,
    classNames?.option,
    classNames?.separator,
  ]);

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
        value={preset ?? undefined}
        onValueChange={handlePresetChange}
        direction="col"
        wrapperClassName={cn('gap-1', classNames?.radioGroup)}
      />
    </div>
  );
};

PresetPanel.displayName = 'DateRangePickerPresetPanel';
