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
}) => (
  <tr className={cn(classNameExpandedRow)} data-expanded-row-id={id}>
    <td
      colSpan={colSpan}
      className={cn(
        'bg-white p-0 dark:bg-metal-900 dark:border-x dark:border-t dark:border-b',
        {
          'border-t border-b border-gray-200': isExpanded,
          'dark:border-metal-700': isExpanded,
          'dark:border-transparent dark:transition-[border-color] dark:duration-300 dark:ease-in-out':
            !isExpanded,
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
