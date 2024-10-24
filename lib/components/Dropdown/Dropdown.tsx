import { FC } from 'react';

import { Wrapper } from './components';
import { DropdownProvider } from './contexts';
import { DropdownProps } from './Dropdown.types';

export const Dropdown: FC<DropdownProps> = ({ ...delegated }) => (
  <DropdownProvider>
    <Wrapper {...delegated} />
  </DropdownProvider>
);
