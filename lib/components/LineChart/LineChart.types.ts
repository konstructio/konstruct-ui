import { TypographyProps } from '@/components/Typography/Typography.types';

export interface LineChartDataset {
  /** Dataset label (used in legend) */
  label: string;
  /** Array of numeric values */
  data: number[];
  /** Line/point color (defaults to palette color) */
  color?: string;
  /** Dashed line pattern (e.g. [5, 5]) */
  borderDash?: number[];
}

/**
 * Props for the LineChart component.
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
export interface LineChartProps {
  /** Chart title text */
  title?: string;
  /** Props passed to the Typography component used for the title */
  titleProps?: Partial<Omit<TypographyProps, 'children' | 'ref'>>;
  /** X-axis labels (e.g. time values) */
  labels: string[];
  /** One or more datasets (lines) */
  datasets: LineChartDataset[];
  /** Y-axis tick formatter (e.g. value => `${value}%`) */
  yAxisFormatter?: (value: number) => string;
  /** Show legend (auto-shown when datasets > 1) */
  showLegend?: boolean;
  /** Chart height in px (default: 300) */
  height?: number;
  /** Smooth lines (default: true). Set to false for straight/rigid lines */
  smooth?: boolean;
  /** Color for axis tick labels (default: '#9F9FA9') */
  axisColor?: string;
  /** Color for grid lines (default: '#45556C') */
  gridColor?: string;
  /** Show horizontal grid lines (default: true) */
  showGrid?: boolean;
  /** Line thickness in px (default: 2) */
  lineWidth?: number;
  /** Show axis border lines (default: false) */
  showAxisBorder?: boolean;
  /** Tooltip text color (default: metal-100) */
  tooltipTextColor?: string;
  /** Additional className for wrapper */
  className?: string;
}
