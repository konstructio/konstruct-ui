import { FC } from 'react';

import { filterButtonVariants } from '@/components/Filter/Filter.variants';
import { cn } from '@/utils';

import { FilterDropdown } from '../../../FilterDropdown/FilterDropdown';
import { useCustomDateRangeFilterDropdown } from '../../contexts';
import { Actions } from '../Actions/Actions';
import { Picker } from '../Picker/Picker';
import { Trigger } from '../Trigger/Trigger';

export const Wrapper: FC = () => {
  const { isOpen, position, onOpenChange } = useCustomDateRangeFilterDropdown();

  return (
    <FilterDropdown
      isOpen={isOpen}
      position={position}
      triggerClassName={cn(filterButtonVariants(), {
        'text-slate-700': isOpen,
      })}
      trigger={<Trigger />}
      onOpenChange={onOpenChange}
    >
      <Picker />
      <Actions />
    </FilterDropdown>
  );
};
