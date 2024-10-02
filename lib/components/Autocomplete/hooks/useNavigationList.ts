import { useEffect } from 'react';

type UseNavigationListProps = {
  ulRef: HTMLUListElement | null;
};

export const useNavigationList = ({ ulRef }: UseNavigationListProps) => {
  useEffect(() => {
    const controller = new AbortController();

    let index = 0;
    const items = ulRef?.querySelectorAll('li');

    ulRef?.addEventListener('keydown', (event) => {
      if (items) {
        if (event.key === 'ArrowDown' || event.key === 'Tab') {
          event.preventDefault();

          if (index < items.length - 1) {
            index++;
            items[index].focus();
          }
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();

          if (index > 0) {
            index--;
            items[index].focus();
          }
        }
      }
    });

    return () => {
      controller.abort();
    };
  }, [ulRef]);
};
