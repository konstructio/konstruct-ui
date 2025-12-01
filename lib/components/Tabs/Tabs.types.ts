import * as ReactTabs from '@radix-ui/react-tabs';

import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { triggerVariants } from './Tabs.variants';
import { Theme } from '@/domain/theme';

export interface TabsProps extends ReactTabs.TabsProps, PropsWithChildren {
  theme?: Theme;
}

export interface TriggerProps
  extends
    VariantProps<typeof triggerVariants>,
    React.HTMLAttributes<HTMLDivElement> {
  tab: string;
  label: string;
  isActive: boolean;
}

export interface ListProps
  extends React.HTMLAttributes<HTMLDivElement>, PropsWithChildren {
  orientation: 'horizontal' | 'vertical';
}
