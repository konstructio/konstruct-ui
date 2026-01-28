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

import type { Props } from './HorizontalStepItem.types';

export const HorizontalStepItem: FC<Props> = ({
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
  const isHorizontal = variant === 'horizontal';
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

  // For horizontal variant - inline layout with connector to the right
  if (isHorizontal) {
    return (
      <div className="flex items-center">
        <div
          className={cn(
            stepVariants({
              orientation: 'horizontal',
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
            className={cn(
              stepContentVariants({ variant }),
              classNames?.content,
            )}
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
          <div
            className={cn(
              'h-0.5 w-7.5 mx-2 transition-colors duration-200',
              status === 'completed' || status === 'active'
                ? 'bg-aurora-500'
                : status === 'error'
                  ? 'bg-red-700 dark:bg-red-600'
                  : 'bg-slate-300 dark:bg-metal-400',
              classNames?.connector,
            )}
            role="presentation"
            aria-hidden="true"
          />
        )}
      </div>
    );
  }

  // For stacked variant - vertical layout with connector below
  return (
    <div className="flex flex-1 items-start">
      <div
        className={cn(
          stepVariants({
            orientation: 'horizontal',
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
          orientation="horizontal"
          status={status}
          size={size}
          variant={variant}
          className={cn('mt-6.5', classNames?.connector)}
        />
      )}
    </div>
  );
};
