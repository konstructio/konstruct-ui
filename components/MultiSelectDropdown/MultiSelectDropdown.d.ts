import { FC } from '../../../node_modules/react';
import { MultiSelectDropdownProps } from './MultiSelectDropdown.types';
/**
 * A dropdown component for selecting one or multiple options with search functionality.
 * Displays selected items as badges and supports loading states.
 *
 * @example
 * ```tsx
 * const [selected, setSelected] = useState<MultiSelectDropdownOption[]>([]);
 *
 * <MultiSelectDropdown
 *   label="Assign team members"
 *   placeholder="Search members..."
 *   options={teamMembers}
 *   value={selected}
 *   onChange={(e) => setSelected(e.target.value)}
 *   multiselect
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-multiselectdropdown--docs Storybook}
 */
export declare const MultiSelectDropdown: FC<MultiSelectDropdownProps>;
