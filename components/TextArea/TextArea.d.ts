import { FC } from '../../../node_modules/react';
import { TextAreaProps } from './TextArea.types';
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
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-textarea--docs Storybook}
 */
export declare const TextArea: FC<TextAreaProps>;
