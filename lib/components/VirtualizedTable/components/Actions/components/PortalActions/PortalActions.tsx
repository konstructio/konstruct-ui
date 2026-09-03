import { createPortal } from 'react-dom';

import { cn } from '@/utils';

import { RowData } from '../../../../VirtualizedTable.types';
import { Props } from '../../Actions.types';
import { ActionsList } from '../ActionsList/ActionsList';
import { ActionsTrigger } from '../ActionsTrigger/ActionsTrigger';

import { useActionsMenu } from './hooks';

export const PortalActions = <TData extends RowData>({
  actions,
  openOnHover = true,
  wrapperClassName,
  triggerButtonClassName,
  iconTriggerButtonClassName,
  wrapperActionsClassName,
  wrapperContentActionsClassName,
  ...delegated
}: Omit<Props<TData>, 'isPortal'>) => {
  const {
    buttonRef,
    hasOpened,
    isOpen,
    menuId,
    menuRef,
    triggerRef,
    handleMenuKeyDown,
    handlePointerEnter,
    handlePointerLeave,
    handleTriggerClick,
    handleTriggerKeyDown,
    handleTriggerPointerDown,
    handleButtonPointerLeave,
    selectAndClose,
  } = useActionsMenu({ openOnHover });

  return (
    <div
      ref={triggerRef}
      className={cn('group inline-flex', wrapperClassName)}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onKeyDown={handleTriggerKeyDown}
    >
      <ActionsTrigger
        ref={buttonRef}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={hasOpened ? menuId : undefined}
        className={triggerButtonClassName}
        iconClassName={iconTriggerButtonClassName}
        isOpen={isOpen}
        onClick={handleTriggerClick}
        onPointerDown={handleTriggerPointerDown}
        onPointerLeave={handleButtonPointerLeave}
      />

      {hasOpened &&
        createPortal(
          <div
            id={menuId}
            ref={menuRef}
            role="menu"
            hidden={!isOpen}
            className={cn('fixed z-50 w-53.75', wrapperActionsClassName)}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            onKeyDown={handleMenuKeyDown}
          >
            <ActionsList
              actions={actions}
              className={cn(
                'animate-in fade-in-0',
                wrapperContentActionsClassName,
              )}
              isMenu
              rowData={delegated.row.original}
              onSelect={selectAndClose}
            />
          </div>,
          document.body,
        )}
    </div>
  );
};
