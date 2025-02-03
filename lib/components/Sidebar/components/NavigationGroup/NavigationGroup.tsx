import { FC } from 'react';

import { NavigationTitle } from '../NavigationTitle/NavigationTitle';

import { NavigationGroupProps } from './NavigationGroup.types';

export const NavigationGroup: FC<NavigationGroupProps> = ({
  children,
  title,
  ...delegated
}) => (
  <>
    {title ? <NavigationTitle title={title} {...delegated} /> : null}
    <ul>{children}</ul>
  </>
);
