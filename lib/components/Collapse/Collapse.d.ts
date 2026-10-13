import { FC } from '../../../node_modules/react';
import { Props } from './Collapse.types';
/**
 * Animates its children between a collapsed and an expanded height,
 * respecting `prefers-reduced-motion`. Overflow is only clipped while the
 * animation runs, so dropdowns or tooltips inside the content are never cut.
 *
 * @example
 * ```tsx
 * <Button aria-expanded={isOpen} aria-controls="advanced" onClick={toggle}>
 *   Advanced options
 * </Button>
 * <Collapse id="advanced" isOpen={isOpen} keepMounted>
 *   <AdvancedOptions />
 * </Collapse>
 * ```
 */
declare const Collapse: FC<Props>;
export { Collapse };
