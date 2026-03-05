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

import { useTimeFilterDropdown } from './TimeFilterDropdown.hook';
import { TimeFilterDropdownProps } from './TimeFilterDropdown.types';

export const TimeFilterDropdown: FC<TimeFilterDropdownProps> = ({
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
    wrapperRef,
    handleApply,
    handleOpen,
    handleSelectPreset,
    handleSelectCustom,
    handleReset,
  } = useTimeFilterDropdown({ onApply, format });

  const hasPresets = presets && presets.length > 0;

  return (
    <div ref={wrapperRef} className="relative">
      <button
        className={cn(filterButtonVariants(), {
          'text-slate-700 dark:text-metal-100': isOpen,
        })}
        onClick={handleOpen}
      >
        {label}
        {appliedLabel && <Badge label={appliedLabel} />}
        <ChevronDownIcon
          className={cn(filterButtonIconVariants(), {
            'rotate-180 text-blue-600 dark:text-aurora-500': isOpen,
          })}
        />
      </button>

      {isOpen && (
        <div
          className={cn(
            'absolute',
            'top-full',
            'mt-1',
            'bg-white',
            'rounded-md',
            'shadow-md',
            'animate-in',
            'fade-in-0',
            'z-10',
            'border',
            'border-gray-200',
            'flex',
            'flex-col',
            'dark:bg-metal-800',
            'dark:border-metal-700',
            {
              'left-0': position === 'left',
              'right-0': position === 'right',
            },
          )}
        >
          <div className="flex">
            {hasPresets && (
              <div className="flex flex-col gap-1 py-4 px-4 min-w-40">
                {presets.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    className={cn(
                      'text-left',
                      'px-3',
                      'py-1.5',
                      'rounded',
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
              <div className="w-px bg-gray-200 dark:bg-metal-700" />
            )}

            {showTimePicker && (
              <div className="py-4 px-6">
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

          <div className="h-px bg-gray-200 dark:bg-metal-700" />

          <div
            className={cn(
              'flex',
              'justify-end',
              'items-center',
              'gap-4',
              'px-6',
              'py-3',
            )}
          >
            <Button
              variant="secondary"
              appearance="compact"
              onClick={handleReset}
            >
              Reset
            </Button>

            <Button appearance="compact" onClick={handleApply}>
              Apply
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
