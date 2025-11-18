import { ComponentRef, RefObject, useEffect, useRef } from 'react';

import { useDropdownContext } from '../contexts';

type UseNavigationListProps = {
  inputRef?: RefObject<ComponentRef<'input'> | null>;
  searchable?: boolean;
  ulRef: RefObject<ComponentRef<'ul'> | null>;
  wrapperInputRef: RefObject<ComponentRef<'div'> | null>;
};

export const useNavigationUlList = ({
  searchable,
  ulRef,
  wrapperInputRef,
}: UseNavigationListProps) => {
  const index = useRef(0);
  const { isOpen, options } = useDropdownContext();

  useEffect(() => {
    const allItems = ulRef.current?.querySelectorAll('li') ?? [];
    const items = Array.from(allItems).filter(
      (item) => item.getAttribute('data-action') !== 'true',
    );
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

        if (wrapperInputRef?.current && searchable) {
          wrapperInputRef.current.querySelector('input')?.focus();
        } else {
          wrapperInputRef.current?.focus();
        }
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
            const currentLiItem = items[index.current];
            currentLiItem?.click();

            break;
          }
        }
      },
      { signal: controller.signal },
    );

    return () => {
      controller.abort();
    };
  }, [ulRef, index, wrapperInputRef, searchable, options]);

  useEffect(() => {
    if (!isOpen) {
      index.current = 0;
    }
  }, [isOpen]);
};
