import { FC } from 'react';

import { useTheme } from '../../contexts';
import { cn } from '../../utils';

import { Footer, Logo, Navigation } from './components';
import { SidebarProps } from './Sidebar.types';
import { wrapperSiderbarVariants } from './Sidebar.variants';

export const Sidebar: FC<SidebarProps> = ({ wrapperClassName, theme }) => {
  const { theme: contextTheme } = useTheme();
  const selectedTheme = theme ?? contextTheme;

  return (
    <aside
      className={cn(
        wrapperSiderbarVariants({
          className: wrapperClassName,
          theme: selectedTheme,
        }),
      )}
    >
      <Logo theme={selectedTheme} />
      <Navigation theme={selectedTheme} />
      <Footer theme={selectedTheme} />
    </aside>
  );
};
