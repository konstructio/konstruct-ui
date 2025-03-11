import { ComponentRef, FC, forwardRef } from 'react';

import { Wrapper } from './components';
import { DropdownProvider } from './contexts';
import { DropdownProps } from './Dropdown.types';

export const Dropdown: FC<DropdownProps> = forwardRef<
  ComponentRef<'input'>,
  DropdownProps
>(({ onChange, value, ...delegated }, ref) => (
  <DropdownProvider onChange={onChange} value={value}>
    <Wrapper ref={ref} {...delegated} />
  </DropdownProvider>
));
