import { Theme } from '@/domain/theme';

import { BackButton as BackButtonConfig } from '../../Breadcrumb.types';

export type Props = BackButtonConfig & {
  theme?: Theme;
};

/** @deprecated Use Props instead */
export type BackButtonProps = Props;
