import { FC, useId, useState } from 'react';

import { Collapse } from '@/components/Collapse/Collapse';
import { cn } from '@/utils';

import { useSidebarContext } from '../../contexts';
import { NavigationTitle } from '../NavigationTitle/NavigationTitle';

import { Props } from './NavigationGroup.types';
import { navigationGroupsVariants } from './NavigationGroup.variants';

const NavigationGroup: FC<Props> = ({
  children,
  title,
  className,
  titleClassName,
  isVisible = true,
  isCollapsible = false,
  isOpen: controlledIsOpen,
  defaultOpen = true,
  onOpenChange,
  ...delegated
}) => {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(defaultOpen);
  const { isCollapsed } = useSidebarContext();
  const listId = useId();

  if (!isVisible) {
    return null;
  }

  const showTitle = !!title && !isCollapsed;
  const canToggle = showTitle && isCollapsible;
  const isOpen = controlledIsOpen ?? uncontrolledIsOpen;

  const handleToggle = () => {
    if (controlledIsOpen === undefined) {
      setUncontrolledIsOpen(!isOpen);
    }

    onOpenChange?.(!isOpen);
  };

  const list = (
    <ul className={cn(navigationGroupsVariants({ className }))}>{children}</ul>
  );

  return (
    <>
      {showTitle ? (
        <NavigationTitle
          title={title}
          className={titleClassName}
          {...(canToggle
            ? { isOpen, controlsId: listId, onToggle: handleToggle }
            : {})}
          {...delegated}
        />
      ) : null}
      {isCollapsible ? (
        <Collapse id={listId} isOpen={!canToggle || isOpen} keepMounted>
          {list}
        </Collapse>
      ) : (
        list
      )}
    </>
  );
};

NavigationGroup.displayName = 'KonstructSidebarNavigationGroup';

export { NavigationGroup };
