import { FC } from '../../../node_modules/react';
import { Props } from './BadgeGroup.types';
/**
 * Renders a row of badges and collapses the ones that do not fit into a
 * "+N" badge whose tooltip lists the hidden labels. Limit by count with
 * `maxVisible` or by available width with `maxWidth`.
 *
 * @example
 * ```tsx
 * <BadgeGroup items={tags} maxVisible={3} />
 * <BadgeGroup items={regions} maxWidth={240} variant="info" />
 * ```
 */
declare const BadgeGroup: FC<Props>;
export { BadgeGroup };
