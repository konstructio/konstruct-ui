import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { FC } from 'react';
import { Menu } from 'react-feather';

import { cn } from '@/utils';

import { Props } from './HamburgerTrigger.types';
import { hamburgerTriggerVariants } from './HamburgerTrigger.variants';

const HamburgerTrigger: FC<Props> = ({ isOpen, onClick, className }) => (
  <button
    type="button"
    aria-label="Open navigation"
    aria-expanded={isOpen}
    aria-haspopup="menu"
    className={cn(hamburgerTriggerVariants({ className }))}
    onClick={onClick}
  >
    <Menu size={20} aria-hidden="true" />
    <VisuallyHidden>Open navigation</VisuallyHidden>
  </button>
);

HamburgerTrigger.displayName = 'KonstructSidebarHamburgerTrigger';

export { HamburgerTrigger };
