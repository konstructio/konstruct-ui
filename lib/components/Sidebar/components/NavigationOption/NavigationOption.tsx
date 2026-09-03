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
  useEffect,
  useMemo,
  useRef,
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

const DEFAULT_INTENT_DELAY_MS = 80;

const NavigationOption: FC<Props> = ({
  badge,
  children,
  className,
  closeDrawerOnClick = true,
  intentDelay = DEFAULT_INTENT_DELAY_MS,
  isVisible = true,
  isActive,
  role,
  tooltip,
  onIntent,
  tooltipBgClassName = 'bg-kubefirst-dark-blue-900',
  tooltipArrowClassName = 'fill-kubefirst-dark-blue-900',
  tooltipTextClassName = 'text-white',
  tooltipClassName,
  ...delegated
}) => {
  const { isCollapsed, expandOnHover, closeDrawer } = useSidebarContext();
  const isHoverExpandable = isCollapsed && expandOnHover;

  const [registeredContent, setRegisteredContent] = useState<ReactNode>(null);
  const intentTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const cancelIntent = useCallback(() => {
    clearTimeout(intentTimerRef.current);
    intentTimerRef.current = undefined;
  }, []);

  const fireIntent = useCallback(() => {
    cancelIntent();
    onIntent?.();
  }, [cancelIntent, onIntent]);

  const scheduleIntent = useCallback(() => {
    if (!onIntent) {
      return;
    }

    cancelIntent();
    intentTimerRef.current = setTimeout(fireIntent, intentDelay);
  }, [cancelIntent, fireIntent, intentDelay, onIntent]);

  useEffect(() => {
    return cancelIntent;
  }, [cancelIntent]);

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
  const intentHandlers = onIntent
    ? {
        onPointerEnter: scheduleIntent,
        onPointerLeave: cancelIntent,
        onPointerDown: fireIntent,
        onTouchStart: fireIntent,
        onFocus: fireIntent,
      }
    : {};
  const badgeContent = badge ? (
    <span className="ml-auto flex shrink-0 items-center group-data-[mode=collapsed]/sidebar:hidden">
      {badge}
    </span>
  ) : null;

  const body = renderTooltip ? (
    <Provider delayDuration={0}>
      <Root>
        <Trigger asChild>{toSingleTriggerChild(children)}</Trigger>
        <Portal>
          <Content
            side="right"
            sideOffset={12}
            className={cn(
              'z-60 flex w-fit items-center gap-2 rounded px-3 py-2 text-sm shadow-lg whitespace-nowrap',
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
        {...intentHandlers}
        data-active={isActive ? 'true' : undefined}
        onClick={role === 'button' ? undefined : handleClick}
        className={cn(
          navigationOptionVariants({
            className,
            isActive,
            hasBadge: !!badge,
          }),
        )}
      >
        {role === 'button' ? (
          <button
            type="button"
            onClick={handleClick}
            className="flex w-full cursor-pointer items-center gap-2"
          >
            {body}
            {badgeContent}
          </button>
        ) : (
          <>
            {body}
            {badgeContent}
          </>
        )}
      </li>
    </NavigationOptionContext.Provider>
  );
};

NavigationOption.displayName = 'KonstructSidebarNavigationOption';

export { NavigationOption };
