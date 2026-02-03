import { FC } from '../../../node_modules/react';
import { Props } from './ButtonGroup.types';
/**
 * A segmented toggle button group for single selection among options.
 *
 * @example
 * ```tsx
 * // Simple button group
 * <ButtonGroup
 *   name="processor"
 *   options={[
 *     { value: 'cpu', label: 'CPU' },
 *     { value: 'gpu', label: 'GPU' },
 *   ]}
 *   defaultValue="cpu"
 *   onValueChange={(value) => setProcessor(value)}
 * />
 *
 * // With descriptions
 * <ButtonGroup
 *   name="instance-type"
 *   label="Instance Type"
 *   isRequired
 *   options={[
 *     { value: 'standard', label: 'Standard', description: 'Balanced compute resources' },
 *     { value: 'spot', label: 'Spot', description: 'Cost-effective for flexible workloads' },
 *   ]}
 *   onValueChange={setInstanceType}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-buttongroup--docs Storybook}
 */
export declare const ButtonGroup: FC<Props>;
