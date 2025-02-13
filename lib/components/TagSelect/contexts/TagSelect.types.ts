import { PropsWithChildren } from 'react';

import { TagProps } from '@/components/Tag/Tag.types';

export type State = {
  tags: TagProps[];
  onSelectTag: (tag: TagProps) => void;
};

export type TagSelectProviderProps = PropsWithChildren;
