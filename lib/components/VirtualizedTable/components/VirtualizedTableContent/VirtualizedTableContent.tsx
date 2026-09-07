import { JSX } from 'react';

import { cn } from '@/utils';

import { Props, RowData } from '../../VirtualizedTable.types';
import { TableProvider } from '../../contexts';
import { Body } from '../Body/Body';
import { Filter } from '../Filter/Filter';
import { Header } from '../Header/Header';
import { Pagination } from '../Pagination/Pagination';
import { WrapperBody } from '../WrapperBody/WrapperBody';

export const VirtualizedTableContent = <TData extends RowData>({
  id,
  ariaLabel,
  columns,
  data,
  totalItems = -Infinity,
  className,
  classNameHeaderActiveArrows,
  classNameHeaderArrows,
  classNameHeaderTable,
  classNameTable,
  classNameWrapperTable,
  isLoading,
  emptyState,
  errorState,
  headerContent,
  classNameHeaderContent,
  classNameScrollContainer,
  getRowId,
  fetchData,
  queryOptions,
  showPagination: showPaginationProp,
  showTotalItems,
  showDropdownPagination,
  showDotPagination,
  showFormPagination,
  pageSizes,
  dropdownPaginationDirection,
  showFilter = false,
  showFilterInput,
  filterSearchPlaceholder = '',
  filters,
  multiSelectFilter,
  filterActions,
  showResetButton = true,
  resetButtonClassName,
  closeOnApply = true,
  enableHoverRow,
  classNameHoverRow,
  enableExpandedRow,
  expandedState,
  defaultExpanded,
  classNameExpandedRow,
  classNameExpandedCell,
  classNameExpandedContent,
  classNameExpandedHeader,
  classNameActiveExpandedRow,
  onExpandedChange,
  renderExpandedRow,
  keepExpandColumnVisible,
}: Props<TData>): JSX.Element => {
  const showPagination =
    showPaginationProp ||
    [
      showTotalItems,
      showDropdownPagination,
      showDotPagination,
      showFormPagination,
    ].some(Boolean);

  return (
    <TableProvider<TData>
      id={id}
      columns={columns}
      data={data}
      headerContent={headerContent}
      getRowId={getRowId}
      fetchData={fetchData}
      totalItems={totalItems}
      queryOptions={queryOptions}
      isPaginationEnabled={showPagination}
      enableExpandedRow={enableExpandedRow}
      expandedState={expandedState}
      onExpandedChange={onExpandedChange}
      defaultExpanded={defaultExpanded}
      classNameExpandedRow={classNameExpandedRow}
      classNameExpandedCell={classNameExpandedCell}
      classNameExpandedContent={classNameExpandedContent}
      classNameExpandedHeader={classNameExpandedHeader}
      classNameActiveExpandedRow={classNameActiveExpandedRow}
      enableHoverRow={enableHoverRow}
      classNameHoverRow={classNameHoverRow}
      renderExpandedRow={renderExpandedRow}
      keepExpandColumnVisible={keepExpandColumnVisible}
    >
      <section className={cn('kvt', 'w-full min-w-fit', className)}>
        {showFilter && (
          <Filter
            id={id}
            actions={filterActions}
            filters={filters}
            multiSelectFilter={multiSelectFilter}
            placeholder={filterSearchPlaceholder}
            showFilterInput={showFilterInput}
            showResetButton={showResetButton}
            resetButtonClassName={resetButtonClassName}
            closeOnApply={closeOnApply}
          />
        )}

        <div className={cn('kvt-scroll', 'w-full', classNameScrollContainer)}>
          <div className="kvt-scroll-content w-full min-w-fit">
            <WrapperBody
              showPagination={showPagination}
              classNameWrapperTable={classNameWrapperTable}
              isLoading={isLoading}
            >
              <table
                className={cn(
                  'kvt-table',
                  'w-full border-collapse table-auto',
                  'dark:border-separate dark:border-spacing-0',
                  classNameTable,
                )}
                aria-label={ariaLabel}
              >
                <Header
                  className={classNameHeaderTable}
                  classNameArrows={classNameHeaderArrows}
                  classNameActiveArrows={classNameHeaderActiveArrows}
                  classNameHeaderContent={classNameHeaderContent}
                />
                <Body
                  isLoading={isLoading}
                  showPagination={showPagination}
                  emptyState={emptyState}
                  errorState={errorState}
                />
              </table>
            </WrapperBody>

            {showPagination && (
              <Pagination
                showTotalItems={showTotalItems}
                showDropdownPagination={showDropdownPagination}
                showDotPagination={showDotPagination}
                showFormPagination={showFormPagination}
                pageSizes={pageSizes}
                isLoading={isLoading}
                isListPortal={!!classNameScrollContainer}
                dropdownPaginationDirection={dropdownPaginationDirection}
              />
            )}
          </div>
        </div>
      </section>
    </TableProvider>
  );
};
