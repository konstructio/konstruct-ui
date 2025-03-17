import { PropsWithChildren } from 'react';
import {
  bodyVariants,
  headVariants,
  rowVariants,
  tableVariants,
} from './Table.variants';
import { VariantProps } from 'class-variance-authority';

export interface TableProps
  extends React.HTMLAttributes<HTMLTableElement>,
    PropsWithChildren,
    VariantProps<typeof tableVariants> {}

export interface RowProps
  extends React.HTMLAttributes<HTMLTableRowElement>,
    PropsWithChildren,
    VariantProps<typeof rowVariants> {
  width?: string;
  isSelected?: boolean;
  onSelect?: () => void;
}

export interface HeadProps
  extends React.HTMLAttributes<HTMLTableSectionElement>,
    PropsWithChildren,
    VariantProps<typeof headVariants> {}

export interface BodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement>,
    PropsWithChildren,
    VariantProps<typeof bodyVariants> {}

export interface FilterProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    PropsWithChildren {
  placeholder?: string;
}
