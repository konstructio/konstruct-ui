import { BreadcrumbProps, Step } from '../../Breadcrumb.types';

export type ItemProps = Step &
  Pick<BreadcrumbProps, 'theme' | 'size'> & {
    isLast: boolean;
  };
