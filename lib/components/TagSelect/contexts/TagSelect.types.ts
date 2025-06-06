import { PropsWithChildren, RefObject } from 'react';

import { TagProps } from '@/components/Tag/Tag.types';

export type State = {
  tags: TagProps[];
  selectedTags: TagProps[];
  isOpen: boolean;
  inputRef: RefObject<HTMLInputElement | null> | null;
  onSelectTag: (tag: TagProps) => void;
  onRemoveTag: (tag: TagProps) => void;
  onOpen: (value?: boolean) => void;
};

export type TagSelectProviderProps = PropsWithChildren & {
  defaultOptions?: TagProps[];
  multiselect?: boolean;
};
