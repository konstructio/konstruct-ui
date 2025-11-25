import { Props as PhoneNumberProps } from '../../PhoneNumberInput.types';

export type Props = {
  showNameOnSearch: Required<PhoneNumberProps>['showNameOnSearch'];
  showFlagOnSearch: Required<PhoneNumberProps>['showFlagOnSearch'];
  showInputFilter: Required<PhoneNumberProps>['showInputFilter'];
};
