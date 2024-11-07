import { FC } from 'react';

import { Wrapper } from './components/Wrapper';
import { TooltipProps } from './Tooltip.types';
import { TooltipProvider } from './contexts/Tooltip.provider';

export const Tooltip: FC<TooltipProps> = ({ children, ...delegated }) => (
  <TooltipProvider>
    <Wrapper {...delegated}>{children}</Wrapper>
  </TooltipProvider>
);
