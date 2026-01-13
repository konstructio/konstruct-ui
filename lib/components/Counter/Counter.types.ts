import { VariantProps } from 'class-variance-authority';

import { Theme } from '@/domain/theme';

import { counterVariants } from './Counter.variants';

export interface CounterProps extends VariantProps<typeof counterVariants> {
  canDecrement?: boolean;
  canIncrement?: boolean;
  className?: string;
  decrementButtonClassName?: string;
  incrementButtonClassName?: string;
  init?: number;
  isRequired?: boolean;
  label?: string;
  max?: number;
  min?: number;
  name?: string;
  theme?: Theme;
  value?: number;
  onChange?: ({ target: { value } }: { target: { value: number } }) => void;
}
