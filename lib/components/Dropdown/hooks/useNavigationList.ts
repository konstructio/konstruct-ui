import { RefObject, useEffect, useRef } from 'react';
import { useDropdownContext } from '../contexts';

type UseNavigationListProps = {
  ulRef: RefObject<HTMLUListElement>;
  wrapperRef: RefObject<HTMLDivElement>;
  wrapperInputRef: RefObject<HTMLDivElement>;
};

export const useNavigationUlList = ({
  ulRef,
  wrapperRef,
  wrapperInputRef,
}: UseNavigationListProps) => {
  const index = useRef(0);
  const { isOpen } = useDropdownContext();

  useEffect(() => {
    const items = ulRef.current?.querySelectorAll('li') ?? [];
    const controller = new AbortController();

    const goNext = () => {
      if (index.current < items.length - 1) {
        index.current = index.current + 1;
        items[index.current].focus();
      } else {
        index.current = 0;
        items[0].focus();
      }
    };

    const goBack = () => {
      if (index.current > 0) {
        index.current = index.current - 1;
        items[index.current].focus();
      } else {
        index.current = 0;
        wrapperInputRef.current?.focus();
      }
    };

    ulRef.current?.addEventListener(
      'keydown',
      (event: KeyboardEvent) => {
        event.preventDefault();

        switch (event.key) {
          case 'ArrowDown': {
            goNext();

            break;
          }

          case 'Tab': {
            if (event.shiftKey) {
              goBack();
            } else {
              goNext();
            }

            break;
          }

          case 'ArrowUp': {
            if (index.current === 0) {
              wrapperInputRef.current?.focus();
            } else {
              goBack();
            }

            break;
          }

          case 'Enter': {
            const button = items[index.current].querySelector('button');
            button?.click();

            break;
          }
        }
      },
      { signal: controller.signal },
    );

    return () => {
      controller.abort();
    };
  }, [ulRef, index, wrapperInputRef]);

  useEffect(() => {
    const controller = new AbortController();

    wrapperRef.current?.addEventListener(
      'mouseenter',
      () => {
        const items = ulRef.current?.querySelectorAll('li') ?? [];
        items.forEach((item) => item.blur());
      },
      { signal: controller.signal },
    );

    return () => {
      controller.abort();
    };
  }, [ulRef, wrapperRef]);

  useEffect(() => {
    if (!isOpen) {
      index.current = 0;
    }
  }, [isOpen]);
};
