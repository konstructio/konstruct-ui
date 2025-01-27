import { FC, forwardRef } from 'react';

import { useTheme } from '../../contexts';

import { cardBaseVariants, cardVariants } from './Card.variants';
import { CardProps } from './Card.types';

const Card: FC<CardProps> = forwardRef<HTMLDivElement, CardProps>(
  ({ className, theme, isActive, canHover, ...props }, ref) => {
    const { theme: contextTheme } = useTheme();

    return (
      <div
        className={cardBaseVariants({
          theme: theme ?? contextTheme,
          isActive,
          canHover,
        })}
      >
        <div
          ref={ref}
          className={cardVariants({
            className,
            theme: theme ?? contextTheme,
            isActive,
            canHover,
          })}
          {...props}
        />
      </div>
    );
  },
);

Card.displayName = 'Card';

export { Card };
