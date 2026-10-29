import { ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { Option } from '../../DropdownButton.types';

export type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: ReactNode;
  options: Option[];
  itemClassName?: string;
  className?: string;
  headerClassName?: string;
  titleClassName?: string;
  position?: 'bottom' | 'top';
  theme?: Theme;
};
