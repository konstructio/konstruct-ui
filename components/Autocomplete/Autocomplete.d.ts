import { AutocompleteProps } from './Autocomplete.types';
/**
 * An autocomplete/typeahead input component that suggests options as you type.
 *
 * @example
 * ```tsx
 * // Basic autocomplete
 * <Autocomplete
 *   label="Programming Language"
 *   options={[
 *     { value: 'JavaScript' },
 *     { value: 'TypeScript' },
 *     { value: 'Python' },
 *   ]}
 *   placeholder="Type to search..."
 *   onChange={(value) => setLanguage(value)}
 * />
 *
 * // With custom empty state
 * <Autocomplete
 *   options={users}
 *   placeholder="Search users..."
 *   placeHolderEmptyValues="No users found"
 *   onChange={handleUserSelect}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-autocomplete--docs Storybook}
 */
declare const Autocomplete: import('../../../node_modules/react').ForwardRefExoticComponent<AutocompleteProps & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export { Autocomplete };
