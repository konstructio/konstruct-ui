import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { navigationSeparatorVariant } from './NavigationSeparator.variants';

export interface Props
  extends
    Pick<HTMLAttributes<HTMLDivElement>, 'className' | 'style'>,
    VariantProps<typeof navigationSeparatorVariant> {}

/** @deprecated Use Props instead */
export type NavigationSeparatorProps = Props;
