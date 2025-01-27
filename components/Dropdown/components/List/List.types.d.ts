import { ComponentRef, RefObject } from '../../../../../node_modules/react';
import { DropdownProps } from '../../Dropdown.types';
export type ListProps = Pick<DropdownProps, 'name' | 'options' | 'theme'> & {
    wrapperRef: RefObject<ComponentRef<'div'> | null>;
    wrapperInputRef: RefObject<ComponentRef<'div'> | null>;
};
