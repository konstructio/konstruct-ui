import {
  FC,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Action,
  Description,
  Provider,
  Root,
  Title,
  Viewport,
} from '@radix-ui/react-toast';
import { Slot } from '@radix-ui/react-slot';
import { X } from 'react-feather';
import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { useTheme } from '../../contexts';

import { ToastProps } from './Toast.types';
import {
  closeToastVariants,
  toastVariants,
  viewportToastVariants,
} from './Toast.variants';

export const Toast: FC<ToastProps> = ({
  title,
  duration = 5000,
  titleClassName,
  descriptionClassName,
  description,
  children,
  theme,
  showCloseButton = true,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);
  const { theme: contextTheme } = useTheme();
  const inheritTheme = theme ?? contextTheme;

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const titleResult = useMemo(() => {
    if (isValidElement(title)) {
      return <Slot className={titleClassName}>{title}</Slot>;
    }

    return <h6 className={titleClassName}>{title}</h6>;
  }, [title, titleClassName]);

  const descriptionResult = useMemo(() => {
    if (isValidElement(description)) {
      return <Slot className={descriptionClassName}>{description}</Slot>;
    }

    return <h6 className={descriptionClassName}>{description}</h6>;
  }, [description, descriptionClassName]);

  const handleClick = useCallback(() => {
    setOpen(false);
    timerRef.current = window.setTimeout(() => setOpen(true), 100);
  }, []);

  return (
    <Provider swipeDirection="right" duration={duration}>
      <Slot onClick={handleClick}>{children}</Slot>

      <Root
        className={toastVariants({ theme: inheritTheme, className })}
        open={open}
        onOpenChange={setOpen}
      >
        <Title asChild className="text-lg mb-2 font-semibold">
          {titleResult}
        </Title>

        <Description asChild>{descriptionResult}</Description>

        {showCloseButton && (
          <Action asChild altText="Close the toast">
            <button type="button" className="absolute right-1.5 top-1.5">
              <X className={closeToastVariants({ theme: inheritTheme })} />
              <VisuallyHidden>Close toast</VisuallyHidden>
            </button>
          </Action>
        )}
      </Root>

      <Viewport className={viewportToastVariants({ theme: inheritTheme })} />
    </Provider>
  );
};
