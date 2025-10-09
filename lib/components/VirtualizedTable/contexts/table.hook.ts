import { useContext } from 'react';

import { RowData } from '../VirtualizedTable.types';

import { ContextType, TableContext } from './table.context';

export const useTableContext = <
  TData extends RowData = RowData,
>(): ContextType<TData> => {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error('useTableContext must be used within a TableProvider');
  }

  return context as ContextType<TData>;
};
