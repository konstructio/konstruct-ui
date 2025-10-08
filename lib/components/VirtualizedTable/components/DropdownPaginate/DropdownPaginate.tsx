import { useMemo } from 'react';

import { Dropdown } from '@/components/Dropdown/Dropdown';

export const DropdownPaginate = () => {
  // const { pageSize, onPageSize, handlePage } = useTableContext();
  const options = useMemo(
    () => ['10', '20', '50', '100'].map((value) => ({ label: value, value })),
    [],
  );

  // const handleChange = useCallback(
  //   (value: string) => {
  //     onPageSize(Number(value));
  //     handlePage(0);
  //   },
  //   [handlePage, onPageSize],
  // );

  return (
    <div className="flex items-center gap-2">
      <span>Show</span>
      <Dropdown
        className="w-[88px] [&>div>p]:text-xs bg-white"
        listItemClassName="[&>p]:text-xs"
        options={options}
        value="10"
      />
    </div>
  );
};
