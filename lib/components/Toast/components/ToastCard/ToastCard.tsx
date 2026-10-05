import { X } from 'lucide-react';
import { motion, usePresence } from 'motion/react';
import { FC, useEffect, useRef } from 'react';

import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import {
  COLLAPSED_SCALE_STEP,
  DEFAULT_TOAST_DURATION,
  TOAST_ENTER_TRANSITION,
  TOAST_EXIT_TRANSITION,
  TOAST_ICONS,
  TOAST_TRANSITION,
} from '../../constants';
import { useToastTimer } from '../../hooks';
import {
  toastCloseButtonVariants,
  toastDescriptionVariants,
  toastFrameVariants,
  toastIconVariants,
  toastTitleVariants,
  toastVariants,
} from '../../Toast.variants';

import { Props } from './ToastCard.types';

export const ToastCard: FC<Props> = ({
  closeLabel,
  expanded,
  frontHeight,
  index,
  offset,
  reducedMotion,
  restartOnLeave,
  resumeDelay,
  toast,
  total,
  visible,
  onDismiss,
  onExited,
  onHeightChange,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isPresent] = usePresence();
  const {
    description,
    duration = DEFAULT_TOAST_DURATION,
    id,
    showCloseButton = true,
    title,
    type = 'info',
  } = toast;

  useToastTimer({
    duration,
    paused: expanded,
    restart: restartOnLeave,
    resumeDelay,
    onExpire: onDismiss,
  });

  useEffect(() => {
    const card = cardRef.current;

    if (!card) {
      return;
    }

    const report = () => {
      onHeightChange(id, card.offsetHeight);
    };

    report();

    const observer = new ResizeObserver(report);
    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, [id, onHeightChange]);

  const Icon = TOAST_ICONS[type];
  const isFront = index === 0;
  const clamped = !expanded && !isFront && frontHeight !== 0;
  const transition = reducedMotion
    ? { duration: 0 }
    : {
        ...TOAST_TRANSITION,
        x: TOAST_ENTER_TRANSITION,
        opacity: TOAST_EXIT_TRANSITION,
      };

  return (
    <motion.li
      className={cn(
        'absolute right-0 bottom-0 max-w-full origin-bottom will-change-transform',
        toastFrameVariants({ type }),
      )}
      style={{ zIndex: isPresent ? total - index : 0 }}
      initial={{ x: '110%', opacity: 1, y: 0, scale: 1 }}
      animate={{
        x: 0,
        opacity: visible ? 1 : 0,
        y: -offset,
        scale: expanded ? 1 : 1 - index * COLLAPSED_SCALE_STEP,
        height: clamped ? frontHeight : 'auto',
      }}
      exit={{ opacity: 0 }}
      transition={transition}
      onAnimationComplete={(definition) => {
        if (definition === 'exit') {
          onExited(id);
        }
      }}
      aria-hidden={!visible}
    >
      <div
        ref={cardRef}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={toastVariants()}
      >
        <div className="flex items-center gap-8">
          <div className="flex min-w-0 flex-1 items-center gap-2">
            <Icon
              size={description ? 20 : 24}
              className={cn(toastIconVariants({ type }))}
            />

            <Typography
              variant={description ? 'body2' : 'body1'}
              className={cn('min-w-0', toastTitleVariants({ type }))}
            >
              {title}
            </Typography>
          </div>

          {showCloseButton ? (
            <button
              type="button"
              className={cn(toastCloseButtonVariants({ type }))}
              onClick={onDismiss}
            >
              <X className="size-5" aria-hidden />
              <span className="sr-only">{closeLabel}</span>
            </button>
          ) : null}
        </div>

        {description ? (
          <motion.div
            className="pl-7"
            animate={{ opacity: clamped ? 0 : 1 }}
            transition={transition}
          >
            <Typography
              variant="body2"
              className={cn(toastDescriptionVariants({ type }))}
            >
              {description}
            </Typography>
          </motion.div>
        ) : null}
      </div>
    </motion.li>
  );
};

ToastCard.displayName = 'KonstructToastCard';
