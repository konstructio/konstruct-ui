'use client';
import {
  ComponentRef,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { X } from 'react-feather';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { cn } from '@/utils';
import {
  CheckCircleFilledIcon,
  ErrorIcon,
  InfoCircleIcon,
  WarningTriangleIcon,
} from '@/assets/icons/components';

import { Props } from './Alert.types';
import {
  alertVariants,
  closeButtonVariants,
  descriptionVariants,
  iconVariants,
  titleVariants,
} from './Alert.variants';

const ICON_MAP = {
  success: CheckCircleFilledIcon,
  info: InfoCircleIcon,
  warning: WarningTriangleIcon,
  danger: ErrorIcon,
} as const;

/**
 * An alert component for displaying feedback messages.
 * Supports success, info, warning, and danger variants with icon, title, and optional description.
 *
 * @example
 * ```tsx
 * <Alert type="success" title="Changes saved successfully!" />
 *
 * <Alert
 *   type="danger"
 *   title="Error"
 *   description="Failed to save changes. Please try again."
 *   showCloseButton
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-alert--docs Storybook}
 */
export const Alert: FC<Props> = ({
  theme,
  type,
  title,
  description,
  isVisible = true,
  showCloseButton = false,
}) => {
  const wrapperRef = useRef<ComponentRef<'div'>>(null);
  const [isVisibleComponent, setIsVisibleComponent] = useState(isVisible);

  const handleCloseClick = useCallback(() => {
    const wrapper = wrapperRef.current;

    if (wrapper) {
      wrapper.setAttribute('data-state', 'hidden');
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    wrapperRef.current?.addEventListener(
      'animationend',
      () => {
        wrapperRef.current?.style.setProperty('display', 'none');
        setIsVisibleComponent(false);
      },
      { signal: controller.signal },
    );

    return () => controller.abort();
  }, []);

  if (!isVisibleComponent) {
    return null;
  }

  const Icon = type ? ICON_MAP[type] : null;

  return (
    <div
      ref={wrapperRef}
      className={cn(alertVariants({ type, isVisible }))}
      data-state={isVisible ? 'visible' : 'hidden'}
      data-theme={theme}
      role="alert"
      aria-live="polite"
    >
      {Icon && <Icon className={cn(iconVariants({ type }))} />}

      <div className="flex flex-col gap-1 flex-1">
        {title && <p className={cn(titleVariants({ type }))}>{title}</p>}
        {description && (
          <div className={cn(descriptionVariants({ type }))}>{description}</div>
        )}
      </div>

      {showCloseButton && (
        <button type="button" onClick={handleCloseClick}>
          <X className={cn(closeButtonVariants({ type }))} />
          <VisuallyHidden>Dismiss alert</VisuallyHidden>
        </button>
      )}
    </div>
  );
};
