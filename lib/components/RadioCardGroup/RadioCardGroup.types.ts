import { Theme } from '@/domain/theme';

import { RadioCardProps } from '../RadioCard/RadioCard.types';

/**
 * Props for the RadioCardGroup component.
 *
 * @example
 * ```tsx
 * <RadioCardGroup
 *   name="pricing"
 *   options={[
 *     { value: 'basic', label: 'Basic', description: '$9/mo' },
 *     { value: 'pro', label: 'Pro', description: '$29/mo' },
 *     { value: 'enterprise', label: 'Enterprise', description: 'Custom' },
 *   ]}
 *   defaultChecked="pro"
 *   onValueChange={(value) => setTier(value)}
 * />
 * ```
 */
export type RadioCardGroupProps = {
  asChild?: boolean;
  className?: string;
  defaultChecked?: string;
  direction?: 'row' | 'col';
  name: string;
  options: Omit<RadioCardProps, 'name' | 'checked' | 'defaultChecked'>[];
  theme?: Theme;
  wrapperClassName?: string;
  onValueChange?: (value: string) => void;
};
