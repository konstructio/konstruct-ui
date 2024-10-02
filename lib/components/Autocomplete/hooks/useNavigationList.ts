import { RefObject, useEffect } from 'react';
import { Option } from '../Autocomplete.types';

type UseNavigationListProps = {
  ulRef: RefObject<HTMLUListElement>;
  inputRef: RefObject<HTMLInputElement>;
  options: Option[];
};

export const useNavigationUlList = ({
  ulRef,
  inputRef,
  options,
}: UseNavigationListProps) => {
  useEffect(() => {
    const items = ulRef.current?.querySelectorAll('li') ?? [];
    const controller = new AbortController();

    let index = 0;

    const goNext = () => {
      if (index < items.length - 1) {
        index++;
        items[index].focus();
      }
    };

    const goBack = () => {
      if (index > 0) {
        index--;
        items[index].focus();
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
            if (index === 0) {
              inputRef.current?.focus();
            } else {
              goBack();
            }

            break;
          }

          case 'Enter': {
            const button = items[index].querySelector('button');
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
  }, [inputRef, ulRef, options]);

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
};
