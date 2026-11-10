import { Content, Portal, Root, Trigger } from '@radix-ui/react-popover';
import { FC } from 'react';

import { useFilterContext } from '@/components/Filter/contexts';
import { useFilterSheet } from '@/components/Filter/hooks';
import { Sheet } from '@/components/Sheet/Sheet';
import { Theme } from '@/domain/theme';
import { cn } from '@/utils';

import { Props } from './FilterDropdown.types';

export const FilterDropdown: FC<Props> = ({
  isOpen,
  trigger,
  triggerClassName,
  position = 'left',
  contentClassName,
  sheetTitle,
  sheetStep,
  sheetPreviousContent,
  onSheetBack,
  children,
  onOpenChange,
}) => {
  const { sheetDraggable, theme } = useFilterContext();
  const isSheet = useFilterSheet();

  if (isSheet) {
    return (
      <>
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          className={triggerClassName}
          onClick={() => onOpenChange(true)}
        >
          {trigger}
        </button>

        <Sheet
          isOpen={isOpen}
          expandable
          draggable={sheetDraggable}
          theme={theme as Theme | undefined}
          title={sheetTitle ?? trigger}
          step={sheetStep}
          previousContent={sheetPreviousContent}
          bodyClassName="px-0"
          onBack={onSheetBack}
          onClose={() => onOpenChange(false)}
        >
          {children}
        </Sheet>
      </>
    );
  }

  return (
    <Root open={isOpen} onOpenChange={onOpenChange}>
      <Trigger className={triggerClassName}>{trigger}</Trigger>
      <Portal>
        <Content
          data-theme={theme}
          side="bottom"
          sideOffset={4}
          collisionPadding={16}
          align={position === 'right' ? 'end' : 'start'}
          onOpenAutoFocus={(event) => {
            event.preventDefault();
          }}
          // Focus only goes back to the trigger when closing lost it. Another
          // filter opening closes this one without an outside interaction
          // Radix knows about, and handing focus back here would read as focus
          // outside the filter just opened and close it too.
          onCloseAutoFocus={(event) => {
            const focused = document.activeElement;

            if (focused && focused !== document.body) {
              event.preventDefault();
            }
          }}
          className={cn(
            'bg-white',
            'rounded-md',
            'shadow-md',
            'animate-in',
            'fade-in-0',
            'z-50',
            'dark:bg-metal-800',
            'dark:border-metal-700',
            contentClassName,
          )}
        >
          {children}
        </Content>
      </Portal>
    </Root>
  );
};
