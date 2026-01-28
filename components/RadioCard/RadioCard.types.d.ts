import { Theme } from '../../domain/theme';
import { CardProps } from '../Card/Card.types';
import { RadioProps } from '../Radio/Radio.types';
/**
 * Props for the RadioCard component.
 * Combines Card styling with Radio functionality.
 *
 * @example
 * ```tsx
 * <RadioCard
 *   name="plan"
 *   value="pro"
 *   label="Pro Plan"
 *   description="$29/month"
 *   checked={selected === 'pro'}
 *   onChange={(value) => setSelected(value)}
 * />
 * ```
 */
export type RadioCardProps = Omit<CardProps, 'canHover' | 'isActive'> & Pick<RadioProps, 'name' | 'value' | 'checked' | 'onChange' | 'label' | 'disabled' | 'defaultChecked' | 'labelTextClassName' | 'description' | 'descriptionClassName'> & {
    labelWrapperClassName?: string;
    theme?: Theme;
};
