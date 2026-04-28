import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

import { typographyVariants } from '@/components/Typography/Typography.variants';

export interface Props extends PropsWithChildren {
  className?: string;
  variant?: VariantProps<typeof typographyVariants>['variant'];
}

/** @deprecated Use Props instead */
export type LabelProps = Props;
