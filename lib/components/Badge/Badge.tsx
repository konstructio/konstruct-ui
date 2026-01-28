import { X } from 'lucide-react';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { LoaderIcon } from '@/assets/icons/components';
import { cn } from '@/utils';

import { BadgeProps } from './Badge.types';
import { badgeVariants, buttonDismissVariants } from './Badge.variants';
import { Slot } from '@radix-ui/react-slot';

/**
 * A badge/tag component for status indicators and labels.
 * Supports multiple variants, icons, loading state, and dismissible mode.
 *
 * @example
 * ```tsx
 * // Basic badge
 * <Badge label="Active" variant="success" />
 *
 * // Badge with icon
 * <Badge label="Settings" leftIcon={<SettingsIcon />} />
 *
 * // Dismissible badge
 * <Badge
 *   label="Tag"
 *   dismissible
 *   onDismiss={() => removeTag()}
 * />
 *
 * // Clickable badge
 * <Badge
 *   label="Filter"
 *   onClick={() => applyFilter()}
 * />
 *
 * // Loading badge
 * <Badge label="Processing" loading />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-badge--docs Storybook}
 */
export const Badge: FC<BadgeProps> = ({
  className,
  dismissible = false,
  isSelectable = true,
  label,
  leftIcon,
  loading = false,
  rightIcon,
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
      className={cn(badgeVariants({ variant, size, className }), {
        'select-none': !isSelectable,
        'cursor-pointer': onClick,
      })}
      role={onClick ? 'button' : undefined}
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? `${label} badge` : undefined}
      aria-busy={loading}
      aria-live="polite"
      data-state={isVisible}
    >
      {loading && (
        <LoaderIcon
          size={12}
          className="animate-spin animate-duration-time-2"
        />
      )}

      {leftIcon ? <Slot className="h-3 w-3">{leftIcon}</Slot> : null}

      {label}

      {dismissible ? (
        <button
          type="button"
          className={cn(buttonDismissVariants({ size, variant }))}
          onClick={handleDismiss}
          aria-label="Dismiss"
        >
          <X className="h-full w-full" />
          <span className="sr-only">Dismiss</span>
        </button>
      ) : rightIcon ? (
        <Slot className="h-3 w-3">{rightIcon}</Slot>
      ) : null}
    </span>
  );
};
