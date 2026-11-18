import { FC, useId } from 'react';

import { FilterContext } from './filter.context';
import type { Props } from './filter.types';

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
