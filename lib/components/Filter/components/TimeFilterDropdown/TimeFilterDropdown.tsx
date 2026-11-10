import { ChevronDownIcon } from 'lucide-react';
import { FC } from 'react';

import { Badge } from '@/components/Badge/Badge';
import { Button } from '@/components/Button/Button';
import {
  filterButtonIconVariants,
  filterButtonVariants,
} from '@/components/Filter/Filter.variants';
import { TimePicker } from '@/components/TimePicker/TimePicker';
import { cn } from '@/utils';

import { FilterDropdown } from '../FilterDropdown/FilterDropdown';

import { useTimeFilterDropdown } from './hooks';
import { Props } from './TimeFilterDropdown.types';

export const TimeFilterDropdown: FC<Props> = ({
  label,
  position = 'left',
  format = '24',
  presets,
  showTimePicker = true,
  onApply,
}) => {
  const {
    appliedLabel,
    isOpen,
    selectedTime,
    selectedPresetLabel,
    handleApply,
    handleOpenChange,
    handleSelectPreset,
    handleSelectCustom,
    handleReset,
  } = useTimeFilterDropdown({ onApply, format });

  const hasPresets = presets && presets.length > 0;

  return (
    <FilterDropdown
      isOpen={isOpen}
      position={position}
      contentClassName={cn('border', 'border-gray-200', 'flex', 'flex-col')}
      triggerClassName={cn(filterButtonVariants(), {
        'text-slate-700 dark:text-metal-100': isOpen,
      })}
      trigger={
        <>
          {label}
          {appliedLabel && <Badge label={appliedLabel} />}
          <ChevronDownIcon
            className={cn(filterButtonIconVariants(), {
              'rotate-180 text-blue-600 dark:text-aurora-500': isOpen,
            })}
          />
        </>
      }
      sheetTitle={label}
      onOpenChange={handleOpenChange}
    >
      <div className="flex max-md:flex-col">
        {hasPresets && (
          <div className="flex flex-col gap-1 py-4 px-4 min-w-40 max-md:gap-0 max-md:py-0">
            {presets.map((preset) => (
              <button
                key={preset.label}
                type="button"
                className={cn(
                  'text-left',
                  'max-md:flex max-md:min-h-12 max-md:items-center',
                  'px-3',
                  'py-1.5',
                  'rounded',
                  'outline-none',
                  'focus-visible:ring-1',
                  'focus-visible:ring-aurora-500',
                  'cursor-pointer',
                  'text-sm',
                  'whitespace-nowrap',
                  'transition-colors',
                  'hover:bg-gray-100',
                  'dark:hover:bg-metal-700',
                  {
                    'bg-blue-50 text-blue-600 dark:bg-metal-700 dark:text-aurora-500':
                      selectedPresetLabel === preset.label,
                    'text-gray-700 dark:text-gray-300':
                      selectedPresetLabel !== preset.label,
                  },
                )}
                onClick={() => handleSelectPreset(preset)}
              >
                {preset.label}
              </button>
            ))}
          </div>
        )}

        {hasPresets && showTimePicker && (
          <div className="w-px bg-gray-200 dark:bg-metal-700 max-md:h-px max-md:w-full" />
        )}

        {showTimePicker && (
          <div className="py-4 px-6 max-md:px-4">
            <div
              className={cn({
                'w-35.5': format === '24',
                'w-52': format === '12',
              })}
            >
              <TimePicker
                format={format}
                time={selectedTime}
                onChange={handleSelectCustom}
                mode="input"
              />
            </div>
          </div>
        )}
      </div>

      <div className="h-px bg-gray-200 dark:bg-metal-700 max-md:hidden" />

      <div
        className={cn(
          'flex',
          'justify-end',
          'items-center',
          'gap-4',
          'px-6',
          'py-3',
          'max-md:gap-2 max-md:px-4 max-md:pt-4 max-md:pb-0',
        )}
      >
        <Button
          variant="secondary"
          appearance="compact"
          className="max-md:h-11! max-md:flex-1"
          onClick={handleReset}
        >
          Reset
        </Button>

        <Button
          appearance="compact"
          className="max-md:h-11! max-md:flex-1"
          onClick={handleApply}
        >
          Apply
        </Button>
      </div>
    </FilterDropdown>
  );
};
