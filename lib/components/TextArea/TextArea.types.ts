import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes, ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { textAreaVariants } from './TextArea.variants';

export interface TextAreaProps
  extends InputHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaVariants> {
  rows?: number;
  label?: string | ReactNode;
  name?: string;
  initialValue?: string;
  theme?: Theme;
}
