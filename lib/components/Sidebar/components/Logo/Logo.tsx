import { FC } from 'react';

import { LogoProps } from './Logo.types';

export const Logo: FC<LogoProps> = ({ children }) => {
  return <header className="text-white">{children}</header>;
};
