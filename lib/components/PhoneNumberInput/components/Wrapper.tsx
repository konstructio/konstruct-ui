import { useMask } from '@react-input/mask';
import isoCountries from 'i18n-iso-countries';
import IsoCountriesLang from 'i18n-iso-countries/langs/en.json';
import {
  ChangeEvent,
  ComponentRef,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  RefObject,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
} from 'react';

import { Typography } from '@/components/Typography/Typography';
import { useClickOutside } from '@/hooks';
import { cn, composeIds } from '@/utils';

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
      id,
      isRequired,
      label,
      labelClassName,
      labelWrapperClassName,
      name,
      placeholder,
      showFlagOnSearch = true,
      showInputFilter = true,
      showNameOnSearch = true,
      wrapperClassName,
      showPlaceHolder,
      onChange: onChangeProp,
      ...delegated
    },
    ref,
  ) => {
    const generatedId = useId();
    const controlId = id ?? generatedId;
    const errorId = `${controlId}-error`;
    const helperTextId = `${controlId}-helper-text`;
    const wrapperRef = useRef<ComponentRef<'div'>>(null);
    const {
      isOpenSelector,
      value,
      selectedCountry,
      onChangeValue,
      handleOpenSelector,
    } = usePhoneNumberContext();
    const hasError = typeof error === 'string' && error.length > 0;
    const hasHelperText = !hasError && !!helperText;
    const describedBy = composeIds(
      hasError && errorId,
      hasHelperText && helperTextId,
    );

    const inputRef: RefObject<ComponentRef<'input'> | null> = useMask({
      mask: getPhoneMask(selectedCountry),
      replacement: { _: /\d/ },
    });

    useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      if (value.startsWith(selectedCountry.prefix)) {
        onChangeValue(event.target.value);
      } else {
        onChangeValue(`${selectedCountry.prefix} `);
      }

      onChangeProp?.(event);
    };

    const handleClickOutside = useCallback(() => {
      handleOpenSelector(false);
    }, [handleOpenSelector]);

    useClickOutside(wrapperRef, handleClickOutside);

    useEffect(() => {
      const controller = new AbortController();

      const handleKeyboard = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          handleOpenSelector(false);
        }
      };

      document.addEventListener('keydown', handleKeyboard, {
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
    }, [handleOpenSelector]);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.value = selectedCountry.prefix + ' ';
      }
    }, [selectedCountry.code]);

    const setInputRef = useCallback(
      (node: ComponentRef<'input'> | null) => {
        if (node === null) {
          inputRef.current?.blur();
        }

        inputRef.current = node;
      },
      [inputRef],
    );

    return (
      <div className="w-full flex flex-col gap-2">
        {label ? (
          <div className={cn(labelWrapperClassName)}>
            <label
              htmlFor={controlId}
              className={labelVariants({ className: labelClassName })}
              onClick={() => !disabled && inputRef.current?.focus()}
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
            </label>
          </div>
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
              {...delegated}
              id={controlId}
              ref={setInputRef}
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
              aria-invalid={hasError || undefined}
              aria-describedby={describedBy}
              aria-required={isRequired || undefined}
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

        {hasError ? (
          <Typography
            component="span"
            id={errorId}
            className="text-xs text-red-700 dark:text-red-500"
          >
            {error}
          </Typography>
        ) : null}

        {hasHelperText ? (
          <Typography
            component="span"
            id={helperTextId}
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
