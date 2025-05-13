import { ChevronDownIcon } from 'lucide-react';
import { useCallback, useState } from 'react';

import { Button } from '@/components/Button/Button';
import { DatePicker } from '@/components/Datepicker/DatePicker';
import { cn } from '@/utils';

import {
  filterButtonIconVariants,
  filterButtonVariants,
} from '../../Filter.variants';
export const Created = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <div className="relative">
      <button className={cn(filterButtonVariants())} onClick={handleOpen}>
        Created
        <ChevronDownIcon
          className={cn(filterButtonIconVariants(), {
            'rotate-180': isOpen,
          })}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 left-0 bg-white rounded-md shadow animate-in fade-in-0 z-10">
          <DatePicker className="[&>div]:shadow-none [&>div]:p-0" />

          <div className="flex justify-end items-center gap-4 py-4 px-6">
            <Button variant="secondary" appearance="compact">
              Reset
            </Button>
            <Button appearance="compact">Apply</Button>
          </div>
        </div>
      )}
    </div>
  );
};
