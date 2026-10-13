import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { mockCanvasContext } from '@tests/utils/mockCanvasContext';

import { PieChart } from './PieChart';
import { Props } from './PieChart.types';

mockCanvasContext();

beforeAll(async () => {
  await import('./components/PieChartContent/PieChartContent');
});

describe('PieChart', () => {
  const defaultProps: Props = {
    values: [25, 75],
    colors: ['#94a3b8', '#22c55e'],
  };

  const setup = async (props: Partial<Props> = {}) => {
    const { container: component } = render(
      <PieChart {...defaultProps} {...(props as Props)} />,
    );

    const chart = await screen.findByRole('img');

    return { component, chart };
  };

  it('should render a canvas element', async () => {
    const { chart } = await setup();

    expect(chart).toBeInTheDocument();
  });

  it('should render with a title and subtitle', async () => {
    const { chart } = await setup({ title: '75%', subtitle: 'Progress' });

    expect(chart).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = await setup({ title: '75%' });

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });
});
