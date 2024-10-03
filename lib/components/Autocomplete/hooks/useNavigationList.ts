import { RefObject, useEffect, useRef } from 'react';
import { Option } from '../Autocomplete.types';

type UseNavigationListProps = {
  ulRef: RefObject<HTMLUListElement>;
  inputRef: RefObject<HTMLInputElement>;
  wrapperRef: RefObject<HTMLDivElement>;
  options: Option[];
};

export const useNavigationUlList = ({
  ulRef,
  inputRef,
  wrapperRef,
  options,
}: UseNavigationListProps) => {
  const index = useRef(0);

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
        inputRef.current?.focus();
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
              inputRef.current?.focus();
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
  }, [inputRef, ulRef, options, index]);

  useEffect(() => {
    const controller = new AbortController();

    inputRef.current?.addEventListener(
      'keydown',
      (event: KeyboardEvent) => {
        if (event.key === 'ArrowDown') {
          const firstItem = ulRef.current?.querySelector('li');

          if (firstItem) {
            firstItem.focus();
          }
        }
      },
      { signal: controller.signal },
    );

    return () => {
      controller.abort();
    };
  }, [inputRef, ulRef, options]);

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
};
