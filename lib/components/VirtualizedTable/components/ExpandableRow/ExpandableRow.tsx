import { FC } from 'react';

import { cn } from '@/utils';

import { Props } from './ExpandableRow.types';

export const ExpandableRow: FC<Props> = ({
  children,
  classNameExpandedCell,
  classNameExpandedContent,
  classNameExpandedRow,
  colSpan,
  id,
  isExpanded,
  isLastRow,
}) => (
  <tr
    className={cn('h-0 leading-0', classNameExpandedRow)}
    data-expanded-row-id={id}
  >
    <td
      colSpan={colSpan}
      className={cn(
        'p-0 bg-white dark:bg-metal-900 dark:border-x dark:border-metal-700',
        { 'rounded-b-lg': isLastRow },
        {
          'border-t border-b border-gray-200 dark:border-t-metal-700':
            isExpanded && isLastRow,
          'border-t border-b border-gray-200 dark:border-t-metal-700 dark:border-b-0':
            isExpanded && !isLastRow,
          'border-y-0': !isExpanded && !isLastRow,
          'border-t-0 border-b border-b-gray-200 dark:border-b-metal-700':
            !isExpanded && isLastRow,
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
