import {
  ArcElement,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  InteractionMode,
  Plugin,
} from 'chart.js';
import { FC, useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { Props } from './PieChart.types';

ChartJS.register(ArcElement);

export const PieChart: FC<Props> = ({
  values,
  colors = ['#525252', '#00D492'],
  borderColors = ['#FFFFFF', '#FFFFFF'],
  borderWidth = 0,
  cutoutPercentage = 80,
  title,
  subtitle,
  titleFontSize = 16,
  subtitleFontSize = 14,
  titleColor = '#111827',
  subtitleColor = '#6B7280',
  titleFontWeight = 'bold',
  subtitleFontWeight = 'normal',
  redraw = true,
}) => {
  const data = useMemo(
    () =>
      ({
        datasets: [
          {
            data: values,
            backgroundColor: colors,
            borderWidth,
            borderColor: borderColors,
          },
        ],
      }) satisfies ChartData<'doughnut'>,
    [borderColors, borderWidth, colors, values],
  );

  const options = useMemo(
    () =>
      ({
        plugins: {
          legend: {
            display: false,
          },
        },
        cutout: `${cutoutPercentage}%`,
        hover: { mode: null as unknown as InteractionMode },
      }) satisfies ChartOptions<'doughnut'>,
    [cutoutPercentage],
  );

  const plugins = useMemo(() => {
    const plugins: Plugin<'doughnut'>[] = [];

    if (title) {
      plugins.push({
        id: 'titleCenter',
        beforeDraw(chart) {
          const ctx = chart.ctx;
          const width = chart.width;
          const height = chart.height;

          ctx.restore();

          ctx.font = `${titleFontWeight} ${titleFontSize}px sans-serif`;
          ctx.fillStyle = titleColor;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(
            title,
            width / 2,
            height / 2 - (subtitle ? titleFontSize / 2 : 0),
          );

          ctx.save();
        },
      });
    }

    if (subtitle) {
      plugins.push({
        id: 'subtitleCenter',
        beforeDraw(chart) {
          const ctx = chart.ctx;
          const width = chart.width;
          const height = chart.height;

          ctx.restore();

          ctx.font = `${subtitleFontWeight} ${subtitleFontSize}px sans-serif`;
          ctx.fillStyle = subtitleColor;
          ctx.fillText(subtitle, width / 2, height / 2 + subtitleFontSize / 2);

          ctx.save();
        },
      });
    }

    return plugins;
  }, [
    subtitle,
    subtitleColor,
    subtitleFontSize,
    subtitleFontWeight,
    title,
    titleColor,
    titleFontSize,
    titleFontWeight,
  ]);

  return (
    <Doughnut data={data} options={options} plugins={plugins} redraw={redraw} />
  );
};
