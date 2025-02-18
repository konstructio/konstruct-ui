import { FunctionComponent, HTMLAttributes } from 'react';

import { dividerVariants } from './Divider.variants';

const Divider: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...delegated
}) => {
  return <div className={dividerVariants({ className })} {...delegated} />;
};

Divider.displayName = 'Divider';

export { Divider };
