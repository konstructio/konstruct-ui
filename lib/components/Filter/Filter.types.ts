import { VariantProps } from 'class-variance-authority';

import { BadgeProps } from '../Badge/Badge.types';

import { filterVariants } from './Filter.variants';

export type Option = {
  id: string;
  label: string;
  variant?: BadgeProps['variant'];
};

export interface FilterProps extends VariantProps<typeof filterVariants> {
  className?: string;
  statusOptions?: Option[];
  onSelectStatus?: (...status: Option[]) => void;
}
