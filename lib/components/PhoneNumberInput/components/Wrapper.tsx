import { useMask } from '@react-input/mask';
import isoCountries from 'i18n-iso-countries';
import IsoCountriesLang from 'i18n-iso-countries/langs/en.json';
import {
  ChangeEvent,
  ComponentRef,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
} from 'react';

import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { Props } from '../PhoneNumberInput.types';
import {
  labelVariants,
  phoneNumberInputVariants,
} from '../PhoneNumberInput.variants';
import { usePhoneNumberContext } from '../contexts/phone-number.hook';
import { getPhoneMask } from '../utils';

import { FlagContent } from './FlagContent/FlagContent';
import { FlagSelectorWrapper } from './FlagSelectorWrapper/FlagSelectorWrapper';

isoCountries.registerLocale(IsoCountriesLang);

export const Wrapper: ForwardRefExoticComponent<
  Props & RefAttributes<ComponentRef<'input'>>
> = forwardRef<ComponentRef<'input'>, Props>(
  (
    {
      disabled = false,
      error,
      helperText,
      helperTextClassName,
      isRequired,
      label,
      labelClassName,
      name,
      placeholder,
      showFlagOnSearch = true,
      showInputFilter = true,
      showNameOnSearch = true,
      wrapperClassName,
      showPlaceHolder,
      ...delegated
    },
    ref,
  ) => {
    const id = name ?? useId();
    const wrapperRef = useRef<ComponentRef<'div'>>(null);
    const {
      isOpenSelector,
      value,
      selectedCountry,
      onChangeValue,
      handleOpenSelector,
    } = usePhoneNumberContext();
    const hasError = typeof error === 'string' && error.length >= 0;

    const inputRef = useMask({
      mask: getPhoneMask(selectedCountry),
      replacement: { _: /\d/ },
    });

    useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

    const onChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (value.startsWith(selectedCountry.prefix)) {
          onChangeValue(event.target.value);
        } else {
          onChangeValue(`${selectedCountry.prefix} `);
        }
      },
      [selectedCountry.prefix, onChangeValue],
    );

    useEffect(() => {
      const controller = new AbortController();

      const handleKeyboard = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          handleOpenSelector(false);
        }
      };

      const handleClickOutside = (event: MouseEvent) => {
        if (!wrapperRef.current?.contains(event.target as Node)) {
          handleOpenSelector(false);
        }
      };

      document.addEventListener('keydown', handleKeyboard, {
        signal: controller.signal,
      });

      document.addEventListener('mousedown', handleClickOutside, {
        signal: controller.signal,
      });

      document.addEventListener(
        'visibilitychange',
        () => {
          if (document.hidden) {
            handleOpenSelector(false);
          }
        },
        {
          signal: controller.signal,
        },
      );

      return () => {
        controller.abort();
      };
    }, [handleOpenSelector, wrapperRef]);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.value = selectedCountry.prefix + ' ';
      }
    }, [selectedCountry.code]);

    return (
      <div className="w-full flex flex-col gap-2">
        {label ? (
          <label
            id={id}
            className={labelVariants({ className: labelClassName })}
            onClick={() => !disabled && inputRef.current?.focus()}
          >
            {label}
            {isRequired && (
              <Typography
                component="span"
                className="text-red-600 dark:text-red-500 ml-1"
              >
                *
              </Typography>
            )}
          </label>
        ) : null}

        <div
          ref={wrapperRef}
          data-state={isOpenSelector ? 'open' : 'closed'}
          className={phoneNumberInputVariants({
            className: wrapperClassName,
            variant: hasError ? 'error' : 'default',
          })}
        >
          <div className="p-2 flex items-center gap-2.5">
            <FlagContent />

            <input
              id={label ? id : undefined}
              ref={inputRef}
              name={name}
              autoComplete="off"
              className={cn(
                'outline-0',
                'w-full',
                'caret-slate-800',
                'text-slate-800',
                'bg-transparent',
                'dark:caret-metal-50',
                'dark:text-metal-50',
                'disabled:cursor-not-allowed',
                'disabled:opacity-50',
              )}
              type="tel"
              inputMode="tel"
              value={value}
              onChange={onChange}
              disabled={disabled}
              {...delegated}
            />
          </div>

          {isOpenSelector && (
            <FlagSelectorWrapper
              placeholder={placeholder}
              showFlagOnSearch={showFlagOnSearch}
              showInputFilter={showInputFilter}
              showNameOnSearch={showNameOnSearch}
              showPlaceHolder={showPlaceHolder}
            />
          )}
        </div>

        {error ? (
          <Typography
            component="span"
            className="text-xs text-red-700 dark:text-red-500"
          >
            {error}
          </Typography>
        ) : null}

        {!error && helperText ? (
          <Typography
            component="span"
            className={cn(
              'text-xs kubefirst-dark:text-slate-200',
              helperTextClassName,
            )}
          >
            {helperText}
          </Typography>
        ) : null}
      </div>
    );
  },
);
