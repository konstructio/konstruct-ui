import { RegionCode } from 'google-libphonenumber';

export type Props = {
  name?: string;
  label?: string;
  isRequired?: boolean;
  wrapperClassName?: string;
  defaultCountryCode?: RegionCode;
  showNameOnSearch?: boolean;
  showFlagOnSearch?: boolean;
  showInputFilter?: boolean;
};
