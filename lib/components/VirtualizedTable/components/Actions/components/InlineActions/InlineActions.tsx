import { useEffect, useRef, useState } from 'react';

import { cn } from '@/utils';

import { RowData } from '../../../../VirtualizedTable.types';
import { Props } from '../../Actions.types';
import { ActionsList } from '../ActionsList/ActionsList';
import { ActionsTrigger } from '../ActionsTrigger/ActionsTrigger';

import { ITEM_HEIGHT, LIST_PADDING } from './constants';

export const InlineActions = <TData extends RowData>({
  actions,
  disabledReasonSide,
  openOnHover = true,
  wrapperClassName,
  triggerButtonClassName,
  iconTriggerButtonClassName,
  wrapperActionsClassName,
  wrapperContentActionsClassName,
  ...delegated
}: Omit<Props<TData>, 'isPortal'>) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [openUp, setOpenUp] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHoverSuppressed, setIsHoverSuppressed] = useState(false);

  const updateDirection = () => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const triggerRect = root.getBoundingClientRect();
    const menuHeight = actions.length * ITEM_HEIGHT + LIST_PADDING;

    let clipTop = 0;
    let clipBottom = window.innerHeight;
    let node = root.parentElement;

    while (node) {
      const { overflowY } = window.getComputedStyle(node);

      if (['auto', 'scroll', 'hidden'].includes(overflowY)) {
        const rect = node.getBoundingClientRect();
        clipTop = rect.top;
        clipBottom = rect.bottom;
        break;
      }

      node = node.parentElement;
    }

    const spaceBelow = clipBottom - triggerRect.bottom;
    const spaceAbove = triggerRect.top - clipTop;

    setOpenUp(spaceBelow < menuHeight && spaceAbove > spaceBelow);
  };

  const handleSelect = () => {
    if (openOnHover) {
      setIsHoverSuppressed(true);

      return;
    }

    setIsOpen(false);
  };

  const handleTriggerClick = () => {
    if (openOnHover) {
      return;
    }

    updateDirection();
    setIsOpen((previous) => {
      return !previous;
    });
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const controller = new AbortController();

    document.addEventListener(
      'mousedown',
      (event) => {
        if (!rootRef.current?.contains(event.target as Node)) {
          setIsOpen(false);
        }
      },
      { signal: controller.signal },
    );
    document.addEventListener(
      'keydown',
      (event) => {
        if (event.key === 'Escape') {
          setIsOpen(false);
        }
      },
      { signal: controller.signal },
    );

    return () => {
      controller.abort();
    };
  }, [isOpen]);

  const showOnHover = openOnHover && !isHoverSuppressed;

  return (
    <div
      ref={rootRef}
      className={cn('relative group', wrapperClassName)}
      onMouseEnter={updateDirection}
      onMouseLeave={() => {
        setIsHoverSuppressed(false);
      }}
    >
      <ActionsTrigger
        className={triggerButtonClassName}
        iconClassName={iconTriggerButtonClassName}
        isOpen={isOpen}
        onClick={handleTriggerClick}
        {...(openOnHover ? {} : { 'aria-expanded': isOpen })}
      />

      <div
        className={cn(
          'absolute',
          'right-0',
          'w-53.75',
          'z-10',
          openUp ? 'bottom-full' : 'top-full',
          openUp ? 'pb-1' : 'pt-1',
          'transition-[opacity,visibility]',
          'duration-150',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0 delay-150',
          showOnHover && [
            'group-hover:visible',
            'group-hover:opacity-100',
            'group-hover:delay-0',
            'group-hover:duration-75',
          ],
          wrapperActionsClassName,
        )}
      >
        <ActionsList
          actions={actions}
          disabledReasonSide={disabledReasonSide}
          className={wrapperContentActionsClassName}
          rowData={delegated.row.original}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
};
