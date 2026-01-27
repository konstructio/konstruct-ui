import { AlertCircle, Check } from 'lucide-react';
import type { FC, KeyboardEvent, ReactNode } from 'react';

import { cn } from '@/utils';

import type {
  StepConnectorProps,
  StepIndicatorContentProps,
  StepItemProps,
  StepperProps,
} from './Stepper.types';
import {
  horizontalConnectorWrapperVariants,
  stepConnectorVariants,
  stepContentVariants,
  stepDescriptionVariants,
  stepIndicatorVariants,
  stepItemVariants,
  stepLabelVariants,
  stepListVariants,
  stepperVariants,
  stepVariants,
} from './Stepper.variants';

const StepIndicatorContent: FC<StepIndicatorContentProps> = ({
  index,
  status,
}) => {
  if (status === 'completed') {
    return <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />;
  }

  if (status === 'error') {
    return (
      <AlertCircle className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
    );
  }

  return <span aria-hidden="true">{index + 1}</span>;
};

const StepConnector: FC<StepConnectorProps> = ({
  className,
  orientation,
  size,
  status,
}) => (
  <div
    className={cn(
      stepConnectorVariants({
        orientation,
        status: status === 'completed' ? 'completed' : 'pending',
        size,
      }),
      className,
    )}
    role="presentation"
    aria-hidden="true"
  />
);

const VerticalStepItem: FC<StepItemProps> = ({
  classNames,
  clickable,
  index,
  isLast,
  showConnector,
  size,
  step,
  onClick,
}) => {
  const status = step.status ?? 'pending';

  const handleClick = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (clickable && onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  const stepContent: ReactNode = (
    <>
      <div
        className={cn(
          stepIndicatorVariants({ status, size }),
          classNames?.indicator,
        )}
        aria-hidden="true"
      >
        <StepIndicatorContent status={status} index={index} />
      </div>
      <div
        className={cn(
          stepContentVariants({ orientation: 'vertical' }),
          classNames?.content,
        )}
      >
        <span
          className={cn(
            stepLabelVariants({ status, size, orientation: 'vertical' }),
            classNames?.label,
          )}
        >
          {step.label}
        </span>
        {step.description && (
          <span
            className={cn(
              stepDescriptionVariants({
                status,
                size,
                orientation: 'vertical',
              }),
              classNames?.description,
            )}
          >
            {step.description}
          </span>
        )}
      </div>
    </>
  );

  return (
    <div className="flex flex-col">
      <div
        className={cn(
          stepVariants({ orientation: 'vertical', clickable }),
          classNames?.stepWrapper,
        )}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-current={status === 'active' ? 'step' : undefined}
        aria-label={`Step ${index + 1}: ${step.label}${status === 'completed' ? ', completed' : status === 'active' ? ', current' : status === 'error' ? ', error' : ''}`}
      >
        {stepContent}
      </div>
      {!isLast && showConnector && (
        <StepConnector
          orientation="vertical"
          status={status}
          size={size}
          className={classNames?.connector}
        />
      )}
    </div>
  );
};

const HorizontalStepItem: FC<StepItemProps> = ({
  classNames,
  clickable,
  index,
  isLast,
  showConnector,
  size,
  step,
  onClick,
}) => {
  const status = step.status ?? 'pending';

  const handleClick = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (clickable && onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div className="flex flex-1 items-start">
      <div
        className={cn(
          stepVariants({ orientation: 'horizontal', clickable }),
          classNames?.stepWrapper,
        )}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-current={status === 'active' ? 'step' : undefined}
        aria-label={`Step ${index + 1}: ${step.label}${status === 'completed' ? ', completed' : status === 'active' ? ', current' : status === 'error' ? ', error' : ''}`}
      >
        <div
          className={cn(
            stepIndicatorVariants({ status, size }),
            classNames?.indicator,
          )}
          aria-hidden="true"
        >
          <StepIndicatorContent status={status} index={index} />
        </div>
        <div
          className={cn(
            stepContentVariants({ orientation: 'horizontal' }),
            classNames?.content,
          )}
        >
          <span
            className={cn(
              stepLabelVariants({ status, size, orientation: 'horizontal' }),
              classNames?.label,
            )}
          >
            {step.label}
          </span>
          {step.description && (
            <span
              className={cn(
                stepDescriptionVariants({
                  status,
                  size,
                  orientation: 'horizontal',
                }),
                classNames?.description,
              )}
            >
              {step.description}
            </span>
          )}
        </div>
      </div>
      {!isLast && showConnector && (
        <div className={cn(horizontalConnectorWrapperVariants({ size }))}>
          <StepConnector
            orientation="horizontal"
            status={status}
            size={size}
            className={classNames?.connector}
          />
        </div>
      )}
    </div>
  );
};

const StepItem: FC<StepItemProps> = (props) => {
  if (props.orientation === 'horizontal') {
    return <HorizontalStepItem {...props} />;
  }
  return <VerticalStepItem {...props} />;
};

/**
 * A stepper component for displaying multi-step processes.
 * Supports vertical and horizontal orientations with various step states.
 *
 * @example
 * ```tsx
 * // Basic vertical stepper
 * <Stepper
 *   steps={[
 *     { id: 1, label: 'Select platform', status: 'completed' },
 *     { id: 2, label: 'Set up cluster', status: 'active' },
 *     { id: 3, label: 'Preparing', status: 'pending' },
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
 *
 * // With custom class names
 * <Stepper
 *   steps={steps}
 *   classNames={{
 *     root: 'my-custom-root',
 *     indicator: 'my-custom-indicator',
 *     label: 'my-custom-label',
 *   }}
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
  orientation = 'vertical',
  showConnector = true,
  size = 'default',
  steps,
  theme,
  onStepClick,
}) => {
  const resolvedOrientation = orientation ?? 'vertical';
  const resolvedSize = size ?? 'default';

  const stepsWithStatus = steps.map((step, index) => {
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
  });

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
              classNames={classNames}
            />
          </li>
        ))}
      </ol>
    </nav>
  );
};
