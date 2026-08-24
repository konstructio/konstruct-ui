import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  component?: 'div' | 'hr' | 'li';
};
