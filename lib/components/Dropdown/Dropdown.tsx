import { ElementRef, FC, forwardRef } from 'react';

import { Wrapper } from './components';
import { DropdownProvider } from './contexts';
import { DropdownProps } from './Dropdown.types';

export const Dropdown: FC<DropdownProps> = forwardRef<
  ElementRef<'input'>,
  DropdownProps
>(({ ...delegated }, ref) => (
  <DropdownProvider>
    <Wrapper ref={ref} {...delegated} />
  </DropdownProvider>
));
