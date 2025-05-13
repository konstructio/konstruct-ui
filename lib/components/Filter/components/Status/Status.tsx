import { ChevronDownIcon } from 'lucide-react';
import { FC, useCallback, useState } from 'react';

import { Badge } from '@/components/Badge/Badge';
import { Button } from '@/components/Button/Button';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { cn } from '@/utils';

import {
  filterButtonIconVariants,
  filterButtonVariants,
} from '../../Filter.variants';

import { StatusProps } from './Status.types';

export const Status: FC<StatusProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  if (options.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      <button className={cn(filterButtonVariants())} onClick={handleOpen}>
        Status
        <ChevronDownIcon
          className={cn(filterButtonIconVariants(), {
            'rotate-180': isOpen,
          })}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 left-0 bg-white rounded-md shadow animate-in fade-in-0 z-10">
          <div className="py-4">
            <div className="flex flex-col gap-2">
              {options.map(({ label, variant }) => (
                <div className="flex gap-4 px-6">
                  <Checkbox theme="civo" />
                  <Badge label={label} variant={variant} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 py-4 px-6 border-t border-gray-200">
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
