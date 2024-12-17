import { ComponentRef, RefObject } from '../../../../../node_modules/react';
import { DropdownProps } from '../../Dropdown.types';
export type ListProps = {
    options: DropdownProps['options'];
    theme: DropdownProps['theme'];
    wrapperRef: RefObject<ComponentRef<'div'> | null>;
    wrapperInputRef: RefObject<ComponentRef<'div'> | null>;
};
