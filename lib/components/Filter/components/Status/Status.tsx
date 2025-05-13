'use client';
import { ChevronDownIcon } from 'lucide-react';
import { FC, useCallback } from 'react';

import { Badge } from '@/components/Badge/Badge';
import { Button } from '@/components/Button/Button';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { cn } from '@/utils';

import { useFilterContext } from '../../contexts';
import { Option } from '../../Filter.types';
import {
  filterButtonIconVariants,
  filterButtonVariants,
} from '../../Filter.variants';

import { StatusProps } from './Status.types';

export const Status: FC<StatusProps> = ({ options }) => {
  const {
    isStatusOpen,
    statusSelected,
    onOpenStatus,
    onAddSelectStatus,
    onRemoveSelectStatus,
  } = useFilterContext();

  const handleSelectStatus = useCallback(
    (option: Option, checked: boolean) => {
      if (checked) {
        onAddSelectStatus(option);
      } else {
        onRemoveSelectStatus(option);
      }
    },
    [onAddSelectStatus, onRemoveSelectStatus],
  );

  if (options.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      <button
        className={cn(filterButtonVariants(), {
          'text-slate-700': isStatusOpen,
        })}
        onClick={onOpenStatus}
      >
        Status
        {statusSelected.length > 0 && (
          <span className="text-xs text-gray-800 px-2 py-1 bg-gray-100 rounded transition-all duration-100 font-medium">
            {statusSelected.length}
          </span>
        )}
        <ChevronDownIcon
          className={cn(filterButtonIconVariants(), {
            'rotate-180': isStatusOpen,
            'text-blue-600': isStatusOpen,
          })}
        />
      </button>

      {isStatusOpen && (
        <div className="absolute top-full mt-1 left-0 bg-white rounded-md shadow-md animate-in fade-in-0 z-10 border border-gray-200">
          <div className="py-4">
            <div className="flex flex-col gap-2">
              {options.map((option) => {
                const isSelected = !!statusSelected.find(
                  (status) => status.id === option.id,
                );

                return (
                  <div key={option.id} className="flex gap-4 px-6">
                    <Checkbox
                      theme="civo"
                      defaultChecked={isSelected}
                      onChange={(checked) =>
                        handleSelectStatus(option, checked)
                      }
                    />
                    <Badge label={option.label} variant={option.variant} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 py-4 border-t border-gray-200">
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
