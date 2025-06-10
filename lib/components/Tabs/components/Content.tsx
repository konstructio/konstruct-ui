import * as ReactTabs from '@radix-ui/react-tabs';

import { cn } from '@/utils';

import { contentVariants } from '../Tabs.variants';

export const Content = ({
  children,
  className,
  ...rest
}: ReactTabs.TabsContentProps) => {
  return (
    <ReactTabs.Content
      {...rest}
      className={cn(contentVariants({ variant: 'default', className }))}
    >
      {children}
    </ReactTabs.Content>
  );
};
