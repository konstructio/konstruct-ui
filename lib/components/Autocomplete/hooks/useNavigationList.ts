import { useEffect } from 'react';

type UseNavigationListProps = {
  ulRef: HTMLUListElement | null;
  inputRef: HTMLInputElement | null;
};

export const useNavigationUlList = ({
  ulRef,
  inputRef,
}: UseNavigationListProps) => {
  useEffect(() => {
    const items = ulRef?.querySelectorAll('li') ?? [];
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

    ulRef?.addEventListener('keydown', (event: KeyboardEvent) => {
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
            inputRef?.focus();
          } else {
            goBack();
          }

          break;
        }

        case 'Enter': {
          const [button] = items[index].querySelectorAll('button');

          if (button) {
            button.click();
          }

          break;
        }
      }
    });

    return () => {
      controller.abort();
    };
  }, [inputRef, ulRef]);

  useEffect(() => {
    const controller = new AbortController();

    inputRef?.addEventListener(
      'keydown',
      (event: KeyboardEvent) => {
        if (event.key === 'ArrowDown') {
          const firstItem = ulRef?.querySelector('li');
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
  }, [inputRef, ulRef]);
};
