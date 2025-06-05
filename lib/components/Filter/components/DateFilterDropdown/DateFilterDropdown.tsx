import { ChevronDownIcon } from 'lucide-react';
import { FC } from 'react';

import { Badge } from '@/components/Badge/Badge';
import { Button } from '@/components/Button/Button';
import { DatePicker } from '@/components/Datepicker/DatePicker';
import { cn } from '@/utils';

import {
  filterButtonIconVariants,
  filterButtonVariants,
} from '../../Filter.variants';

import { useDateFilterDropdown } from './DateFilterDropdown.hook';
import { DateFilterDropdownProps } from './DateFilterDropdown.types';

export const DateFilterDropdown: FC<DateFilterDropdownProps> = ({
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
  } = useDateFilterDropdown({ onApply });

  return (
    <div ref={wrapperRef} className="relative">
      <button
        className={cn(filterButtonVariants(), {
          'text-slate-700': isOpen,
        })}
        onClick={handleOpen}
      >
        Created
        {appliedDay && <Badge label={appliedDay} />}
        <ChevronDownIcon
          className={cn(filterButtonIconVariants(), {
            'rotate-180': isOpen,
            'text-blue-600': isOpen,
          })}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 left-0 bg-white rounded-md shadow-md animate-in fade-in-0 z-10 border border-gray-200 flex flex-col gap-4 py-4 px-6">
          <DatePicker
            key={selectedDay?.toISOString() ?? id}
            className="p-0"
            arrowClassName="-top-1 right-0"
            monthsClassName="shadow-none p-0 w-auto"
            defaultSelected={selectedDay}
            defaultMonth={selectedDay}
            onSelect={handleSelect}
          />

          <div className="flex justify-end items-center gap-4 py-2">
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
