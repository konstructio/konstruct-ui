import { ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { Props as CardProps } from '../Card/Card.types';
import { Props as RadioProps } from '../Radio/Radio.types';

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
export type Props = Omit<
  CardProps,
  'canHover' | 'isActive' | 'content' | 'onChange'
> &
  Pick<
    RadioProps,
    | 'name'
    | 'value'
    | 'checked'
    | 'onChange'
    | 'label'
    | 'disabled'
    | 'defaultChecked'
    | 'labelTextClassName'
    | 'description'
    | 'descriptionClassName'
  > & {
    /** Interactive content rendered below the label, outside the selectable area; receives the checked state */
    content?: ReactNode | ((checked: boolean) => ReactNode);
    /** Additional CSS classes for the content wrapper */
    contentClassName?: string;
    /** Hide the radio indicator and let the card itself communicate the selection */
    hideIndicator?: boolean;
    labelWrapperClassName?: string;
    /** Short badge displayed next to the label */
    tag?: string;
    theme?: Theme;
  };

/** @deprecated Use Props instead */
export type RadioCardProps = Props;
