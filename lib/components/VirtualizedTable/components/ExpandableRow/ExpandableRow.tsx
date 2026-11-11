import { FC, TransitionEvent, useEffect } from 'react';

import { cn } from '@/utils';

import { Props } from './ExpandableRow.types';

const COLLAPSE_FALLBACK_MS = 500;

export const ExpandableRow: FC<Props> = ({
  children,
  classNameExpandedCell,
  classNameExpandedContent,
  classNameExpandedRow,
  colSpan,
  id,
  isCollapsing = false,
  isExpanded,
  isLastRow,
  onCollapseEnd,
}) => {
  const isOpen = isExpanded || isCollapsing;

  useEffect(() => {
    if (!isCollapsing) {
      return;
    }

    const timeout = setTimeout(() => onCollapseEnd?.(id), COLLAPSE_FALLBACK_MS);

    return () => clearTimeout(timeout);
  }, [id, isCollapsing, onCollapseEnd]);

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && !isExpanded) {
      onCollapseEnd?.(id);
    }
  };

  return (
    <tr
      className={cn('kvt-expanded-row h-0 leading-0', classNameExpandedRow)}
      data-expanded-row-id={id}
    >
      <td
        colSpan={colSpan}
        className={cn(
          'p-0 bg-white dark:bg-metal-900 dark:border-x dark:border-metal-700',
          { 'rounded-b-lg': isOpen && isLastRow },
          {
            'border-t border-b border-gray-200 dark:border-t-metal-700':
              isOpen && isLastRow,
            'border-t border-b border-gray-200 dark:border-t-metal-700 dark:border-b-0':
              isOpen && !isLastRow,
            'border-y-0': !isOpen,
          },
        )}
      >
        <div
          className={cn(
            'grid transition-[grid-template-rows] duration-300 ease-in-out',
            {
              'grid-rows-[1fr]': isExpanded,
              'grid-rows-[0fr]': !isExpanded,
            },
            classNameExpandedContent,
          )}
          onTransitionEnd={handleTransitionEnd}
          onTransitionCancel={handleTransitionEnd}
        >
          <div className="overflow-hidden">
            <div className={cn('px-4 py-3', classNameExpandedCell)}>
              {children}
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};
