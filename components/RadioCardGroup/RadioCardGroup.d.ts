import { FC } from '../../../node_modules/react';
import { RadioCardGroupProps } from './RadioCardGroup.types';
/**
 * A group of card-style radio buttons with shared state management.
 *
 * @example
 * ```tsx
 * <RadioCardGroup
 *   name="plan"
 *   direction="row"
 *   options={[
 *     { value: 'starter', label: 'Starter', description: 'For individuals' },
 *     { value: 'team', label: 'Team', description: 'For small teams' },
 *     { value: 'business', label: 'Business', description: 'For organizations' },
 *   ]}
 *   defaultChecked="team"
 *   onValueChange={(value) => console.log(value)}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-radiocardgroup--docs Storybook}
 */
export declare const RadioCardGroup: FC<RadioCardGroupProps>;
