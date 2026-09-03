import { Theme } from '@/domain/theme';

export type Props = {
  /** Focus the first empty digit on mount */
  autoFocus?: boolean;
  /** Additional CSS classes for the fieldset */
  className?: string;
  /** Initial code for uncontrolled usage */
  defaultValue?: string;
  /** Accessible name of each digit input; receives the 1-based position */
  digitLabel?: (position: number) => string;
  /** Disable every digit input */
  disabled?: boolean;
  /** Error message announced below the inputs */
  error?: string;
  /** Additional CSS classes for each digit input */
  inputClassName?: string;
  /** Accessible name of the whole code field */
  label: string;
  /** Number of digits */
  length?: number;
  /** Form field name for the hidden input that carries the full code */
  name?: string;
  /** Theme override for this component */
  theme?: Theme;
  /** Controlled code */
  value?: string;
  /** Fired with the current code on every change */
  onChange?: (code: string) => void;
  /** Fired once every digit is filled */
  onComplete?: (code: string) => void;
};

export type OtpInputProps = Props;
