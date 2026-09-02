import { ChevronDownIcon } from 'lucide-react';
import { FC } from 'react';

import { Badge } from '@/components/Badge/Badge';
import { filterButtonIconVariants } from '@/components/Filter/Filter.variants';
import { cn } from '@/utils';

import { useCustomDateRangeFilterDropdown } from '../../contexts';

export const Trigger: FC = () => {
  const { appliedRangeLabel, isOpen, label } =
    useCustomDateRangeFilterDropdown();

  return (
    <>
      {label}
      {appliedRangeLabel && <Badge label={appliedRangeLabel} />}
      <ChevronDownIcon
        className={cn(filterButtonIconVariants(), {
          'rotate-180 text-blue-600 dark:text-aurora-500': isOpen,
        })}
      />
    </>
  );
};
