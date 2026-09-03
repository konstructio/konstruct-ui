import { ChevronDownIcon } from 'lucide-react';
import { FC } from 'react';

import { Badge } from '@/components/Badge/Badge';
import { filterButtonIconVariants } from '@/components/Filter/Filter.variants';
import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { useCustomDateRangeFilterDropdown } from '../../contexts';

export const Trigger: FC = () => {
  const {
    appliedRangeDisplay,
    appliedRangeEnds,
    appliedRangeLabel,
    isOpen,
    label,
    labelRangeSeparator,
  } = useCustomDateRangeFilterDropdown();

  const renderApplied = () => {
    if (appliedRangeDisplay === 'split' && appliedRangeEnds) {
      return (
        <>
          <Badge label={appliedRangeEnds.from} />
          {appliedRangeEnds.to && (
            <>
              <Typography component="span" className="text-sm">
                {labelRangeSeparator}
              </Typography>
              <Badge label={appliedRangeEnds.to} />
            </>
          )}
        </>
      );
    }

    return appliedRangeLabel && <Badge label={appliedRangeLabel} />;
  };

  return (
    <>
      {label}
      {renderApplied()}
      <ChevronDownIcon
        className={cn(filterButtonIconVariants(), {
          'rotate-180 text-blue-600 dark:text-aurora-500': isOpen,
        })}
      />
    </>
  );
};
