import { FC } from '../../../node_modules/react';
import { StepperProps } from './Stepper.types';
/**
 * A stepper component for displaying multi-step processes.
 * Supports vertical and horizontal orientations with various step states.
 *
 * @example
 * ```tsx
 * // Basic vertical stepper (inline variant - text beside indicator)
 * <Stepper
 *   steps={[
 *     { id: 1, label: 'Select platform', status: 'completed' },
 *     { id: 2, label: 'Set up cluster', status: 'active' },
 *     { id: 3, label: 'Preparing', status: 'pending' },
 *   ]}
 * />
 *
 * // Stacked variant (text below indicator, larger circles)
 * <Stepper
 *   variant="stacked"
 *   steps={[
 *     { id: 1, label: 'Step 1', status: 'completed' },
 *     { id: 2, label: 'Step 2', status: 'active' },
 *     { id: 3, label: 'Step 3', status: 'pending' },
 *   ]}
 * />
 *
 * // Horizontal stepper
 * <Stepper
 *   orientation="horizontal"
 *   steps={[
 *     { id: 1, label: 'Step 1', status: 'completed' },
 *     { id: 2, label: 'Step 2', status: 'active' },
 *     { id: 3, label: 'Step 3', status: 'pending' },
 *   ]}
 * />
 *
 * // Auto-calculated statuses with currentStep
 * <Stepper
 *   steps={[
 *     { id: 1, label: 'Step 1' },
 *     { id: 2, label: 'Step 2' },
 *     { id: 3, label: 'Step 3' },
 *   ]}
 *   currentStep={1}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-stepper--docs Storybook}
 */
export declare const Stepper: FC<StepperProps>;
