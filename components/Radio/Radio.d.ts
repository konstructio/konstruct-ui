import { FC } from '../../../node_modules/react';
import { RadioProps } from './Radio.types';
/**
 * A radio button component with label and optional description.
 * Use RadioGroup to manage a group of radio buttons.
 *
 * @example
 * ```tsx
 * <Radio
 *   name="plan"
 *   value="basic"
 *   label="Basic Plan"
 *   description="Free forever"
 *   checked={plan === 'basic'}
 *   onChange={(value) => setPlan(value)}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-radio--docs Storybook}
 */
declare const Radio: FC<RadioProps>;
export { Radio };
