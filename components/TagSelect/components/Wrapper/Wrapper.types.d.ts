import { ForwardedRef } from '../../../../../node_modules/react';
import { Theme } from '../../../../domain/theme';
import { TagSelectProps } from '../../TagSelect.types';
export type WrapperProps = Omit<TagSelectProps, 'options' | 'multiselect'> & {
    ref?: ForwardedRef<HTMLInputElement>;
    theme?: Theme;
};
