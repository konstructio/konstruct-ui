import { FC, useCallback, useMemo } from 'react';

import { Select } from '@/components/Select/Select';

import { DEFAULT_PAGE_SIZES } from '../../constants';
import { useTableContext } from '../../contexts';

import { Props } from './DropdownPaginate.types';

export const DropdownPaginate: FC<Props> = ({
  pageSizes = DEFAULT_PAGE_SIZES,
}) => {
  const { pageSize, onPageSize, handlePage } = useTableContext();
  const options = useMemo(
    () => pageSizes.map(String).map((value) => ({ label: value, value })),
    [],
  );

  const handleChange = useCallback(
    (value: string) => {
      onPageSize(Number(value));
      handlePage(0);
    },
    [handlePage, onPageSize],
  );

  return (
    <div className="flex items-center gap-2 dark:text-metal-300">
      <span>Show</span>
      <Select
        className="w-22 [&>div>p]:text-xs bg-white"
        listItemClassName="[&>p]:text-xs dark:bg-metal-800"
        options={options}
        value={pageSize.toString()}
        onChange={({ target }) => handleChange(target.value)}
      />
    </div>
  );
};
