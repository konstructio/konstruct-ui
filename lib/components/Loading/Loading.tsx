import { FunctionComponent } from 'react';
import { LoaderCircle } from 'lucide-react';

import { useTheme } from '@/contexts';
import { cn } from '@/utils';

import { LoadingProps } from './Loading.types';
import { loadingVariants } from './Loading.variants';

const Loading: FunctionComponent<LoadingProps> = ({
  className,
  theme,
  ...delegated
}) => {
  const { theme: themeContext } = useTheme();

  return (
    <LoaderCircle
      className={cn(
        loadingVariants({
          className,
          theme: theme ?? themeContext,
        }),
      )}
      {...delegated}
    />
  );
};

Loading.displayName = 'Loading';

export { Loading };
