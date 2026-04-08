import { ForwardedRef } from '../../../../../../node_modules/react';
import { Theme } from '../../../../../domain/theme';
import { Props as MultiSelectDropdownProps } from '../../MultiSelectDropdown.types';
export type WrapperProps = Omit<MultiSelectDropdownProps, 'options' | 'multiselect'> & {
    ref?: ForwardedRef<HTMLInputElement>;
    theme?: Theme;
};
