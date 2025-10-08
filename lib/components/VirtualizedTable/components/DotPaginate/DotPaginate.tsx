import { ChevronLeft, ChevronRight } from 'lucide-react';
import { memo } from 'react';

import { cn } from '@/utils';

const PageButton = memo(
  ({
    index,
    currentPage,
    handlePage,
  }: {
    index: number;
    currentPage: number;
    handlePage: (page: number) => void;
  }) => (
    <li key={index}>
      <button
        type="button"
        onClick={() => handlePage(index)}
        className={cn('px-2.5 py-1 rounded-lg text-blue-600 cursor-pointer', {
          'bg-blue-600 text-white': index === currentPage,
        })}
      >
        {index + 1}
      </button>
    </li>
  ),
);

PageButton.displayName = 'PageButton';

const Ellipsis = memo(({ keyValue }: { keyValue: string }) => (
  <li key={keyValue} className="px-2">
    <span className="text-blue-600">...</span>
  </li>
));

Ellipsis.displayName = 'Ellipsis';

const NavigationButton = memo(
  ({
    direction,
    onClick,
    disabled,
  }: {
    direction: 'left' | 'right';
    onClick: () => void;
    disabled: boolean;
  }) => {
    const Icon = direction === 'left' ? ChevronLeft : ChevronRight;

    return (
      <li className="flex items-center justify-center">
        <button onClick={onClick} disabled={disabled}>
          <Icon
            className={cn('h-6 w-6 cursor-pointer', {
              'text-blue-600': !disabled,
              'text-slate-400 cursor-not-allowed': disabled,
            })}
          />
        </button>
      </li>
    );
  },
);

NavigationButton.displayName = 'NavigationButton';

export const DotPaginate = () => {
  const totalPages = 10;
  const page = 0;
  const handlePage = (page: number) => {
    console.log('Go to page:', page);
  };

  const renderPageButtons = () => {
    // If 5 or fewer total pages, show all
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => (
        <PageButton
          key={i}
          index={i}
          currentPage={page}
          handlePage={handlePage}
        />
      ));
    }

    // More than 5 pages
    const buttons = [];

    // First 3 pages
    if (page < 3) {
      for (let i = 0; i < 3; i++) {
        buttons.push(
          <PageButton
            key={i}
            index={i}
            currentPage={page}
            handlePage={handlePage}
          />,
        );
      }

      buttons.push(<Ellipsis key="ellipsis" keyValue="ellipsis" />);

      // Add last two pages
      for (let i = totalPages - 2; i < totalPages; i++) {
        buttons.push(
          <PageButton
            key={i}
            index={i}
            currentPage={page}
            handlePage={handlePage}
          />,
        );
      }
    }
    // Last 5 pages
    else if (page >= totalPages - 5) {
      // First page
      buttons.push(
        <PageButton
          key={0}
          index={0}
          currentPage={page}
          handlePage={handlePage}
        />,
      );

      // Add ellipsis if not showing continuous from start
      if (totalPages > 6) {
        buttons.push(<Ellipsis key="ellipsis" keyValue="ellipsis" />);
      }

      // Show last 5 pages
      for (let i = Math.max(1, totalPages - 5); i < totalPages; i++) {
        buttons.push(
          <PageButton
            key={i}
            index={i}
            currentPage={page}
            handlePage={handlePage}
          />,
        );
      }
    }
    // Middle pages
    else {
      // First page
      buttons.push(
        <PageButton
          key={0}
          index={0}
          currentPage={page}
          handlePage={handlePage}
        />,
      );

      // Add first ellipsis
      if (page > 3) {
        buttons.push(<Ellipsis key="ellipsis1" keyValue="ellipsis1" />);
      }

      // Pages around current
      for (let i = page - 1; i <= page + 1; i++) {
        if (i > 0 && i < totalPages - 1) {
          buttons.push(
            <PageButton
              key={i}
              index={i}
              currentPage={page}
              handlePage={handlePage}
            />,
          );
        }
      }

      // Add second ellipsis
      if (page < totalPages - 4) {
        buttons.push(<Ellipsis key="ellipsis2" keyValue="ellipsis2" />);
      }

      // Last page
      buttons.push(
        <PageButton
          key={totalPages - 1}
          index={totalPages - 1}
          currentPage={page}
          handlePage={handlePage}
        />,
      );
    }

    return buttons;
  };

  return (
    <ul className="flex items-center gap-2">
      <NavigationButton
        direction="left"
        onClick={() => handlePage(page - 1)}
        disabled={page === 0}
      />

      {renderPageButtons()}

      <NavigationButton
        direction="right"
        onClick={() => handlePage(page + 1)}
        disabled={page >= totalPages - 1}
      />
    </ul>
  );
};
