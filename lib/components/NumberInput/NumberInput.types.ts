import { ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';

import { numberInputVariants } from './NumberInput.variants';

export interface NumberInputProps
  extends VariantProps<typeof numberInputVariants> {
  className?: string;
  init?: number;
  label?: string | ReactNode;
  max?: number;
  min?: number;
  name?: string;
  value?: number;
  onChange?: ({ target: { value } }: { target: { value: number } }) => void;
}
