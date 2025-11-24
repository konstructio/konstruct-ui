import { Props as PhoneNumberProps } from '../../PhoneNumberInput.types';

export type Props = {
  flagCode: Required<PhoneNumberProps>['defaultCountryCode'];
  showNameOnSearch: Required<PhoneNumberProps>['showNameOnSearch'];
  showFlagOnSearch: Required<PhoneNumberProps>['showFlagOnSearch'];
  showInputFilter: Required<PhoneNumberProps>['showInputFilter'];
};
