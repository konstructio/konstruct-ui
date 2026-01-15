import { CheckboxProps as CheckboxPropsPrimitive } from '@radix-ui/react-checkbox';
import { VariantProps } from 'class-variance-authority';

import { Theme } from '@/domain/theme';
import { checkboxVariants } from './Checkbox.variants';

/**
 * Props for the Checkbox component.
 *
 * @example
 * ```tsx
 * <Checkbox label="Accept terms" onChange={(checked) => setAccepted(checked)} />
 * <Checkbox label="Remember me" defaultChecked />
 * <Checkbox label="Disabled option" disabled />
 * ```
 */
export interface CheckboxProps
  extends
    Omit<CheckboxPropsPrimitive, 'onChange'>,
    Omit<VariantProps<typeof checkboxVariants>, 'checked'> {
  /** ID of element that labels the checkbox for accessibility */
  ariaLabelledBy?: string;
  /** Additional CSS classes */
  className?: string;
  /** Initial checked state */
  defaultChecked?: boolean;
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** HTML id attribute */
  id?: string;
  /** Label text displayed next to checkbox */
  label?: string;
  /** CSS classes for the label */
  labelClassName?: string;
  /** Form field name */
  name?: string;
  /** Theme override for this component */
  theme?: Theme;
  /** Callback when checked state changes */
  onChange?: (checked: boolean) => void;
}
