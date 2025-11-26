import { RegionCode } from 'google-libphonenumber';
import { InputHTMLAttributes } from 'react';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  defaultCountryCode?: RegionCode;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  helperTextClassName?: string;
  isRequired?: boolean;
  label?: string;
  labelClassName?: string;
  name?: string;
  placeholder?: string;
  showFlagOnSearch?: boolean;
  showInputFilter?: boolean;
  showNameOnSearch?: boolean;
  showPlaceHolder?: boolean;
  wrapperClassName?: string;
};
