import { TagProps } from '@/components/Tag/Tag.types';

import { TagSelectProps } from '../../TagSelect.types';

export type ListProps = {
  theme: TagSelectProps['theme'];
  options: TagSelectProps['options'];
  handleClickTag: (option: TagProps) => void;
};
