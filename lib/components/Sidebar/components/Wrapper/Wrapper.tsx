import {
  ComponentRef,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Drawer } from '@/components/Drawer/Drawer';
import { cn } from '@/utils';

import { SidebarContext, SidebarMode } from '../../contexts';
import { useSidebarMode } from '../../hooks';
import { Props } from '../../Sidebar.types';
import { dragVariants, wrapperSiderbarVariants } from '../../Sidebar.variants';
import { HamburgerTrigger } from '../HamburgerTrigger/HamburgerTrigger';

const DRAWER_DEFAULT_MAX_WIDTH = 280;

const Wrapper: FC<Props> = ({
  animateOnHover = true,
  canResize = true,
  children,
  dividerClassName,
  drawerBreakpoint,
  drawerClassNames,
  drawerMaxWidth = DRAWER_DEFAULT_MAX_WIDTH,
  expandedBreakpoint,
  expandOnHover = true,
  initialMode,
  initialWidth = 256,
  maxWith = 300,
  minWith = 240,
  mode = 'auto',
  separatorClassName,
  style,
  theme,
  triggerClassName,
  openNavigationLabel,
  wrapperClassName,
}) => {
  const resolvedMode = useSidebarMode(
    mode,
    expandedBreakpoint,
    drawerBreakpoint,
    initialMode,
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState<number | null>(null);
  // User-driven expand/collapse override (set via `toggleMode`, e.g. the
  // CollapseTrigger). Wins over the viewport-derived mode until the
  // viewport crosses a breakpoint, then resets so `auto` stays in charge.
  const [modeOverride, setModeOverride] = useState<Exclude<
    SidebarMode,
    'drawer'
  > | null>(null);
  const effectiveMode: SidebarMode =
    resolvedMode === 'drawer' ? 'drawer' : (modeOverride ?? resolvedMode);

  const dragRef = useRef<ComponentRef<'div'>>(null);
  const asideRef = useRef<ComponentRef<'aside'>>(null);
  const isResizingRef = useRef(false);
  const hasAppliedInitialWidthRef = useRef(false);

  useEffect(() => {
    if (resolvedMode !== 'drawer') {
      return;
    }

    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth);
    };

    updateViewportWidth();
    window.addEventListener('resize', updateViewportWidth);

    return () => {
      window.removeEventListener('resize', updateViewportWidth);
    };
  }, [resolvedMode]);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!isResizingRef.current) {
        if (dragRef.current) {
          dragRef.current.style.opacity = '0';
        }

        return;
      }

      let newWidth = event.clientX;

      if (newWidth < minWith) {
        newWidth = minWith;
      }

      if (newWidth > maxWith) {
        newWidth = maxWith;
      }

      if (asideRef.current && dragRef.current) {
        asideRef.current.style.width = `${newWidth}px`;
        dragRef.current.classList.add('opacity-100');
      }
    },
    [maxWith, minWith],
  );

  const handleMouseUp = useCallback(() => {
    isResizingRef.current = false;

    if (dragRef.current) {
      dragRef.current.classList.remove('opacity-100');
    }

    if (asideRef.current) {
      asideRef.current.classList.remove('transition-none');
    }

    document.body.style.userSelect = '';
    document.body.style.cursor = '';

    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove]);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;

    if (asideRef.current) {
      asideRef.current.classList.add('transition-none');
    }

    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'col-resize';

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    if (effectiveMode !== 'expanded' && asideRef.current) {
      asideRef.current.style.width = '';
    }
  }, [effectiveMode]);

  useEffect(() => {
    if (resolvedMode !== 'drawer') {
      setIsDrawerOpen(false);
    }

    setModeOverride(null);
  }, [resolvedMode]);

  useEffect(() => {
    if (
      hasAppliedInitialWidthRef.current ||
      effectiveMode !== 'expanded' ||
      !asideRef.current
    ) {
      return;
    }

    const clamped = Math.min(Math.max(initialWidth, minWith), maxWith);
    asideRef.current.style.width = `${clamped}px`;
    hasAppliedInitialWidthRef.current = true;
  }, [initialWidth, maxWith, minWith, effectiveMode]);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const handleToggleMode = useCallback(() => {
    setModeOverride((current) => {
      const base = current ?? resolvedMode;

      return base === 'collapsed' ? 'expanded' : 'collapsed';
    });
  }, [resolvedMode]);

  if (resolvedMode === 'drawer') {
    const drawerWidth =
      viewportWidth !== null
        ? Math.min(viewportWidth, drawerMaxWidth)
        : drawerMaxWidth;

    return (
      <>
        <HamburgerTrigger
          isOpen={isDrawerOpen}
          onClick={handleOpenDrawer}
          className={triggerClassName}
          openNavigationLabel={openNavigationLabel}
        />
        <Drawer
          isOpen={isDrawerOpen}
          onClose={handleCloseDrawer}
          position="left"
          defaultWidth={drawerWidth}
          theme={theme}
          classNames={{
            ...drawerClassNames,
            root: cn('z-60', drawerClassNames?.root),
            panel: cn(
              wrapperSiderbarVariants({ mode: 'expanded' }),
              'h-full border-r-0',
              wrapperClassName,
              drawerClassNames?.panel,
            ),
            content: cn('gap-0', drawerClassNames?.content),
          }}
        >
          <SidebarContext.Provider
            value={{
              mode: 'expanded',
              isCollapsed: false,
              expandOnHover: false,
              animateOnHover: false,
              separatorClassName,
              closeDrawer: handleCloseDrawer,
              canToggle: false,
              toggleMode: () => {},
            }}
          >
            <div
              className="konstruct-sidebar group/sidebar flex flex-col flex-1 min-h-0"
              data-mode="expanded"
              style={style}
            >
              {children}
            </div>
          </SidebarContext.Provider>
        </Drawer>
      </>
    );
  }

  const asideMode: Exclude<SidebarMode, 'drawer'> =
    modeOverride ?? resolvedMode;
  const showResizeHandle = canResize && asideMode === 'expanded';
  const contextValue = {
    mode: asideMode,
    isCollapsed: asideMode === 'collapsed',
    expandOnHover,
    animateOnHover,
    separatorClassName,
    closeDrawer: handleCloseDrawer,
    canToggle: true,
    toggleMode: handleToggleMode,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      <aside
        ref={asideRef}
        className={cn(
          'konstruct-sidebar',
          wrapperSiderbarVariants({
            mode: asideMode,
            className: wrapperClassName,
          }),
        )}
        data-theme={theme}
        data-mode={asideMode}
        style={style}
      >
        {children}

        {showResizeHandle && (
          <div
            ref={dragRef}
            className={cn(dragVariants({ className: dividerClassName }))}
            onMouseDown={handleMouseDown}
          />
        )}
      </aside>
    </SidebarContext.Provider>
  );
};

Wrapper.displayName = 'Sidebar.Wrapper';

export { Wrapper };
