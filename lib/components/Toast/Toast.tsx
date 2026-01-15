'use client';
import { Slot } from '@radix-ui/react-slot';
import {
  Action,
  Description,
  Provider,
  Root,
  Title,
  Viewport,
} from '@radix-ui/react-toast';
import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden';
import {
  FC,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { X } from 'react-feather';

import { cn } from '@/utils';

import { ToastProps } from './Toast.types';
import {
  closeToastVariants,
  toastVariants,
  viewportToastVariants,
} from './Toast.variants';

/**
 * A toast notification component built on Radix UI primitives.
 * Wraps a trigger element and shows a toast when clicked.
 *
 * @example
 * ```tsx
 * const [open, setOpen] = useState(false);
 *
 * <Toast
 *   open={open}
 *   setOpen={setOpen}
 *   title="Saved"
 *   description="Your changes have been saved successfully"
 *   variant="success"
 *   duration={3000}
 * >
 *   <Button>Save Changes</Button>
 * </Toast>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-toast--docs Storybook}
 */
export const Toast: FC<ToastProps> = ({
  title,
  duration = 5000,
  titleClassName,
  descriptionClassName,
  description,
  children,
  theme,
  showCloseButton = true,
  closeButtonClassName,
  className,
  open = false,
  setOpen,
  variant,
}) => {
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const titleResult = useMemo(() => {
    if (isValidElement(title)) {
      return <Slot className={titleClassName}>{title}</Slot>;
    }

    return title;
  }, [title, titleClassName]);

  const descriptionResult = useMemo(() => {
    if (isValidElement(description)) {
      return <Slot className={descriptionClassName}>{description}</Slot>;
    }

    return description;
  }, [description, descriptionClassName]);

  const handleClick = useCallback(() => {
    setOpen(false);
    timerRef.current = window.setTimeout(() => setOpen(true), 100);
  }, [setOpen]);

  return (
    <Provider swipeDirection="right" duration={duration}>
      <Slot onClick={handleClick}>{children}</Slot>

      <Root
        className={cn(toastVariants({ variant, className }))}
        data-theme={theme}
        open={open}
        onOpenChange={setOpen}
      >
        <div className="flex gap-2 items-center flex-1">
          <Title asChild className={titleClassName}>
            {titleResult}
          </Title>

          {descriptionResult && (
            <Description asChild>{descriptionResult}</Description>
          )}
        </div>

        {showCloseButton && (
          <Action asChild altText="Close the toast">
            <button type="button" className="absolute right-1.5 top-1.5">
              <X
                className={cn(
                  closeToastVariants({
                    className: closeButtonClassName,
                  }),
                )}
              />
              <VisuallyHidden>Close toast</VisuallyHidden>
            </button>
          </Action>
        )}
      </Root>

      <Viewport className={cn(viewportToastVariants())} />
    </Provider>
  );
};
