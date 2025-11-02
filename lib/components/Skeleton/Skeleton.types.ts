import { Table } from '@tanstack/react-table';

export type SkeletonProps<T> = {
  numberOfRows: number;
  table: Table<T>;
};
