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
  > & {
    labelWrapperClassName?: string;
  };
