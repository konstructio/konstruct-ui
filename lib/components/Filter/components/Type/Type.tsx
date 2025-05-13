import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/utils';

import {
  filterButtonIconVariants,
  filterButtonVariants,
} from '../../Filter.variants';

export const Type = () => (
  <div className="relative">
    <button className={cn(filterButtonVariants())}>
      Type <ChevronDownIcon className={cn(filterButtonIconVariants())} />
    </button>
  </div>
);
