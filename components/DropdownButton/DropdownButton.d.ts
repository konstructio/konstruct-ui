import { FC } from '../../../node_modules/react';
import { Props } from './DropdownButton.types';
/**
 * A button with an attached dropdown menu for selecting actions.
 * Closes automatically on outside click, Escape key, or tab visibility change.
 *
 * @example
 * ```tsx
 * <DropdownButton
 *   options={[
 *     { label: 'Download PDF', onClick: handlePdf },
 *     { label: 'Download CSV', onClick: handleCsv },
 *   ]}
 *   buttonClassName="w-64"
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-dropdownbutton--docs Storybook}
 */
export declare const DropdownButton: FC<Props>;
