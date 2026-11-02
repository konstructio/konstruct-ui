import { VariantProps } from 'class-variance-authority';
import { HtmlHTMLAttributes } from 'react';

import { navigationTitleVariants } from './NavigationTitle.variants';

export interface Props
  extends
    VariantProps<typeof navigationTitleVariants>,
    Pick<HtmlHTMLAttributes<HTMLHeadingElement>, 'className'> {
  title: string;
  className?: string;
  isVisible?: boolean;
  /** With `onToggle`, the title renders as a disclosure button. */
  isOpen?: boolean;
  /** Id of the list the disclosure button shows and hides. */
  controlsId?: string;
  onToggle?: () => void;
}

/** @deprecated Use Props instead */
export type NavigationTitleProps = Props;
