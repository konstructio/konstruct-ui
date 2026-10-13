import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { mockCanvasContext } from '@tests/utils/mockCanvasContext';

import { LineChart } from './LineChart';
import { LineChartProps } from './LineChart.types';

mockCanvasContext();

beforeAll(async () => {
  await import('./components/LineChartContent/LineChartContent');
});

describe('LineChart', () => {
  const defaultProps: LineChartProps = {
    labels: ['11:20', '11:25', '11:30'],
    datasets: [{ label: 'Usage', data: [6, 3, 8] }],
  };

  const setup = async (props: Partial<LineChartProps> = {}) => {
    const { container: component } = render(
      <LineChart {...defaultProps} {...props} />,
    );

    const chart = await screen.findByRole('img', {
      name: props.title ?? 'Line chart',
    });

    return { component, chart };
  };

  it('should render a canvas element', async () => {
    const { chart } = await setup();

    expect(chart).toBeInTheDocument();
  });

  it('should render with a title', async () => {
    await setup({ title: 'Disk Usage %' });

    expect(screen.getByText('Disk Usage %')).toBeInTheDocument();
  });

  it('should render with multiple datasets', async () => {
    const { chart } = await setup({
      datasets: [
        { label: 'Read', data: [8, 7, 9] },
        { label: 'Write', data: [3, 2, 3] },
      ],
    });

    expect(chart).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = await setup({ title: 'Disk Usage %' });

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });
});
