import { VariantProps } from 'class-variance-authority';
import { FC, PropsWithChildren } from 'react';

import { Props as NavigationGroupProps } from '../NavigationGroup/NavigationGroup.types';
import { Props as NavigationOptionProps } from '../NavigationOption/NavigationOption.types';
import { Props as NavigationSeparatorProps } from '../NavigationSeparator/NavigationSeparator.types';
import { Props as NavigationTitleProps } from '../NavigationTitle/NavigationTitle.types';

import { navigationVariants } from './Navigation.variants';

export interface Props
  extends PropsWithChildren, VariantProps<typeof navigationVariants> {
  className?: string;
}

/** @deprecated Use Props instead */
export type NavigationProps = Props;

export type NavigationChildrenProps = {
  NavigationGroup: FC<NavigationGroupProps>;
  NavigationOption: FC<NavigationOptionProps>;
  NavigationSeparator: FC<NavigationSeparatorProps>;
  NavigationTitle: FC<NavigationTitleProps>;
};
