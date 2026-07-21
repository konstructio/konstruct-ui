import { FC, PropsWithChildren } from 'react';

import { FilterContext, FilterContextType } from './filter.context';

type Props = PropsWithChildren<FilterContextType>;

export const FilterProvider: FC<Props> = ({
  children,
  closeOnApply,
  theme,
}) => (
  <FilterContext.Provider value={{ closeOnApply, theme }}>
    {children}
  </FilterContext.Provider>
);
