import { FC } from '../../../node_modules/react';
import { Props } from './PasswordRules.types';
/**
 * Lists password requirements and marks each one as met while the user types.
 * The list is a live region and every rule carries a screen-reader status.
 *
 * @example
 * ```tsx
 * <PasswordRules
 *   value={password}
 *   title="Your password must contain at least:"
 *   rules={[
 *     { id: 'length', label: '8 characters', test: (value) => value.length >= 8 },
 *     { id: 'number', label: 'one number', test: (value) => /\d/.test(value) },
 *   ]}
 * />
 * ```
 */
declare const PasswordRules: FC<Props>;
export { PasswordRules };
