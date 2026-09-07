import { FC, lazy, Suspense } from 'react';

import { Props } from './PieChart.types';

const PieChartContent = lazy(() =>
  import('./components/PieChartContent/PieChartContent').then((module) => ({
    default: module.PieChartContent,
  })),
);

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
export const PieChart: FC<Props> = (props) => (
  <Suspense fallback={<div className="w-full h-full" aria-busy="true" />}>
    <PieChartContent {...props} />
  </Suspense>
);
