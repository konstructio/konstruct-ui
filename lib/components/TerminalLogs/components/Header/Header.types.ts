import { VariantProps } from 'class-variance-authority';
import { ComponentRef, RefObject } from 'react';

import { tabTriggerVariants } from './Header.styles';

export type HeaderProps = VariantProps<typeof tabTriggerVariants> & {
  wrapperRef: RefObject<ComponentRef<'div'> | null>;
};
