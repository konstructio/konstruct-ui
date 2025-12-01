import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { numberInputVariants } from './NumberInput.variants';

export interface NumberInputProps extends VariantProps<
  typeof numberInputVariants
> {
  className?: string;
  init?: number;
  label?: string | ReactNode;
  max?: number;
  min?: number;
  name?: string;
  value?: number;
  theme?: Theme;
  onChange?: ({ target: { value } }: { target: { value: number } }) => void;
}
