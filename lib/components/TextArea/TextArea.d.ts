import { FC } from '../../../node_modules/react';
import { Props } from './TextArea.types';
/**
 * A multiline text input component with optional label.
 *
 * @example
 * ```tsx
 * // Basic textarea
 * <TextArea label="Description" placeholder="Enter description..." />
 *
 * // Textarea with more rows
 * <TextArea label="Notes" rows={5} />
 *
 * // Controlled textarea
 * <TextArea
 *   label="Comments"
 *   value={comments}
 *   onChange={(e) => setComments(e.target.value)}
 * />
 *
 * // Required textarea with validation state
 * <TextArea label="Bio" isRequired error="Bio is required" />
 *
 * // Textarea with helper text
 * <TextArea label="Bio" helperText="Max 200 characters" />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-textarea--docs Storybook}
 */
export declare const TextArea: FC<Props>;
