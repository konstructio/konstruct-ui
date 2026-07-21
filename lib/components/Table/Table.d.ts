import { FC } from '../../../node_modules/react';
import { BodyProps, FilterProps, HeadProps, RowProps, TableProps } from './Table.types';
/**
 * A composable table component with Head, Body, Row, and Filter sub-components.
 * For large datasets, consider using VirtualizedTable instead.
 *
 * @example
 * ```tsx
 * <Table>
 *   <Table.Filter placeholder="Search..." />
 *   <Table.Head>
 *     <Table.Row>
 *       <th>Name</th>
 *       <th>Email</th>
 *       <th>Role</th>
 *     </Table.Row>
 *   </Table.Head>
 *   <Table.Body>
 *     {users.map((user) => (
 *       <Table.Row key={user.id}>
 *         <td>{user.name}</td>
 *         <td>{user.email}</td>
 *         <td>{user.role}</td>
 *       </Table.Row>
 *     ))}
 *   </Table.Body>
 * </Table>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-table--docs Storybook}
 */
declare const Table: FC<TableProps> & {
    Head: FC<HeadProps>;
    Row: FC<RowProps>;
    Filter: FC<FilterProps>;
    Body: FC<BodyProps>;
};
export { Table };
