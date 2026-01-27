import { ChevronDownIcon } from 'lucide-react';
import { FC } from 'react';

import { Badge } from '@/components/Badge/Badge';
import { Button } from '@/components/Button/Button';
import { DateRangePicker } from '@/components/DateRangePicker/DateRangePicker';
import {
  filterButtonIconVariants,
  filterButtonVariants,
} from '@/components/Filter/Filter.variants';
import { cn } from '@/utils';

import { useDateRangeFilterDropdown } from './DateRangeFilterDropdown.hook';
import { DateRangeFilterDropdownProps } from './DateRangeFilterDropdown.types';

export const DateRangeFilterDropdown: FC<DateRangeFilterDropdownProps> = ({
  label,
  position = 'left',
  showTime = false,
  timeFormat = '24',
  showPresets = true,
  defaultRange,
  minDate,
  maxDate,
  onApply,
}) => {
  const {
    appliedRange,
    isOpen,
    selectedRange,
    wrapperRef,
    handleApply,
    handleOpen,
    handleRangeChange,
    handleReset,
  } = useDateRangeFilterDropdown({ defaultRange, onApply });

  return (
    <div ref={wrapperRef} className="relative">
      <button
        className={cn(filterButtonVariants(), {
          'text-slate-700': isOpen,
        })}
        onClick={handleOpen}
      >
        {label}
        {appliedRange && <Badge label={appliedRange} />}
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
            'dark:bg-metal-800',
            'dark:border-metal-700',
            {
              'left-0': position === 'left',
              'right-0': position === 'right',
            },
          )}
        >
          <DateRangePicker
            defaultRange={selectedRange}
            showTime={showTime}
            timeFormat={timeFormat}
            showPresets={showPresets}
            minDate={minDate}
            maxDate={maxDate}
            onRangeChange={handleRangeChange}
            classNames={{
              container: 'shadow-none',
            }}
          />

          <div
            className={cn(
              'flex',
              'justify-end',
              'items-center',
              'gap-4',
              'p-4',
              'pt-0',
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
