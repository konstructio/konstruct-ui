import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { LineChart } from './LineChart';
import { LineChartProps } from './LineChart.types';

// Mock canvas for chart.js in JSDOM
HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
  canvas: { width: 300, height: 300 },
  clearRect: vi.fn(),
  beginPath: vi.fn(),
  moveTo: vi.fn(),
  lineTo: vi.fn(),
  stroke: vi.fn(),
  fill: vi.fn(),
  arc: vi.fn(),
  save: vi.fn(),
  restore: vi.fn(),
  scale: vi.fn(),
  translate: vi.fn(),
  setTransform: vi.fn(),
  resetTransform: vi.fn(),
  createLinearGradient: vi.fn().mockReturnValue({
    addColorStop: vi.fn(),
  }),
  measureText: vi.fn().mockReturnValue({ width: 50 }),
  fillText: vi.fn(),
  fillRect: vi.fn(),
  strokeRect: vi.fn(),
  setLineDash: vi.fn(),
  getLineDash: vi.fn().mockReturnValue([]),
  clip: vi.fn(),
  rect: vi.fn(),
  closePath: vi.fn(),
  drawImage: vi.fn(),
  getImageData: vi.fn().mockReturnValue({ data: [] }),
  putImageData: vi.fn(),
  createPattern: vi.fn(),
  createRadialGradient: vi.fn().mockReturnValue({
    addColorStop: vi.fn(),
  }),
  isPointInPath: vi.fn(),
  quadraticCurveTo: vi.fn(),
  bezierCurveTo: vi.fn(),
});

// Mock ResizeObserver for chart.js
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
})) as unknown as typeof ResizeObserver;

describe('LineChart', () => {
  const defaultProps: LineChartProps = {
    labels: ['11:20', '11:25', '11:30'],
    datasets: [{ label: 'Usage', data: [6, 3, 8] }],
  };

  it('should render the component', () => {
    const { container } = render(<LineChart {...defaultProps} />);

    expect(container).toBeInTheDocument();
  });

  it('should render with a title', () => {
    render(<LineChart {...defaultProps} title="Disk Usage %" />);

    expect(screen.getByText('Disk Usage %')).toBeInTheDocument();
  });

  it('should render with multiple datasets', () => {
    const { container } = render(
      <LineChart
        {...defaultProps}
        datasets={[
          { label: 'Read', data: [8, 7, 9] },
          { label: 'Write', data: [3, 2, 3] },
        ]}
      />,
    );

    expect(container).toBeInTheDocument();
  });

  it('should render a canvas element', () => {
    const { container } = render(<LineChart {...defaultProps} />);

    expect(container.querySelector('canvas')).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { container } = render(
      <LineChart {...defaultProps} title="Disk Usage %" />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
