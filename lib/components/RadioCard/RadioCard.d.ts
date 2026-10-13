import { FC } from '../../../node_modules/react';
import { Props } from './RadioCard.types';
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
declare const RadioCard: FC<Props>;
export { RadioCard };
