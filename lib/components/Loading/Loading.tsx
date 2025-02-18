import { FunctionComponent, useId } from 'react';

import { useTheme } from '../../contexts';
import { LoadingProps } from './Loading.types';
import { loadingVariants } from './Loading.variants';
import Circle from '@/assets/icons/circle.svg';

const Loading: FunctionComponent<LoadingProps> = ({
  className,
  theme,
  ...delegated
}) => {
  const id = useId();
  const { theme: themeContext } = useTheme();

  return (
    <Circle
      id={id}
      className={loadingVariants({
        className,
        theme: theme ?? themeContext,
      })}
      {...delegated}
    />
  );
};

Loading.displayName = 'Loading';

export { Loading };
