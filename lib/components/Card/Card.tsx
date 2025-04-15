import { FC, forwardRef } from 'react';

import { cn } from '../../utils';

import { cardBaseVariants, cardVariants } from './Card.variants';
import { CardProps } from './Card.types';

const Card: FC<CardProps> = forwardRef<HTMLDivElement, CardProps>(
  (
    { className, theme, isActive, canHover, wrapperClassName, ...props },
    ref,
  ) => (
    <div
      data-theme={theme}
      className={cn(
        cardBaseVariants({
          canHover,
          className: wrapperClassName,
          isActive,
        }),
      )}
    >
      <div
        ref={ref}
        className={cn(
          cardVariants({
            className,
            isActive,
            canHover,
          }),
        )}
        {...props}
      />
    </div>
  ),
);

Card.displayName = 'Card';

export { Card };
