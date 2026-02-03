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

import type { Props } from './VerticalStepItem.types';

const VerticalStepItemBase: FC<Props> = ({
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
    isClickable,
    isDisabled,
    LabelComponent,
    status,
    handleClick,
    handleKeyDown,
  } = useStepItemLogic({ clickable, step, onClick });

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

export const VerticalStepItem = memo(VerticalStepItemBase);
