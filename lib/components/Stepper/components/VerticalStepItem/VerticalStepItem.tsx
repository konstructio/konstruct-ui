import { Slot } from '@radix-ui/react-slot';
import type { FC, KeyboardEvent } from 'react';

import { cn } from '@/utils';

import {
  stepContentVariants,
  stepDescriptionVariants,
  stepIndicatorVariants,
  stepLabelVariants,
  stepVariants,
} from '../../Stepper.variants';
import { StepConnector } from '../StepConnector/StepConnector';
import { StepIndicatorContent } from '../StepIndicatorContent/StepIndicatorContent';

import type { Props } from './VerticalStepItem.types';

export const VerticalStepItem: FC<Props> = ({
  classNames,
  clickable,
  icons,
  index,
  isLast,
  showConnector,
  size,
  step,
  variant,
  onClick,
}) => {
  const status = step.status ?? 'pending';
  const isDisabled = step.disabled || status === 'active';
  const hasCallback = Boolean(step.onClick || onClick);
  const isClickable = clickable && !isDisabled && hasCallback;
  const LabelComponent = typeof step.label === 'string' ? 'span' : Slot;

  const handleClick = () => {
    if (!isClickable) return;
    if (step.onClick) {
      step.onClick();
    } else if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isClickable) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  const wrapperClass =
    variant === 'stacked' ? 'flex flex-col items-center' : 'flex flex-col';

  return (
    <div className={wrapperClass}>
      <div
        className={cn(
          stepVariants({
            orientation: 'vertical',
            variant,
            clickable: isClickable,
          }),
          classNames?.stepWrapper,
        )}
        role={isClickable ? 'button' : undefined}
        tabIndex={isClickable ? 0 : undefined}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-current={status === 'active' ? 'step' : undefined}
        aria-disabled={isDisabled || undefined}
        aria-label={`Step ${index + 1}${typeof step.label === 'string' ? `: ${step.label}` : ''}${status === 'completed' ? ', completed' : status === 'active' ? ', current' : status === 'error' ? ', error' : ''}`}
      >
        <div
          className={cn(
            stepIndicatorVariants({ status, size }),
            classNames?.indicator,
          )}
          aria-hidden="true"
        >
          <StepIndicatorContent
            status={status}
            index={index}
            size={size}
            icons={icons}
            className={classNames?.indicatorContent}
          />
        </div>
        <div
          className={cn(stepContentVariants({ variant }), classNames?.content)}
        >
          {step.label && (
            <LabelComponent
              className={cn(
                stepLabelVariants({ status, size, variant }),
                classNames?.label,
              )}
            >
              {step.label}
            </LabelComponent>
          )}
          {step.description && (
            <span
              className={cn(
                stepDescriptionVariants({ status, size, variant }),
                classNames?.description,
              )}
            >
              {step.description}
            </span>
          )}
        </div>
      </div>
      {!isLast && showConnector && (
        <StepConnector
          orientation="vertical"
          status={status}
          size={size}
          variant={variant}
          className={classNames?.connector}
        />
      )}
    </div>
  );
};
