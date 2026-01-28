import { FilterComponentProps } from './Filter.types';
import { BadgeMultiSelect, DateFilterDropdown, DateRangeFilterDropdown } from './components';
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
declare const Filter: FilterComponentProps;
export { Filter, BadgeMultiSelect, DateFilterDropdown, DateRangeFilterDropdown, };
