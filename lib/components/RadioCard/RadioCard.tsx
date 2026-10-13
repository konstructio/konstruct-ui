import { FC } from 'react';

import { cn } from '@/utils';

import { Badge } from '../Badge/Badge';
import { Card } from '../Card/Card';
import { Radio } from '../Radio/Radio';

import { Props } from './RadioCard.types';
import { radioCardVariants } from './RadioCard.variants';

/**
 * A card-style radio button for visually prominent selection options.
 * Use RadioCardGroup to manage a group of radio cards.
 *
 * @example
 * ```tsx
 * <RadioCard
 *   name="tier"
 *   value="enterprise"
 *   label="Enterprise"
 *   description="Custom pricing"
 *   checked={tier === 'enterprise'}
 *   onChange={(value) => setTier(value)}
 * />
 *
 * <RadioCard
 *   name="network"
 *   value="existing"
 *   label="Existing network"
 *   tag="Recommended"
 *   hideIndicator
 *   checked={network === 'existing'}
 *   content={(checked) => checked && <Select options={networks} />}
 *   onChange={setNetwork}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-radiocard--docs Storybook}
 */
const RadioCard: FC<Props> = ({
  wrapperClassName,
  theme,
  labelWrapperClassName,
  checked,
  className,
  content,
  contentClassName,
  description,
  hideIndicator = false,
  label,
  tag,
  ...delegated
}) => {
  const resolvedContent =
    typeof content === 'function' ? content(!!checked) : content;

  const composedLabel = tag ? (
    <span className="flex items-center gap-2">
      {label}
      <Badge variant="info" label={tag} />
    </span>
  ) : (
    label
  );

  return (
    <Card
      data-theme={theme}
      className={cn(
        radioCardVariants({
          hasContent: !!resolvedContent,
          className: wrapperClassName,
        }),
      )}
      wrapperClassName={cn('w-max', wrapperClassName)}
      isActive={checked}
    >
      <Radio
        wrapperClassName={cn('w-full h-full p-3 gap-3', labelWrapperClassName)}
        className={cn(hideIndicator && 'hidden', className)}
        checked={checked}
        description={description}
        label={composedLabel}
        {...delegated}
      />

      {resolvedContent ? (
        <div className={cn('relative w-full px-3 pb-3', contentClassName)}>
          {resolvedContent}
        </div>
      ) : null}
    </Card>
  );
};

RadioCard.displayName = 'KonstructRadioCard';

export { RadioCard };
