import { Theme } from '../../../../../domain/theme';
import { Step } from '../../Breadcrumb.types';
export interface Props extends Step {
    isLast: boolean;
    theme?: Theme;
}
/** @deprecated Use Props instead */
export type ItemProps = Props;
