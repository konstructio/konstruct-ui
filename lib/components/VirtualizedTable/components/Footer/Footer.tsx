import { useTableContext } from '../../contexts';

import { DropdownPaginate } from '../DropdownPaginate/DropdownPaginate';
import { FormPaginate } from '../FormPaginate/FormPaginate';
import { DotPaginate } from '../DotPaginate/DotPaginate';
import { DEFAULT_PAGE_SIZE } from '../../constants';

export const Footer = () => {
  const { totalItems = 0, tableFetching } = useTableContext();

  if (totalItems <= DEFAULT_PAGE_SIZE || tableFetching) {
    return null;
  }

  return (
    <>
      <div className="bg-slate-50 border border-y-transparent border-x-slate-100 text-slate-500 text-xs not-italic py-2 px-6 rounded-b-lg shadow">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {totalItems ? (
              <span className="text-slate-800">{totalItems} Results</span>
            ) : null}
            <div className="flex items-center gap-2">
              <DropdownPaginate />
            </div>
          </div>

          <div className="flex items-center gap-8">
            <DotPaginate />
            <FormPaginate />
          </div>
        </div>
      </div>
      <div className="w-full min-h-[150px]"></div>
    </>
  );
};
