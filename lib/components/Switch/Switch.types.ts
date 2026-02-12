import { VariantProps } from 'class-variance-authority';

import { Theme } from '@/domain/theme';

import { switchVariants } from './Switch.variants';

/**
 * Props for the Switch component.
 *
 * @example
 * ```tsx
 * <Switch label="Enable notifications" onChange={(enabled) => setEnabled(enabled)} />
 * <Switch label="Dark mode" value={isDark} onChange={setIsDark} />
 * <Switch label="Feature" helperText="Enable experimental features" alignment="vertical" />
 * ```
 */
export interface SwitchProps extends VariantProps<typeof switchVariants> {
  /** Layout direction: horizontal (default) or vertical */
  alignment?: 'horizontal' | 'vertical';
  /** Additional CSS classes */
  className?: string;
  /** Initial checked state */
  defaultChecked?: boolean;
  /** Whether the switch is disabled */
  disabled?: boolean;
  /** Helper text displayed below the label */
  helperText?: string;
  /** CSS classes for helper text */
  helperTextClassName?: string;
  /** Label text displayed next to switch */
  label?: string;
  /** CSS classes for the label */
  labelClassName?: string;
  /** Additional CSS classes for the label wrapper */
  labelWrapperClassName?: string;
  /** Form field name */
  name?: string;
  /** Theme override for this component */
  theme?: Theme;
  /** CSS classes for the thumb element */
  thumbClassName?: string;
  /** Controlled checked state */
  value?: boolean;
  /** Callback when checked state changes */
  onChange?: (e: boolean) => void;
}
