'use client';
import { X } from 'lucide-react';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

import Loader from '@/assets/icons/loader.svg';
import { cn } from '@/utils';

import { BadgeProps } from './Badge.types';
import { badgeVariants, buttonDismissVariants } from './Badge.variants';

export const Badge: FC<BadgeProps> = ({
  className,
  dismissible = false,
  label,
  loading = false,
  size,
  variant,
  onClick,
  onDismiss,
}) => {
  const badgeRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState<'visible' | 'hidden'>('visible');

  const handleDismiss = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onDismiss?.();
      setIsVisible('hidden');
    },
    [onDismiss],
  );

  useEffect(() => {
    const controller = new AbortController();

    badgeRef.current?.addEventListener(
      'animationend',
      () => {
        badgeRef.current?.style.setProperty('display', 'none');
        badgeRef.current?.remove();
      },
      { signal: controller.signal },
    );

    return () => controller.abort();
  }, []);

  return (
    <span
      ref={badgeRef}
      className={cn(
        badgeVariants({ variant, size, className }),
        onClick && 'cursor-pointer',
      )}
      role={onClick ? 'button' : undefined}
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? `${label} badge` : undefined}
      aria-busy={loading}
      aria-live="polite"
      data-state={isVisible}
    >
      {loading && (
        <Loader className="h-3 w-3 animate-spin animate-duration-time-2" />
      )}

      {label}

      {dismissible && (
        <button
          type="button"
          className={cn(buttonDismissVariants({ size, variant }))}
          onClick={handleDismiss}
          aria-label="Dismiss"
        >
          <X className="h-full w-full" />
          <span className="sr-only">Dismiss</span>
        </button>
      )}
    </span>
  );
};
