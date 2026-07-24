import { FC } from 'react';

import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons/components';
import { cn } from '@/utils';

import { useSidebarContext } from '../../contexts';

import { Props } from './CollapseTrigger.types';
import { collapseTriggerVariants } from './CollapseTrigger.variants';

const CollapseTrigger: FC<Props> = ({ className }) => {
  const { isCollapsed, canToggle, toggleMode } = useSidebarContext();

  if (!canToggle) {
    return null;
  }

  const label = isCollapsed ? 'Expand navigation' : 'Collapse navigation';

  return (
    <button
      type="button"
      data-konstruct-sidebar-collapse-trigger=""
      aria-label={label}
      aria-expanded={!isCollapsed}
      className={cn(collapseTriggerVariants({ className }))}
      onClick={(event) => {
        event.stopPropagation();
        toggleMode();
      }}
    >
      {isCollapsed ? (
        <ArrowRightIcon size={24} aria-hidden="true" />
      ) : (
        <ArrowLeftIcon size={24} aria-hidden="true" />
      )}
    </button>
  );
};

CollapseTrigger.displayName = 'KonstructSidebarCollapseTrigger';

export { CollapseTrigger };
