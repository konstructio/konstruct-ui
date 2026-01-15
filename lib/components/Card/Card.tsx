import { FC, forwardRef } from 'react';

import { cn } from '../../utils';

import { cardBaseVariants, cardVariants } from './Card.variants';
import { CardProps } from './Card.types';

/**
 * A container card component with optional hover and active states.
 *
 * @example
 * ```tsx
 * // Basic card
 * <Card>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 *
 * // Hoverable card
 * <Card canHover onClick={handleClick}>
 *   Hover to see effect
 * </Card>
 *
 * // Active/selected card
 * <Card isActive>
 *   This card is selected
 * </Card>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-card--docs Storybook}
 */
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
