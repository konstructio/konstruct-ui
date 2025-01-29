import { FC, forwardRef } from 'react';

import { useTheme } from '../../contexts';
import { cn } from '../../utils';

import { cardBaseVariants, cardVariants } from './Card.variants';
import { CardProps } from './Card.types';

const Card: FC<CardProps> = forwardRef<HTMLDivElement, CardProps>(
  (
    { className, theme, isActive, canHover, wrapperClassName, ...props },
    ref,
  ) => {
    const { theme: contextTheme } = useTheme();

    return (
      <div
        className={cn(
          cardBaseVariants({
            canHover,
            className: wrapperClassName,
            isActive,
            theme: theme ?? contextTheme,
          }),
        )}
      >
        <div
          ref={ref}
          className={cn(
            cardVariants({
              className,
              theme: theme ?? contextTheme,
              isActive,
              canHover,
            }),
          )}
          {...props}
        />
      </div>
    );
  },
);

Card.displayName = 'Card';

export { Card };
