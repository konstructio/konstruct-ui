import { FC } from '../../../node_modules/react';
import { Props } from './PieChart.types';
/**
 * A doughnut/pie chart component for data visualization.
 * Built on Chart.js with support for center text labels.
 *
 * @example
 * ```tsx
 * <PieChart
 *   values={[25, 75]}
 *   colors={['#94a3b8', '#22c55e']}
 *   title="75%"
 *   subtitle="Progress"
 *   cutoutPercentage={80}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-piechart--docs Storybook}
 */
export declare const PieChart: FC<Props>;
