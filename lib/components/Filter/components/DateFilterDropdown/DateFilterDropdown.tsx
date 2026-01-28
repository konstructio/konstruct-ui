import { ChevronDownIcon } from 'lucide-react';
import { FC } from 'react';

import { Badge } from '@/components/Badge/Badge';
import { Button } from '@/components/Button/Button';
import { DatePicker } from '@/components/Datepicker/DatePicker';
import {
  filterButtonIconVariants,
  filterButtonVariants,
} from '@/components/Filter/Filter.variants';
import { cn } from '@/utils';

import { useDateFilterDropdown } from './DateFilterDropdown.hook';
import { DateFilterDropdownProps } from './DateFilterDropdown.types';

export const DateFilterDropdown: FC<DateFilterDropdownProps> = ({
  label,
  position = 'left',
  countryCode = 'US',
  onApply,
}) => {
  const {
    id,
    appliedDay,
    isOpen,
    selectedDay,
    wrapperRef,
    handleApply,
    handleOpen,
    handleSelect,
    handleReset,
  } = useDateFilterDropdown({ onApply, countryCode });

  return (
    <div ref={wrapperRef} className="relative">
      <button
        className={cn(filterButtonVariants(), {
          'text-slate-700': isOpen,
        })}
        onClick={handleOpen}
      >
        {label}
        {appliedDay && <Badge label={appliedDay} />}
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
            'gap-4',
            'py-4',
            'px-6',
            'dark:bg-metal-800',
            'dark:border-metal-700',
            {
              'left-0': position === 'left',
              'right-0': position === 'right',
            },
          )}
        >
          <DatePicker
            key={selectedDay?.toISOString() ?? id}
            className="p-0"
            arrowClassName="-top-1 right-0"
            monthsClassName={cn(
              'shadow-none',
              'p-0',
              'w-auto',
              'dark:border-transparent',
            )}
            defaultSelected={selectedDay}
            defaultMonth={selectedDay}
            onSelect={handleSelect}
          />

          <div
            className={cn(
              'flex',
              'justify-end',
              'items-center',
              'gap-4',
              'py-2',
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
