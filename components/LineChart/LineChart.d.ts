import { FC } from '../../../node_modules/react';
import { LineChartProps } from './LineChart.types';
/**
 * A line chart component for time-series data visualization.
 * Built on Chart.js with support for single and multi-line datasets.
 *
 * @example
 * ```tsx
 * <LineChart
 *   title="Disk Usage %"
 *   labels={['11:20', '11:25', '11:30']}
 *   datasets={[{ label: 'Usage', data: [6, 3, 8, 5] }]}
 *   yAxisFormatter={(v) => `${v}%`}
 * />
 * ```
 */
export declare const LineChart: FC<LineChartProps>;
