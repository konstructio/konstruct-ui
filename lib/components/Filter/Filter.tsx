'use client';
import { cn } from '@/utils';

import { FilterProvider } from './contexts';
import { FilterComponentProps } from './Filter.types';
import { filterVariants } from './Filter.variants';
import {
  BadgeMultiSelect,
  DateFilterDropdown,
  DateRangeFilterDropdown,
  ResetButton,
  TextMultiSelect,
  TimeFilterDropdown,
} from './components';

/**
 * A compound component for building filter interfaces.
 * Includes sub-components for badge multi-select, date filtering, and reset actions.
 *
 * @example
 * ```tsx
 * <Filter theme="civo">
 *   <Filter.BadgeMultiSelect
 *     label="Status"
 *     options={[
 *       { id: 'active', label: 'Active', variant: 'success' },
 *       { id: 'pending', label: 'Pending', variant: 'warning' },
 *     ]}
 *     selectedValues={selected}
 *     onChange={setSelected}
 *   />
 *   <Filter.ResetButton onClick={() => setSelected([])} />
 * </Filter>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-filter--docs Storybook}
 */
const Filter: FilterComponentProps = ({
  className,
  theme = 'civo',
  children,
  closeOnApply = true,
}) => (
  <FilterProvider closeOnApply={closeOnApply}>
    <div className={cn(filterVariants({ className }))} data-theme={theme}>
      {children}
    </div>
  </FilterProvider>
);

Filter.displayName = 'KonstructFilter';
Filter.BadgeMultiSelect = BadgeMultiSelect;
Filter.TextMultiSelect = TextMultiSelect;
Filter.DateFilterDropdown = DateFilterDropdown;
Filter.DateRangeFilterDropdown = DateRangeFilterDropdown;
Filter.TimeFilterDropdown = TimeFilterDropdown;
Filter.ResetButton = ResetButton;

export {
  Filter,
  BadgeMultiSelect,
  TextMultiSelect,
  DateFilterDropdown,
  DateRangeFilterDropdown,
  TimeFilterDropdown,
};
