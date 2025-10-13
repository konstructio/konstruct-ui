import { FC, useCallback, useMemo } from 'react';

import { Dropdown } from '@/components/Dropdown/Dropdown';

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
    <div className="flex items-center gap-2">
      <span>Show</span>
      <Dropdown
        className="w-[88px] [&>div>p]:text-xs bg-white"
        listItemClassName="[&>p]:text-xs"
        options={options}
        value={pageSize.toString()}
        onChange={({ target }) => handleChange(target.value)}
      />
    </div>
  );
};
