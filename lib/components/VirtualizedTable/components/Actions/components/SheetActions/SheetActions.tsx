import { useState } from 'react';

import { ActionSheet } from '@/components/DropdownButton/components/ActionSheet/ActionSheet';
import { Option } from '@/components/DropdownButton/DropdownButton.types';
import { cn } from '@/utils';

import { RowData } from '../../../../VirtualizedTable.types';
import { Props } from '../../Actions.types';
import { DEFAULT_SHEET_TITLE } from '../../constants';
import { ActionsTrigger } from '../ActionsTrigger/ActionsTrigger';

export const SheetActions = <TData extends RowData>({
  actions,
  sheetTitle = DEFAULT_SHEET_TITLE,
  sheetDraggable = true,
  wrapperClassName,
  triggerButtonClassName,
  iconTriggerButtonClassName,
  row,
}: Omit<Props<TData>, 'isPortal'>) => {
  const [isOpen, setIsOpen] = useState(false);
  const rowData = row.original;

  const options: Option[] = actions.map(
    ({
      label,
      className,
      componentProps,
      destructive,
      disabled,
      disabledReason,
      separator,
      onClick,
    }) => ({
      label,
      className,
      destructive,
      separator,
      disabled: disabled || !!componentProps?.disabled,
      disabledReason,
      onClick: () => onClick(rowData),
    }),
  );

  return (
    <div className={cn('group inline-flex', wrapperClassName)}>
      <ActionsTrigger
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className={triggerButtonClassName}
        iconClassName={iconTriggerButtonClassName}
        isOpen={isOpen}
        onClick={() => setIsOpen(true)}
      />

      <ActionSheet
        isOpen={isOpen}
        title={
          typeof sheetTitle === 'function' ? sheetTitle(rowData) : sheetTitle
        }
        options={options}
        draggable={sheetDraggable}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};
