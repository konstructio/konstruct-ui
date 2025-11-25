import isoCountries from 'i18n-iso-countries';
import IsoCountriesLang from 'i18n-iso-countries/langs/en.json';
import {
  ComponentRef,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
} from 'react';

import { Props } from '../PhoneNumberInput.types';
import {
  labelVariants,
  phoneNumberInputVariants,
} from '../PhoneNumberInput.variants';

import { usePhoneNumberContext } from '../contexts/phone-number.hook';
import { FlagContent } from './FlagContent/FlagContent';
import { FlagSelectorWrapper } from './FlagSelectorWrapper/FlagSelectorWrapper';

isoCountries.registerLocale(IsoCountriesLang);

export const Wrapper: ForwardRefExoticComponent<
  Props & RefAttributes<ComponentRef<'input'>>
> = forwardRef<ComponentRef<'input'>, Props>(
  (
    {
      disabled = false,
      isRequired,
      label,
      labelClassName,
      name,
      showFlagOnSearch = true,
      showInputFilter = true,
      showNameOnSearch = true,
      wrapperClassName,
      ...delegated
    },
    ref,
  ) => {
    const inputRef = useRef<ComponentRef<'input'>>(null);
    const id = name ?? useId();
    const wrapperRef = useRef<ComponentRef<'div'>>(null);
    const { isOpenSelector, handleOpenSelector } = usePhoneNumberContext();
    const htmlFor = name ? `${id}-${name}` : id;

    useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

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

    return (
      <div className="w-full flex flex-col">
        {label ? (
          <label
            id={htmlFor}
            className={labelVariants({ className: labelClassName })}
            htmlFor={htmlFor}
            onClick={() => !disabled && handleOpenSelector()}
          >
            {label}
            {isRequired && <span className="text-red-600 ml-1">*</span>}
          </label>
        ) : null}

        <div
          ref={wrapperRef}
          data-state={isOpenSelector ? 'open' : 'closed'}
          className={phoneNumberInputVariants({ className: wrapperClassName })}
        >
          <div className="p-2 flex items-center gap-4">
            <FlagContent />

            <input
              ref={inputRef}
              name={name}
              autoComplete="off"
              className="outline-0 w-full caret-slate-800"
              type="tel"
              inputMode="tel"
              id={id}
              {...delegated}
            />
          </div>

          {isOpenSelector && (
            <FlagSelectorWrapper
              showNameOnSearch={showNameOnSearch}
              showFlagOnSearch={showFlagOnSearch}
              showInputFilter={showInputFilter}
            />
          )}
        </div>
      </div>
    );
  },
);
