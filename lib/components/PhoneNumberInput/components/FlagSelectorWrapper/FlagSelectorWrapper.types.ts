import { Props as PhoneNumberProps } from '../../PhoneNumberInput.types';

export type Props = {
  showInputFilter: Required<PhoneNumberProps>['showInputFilter'];
  showNameOnSearch: Required<PhoneNumberProps>['showNameOnSearch'];
  showFlagOnSearch: Required<PhoneNumberProps>['showFlagOnSearch'];
};
