import { Props } from './TagsInput.types';
/**
 * A free-text tags field. Typing a delimiter (Enter or comma) adds a tag,
 * Backspace on an empty input removes the last one, and `suggestions` offers
 * existing tags in a keyboard-navigable list. Mirrors the `Input` API for
 * label, error and helper text.
 *
 * @example
 * ```tsx
 * <TagsInput
 *   label="Tags"
 *   value={tags}
 *   suggestions={existingTags}
 *   helperText="Press Enter or comma to add a tag"
 *   onChange={setTags}
 * />
 * ```
 */
declare const TagsInput: import('../../../node_modules/react').ForwardRefExoticComponent<Props & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export { TagsInput };
