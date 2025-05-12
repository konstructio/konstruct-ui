import { ChevronDownIcon } from 'lucide-react';
import { FC } from 'react';

import { Button } from '@/components/Button/Button';
import { cn } from '@/utils';

import { FilterProps } from './Filter.types';
import {
  filterButtonIconVariants,
  filterButtonVariants,
  filterVariants,
} from './Filter.variants';

export const Filter: FC<FilterProps> = ({ className }) => (
  <div className={cn(filterVariants({ className }))}>
    <div className="relative">
      <button className={cn(filterButtonVariants())}>
        Status <ChevronDownIcon className={cn(filterButtonIconVariants())} />
      </button>
    </div>

    <div className="relative">
      <button className={cn(filterButtonVariants())}>
        Created <ChevronDownIcon className={cn(filterButtonIconVariants())} />
      </button>
    </div>

    <div className="relative">
      <button className={cn(filterButtonVariants())}>
        Type <ChevronDownIcon className={cn(filterButtonIconVariants())} />
      </button>
    </div>

    <Button
      type="button"
      variant="text"
      theme="civo"
      appearance="compact"
      version="alternate"
    >
      Reset
    </Button>
  </div>
);
