'use client';
import { FC, forwardRef } from 'react';

import { Wrapper } from './components';
import { TagSelectProvider } from './contexts';
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
export const TagSelect: FC<TagSelectProps> = forwardRef<
  HTMLInputElement,
  TagSelectProps
>(({ options, multiselect, ...delegated }, ref) => (
  <TagSelectProvider defaultOptions={options} multiselect={multiselect}>
    <Wrapper ref={ref} {...delegated} />
  </TagSelectProvider>
));
