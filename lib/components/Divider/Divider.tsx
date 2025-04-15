import { FC, HTMLAttributes } from 'react';

import { dividerVariants } from './Divider.variants';

const Divider: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...delegated
}) => <div className={dividerVariants({ className })} {...delegated} />;

Divider.displayName = 'Divider';

export { Divider };
