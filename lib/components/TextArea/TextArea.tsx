import {
  ChangeEvent,
  FC,
  forwardRef,
  useCallback,
  useId,
  useState,
} from 'react';

import { TextAreaProps } from './TextArea.types';
import { textAreaVariants } from './TextArea.variants';
import { useTheme } from '../../contexts';

export const TextArea: FC<TextAreaProps> = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps
>(({ initialValue, label, name, placeholder, rows = 3, theme, onChange }) => {
  const id = useId();
  const { theme: contextTheme } = useTheme();
  const htmlId = name ? `${id}-name` : id;
  const [value, setValue] = useState(initialValue ?? '');

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
      onChange?.();
    },
    [onChange],
  );

  return (
    <div className="flex flex-col gap-2">
      {label ? (
        <label htmlFor={htmlId} className="cursor-pointer">
          {label}
        </label>
      ) : null}

      <textarea
        id={htmlId}
        className={textAreaVariants({ theme: theme ?? contextTheme })}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
});
