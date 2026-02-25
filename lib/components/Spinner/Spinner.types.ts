import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes, ReactNode } from 'react';

import { TypographyProps } from '@/components/Typography/Typography.types';
import { Theme } from '@/domain/theme';

import { spinnerVariants } from './Spinner.variants';

export type SpinnerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof spinnerVariants> & {
    spinnerClassName?: string;
    textClassName?: string;
    textVariant?: TypographyProps['variant'];
    text?: string | ReactNode;
    srLabel?: string;
    theme?: Theme;
  };
