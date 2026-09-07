import { ComponentRef, FC, forwardRef, lazy, Suspense } from 'react';

import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { Props } from './PhoneNumberInput.types';
import {
  labelVariants,
  phoneNumberInputVariants,
} from './PhoneNumberInput.variants';

const PhoneNumberInputContent = lazy(() =>
  import('./components/PhoneNumberInputContent').then((module) => ({
    default: module.PhoneNumberInputContent,
  })),
);

const PhoneNumberInputFallback: FC<Props> = ({
  error,
  isRequired,
  label,
  labelClassName,
  labelWrapperClassName,
  wrapperClassName,
}) => {
  const hasError = typeof error === 'string' && error.length > 0;

  return (
    <div className="w-full flex flex-col gap-2" aria-busy="true">
      {label ? (
        <div className={cn(labelWrapperClassName)}>
          <Typography
            component="span"
            className={labelVariants({ className: labelClassName })}
          >
            {label}
            {isRequired && (
              <Typography
                component="span"
                aria-hidden="true"
                className="text-red-600 dark:text-red-500 ml-1"
              >
                *
              </Typography>
            )}
          </Typography>
        </div>
      ) : null}

      <div
        className={phoneNumberInputVariants({
          className: wrapperClassName,
          variant: hasError ? 'error' : 'default',
        })}
      >
        <div className="p-2 flex items-center gap-2.5">
          <div className="h-6 w-full" />
        </div>
      </div>
    </div>
  );
};

/**
 * A phone number input with country code selector and automatic formatting.
 * Uses google-libphonenumber for validation and formatting.
 *
 * @example
 * ```tsx
 * <PhoneNumberInput
 *   label="Contact Number"
 *   name="contactPhone"
 *   defaultCountryCode="US"
 *   showFlagOnSearch
 *   showInputFilter
 *   isRequired
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-phonenumberinput--docs Storybook}
 */
export const PhoneNumberInput: FC<Props> = forwardRef<
  ComponentRef<'input'>,
  Props
>((props, ref) => (
  <Suspense fallback={<PhoneNumberInputFallback {...props} />}>
    <PhoneNumberInputContent ref={ref} {...props} />
  </Suspense>
));
