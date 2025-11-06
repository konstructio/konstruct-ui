import { PropsWithChildren } from 'react';

export type Props = PropsWithChildren & {
  classNameWrapperTable?: string;
  isLoading?: boolean;
  showPagination?: boolean;
};
