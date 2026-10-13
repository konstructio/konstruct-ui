import { FC } from '../../../node_modules/react';
import { Props } from './Tooltip.types';
/**
 * A tooltip component that shows on hover.
 * Built on Radix UI for accessible, well-positioned tooltips.
 *
 * @example
 * ```tsx
 * <Tooltip content="Click to save">
 *   <Button>Save</Button>
 * </Tooltip>
 *
 * <Tooltip content="More information" side="bottom">
 *   <InfoIcon />
 * </Tooltip>
 *
 * <Tooltip content="Danger!" bgClassName="bg-red-500">
 *   <Button variant="danger">Delete</Button>
 * </Tooltip>
 *
 * <Tooltip content="This name is taken" asOverlay overlayClassName="right-0 top-7 h-10 w-8">
 *   <Input label="Name" />
 * </Tooltip>
 * ```
 */
export declare const Tooltip: FC<Props>;
