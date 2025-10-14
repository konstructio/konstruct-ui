import { Theme } from '@/domain/theme';

import { Step } from '../../Breadcrumb.types';

export interface ItemProps extends Step {
  isLast: boolean;
  theme?: Theme;
}
