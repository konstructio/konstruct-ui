import { FC } from '../../../node_modules/react';
import { SelectProps } from './Select.types';
/**
 * A dropdown select component with search, icons, and infinite scroll support.
 * Also exported as `Dropdown` for convenience.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Select
 *   label="Country"
 *   options={[
 *     { value: 'us', label: 'United States' },
 *     { value: 'uk', label: 'United Kingdom' },
 *   ]}
 *   value={selected}
 *   onChange={(e) => setSelected(e.target.value)}
 * />
 *
 * // Searchable with custom icons
 * <Select
 *   label="Select region"
 *   options={regions.map(r => ({
 *     value: r.id,
 *     label: r.name,
 *     leftIcon: <RegionIcon />,
 *     subLabel: r.description,
 *   }))}
 *   searchable
 *   highlightSearch
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-select--docs Storybook}
 */
export declare const Select: FC<SelectProps>;
