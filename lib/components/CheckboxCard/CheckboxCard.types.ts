import { ReactNode } from 'react';

import { Props as CheckboxProps } from '../Checkbox/Checkbox.types';

export type Props = Pick<
  CheckboxProps,
  | 'checked'
  | 'className'
  | 'defaultChecked'
  | 'disabled'
  | 'id'
  | 'name'
  | 'theme'
  | 'value'
  | 'onChange'
> & {
  /** Additional CSS classes for the text column */
  contentClassName?: string;
  /** Secondary text displayed below the label */
  description?: ReactNode;
  /** Primary text of the option */
  label: ReactNode;
  /** Additional CSS classes for the card */
  wrapperClassName?: string;
};

export type CheckboxCardProps = Props;
