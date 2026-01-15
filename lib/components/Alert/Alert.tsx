'use client';
import {
  ComponentRef,
  FC,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { X } from 'react-feather';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { cn } from '@/utils';

import { AlertProps } from './Alert.types';
import { alertVariants, closeButtonVariants } from './Alert.variants';

/**
 * An alert component for displaying feedback messages.
 * Supports success, error, warning, and info variants with optional dismiss button.
 *
 * @example
 * ```tsx
 * // Success alert
 * <Alert type="success" content="Changes saved successfully!" />
 *
 * // Error alert with close button
 * <Alert
 *   type="error"
 *   content="Failed to save changes. Please try again."
 *   showCloseButton
 * />
 *
 * // Warning alert with custom content
 * <Alert
 *   type="warning"
 *   content={
 *     <div>
 *       <strong>Warning:</strong> This action cannot be undone.
 *     </div>
 *   }
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-alert--docs Storybook}
 */
export const Alert: FC<AlertProps> = ({
  theme,
  type,
  content,
  isVisible = true,
  showCloseButton = false,
}) => {
  const wrapperRef = useRef<ComponentRef<'div'>>(null);
  const [isVisibleComponent, setIsVisibleComponent] = useState(isVisible);

  const contentMemoized = useMemo(
    () => (isValidElement(content) ? content : <p>{content}</p>),
    [content],
  );

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

  return (
    <div
      ref={wrapperRef}
      className={cn(alertVariants({ type, isVisible }))}
      data-state={isVisible ? 'visible' : 'hidden'}
      data-theme={theme}
      role="alert"
      aria-live="polite"
    >
      {contentMemoized}

      {showCloseButton ? (
        <button role="button" onClick={handleCloseClick}>
          <X className={cn(closeButtonVariants({ type }))} />
          <VisuallyHidden>Dismiss alert</VisuallyHidden>
        </button>
      ) : null}
    </div>
  );
};
