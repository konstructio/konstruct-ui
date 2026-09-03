import { RefObject } from 'react';

export type Params = {
  isOpen: boolean;
  triggerRef: RefObject<HTMLElement | null>;
};
