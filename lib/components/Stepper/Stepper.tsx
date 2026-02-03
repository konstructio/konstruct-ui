import { useMemo, type FC } from 'react';

import { cn } from '@/utils';

import { StepItem } from './components/StepItem/StepItem';
import type { StepperProps } from './Stepper.types';
import {
  stepItemVariants,
  stepListVariants,
  stepperVariants,
} from './Stepper.variants';

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
export const Stepper: FC<StepperProps> = ({
  className,
  classNames,
  clickable = false,
  currentStep,
  icons,
  orientation = 'vertical',
  showConnector = true,
  size = 'sm',
  steps,
  theme,
  variant = 'inline',
  onStepClick,
}) => {
  const resolvedVariant = variant ?? 'inline';
  // Horizontal variant always uses horizontal orientation
  const resolvedOrientation =
    resolvedVariant === 'horizontal'
      ? 'horizontal'
      : (orientation ?? 'vertical');
  const resolvedSize = size ?? 'sm';

  const stepsWithStatus = useMemo(
    () =>
      steps.map((step, index) => {
        if (step.status) {
          return step;
        }

        if (currentStep !== undefined) {
          if (index < currentStep) {
            return { ...step, status: 'completed' as const };
          }
          if (index === currentStep) {
            return { ...step, status: 'active' as const };
          }
          return { ...step, status: 'pending' as const };
        }

        return { ...step, status: 'pending' as const };
      }),
    [steps, currentStep],
  );

  return (
    <nav
      className={cn(
        stepperVariants({ orientation: resolvedOrientation }),
        className,
        classNames?.root,
      )}
      data-theme={theme}
      aria-label="Progress steps"
    >
      <ol
        className={cn(
          stepListVariants({ orientation: resolvedOrientation }),
          classNames?.list,
        )}
      >
        {stepsWithStatus.map((step, index) => (
          <li
            key={step.id}
            className={cn(
              stepItemVariants({ orientation: resolvedOrientation }),
              classNames?.item,
            )}
          >
            <StepItem
              step={step}
              index={index}
              isLast={index === stepsWithStatus.length - 1}
              orientation={resolvedOrientation}
              clickable={clickable ?? false}
              onClick={() => onStepClick?.(step, index)}
              size={resolvedSize}
              showConnector={showConnector ?? true}
              nextStepStatus={stepsWithStatus[index + 1]?.status}
              variant={resolvedVariant}
              classNames={classNames}
              icons={icons}
            />
          </li>
        ))}
      </ol>
    </nav>
  );
};
