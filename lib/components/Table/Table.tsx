import { FC } from 'react';

import { cn } from '@/utils';

import {
  BodyProps,
  FilterProps,
  HeadProps,
  RowProps,
  TableProps,
} from './Table.types';
import { tableVariants } from './Table.variants';
import { Body, Filter, Head, Row } from './components';

const Table: FC<TableProps> & {
  Head: FC<HeadProps>;
  Row: FC<RowProps>;
  Filter: FC<FilterProps>;
  Body: FC<BodyProps>;
} = ({ children, className, theme, ...delegated }) => (
  <table
    className={cn(
      tableVariants({
        className,
      }),
    )}
    data-theme={theme}
    {...delegated}
  >
    {children}
  </table>
);

Table.Body = Body;
Table.Filter = Filter;
Table.Head = Head;
Table.Row = Row;

export { Table };
