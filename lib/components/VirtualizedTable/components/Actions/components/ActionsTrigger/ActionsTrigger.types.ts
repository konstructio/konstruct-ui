import { ComponentProps } from 'react';

import { Button } from '@/components/Button/Button';

export type Props = Omit<ComponentProps<typeof Button>, 'ref'> & {
  iconClassName?: string;
  isOpen?: boolean;
};
