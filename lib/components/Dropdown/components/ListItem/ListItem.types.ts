import { DropdownProps, Option } from '../../Dropdown.types';

export type ListItemProps = Option & {
  theme: DropdownProps['theme'];
};
