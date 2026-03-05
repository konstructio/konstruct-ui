import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Tooltip } from './Tooltip';
import { TooltipProps } from './Tooltip.types';

describe('Tooltip', () => {
  const defaultProps = {
    content: 'Sample tooltip content',
    children: 'Sample tooltip body',
  } satisfies TooltipProps;

  const setup = (props?: Partial<TooltipProps>) => {
    const { container: component } = render(
      <Tooltip {...defaultProps} {...props} />,
    );

    const user = userEvent.setup();
    const getTooltipBodyText = (value: string = defaultProps.children) =>
      screen.findByText(value);

    return {
      component,
      user,
      getTooltipBodyText,
    };
  };

  it('should render correctly', async () => {
    const { getTooltipBodyText } = setup();

    const tooltipBody = await getTooltipBodyText();

    expect(tooltipBody).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should render correctly the tooltip content on hover', async () => {
    const { user, getTooltipBodyText } = setup();

    const tooltipBody = await getTooltipBodyText();

    await user.hover(tooltipBody);

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toHaveTextContent('Sample tooltip content');
  });
});
