import { TagProps } from '@/components/Tag/Tag.types';
import { Theme } from '@/domain/theme';

export type ItemProps = {
  option: TagProps;
  theme?: Theme;
};
