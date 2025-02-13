import { TagProps } from '@/components/Tag/Tag.types';

import { ListProps } from '../List/List.types';

export type ItemProps = {
  option: TagProps;
  theme: ListProps['theme'];
  handleClickTag: (option: TagProps) => void;
};
