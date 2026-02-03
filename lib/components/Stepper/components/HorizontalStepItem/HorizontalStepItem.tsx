import { memo, type FC } from 'react';

import { cn } from '@/utils';

import { useStepItemLogic } from '../../hooks';
import {
  stepContentVariants,
  stepDescriptionVariants,
  stepIndicatorVariants,
  stepLabelVariants,
  stepVariants,
} from '../../Stepper.variants';
import { getStepAriaLabel } from '../../utils';
import { StepConnector } from '../StepConnector/StepConnector';
import { StepIndicatorContent } from '../StepIndicatorContent/StepIndicatorContent';

import type { Props } from './HorizontalStepItem.types';

const HorizontalStepItemBase: FC<Props> = ({
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
  const {
    handleClick,
    handleKeyDown,
    isClickable,
    isDisabled,
    LabelComponent,
    status,
  } = useStepItemLogic({ step, clickable, onClick });

  const isHorizontal = variant === 'horizontal';

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
          {...(isDisabled && { 'aria-disabled': true })}
          aria-label={getStepAriaLabel(index, step.label, status)}
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
        {...(isDisabled && { 'aria-disabled': true })}
        aria-label={getStepAriaLabel(index, step.label, status)}
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

export const HorizontalStepItem = memo(HorizontalStepItemBase);
