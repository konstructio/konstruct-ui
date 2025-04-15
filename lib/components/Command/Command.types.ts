import { Theme } from '@/domain/theme';
import { DialogProps } from '@radix-ui/react-dialog';
import { PropsWithChildren } from 'react';

export interface CommandProps extends PropsWithChildren<DialogProps> {
  emptyResults?: string;
  placeholder?: string;
  title?: string;
  titleClassName?: string;
  wrapperClassName?: string;
  theme?: Theme;
}
