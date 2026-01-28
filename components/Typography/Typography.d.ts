import { ForwardRefExoticComponent, RefAttributes } from '../../../node_modules/react';
import { TypographyProps } from './Typography.types';
/**
 * A flexible typography component for consistent text styling.
 * Automatically selects semantic HTML elements based on variant.
 *
 * @example
 * ```tsx
 * <Typography variant="h1">Main Heading</Typography>
 * <Typography variant="body1">Paragraph text</Typography>
 * <Typography variant="subtitle1" component="span">Inline text</Typography>
 * <Typography variant="h3" component="label" htmlFor="input">Label</Typography>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-typography--docs Storybook}
 */
declare const Typography: ForwardRefExoticComponent<Omit<TypographyProps, 'ref'> & RefAttributes<HTMLParagraphElement & HTMLHeadingElement & HTMLLabelElement>>;
export { Typography };
