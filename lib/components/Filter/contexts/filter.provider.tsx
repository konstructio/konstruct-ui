import { FC, PropsWithChildren, useCallback, useState } from 'react';

import { FilterProps, Option } from '../Filter.types';

import { FilterContext } from './filter.context';

export const FilterProvider: FC<
  PropsWithChildren & {
    onSelectStatus: FilterProps['onSelectStatus'];
  }
> = ({ children }) => {
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isCreatedOpen, setIsCreatedOpen] = useState(false);
  const [statusSelected, setStatusSelected] = useState<Option[]>([]);

  const onOpenStatus = useCallback(() => {
    setIsCreatedOpen(false);
    setIsStatusOpen(!isStatusOpen);
  }, [isStatusOpen]);

  const onOpenCreated = useCallback(() => {
    setIsStatusOpen(false);
    setIsCreatedOpen(!isCreatedOpen);
  }, [isCreatedOpen]);

  const onSetSelectedStatus = useCallback(
    (selectedOptions: Option[]) => setStatusSelected(selectedOptions),
    [],
  );

  return (
    <FilterContext.Provider
      value={{
        isCreatedOpen,
        isStatusOpen,
        statusSelected,
        onOpenCreated,
        onOpenStatus,
        onSetSelectedStatus,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
