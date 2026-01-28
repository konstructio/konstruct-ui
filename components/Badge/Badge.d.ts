import { FC } from '../../../node_modules/react';
import { BadgeProps } from './Badge.types';
/**
 * A badge/tag component for status indicators and labels.
 * Supports multiple variants, icons, loading state, and dismissible mode.
 *
 * @example
 * ```tsx
 * // Basic badge
 * <Badge label="Active" variant="success" />
 *
 * // Badge with icon
 * <Badge label="Settings" leftIcon={<SettingsIcon />} />
 *
 * // Dismissible badge
 * <Badge
 *   label="Tag"
 *   dismissible
 *   onDismiss={() => removeTag()}
 * />
 *
 * // Clickable badge
 * <Badge
 *   label="Filter"
 *   onClick={() => applyFilter()}
 * />
 *
 * // Loading badge
 * <Badge label="Processing" loading />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-badge--docs Storybook}
 */
export declare const Badge: FC<BadgeProps>;
