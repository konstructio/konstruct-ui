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

import { useTheme } from '@/contexts';
import { cn } from '@/utils';

import { AlertProps } from './Alert.types';
import { alertVariants, closeButtonVariants } from './Alert.variants';

export const Alert: FC<AlertProps> = ({
  theme,
  type,
  content,
  isVisible = true,
  showCloseButton = false,
}) => {
  const wrapperRef = useRef<ComponentRef<'div'>>(null);
  const [isVisibleComponent, setIsVisibleComponent] = useState(isVisible);
  const { theme: contextTheme } = useTheme();
  const inheritTheme = theme ?? contextTheme;

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
      className={cn(alertVariants({ theme: inheritTheme, type, isVisible }))}
      data-state={isVisible ? 'visible' : 'hidden'}
      role="alert"
      aria-live="polite"
    >
      {contentMemoized}

      {showCloseButton ? (
        <button role="button" onClick={handleCloseClick}>
          <X
            className={cn(closeButtonVariants({ theme: inheritTheme, type }))}
          />
          <VisuallyHidden>Dismiss alert</VisuallyHidden>
        </button>
      ) : null}
    </div>
  );
};
