import { ComponentRef, RefObject, useEffect, useRef } from 'react';

import { useDropdownContext } from '../contexts';
import { Option } from '../Dropdown.types';

type UseNavigationListProps = {
  inputRef?: RefObject<ComponentRef<'input'> | null>;
  searchable?: boolean;
  ulRef: RefObject<ComponentRef<'ul'> | null>;
  wrapperInputRef: RefObject<ComponentRef<'div'> | null>;
  options: Option[];
};

export const useNavigationUlList = ({
  inputRef,
  searchable,
  ulRef,
  wrapperInputRef,
  options,
}: UseNavigationListProps) => {
  const index = useRef(0);
  const { isOpen } = useDropdownContext();

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

        if (inputRef?.current && searchable) {
          inputRef.current.focus();
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
  }, [ulRef, index, wrapperInputRef, inputRef, searchable, options.length]);

  useEffect(() => {
    if (!isOpen) {
      index.current = 0;
    }
  }, [isOpen]);
};
