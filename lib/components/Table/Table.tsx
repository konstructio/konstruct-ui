import { cn } from '@/utils';
import { FunctionComponent } from 'react';
import { tableVariants } from './Table.variants';
import { useTheme } from '@/contexts';
import {
  BodyProps,
  FilterProps,
  HeadProps,
  RowProps,
  TableProps,
} from './Table.types';
import { Head } from './components/Head';
import { Row } from './components/Row';
import { Filter } from './components/Filter';
import { Body } from './components/Body';

const Table: FunctionComponent<TableProps> & {
  Head: FunctionComponent<HeadProps>;
  Row: FunctionComponent<RowProps>;
  Filter: FunctionComponent<FilterProps>;
  Body: FunctionComponent<BodyProps>;
} = ({ children, className, theme, ...delegated }) => {
  const { theme: themeContext } = useTheme();

  return (
    <table
      className={cn(
        tableVariants({
          className,
          theme: theme ?? themeContext,
        }),
      )}
      {...delegated}
    >
      {children}
    </table>
  );
};

Table.Head = Head;
Table.Row = Row;
Table.Filter = Filter;
Table.Body = Body;

export { Table };
