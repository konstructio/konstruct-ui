import { FC } from '../../../node_modules/react';
import { Props } from './OtpInput.types';
/**
 * One-time code input split into one box per digit. The first box opts into
 * SMS autofill (`autocomplete="one-time-code"`) and spreads a pasted or
 * autofilled code across the boxes; Backspace, ArrowLeft and ArrowRight move
 * between them.
 *
 * @example
 * ```tsx
 * <OtpInput
 *   label="Verification code"
 *   error={verifyError}
 *   onComplete={(code) => verify(code)}
 * />
 * ```
 */
declare const OtpInput: FC<Props>;
export { OtpInput };
