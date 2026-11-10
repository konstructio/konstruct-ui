import { FC, PropsWithChildren, useId } from 'react';

import { FilterContext, FilterContextType } from './filter.context';

type Props = PropsWithChildren<FilterContextType>;

export const FilterProvider: FC<Props> = ({
  children,
  closeOnApply,
  resetScope,
  mobileSheet = true,
  sheetDraggable = true,
  theme,
}) => {
  const generatedScope = useId();

  return (
    <FilterContext.Provider
      value={{
        closeOnApply,
        resetScope: resetScope ?? generatedScope,
        mobileSheet,
        sheetDraggable,
        theme,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
