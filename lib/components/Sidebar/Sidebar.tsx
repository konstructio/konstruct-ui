import {
  Children,
  ComponentRef,
  FC,
  isValidElement,
  useCallback,
  useMemo,
  useRef,
} from 'react';

import { useTheme } from '../../contexts';
import { cn } from '../../utils';

import {
  Footer,
  FooterProps,
  Logo,
  LogoProps,
  Navigation,
  NavigationProps,
} from './components';
import { SidebarProps } from './Sidebar.types';
import { dragVariants, wrapperSiderbarVariants } from './Sidebar.variants';

const Sidebar: FC<SidebarProps> & {
  Logo: FC<LogoProps>;
  Navigation: FC<NavigationProps>;
  Footer: FC<FooterProps>;
} = ({ wrapperClassName, theme, children, minWith = 240, maxWith = 300 }) => {
  const dragRef = useRef<ComponentRef<'div'>>(null);
  const asideRef = useRef<ComponentRef<'aside'>>(null);
  const isResizingRef = useRef(false);
  const { theme: contextTheme } = useTheme();
  const selectedTheme = theme ?? contextTheme;

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
        (child) => isValidElement(child) && child.type === Sidebar.Logo,
      ),
    [memoizedChildren],
  );

  const navigation = useMemo(
    () =>
      Children.toArray(memoizedChildren).find(
        (child) => isValidElement(child) && child.type === Sidebar.Navigation,
      ),
    [memoizedChildren],
  );

  const footer = useMemo(
    () =>
      Children.toArray(memoizedChildren).find(
        (child) => isValidElement(child) && child.type === Sidebar.Footer,
      ),
    [memoizedChildren],
  );

  return (
    <aside
      ref={asideRef}
      className={cn(
        wrapperSiderbarVariants({
          className: wrapperClassName,
          theme: selectedTheme,
        }),
      )}
    >
      {logo}
      {navigation}
      {footer}

      <div
        ref={dragRef}
        className={cn(dragVariants({ theme: selectedTheme }))}
        onMouseDown={handleMouseDown}
      />
    </aside>
  );
};

Sidebar.Logo = Logo;
Sidebar.Navigation = Navigation;
Sidebar.Footer = Footer;

export { Logo, Sidebar };
