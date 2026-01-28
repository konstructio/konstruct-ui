import { FC } from '../../../node_modules/react';
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
declare const Card: FC<CardProps>;
export { Card };
