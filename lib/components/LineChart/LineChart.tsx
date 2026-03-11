import {
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import { FC, useMemo } from 'react';
import { Line } from 'react-chartjs-2';

import { Typography } from '@/components/Typography/Typography';
import { cn, resolveColor } from '@/utils';

import { LineChartProps } from './LineChart.types';

ChartJS.register(
  CategoryScale,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
);

const CSS_VAR_COLORS = [
  '--color-aurora-500',
  '--color-rose-500',
  '--color-violet-500',
  '--color-emerald-500',
  '--color-sky-500',
  '--color-teal-500',
  '--color-amber-500',
  '--color-fuchsia-500',
  '--color-indigo-500',
  '--color-cyan-500',
];

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
export const LineChart: FC<LineChartProps> = ({
  title,
  titleProps,
  labels,
  datasets,
  yAxisFormatter,
  showLegend,
  height = 300,
  smooth = true,
  axisColor = '#9F9FA9',
  gridColor = '#45556C',
  showGrid = true,
  lineWidth = 2,
  showAxisBorder = false,
  tooltipTextColor = resolveColor('--color-metal-100'),
  className,
}) => {
  const displayLegend =
    showLegend !== undefined ? showLegend : datasets.length > 1;

  const data = useMemo(
    () =>
      ({
        labels,
        datasets: datasets.map((dataset, index) => ({
          label: dataset.label,
          data: dataset.data,
          borderColor:
            dataset.color ??
            resolveColor(CSS_VAR_COLORS[index % CSS_VAR_COLORS.length]),
          backgroundColor:
            dataset.color ??
            resolveColor(CSS_VAR_COLORS[index % CSS_VAR_COLORS.length]),
          borderDash: dataset.borderDash,
          borderWidth: lineWidth,
          pointRadius: 0,
          pointHoverRadius: 4,
          tension: smooth ? 0.3 : 0,
          fill: false,
        })),
      }) satisfies ChartData<'line'>,
    [labels, datasets, smooth, lineWidth],
  );

  const options = useMemo(
    () =>
      ({
        responsive: true,
        maintainAspectRatio: false,
        onHover: (event, elements) => {
          const canvas = event.native?.target as HTMLCanvasElement | undefined;

          if (canvas) {
            canvas.style.cursor = elements.length > 0 ? 'pointer' : 'default';
          }
        },
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            display: displayLegend,
            position: 'top',
            align: 'end',
            labels: {
              color: '#9FAFBC',
              font: {
                size: 12,
                weight: 500,
              },
              usePointStyle: true,
              pointStyle: 'line',
              boxWidth: 24,
              padding: 16,
            },
          },
          tooltip: {
            enabled: true,
            backgroundColor: resolveColor('--color-metal-700'),
            titleColor: tooltipTextColor,
            bodyColor: tooltipTextColor,
            boxPadding: 6,
            callbacks: {
              labelTextColor: () => tooltipTextColor,
            },
          },
        },
        scales: {
          x: {
            grid: {
              color: 'transparent',
            },
            ticks: {
              color: axisColor,
              font: {
                size: 12,
              },
            },
            border: {
              display: showAxisBorder,
              color: gridColor,
            },
          },
          y: {
            grid: {
              color: showGrid ? gridColor : 'transparent',
            },
            ticks: {
              color: axisColor,
              font: {
                size: 12,
              },
              callback: yAxisFormatter
                ? (value) => {
                    return yAxisFormatter(value as number);
                  }
                : undefined,
            },
            border: {
              display: showAxisBorder,
              color: gridColor,
            },
          },
        },
      }) satisfies ChartOptions<'line'>,
    [
      displayLegend,
      yAxisFormatter,
      axisColor,
      gridColor,
      showGrid,
      showAxisBorder,
    ],
  );

  return (
    <div className={cn('w-full', className)}>
      {title && (
        <Typography variant="subtitle2" className="mb-6" {...titleProps}>
          {title}
        </Typography>
      )}
      <div style={{ height }}>
        <Line
          aria-label={title ?? 'Line chart'}
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};
