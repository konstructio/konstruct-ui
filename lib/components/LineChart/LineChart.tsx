import { FC, lazy, Suspense } from 'react';

import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { Props } from './LineChart.types';

const LineChartContent = lazy(() =>
  import('./components/LineChartContent/LineChartContent').then((module) => ({
    default: module.LineChartContent,
  })),
);

const LineChartFallback: FC<Props> = ({
  className,
  height = 300,
  title,
  titleProps,
}) => (
  <div className={cn('w-full', className)} aria-busy="true">
    {title && (
      <Typography variant="subtitle2" className="mb-6" {...titleProps}>
        {title}
      </Typography>
    )}
    <div style={{ height }} />
  </div>
);

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
export const LineChart: FC<Props> = (props) => (
  <Suspense fallback={<LineChartFallback {...props} />}>
    <LineChartContent {...props} />
  </Suspense>
);
