import { Theme } from '@/domain/theme';

import { BackButton as BackButtonConfig } from '../../Breadcrumb.types';

export interface Props extends BackButtonConfig {
  theme?: Theme;
}

/** @deprecated Use Props instead */
export type BackButtonProps = Props;
