import { RefObject } from 'react';

import { DropdownProps } from '../../Dropdown.types';

export type ListProps = {
  options: DropdownProps['options'];
  theme: DropdownProps['theme'];
  wrapperRef: RefObject<HTMLDivElement>;
  wrapperInputRef: RefObject<HTMLDivElement>;
};
