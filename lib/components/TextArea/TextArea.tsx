import { FC, forwardRef, useId } from 'react';

import { cn } from '@/utils';

import { TextAreaProps } from './TextArea.types';
import { textAreaVariants } from './TextArea.variants';

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
export const TextArea: FC<TextAreaProps> = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps
>(
  (
    {
      initialValue,
      label,
      name,
      placeholder,
      rows = 3,
      theme,
      className,
      ...props
    },
    ref,
  ) => {
    const id = useId();
    const htmlId = name ? `${id}-name` : id;

    return (
      <div className="flex flex-col gap-2" data-theme={theme}>
        {label ? (
          <label htmlFor={htmlId} className="cursor-pointer">
            {label}
          </label>
        ) : null}

        <textarea
          id={htmlId}
          ref={ref}
          className={cn(textAreaVariants({ className }))}
          rows={rows}
          placeholder={placeholder}
          value={initialValue ?? props.value}
          {...props}
        />
      </div>
    );
  },
);
