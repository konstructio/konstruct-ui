import {
  Content as ContentPrimitive,
  TabsContentProps,
} from '@radix-ui/react-tabs';
import { FC } from 'react';

import { cn } from '@/utils';

import { contentVariants } from '../Tabs.variants';

const Content: FC<TabsContentProps> = ({ children, className, ...rest }) => (
  <ContentPrimitive
    {...rest}
    className={cn(contentVariants({ variant: 'default', className }))}
  >
    {children}
  </ContentPrimitive>
);

Content.displayName = 'KonstructTabsContent';

export { Content };
