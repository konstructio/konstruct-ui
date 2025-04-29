import * as ReactTabs from '@radix-ui/react-tabs';
import { contentVariants } from '../Tabs.variants';
import { cn } from '@/utils';

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
