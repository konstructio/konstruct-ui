import { ChevronDownIcon } from 'lucide-react';
import { FC } from 'react';

import { cn } from '@/utils';

import { Props } from './NavigationTitle.types';
import {
  navigationTitleButtonVariants,
  navigationTitleVariants,
} from './NavigationTitle.variants';

const NavigationTitle: FC<Props> = ({
  title,
  className,
  isVisible = true,
  isOpen = true,
  controlsId,
  onToggle,
}) => {
  if (!isVisible) {
    return null;
  }

  if (!onToggle) {
    return (
      <h2 className={cn(navigationTitleVariants({ className }))}>{title}</h2>
    );
  }

  return (
    <h2 className={cn(navigationTitleVariants({ className }))}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={controlsId}
        onClick={onToggle}
        className={navigationTitleButtonVariants()}
      >
        <span className="uppercase">{title}</span>
        <ChevronDownIcon
          aria-hidden="true"
          className={cn(
            'size-4 shrink-0 transition-transform duration-200',
            !isOpen && '-rotate-90',
          )}
        />
      </button>
    </h2>
  );
};

NavigationTitle.displayName = 'KonstructSidebarNavigationTitle';

export { NavigationTitle };
