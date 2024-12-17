import { ComponentRef, FC, forwardRef } from 'react';

import { Wrapper } from './components';
import { DropdownProvider } from './contexts';
import { DropdownProps } from './Dropdown.types';

export const Dropdown: FC<DropdownProps> = forwardRef<
  ComponentRef<'input'>,
  DropdownProps
>(({ onChange, ...delegated }, ref) => (
  <DropdownProvider onChange={onChange}>
    <Wrapper ref={ref} {...delegated} />
  </DropdownProvider>
));
