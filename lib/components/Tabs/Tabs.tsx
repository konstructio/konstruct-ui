import * as ReactTabs from '@radix-ui/react-tabs';
import { FC, useEffect, useState } from 'react';

import { cn } from '@/utils';

import { ListProps, Props as TabsProps, TriggerProps } from './Tabs.types';
import { rootVariants } from './Tabs.variants';
import { Content, List, Trigger } from './components';

/**
 * A tabs component built on Radix UI primitives.
 * Supports horizontal and vertical orientations with List, Trigger, and Content sub-components,
 * or a declarative `items` list.
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="overview">
 *   <Tabs.List orientation="horizontal">
 *     <Tabs.Trigger tab="overview" label="Overview" />
 *     <Tabs.Trigger tab="settings" label="Settings" />
 *   </Tabs.List>
 *
 *   <Tabs.Content value="overview">Overview content here</Tabs.Content>
 *   <Tabs.Content value="settings">Settings content here</Tabs.Content>
 * </Tabs>
 *
 * <Tabs
 *   items={[
 *     { value: 'overview', label: 'Overview', content: <Overview /> },
 *     { value: 'settings', label: 'Settings', content: <Settings /> },
 *   ]}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-tabs--docs Storybook}
 */
const Tabs: FC<TabsProps> & {
  List: FC<ListProps>;
  Trigger: FC<TriggerProps>;
  Content: FC<ReactTabs.TabsContentProps>;
} = ({
  children,
  className,
  defaultValue,
  items,
  listClassName,
  orientation,
  theme,
  value,
  onValueChange,
  ...rest
}) => {
  const firstValue = items?.at(0)?.value;
  const [internalValue, setInternalValue] = useState(
    defaultValue ?? firstValue,
  );
  const isControlled = value !== undefined;
  const isManaged = !!items && !isControlled;

  useEffect(() => {
    if (!isManaged) {
      return;
    }

    const isCurrentAvailable = items.some((item) => {
      return item.value === internalValue;
    });

    if (!isCurrentAvailable) {
      setInternalValue(firstValue);
    }
  }, [firstValue, internalValue, isManaged, items]);

  const handleValueChange = (nextValue: string) => {
    if (isManaged) {
      setInternalValue(nextValue);
    }

    onValueChange?.(nextValue);
  };

  return (
    <ReactTabs.Root
      {...rest}
      value={isManaged ? internalValue : value}
      defaultValue={isManaged ? undefined : defaultValue}
      onValueChange={handleValueChange}
      data-theme={theme}
      data-orientation={orientation}
      aria-orientation={orientation}
      className={cn(rootVariants({ variant: orientation, className }))}
    >
      {items ? (
        <>
          <List
            orientation={orientation ?? 'horizontal'}
            className={listClassName}
          >
            {items.map(({ label, triggerClassName, value: itemValue }) => (
              <Trigger
                key={itemValue}
                tab={itemValue}
                label={label}
                className={triggerClassName}
              />
            ))}
          </List>

          {items.map(({ content, contentClassName, value: itemValue }) => (
            <Content
              key={itemValue}
              value={itemValue}
              className={contentClassName}
            >
              {content}
            </Content>
          ))}
        </>
      ) : null}

      {children}
    </ReactTabs.Root>
  );
};

Tabs.displayName = 'KonstructTabs';
Tabs.Content = Content;
Tabs.List = List;
Tabs.Trigger = Trigger;

export { Content, List, Tabs, Trigger };
