import { Content, Portal, Root, Trigger } from '@radix-ui/react-popover';
import { ChevronUp } from 'lucide-react';
import { FC, useState } from 'react';

import { listVariants } from '@/components/Select/components/List/List.variants';
import { listItemVariants } from '@/components/Select/components/ListItem/ListItem.variants';
import { selectVariants } from '@/components/Select/Select.variants';
import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { DEFAULT_PAGE_SIZES } from '../../constants';
import { useTableContext } from '../../contexts';

import { Props } from './DropdownPaginate.types';

export const DropdownPaginate: FC<Props> = ({
  pageSizes = DEFAULT_PAGE_SIZES,
  isListPortal = false,
  direction = 'auto',
}) => {
  const { pageSize, onPageSize, handlePage } = useTableContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    onPageSize(Number(value));
    handlePage(0);
    setIsOpen(false);
  };

  const list = (
    <Content
      asChild
      side={direction === 'up' ? 'top' : 'bottom'}
      avoidCollisions={direction === 'auto'}
      align="start"
      sideOffset={4}
      onOpenAutoFocus={(event) => {
        event.preventDefault();
      }}
    >
      <ul
        role="listbox"
        aria-label="Rows per page"
        className={cn(
          listVariants(),
          'kvt-page-size-list',
          'static top-auto mt-0 z-50 w-(--radix-popover-trigger-width)',
        )}
      >
        {pageSizes.map((size) => {
          const value = String(size);

          return (
            <li
              key={value}
              role="option"
              aria-selected={value === String(pageSize)}
              tabIndex={0}
              className={cn(listItemVariants(), 'dark:bg-metal-800')}
              onClick={() => {
                handleSelect(value);
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleSelect(value);
                }
              }}
            >
              <Typography
                variant="body2"
                className="text-sm dark:text-metal-50"
              >
                {value}
              </Typography>
            </li>
          );
        })}
      </ul>
    </Content>
  );

  return (
    <div className="kvt-page-size flex items-center gap-2 dark:text-metal-300">
      <span>Show</span>
      <Root open={isOpen} onOpenChange={setIsOpen}>
        <Trigger
          aria-label="Rows per page"
          className={cn(selectVariants(), 'w-22 bg-white')}
        >
          <Typography
            variant="body2"
            className="flex-1 text-left text-sm text-metal-800 dark:text-metal-50"
          >
            {pageSize}
          </Typography>
          <ChevronUp
            data-state={isOpen ? 'open' : 'closed'}
            className="w-4 h-4 text-zinc-500 transition-all duration-100 data-[state=open]:rotate-0 data-[state=closed]:rotate-180 select-none"
          />
        </Trigger>

        {isListPortal ? <Portal>{list}</Portal> : list}
      </Root>
    </div>
  );
};
