type HexColor = `#${string}`;

/**
 * Props for the PieChart component
 */
export type Props = {
  /**
   * Array of hexadecimal colors for the borders of the pie chart segments
   * @default ['#FFFFFF', '#FFFFFF']
   */
  borderColors?: HexColor[];

  /**
   * Width of the border for pie chart segments in pixels
   * @default 0
   */
  borderWidth?: number;

  /**
   * Array of hexadecimal colors for filling the pie chart segments
   * @default ['#525252', '#00D492']
   */
  colors?: HexColor[];

  /**
   * Percentage of the pie chart's center that should be cut out, creating a donut chart effect
   * @default 80
   */
  cutoutPercentage?: number;

  /**
   * Whether to redraw the entire chart when props change
   * @default true
   */
  redraw?: boolean;

  /**
   * Hexadecimal color for the subtitle text
   * @default '#6B7280'
   */
  subtitleColor?: HexColor;

  /**
   * Font size for the subtitle in pixels
   * @default 14
   */
  subtitleFontSize?: number;

  /**
   * Font weight for the subtitle
   * @default 'normal'
   */
  subtitleFontWeight?: 'bold' | 'normal';

  /**
   * Hexadecimal color for the title text
   * @default '#111827'
   */
  titleColor?: HexColor;

  /**
   * Font size for the title in pixels
   * @default 16
   */
  titleFontSize?: number;

  /**
   * Font weight for the title
   * @default 'bold'
   */
  titleFontWeight?: 'bold' | 'normal';

  /**
   * Array of numeric values representing data for each segment of the pie chart
   * @required
   */
  values: number[];
} &
  /**
   * Union type that enforces either:
   * - No title and no subtitle
   * - Title with optional subtitle
   */
  (| { title?: undefined; subtitle?: never }
    | { title: string; subtitle?: string }
  );
