import {
  Arrow,
  Content,
  Portal,
  Provider,
  Root,
  Trigger,
} from '@radix-ui/react-tooltip';
import {
  Children,
  FC,
  isValidElement,
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { cn } from '@/utils';

import { useSidebarContext } from '../../contexts';

import { NavigationOptionContext } from './NavigationOption.context';
import { Props } from './NavigationOption.types';
import { navigationOptionVariants } from './NavigationOption.variants';

/**
 * Radix `<Trigger asChild>` requires a single React element. If consumers
 * pass multiple top-level children (e.g. `<Icon /><Label />`), wrap them
 * in a flex span so the trigger has a single element to attach refs/handlers to.
 *
 * `justify-center` is applied because this helper only runs in collapsed +
 * `expandOnHover` mode, where the visible content is icon-only and should
 * sit centered within the rail.
 */
const toSingleTriggerChild = (children: ReactNode): ReactElement => {
  const childArray = Children.toArray(children);
  if (childArray.length === 1 && isValidElement(childArray[0])) {
    return childArray[0];
  }
  return (
    <span className="flex w-full items-center justify-center gap-2">
      {children}
    </span>
  );
};

const NavigationOption: FC<Props> = ({
  children,
  className,
  closeDrawerOnClick = true,
  isVisible = true,
  isActive,
  tooltip,
  tooltipBgClassName = 'bg-kubefirst-dark-blue-900',
  tooltipArrowClassName = 'fill-kubefirst-dark-blue-900',
  tooltipTextClassName = 'text-white',
  tooltipClassName,
  ...delegated
}) => {
  const { isCollapsed, expandOnHover, closeDrawer } = useSidebarContext();
  const isHoverExpandable = isCollapsed && expandOnHover;

  const [registeredContent, setRegisteredContent] = useState<ReactNode>(null);

  const registerTooltipContent = useCallback((content: ReactNode) => {
    setRegisteredContent(content);
  }, []);

  const contextValue = useMemo(
    () => ({
      hasOwnTooltip: isHoverExpandable,
      registerTooltipContent,
    }),
    [isHoverExpandable, registerTooltipContent],
  );

  if (!isVisible) {
    return null;
  }

  const userOnClick =
    'onClick' in delegated
      ? (delegated.onClick as VoidFunction | undefined)
      : undefined;

  const handleClick = () => {
    if (closeDrawerOnClick) {
      closeDrawer();
    }
    userOnClick?.();
  };

  const tooltipContent = tooltip ?? registeredContent;
  const renderTooltip = isHoverExpandable && Boolean(tooltipContent);

  const body = renderTooltip ? (
    <Provider delayDuration={0}>
      <Root>
        <Trigger asChild>{toSingleTriggerChild(children)}</Trigger>
        <Portal>
          <Content
            side="right"
            sideOffset={12}
            className={cn(
              'z-[60] flex w-fit items-center gap-2 rounded px-3 py-2 text-sm shadow-lg whitespace-nowrap',
              'animate-in fade-in-0',
              tooltipBgClassName,
              tooltipTextClassName,
              tooltipClassName,
            )}
          >
            {tooltipContent}
            <Arrow className={tooltipArrowClassName} />
          </Content>
        </Portal>
      </Root>
    </Provider>
  ) : (
    children
  );

  return (
    <NavigationOptionContext.Provider value={contextValue}>
      <li
        {...delegated}
        role="option"
        data-active={isActive ? 'true' : undefined}
        onClick={handleClick}
        className={cn(navigationOptionVariants({ className, isActive }))}
      >
        {body}
      </li>
    </NavigationOptionContext.Provider>
  );
};

NavigationOption.displayName = 'KonstructSidebarNavigationOption';

export { NavigationOption };
