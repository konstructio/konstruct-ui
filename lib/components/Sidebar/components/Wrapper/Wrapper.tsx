import { ComponentRef, FC, useCallback, useRef, useState } from 'react';

import { Drawer } from '@/components/Drawer/Drawer';
import { cn } from '@/utils';

import { SidebarContext, SidebarMode } from '../../contexts';
import { useSidebarMode } from '../../hooks';
import { SidebarProps } from '../../Sidebar.types';
import { dragVariants, wrapperSiderbarVariants } from '../../Sidebar.variants';
import { HamburgerTrigger } from '../HamburgerTrigger/HamburgerTrigger';

const DRAWER_DEFAULT_WIDTH = 280;

const Wrapper: FC<SidebarProps> = ({
  canResize = true,
  children,
  dividerClassName,
  maxWith = 300,
  minWith = 240,
  mode = 'auto',
  theme,
  wrapperClassName,
}) => {
  const resolvedMode = useSidebarMode(mode);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const dragRef = useRef<ComponentRef<'div'>>(null);
  const asideRef = useRef<ComponentRef<'aside'>>(null);
  const isResizingRef = useRef(false);

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

    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove]);

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();

      isResizingRef.current = true;
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    },
    [handleMouseMove, handleMouseUp],
  );

  const handleOpenDrawer = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  if (resolvedMode === 'drawer') {
    return (
      <>
        <HamburgerTrigger isOpen={isDrawerOpen} onClick={handleOpenDrawer} />
        <Drawer
          isOpen={isDrawerOpen}
          onClose={handleCloseDrawer}
          position="left"
          defaultWidth={DRAWER_DEFAULT_WIDTH}
          theme={theme}
          classNames={{
            panel: cn(
              wrapperSiderbarVariants({ mode: 'expanded' }),
              'h-full w-full',
              wrapperClassName,
            ),
            content: 'gap-0',
          }}
        >
          <SidebarContext.Provider
            value={{ mode: 'expanded', isCollapsed: false }}
          >
            <div
              className="group/sidebar flex flex-col flex-1 min-h-0"
              data-mode="expanded"
            >
              {children}
            </div>
          </SidebarContext.Provider>
        </Drawer>
      </>
    );
  }

  const asideMode: Exclude<SidebarMode, 'drawer'> = resolvedMode;
  const showResizeHandle = canResize && asideMode === 'expanded';
  const contextValue = {
    mode: asideMode,
    isCollapsed: asideMode === 'collapsed',
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      <aside
        ref={asideRef}
        className={cn(
          wrapperSiderbarVariants({
            mode: asideMode,
            className: wrapperClassName,
          }),
        )}
        data-theme={theme}
        data-mode={asideMode}
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
