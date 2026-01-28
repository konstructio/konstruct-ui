import { InputProps } from './Input.types';
/**
 * A text input component with label, error handling, and helper text support.
 * Includes built-in password visibility toggle and search icon variant.
 *
 * @example
 * ```tsx
 * // Basic input with label
 * <Input label="Email" placeholder="Enter your email" />
 *
 * // Required input with helper text
 * <Input
 *   label="Username"
 *   isRequired
 *   helperText="Choose a unique username"
 * />
 *
 * // Input with error state
 * <Input
 *   label="Email"
 *   value={email}
 *   error="Please enter a valid email address"
 * />
 *
 * // Password input (auto show/hide toggle)
 * <Input label="Password" type="password" />
 *
 * // Search input with icon
 * <Input placeholder="Search..." isSearch />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-input--docs Storybook}
 */
declare const Input: import('../../../node_modules/react').ForwardRefExoticComponent<InputProps & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export { Input };
