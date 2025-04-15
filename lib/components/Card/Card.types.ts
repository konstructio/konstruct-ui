import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes, PropsWithChildren } from 'react';

import { Theme } from '@/domain/theme';

import { cardVariants } from './Card.variants';

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants>,
    PropsWithChildren {
  canHover?: boolean;
  isActive?: boolean;
  theme?: Theme;
  wrapperClassName?: string;
}
