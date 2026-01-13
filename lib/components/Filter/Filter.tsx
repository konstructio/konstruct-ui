'use client';
import { cn } from '@/utils';

import { FilterComponentProps } from './Filter.types';
import { filterVariants } from './Filter.variants';
import {
  BadgeMultiSelect,
  DateFilterDropdown,
  ResetButton,
} from './components';

const Filter: FilterComponentProps = ({
  className,
  theme = 'civo',
  children,
}) => (
  <div className={cn(filterVariants({ className }))} data-theme={theme}>
    {children}
  </div>
);

Filter.displayName = 'KonstructFilter';
Filter.BadgeMultiSelect = BadgeMultiSelect;
Filter.DateFilterDropdown = DateFilterDropdown;
Filter.ResetButton = ResetButton;

export { Filter, BadgeMultiSelect, DateFilterDropdown };
