import { FC, useId } from 'react';

import { Props } from './PhoneNumberInput.types';
import { phoneNumberInputVariants } from './PhoneNumberInput.variants';
import { Flag } from './components';
import { PhoneNumberProvider } from './contexts';

export const PhoneNumberInput: FC<Props> = ({
  name,
  label,
  wrapperClassName,
}) => {
  const id = name ?? useId();

  return (
    <PhoneNumberProvider>
      <div
        className={phoneNumberInputVariants({ className: wrapperClassName })}
      >
        {label ? <label htmlFor={id}>{label}</label> : null}

        <Flag />

        <input
          type="tel"
          inputMode="tel"
          id={id}
          name={name}
          autoComplete="off"
        />
      </div>
    </PhoneNumberProvider>
  );
};
