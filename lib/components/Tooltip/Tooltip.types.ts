import { ReactNode } from 'react';

/**
 * Props for the Tooltip component.
 *
 * @example
 * ```tsx
 * <Tooltip content="Click to edit">
 *   <Button>Edit</Button>
 * </Tooltip>
 *
 * <Tooltip content="More info here" side="bottom">
 *   <InfoIcon />
 * </Tooltip>
 *
 * <Tooltip content="Danger!" bgClassName="bg-red-500">
 *   <Button variant="danger">Delete</Button>
 * </Tooltip>
 * ```
 */
export interface TooltipProps {
  /** Tooltip text or content */
  content: ReactNode | string;
  /** The trigger element */
  children: ReactNode;
  /** Tooltip position relative to trigger */
  side?: 'top' | 'bottom' | 'left' | 'right';
  /** Distance from trigger in px */
  sideOffset?: number;
  /** Background color class for tooltip and arrow (e.g. 'bg-slate-700', 'bg-red-500') */
  bgClassName?: string;
  /** Text color class (e.g. 'text-white') */
  textClassName?: string;
  /** Additional className for tooltip content */
  className?: string;
  /** Delay before showing tooltip in ms */
  delayDuration?: number;
}
