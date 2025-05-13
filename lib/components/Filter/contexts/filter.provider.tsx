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

  const onAddSelectStatus = useCallback((option: Option) => {
    setStatusSelected((prev) => [...prev, option]);
  }, []);

  const onRemoveSelectStatus = useCallback((option: Option) => {
    setStatusSelected((prev) =>
      prev.filter((status) => status.id !== option.id),
    );
  }, []);

  return (
    <FilterContext.Provider
      value={{
        isCreatedOpen,
        isStatusOpen,
        statusSelected,
        onOpenCreated,
        onOpenStatus,
        onAddSelectStatus,
        onRemoveSelectStatus,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
