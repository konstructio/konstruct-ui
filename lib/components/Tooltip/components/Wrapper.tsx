import { FC, PropsWithChildren } from 'react';
import { Slot } from '@radix-ui/react-slot';

// import { useTooltip } from '../hooks/useTooltip';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  // const context = useTooltip();

  return <Slot className="bg-red-500">{children}</Slot>;
};
