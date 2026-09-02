import { FC } from 'react';

import { Wrapper } from './components';
import { CustomDateRangeFilterDropdownProvider } from './contexts';
import { Props } from './CustomDateRangeFilterDropdown.types';

export const CustomDateRangeFilterDropdown: FC<Props> = (props) => (
  <CustomDateRangeFilterDropdownProvider {...props}>
    <Wrapper />
  </CustomDateRangeFilterDropdownProvider>
);
