import { RegionCode } from 'google-libphonenumber';
import { InputHTMLAttributes } from 'react';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  name?: string;
  label?: string;
  isRequired?: boolean;
  wrapperClassName?: string;
  defaultCountryCode?: RegionCode;
  showNameOnSearch?: boolean;
  showFlagOnSearch?: boolean;
  showInputFilter?: boolean;
  disabled?: boolean;
  labelClassName?: string;
  helperText?: string;
  helperTextClassName?: string;
  error?: string;
};
