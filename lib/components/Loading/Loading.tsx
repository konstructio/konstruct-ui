import { FC } from 'react';
import { LoaderCircle } from 'lucide-react';

import { cn } from '@/utils';

import { LoadingProps } from './Loading.types';
import { loadingVariants } from './Loading.variants';

const Loading: FC<LoadingProps> = ({ className, theme, ...delegated }) => (
  <LoaderCircle
    data-theme={theme}
    className={cn(
      loadingVariants({
        className,
      }),
    )}
    {...delegated}
  />
);

Loading.displayName = 'Loading';

export { Loading };
