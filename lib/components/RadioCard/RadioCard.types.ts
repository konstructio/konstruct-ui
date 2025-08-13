import { Theme } from '@/domain/theme';

import { CardProps } from '../Card/Card.types';
import { RadioProps } from '../Radio/Radio.types';

export type RadioCardProps = Omit<CardProps, 'canHover' | 'isActive'> &
  Pick<
    RadioProps,
    | 'name'
    | 'value'
    | 'checked'
    | 'onChange'
    | 'label'
    | 'disabled'
    | 'defaultChecked'
    | 'labelTextClassName'
    | 'description'
    | 'descriptionClassName'
  > & {
    labelWrapperClassName?: string;
    theme?: Theme;
  };
