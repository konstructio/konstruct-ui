import { Theme } from '@/domain/theme';

import { MultiSelectDropdownOption } from '../../MultiSelectDropdown.types';

export type ItemProps = {
  option: MultiSelectDropdownOption;
  theme?: Theme;
  isSelected?: boolean;
};
