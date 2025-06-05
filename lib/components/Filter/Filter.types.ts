import { VariantProps } from 'class-variance-authority';
import { FC, PropsWithChildren } from 'react';

import { Theme } from '@/domain/theme';

import { BadgeProps } from '../Badge/Badge.types';

import { filterVariants } from './Filter.variants';
import {
  BadgeMultiSelectProps,
  DateFilterDropdownProps,
  ResetButtonProps,
} from './components';

export type Option = {
  id: string;
  label: string;
  variant?: BadgeProps['variant'];
};

export type FilterProps = VariantProps<typeof filterVariants> &
  PropsWithChildren & {
    className?: string;
    theme?: Theme;
  };

export type FilterComponentProps = FC<FilterProps> & {
  BadgeMultiSelect: FC<BadgeMultiSelectProps>;
  DateFilterDropdown: FC<DateFilterDropdownProps>;
  ResetButton: FC<ResetButtonProps>;
};
