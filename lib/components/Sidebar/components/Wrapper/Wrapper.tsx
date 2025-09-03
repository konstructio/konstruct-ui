import {
  Children,
  ComponentRef,
  FC,
  isValidElement,
  useCallback,
  useMemo,
  useRef,
} from 'react';

import { cn } from '@/utils';

import { SidebarProps } from '../../Sidebar.types';
import { dragVariants, wrapperSiderbarVariants } from '../../Sidebar.variants';
import { Footer } from '../Footer/Footer';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';

const Wrapper: FC<SidebarProps> = ({
  canResize = true,
  children,
  maxWith = 300,
  minWith = 240,
  theme,
  wrapperClassName,
}) => {
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

  const memoizedChildren = useMemo(
    () => Children.toArray(children),
    [children],
  );

  const logo = useMemo(
    () =>
      Children.toArray(memoizedChildren).find(
        (child) => isValidElement(child) && child.type === Logo,
      ),
    [memoizedChildren],
  );

  const navigation = useMemo(
    () =>
      Children.toArray(memoizedChildren).find(
        (child) => isValidElement(child) && child.type === Navigation,
      ),
    [memoizedChildren],
  );

  const footer = useMemo(
    () =>
      Children.toArray(memoizedChildren).find(
        (child) => isValidElement(child) && child.type === Footer,
      ),
    [memoizedChildren],
  );

  return (
    <aside
      ref={asideRef}
      className={cn(
        wrapperSiderbarVariants({
          className: wrapperClassName,
        }),
      )}
      data-theme={theme}
    >
      {logo}
      {navigation}
      {footer}

      {canResize && (
        <div
          ref={dragRef}
          className={cn(dragVariants())}
          onMouseDown={handleMouseDown}
        />
      )}
    </aside>
  );
};

Wrapper.displayName = 'Sidebar.Wrapper';

export { Wrapper };
