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

import { FilterDropdown } from '../FilterDropdown/FilterDropdown';

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
    handleApply,
    handleOpenChange,
    handleSelect,
    handleReset,
  } = useDateFilterDropdown({ onApply, countryCode });

  return (
    <FilterDropdown
      isOpen={isOpen}
      position={position}
      contentClassName={cn(
        'border',
        'border-gray-200',
        'flex',
        'flex-col',
        'gap-4',
        'py-4',
        'px-6',
      )}
      triggerClassName={cn(filterButtonVariants(), {
        'text-slate-700': isOpen,
      })}
      trigger={
        <>
          {label}
          {appliedDay && <Badge label={appliedDay} />}
          <ChevronDownIcon
            className={cn(filterButtonIconVariants(), {
              'rotate-180 text-blue-600 dark:text-aurora-500': isOpen,
            })}
          />
        </>
      }
      onOpenChange={handleOpenChange}
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
        className={cn('flex', 'justify-end', 'items-center', 'gap-4', 'py-2')}
      >
        <Button variant="secondary" appearance="compact" onClick={handleReset}>
          Reset
        </Button>

        <Button appearance="compact" onClick={handleApply}>
          Apply
        </Button>
      </div>
    </FilterDropdown>
  );
};
