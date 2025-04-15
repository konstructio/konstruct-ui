import { BreadcrumbProps, Step } from '../../Breadcrumb.types';

export type ItemProps = Step &
  Pick<BreadcrumbProps, 'size'> & {
    isLast: boolean;
  };
