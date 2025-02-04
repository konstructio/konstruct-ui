import { VariantProps } from 'class-variance-authority';
import { FC, PropsWithChildren } from '../../../../../node_modules/react';
import { NavigationGroupProps } from '../NavigationGroup/NavigationGroup.types';
import { NavigationOptionProps } from '../NavigationOption/NavigationOption.types';
import { NavigationSeparatorProps } from '../NavigationSeparator/NavigationSeparator.types';
import { NavigationTitleProps } from '../NavigationTitle/NavigationTitle.types';
import { navigationVariants } from './Navigation.variants';
export interface NavigationProps extends PropsWithChildren, VariantProps<typeof navigationVariants> {
    className?: string;
}
export type NavigationChildrenProps = {
    NavigationGroup: FC<NavigationGroupProps>;
    NavigationOption: FC<NavigationOptionProps>;
    NavigationSeparator: FC<NavigationSeparatorProps>;
    NavigationTitle: FC<NavigationTitleProps>;
};
