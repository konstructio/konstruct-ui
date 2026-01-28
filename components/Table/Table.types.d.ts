import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from '../../../node_modules/react';
import { Theme } from '../../domain/theme';
import { bodyVariants, headVariants, rowVariants, tableVariants } from './Table.variants';
/**
 * Props for the Table component.
 *
 * @example
 * ```tsx
 * <Table>
 *   <Table.Head>
 *     <Table.Row>
 *       <th>Name</th>
 *       <th>Email</th>
 *     </Table.Row>
 *   </Table.Head>
 *   <Table.Body>
 *     <Table.Row>
 *       <td>John Doe</td>
 *       <td>john@example.com</td>
 *     </Table.Row>
 *   </Table.Body>
 * </Table>
 * ```
 */
export interface TableProps extends React.HTMLAttributes<HTMLTableElement>, PropsWithChildren, VariantProps<typeof tableVariants> {
    /** Theme override for this component */
    theme?: Theme;
}
/**
 * Props for Table.Row component.
 */
export interface RowProps extends React.HTMLAttributes<HTMLTableRowElement>, PropsWithChildren, VariantProps<typeof rowVariants> {
    /** Width of the row */
    width?: string;
    /** Whether the row is selected */
    isSelected?: boolean;
    /** Callback when row is selected */
    onSelect?: () => void;
}
/**
 * Props for Table.Head component.
 */
export interface HeadProps extends React.HTMLAttributes<HTMLTableSectionElement>, PropsWithChildren, VariantProps<typeof headVariants> {
}
/**
 * Props for Table.Body component.
 */
export interface BodyProps extends React.HTMLAttributes<HTMLTableSectionElement>, PropsWithChildren, VariantProps<typeof bodyVariants> {
}
/**
 * Props for Table.Filter component.
 */
export interface FilterProps extends React.InputHTMLAttributes<HTMLInputElement>, PropsWithChildren {
    /** Placeholder text for the filter input */
    placeholder?: string;
}
