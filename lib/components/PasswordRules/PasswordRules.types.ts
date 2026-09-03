import { ReactNode } from 'react';

import { Theme } from '@/domain/theme';

export type PasswordRule = {
  id: string;
  label: ReactNode;
  test: (value: string) => boolean;
};

export type Props = {
  /** Additional CSS classes for the list wrapper */
  className?: string;
  /** Screen-reader status appended to a satisfied rule */
  metLabel?: string;
  /** Screen-reader status appended to an unsatisfied rule */
  pendingLabel?: string;
  /** Rules to evaluate against `value` */
  rules: PasswordRule[];
  /** Theme override for this component */
  theme?: Theme;
  /** Heading rendered above the rules */
  title?: ReactNode;
  /** Current password */
  value: string;
};

export type PasswordRulesProps = Props;
