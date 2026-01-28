import { FC } from '../../../node_modules/react';
import { TagSelectProps } from './TagSelect.types';
/**
 * An input component for selecting from a list of tag options.
 * Supports single and multi-selection modes.
 *
 * @example
 * ```tsx
 * <TagSelect
 *   label="Skills"
 *   placeholder="Select skills..."
 *   options={[
 *     { label: 'React', color: 'blue' },
 *     { label: 'TypeScript', color: 'purple' },
 *     { label: 'Node.js', color: 'green' },
 *   ]}
 *   multiselect
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-tagselect--docs Storybook}
 */
export declare const TagSelect: FC<TagSelectProps>;
