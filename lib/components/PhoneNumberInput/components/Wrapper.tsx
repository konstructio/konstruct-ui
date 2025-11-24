import { FC, useId } from 'react';

import { Props } from '../PhoneNumberInput.types';
import { phoneNumberInputVariants } from '../PhoneNumberInput.variants';

import { FlagSelector } from './FlagSelector/FlagSelector';

export const Wrapper: FC<Props> = ({
  label,
  name,
  defaultCountryCode = 'US',
  wrapperClassName,
  showNameOnSearch = true,
  showFlagOnSearch = true,
  showInputFilter = true,
}) => {
  const id = name ?? useId();

  return (
    <div className={phoneNumberInputVariants({ className: wrapperClassName })}>
      {label ? <label htmlFor={id}>{label}</label> : null}

      <FlagSelector
        flagCode={defaultCountryCode}
        showNameOnSearch={showNameOnSearch}
        showFlagOnSearch={showFlagOnSearch}
        showInputFilter={showInputFilter}
      />

      <input
        type="tel"
        inputMode="tel"
        id={id}
        name={name}
        autoComplete="off"
      />
    </div>
  );
};
