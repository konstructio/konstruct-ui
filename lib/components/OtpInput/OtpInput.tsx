import {
  ChangeEvent,
  ClipboardEvent,
  FC,
  KeyboardEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

import { cn } from '@/utils';

import { Typography } from '../Typography/Typography';

import { Props } from './OtpInput.types';

const toDigits = (code: string | undefined, length: number) => {
  return Array.from({ length }, (_, index) => code?.[index] ?? '');
};

/**
 * One-time code input split into one box per digit. The first box opts into
 * SMS autofill (`autocomplete="one-time-code"`) and spreads a pasted or
 * autofilled code across the boxes; Backspace, ArrowLeft and ArrowRight move
 * between them.
 *
 * @example
 * ```tsx
 * <OtpInput
 *   label="Verification code"
 *   error={verifyError}
 *   onComplete={(code) => verify(code)}
 * />
 * ```
 */
const OtpInput: FC<Props> = ({
  autoFocus = false,
  className,
  defaultValue,
  digitLabel = (position) => `Digit ${position}`,
  disabled = false,
  error,
  inputClassName,
  label,
  length = 6,
  name,
  theme,
  value,
  onChange,
  onComplete,
}) => {
  const id = useId();
  const errorId = `${id}-error`;
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const [internalDigits, setInternalDigits] = useState(() => {
    return toDigits(defaultValue, length);
  });
  const digits = value !== undefined ? toDigits(value, length) : internalDigits;
  const hasError = typeof error === 'string' && error.length > 0;

  useEffect(() => {
    if (autoFocus) {
      const firstEmpty = digits.findIndex((digit) => digit === '');
      inputsRef.current[firstEmpty === -1 ? length - 1 : firstEmpty]?.focus();
    }
  }, [autoFocus]);

  const focusInput = (index: number) => {
    const input = inputsRef.current[Math.min(Math.max(index, 0), length - 1)];

    input?.focus();
    input?.select();
  };

  const commit = (nextDigits: string[]) => {
    setInternalDigits(nextDigits);

    const code = nextDigits.join('');

    onChange?.(code);

    if (nextDigits.every((digit) => digit !== '')) {
      onComplete?.(code);
    }
  };

  const distribute = (raw: string, startIndex: number) => {
    const cleaned = raw.replace(/\D/g, '');

    if (!cleaned) {
      return;
    }

    const nextDigits = [...digits];
    let writeIndex = startIndex;

    for (const char of cleaned) {
      if (writeIndex >= length) {
        break;
      }

      nextDigits[writeIndex] = char;
      writeIndex += 1;
    }

    commit(nextDigits);
    focusInput(writeIndex);
  };

  const handleChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const cleaned = event.target.value.replace(/\D/g, '');

    if (cleaned.length > 1) {
      distribute(cleaned, index);

      return;
    }

    const nextDigits = [...digits];
    nextDigits[index] = cleaned;
    commit(nextDigits);

    if (cleaned && index < length - 1) {
      focusInput(index + 1);
    }
  };

  const handleKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Backspace' && !digits[index] && index > 0) {
      event.preventDefault();
      const nextDigits = [...digits];
      nextDigits[index - 1] = '';
      commit(nextDigits);
      focusInput(index - 1);

      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      focusInput(index - 1);

      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      focusInput(index + 1);
    }
  };

  const handlePaste = (
    index: number,
    event: ClipboardEvent<HTMLInputElement>,
  ) => {
    const pasted = event.clipboardData.getData('text');

    if (!pasted) {
      return;
    }

    event.preventDefault();
    distribute(pasted, index);
  };

  return (
    <div className="flex flex-col gap-2" data-theme={theme}>
      <fieldset
        className={cn('flex gap-3 border-0 p-0', className)}
        aria-describedby={hasError ? errorId : undefined}
        aria-invalid={hasError || undefined}
        disabled={disabled}
      >
        <legend className="sr-only">{label}</legend>

        {digits.map((digit, index) => (
          <input
            key={index}
            ref={(element) => {
              inputsRef.current[index] = element;
            }}
            type="text"
            inputMode="numeric"
            autoComplete={index === 0 ? 'one-time-code' : 'off'}
            maxLength={index === 0 ? length : 1}
            value={digit}
            disabled={disabled}
            aria-label={digitLabel(index + 1)}
            aria-invalid={hasError || undefined}
            className={cn(
              'size-10 rounded border bg-white text-center text-base text-slate-800 transition-all',
              'focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-1',
              'disabled:cursor-not-allowed disabled:bg-gray-100',
              'dark:bg-metal-800 dark:text-metal-50 dark:disabled:bg-metal-900',
              hasError
                ? 'border-red-600 focus-visible:ring-red-600 dark:border-red-500'
                : 'border-gray-200 focus-visible:ring-aurora-500 dark:border-metal-700',
              inputClassName,
            )}
            onChange={(event) => handleChange(index, event)}
            onKeyDown={(event) => handleKeyDown(index, event)}
            onPaste={(event) => handlePaste(index, event)}
            onFocus={(event) => event.target.select()}
          />
        ))}

        {name ? (
          <input type="hidden" name={name} value={digits.join('')} />
        ) : null}
      </fieldset>

      {hasError ? (
        <Typography
          component="span"
          id={errorId}
          role="alert"
          className="text-xs tracking-normal text-red-700 dark:text-red-400"
        >
          {error}
        </Typography>
      ) : null}
    </div>
  );
};

OtpInput.displayName = 'KonstructOtpInput';

export { OtpInput };
