import { Props as PhoneNumberProps } from '../../PhoneNumberInput.types';
export type Props = {
    placeholder: PhoneNumberProps['placeholder'];
    showFlagOnSearch: Required<PhoneNumberProps>['showFlagOnSearch'];
    showInputFilter: Required<PhoneNumberProps>['showInputFilter'];
    showNameOnSearch: Required<PhoneNumberProps>['showNameOnSearch'];
    showPlaceHolder: PhoneNumberProps['showPlaceHolder'];
};
