import { FC } from '../../../node_modules/react';
import { Props } from './DropdownButton.types';
/**
 * A button with an attached dropdown menu for selecting actions.
 * Built on Radix DropdownMenu: closes on outside click or Escape, and
 * supports full keyboard navigation.
 *
 * @example
 * ```tsx
 * <DropdownButton
 *   label="Download Invoice as"
 *   options={[
 *     { label: 'PDF', onClick: () => downloadPdf() },
 *     { label: 'CSV', onClick: () => downloadCsv() },
 *   ]}
 * />
 * ```
 */
export declare const DropdownButton: FC<Props>;
