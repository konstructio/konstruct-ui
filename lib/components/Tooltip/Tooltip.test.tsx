import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tooltip } from './Tooltip';
import { TooltipProps } from './Tooltip.types';

describe('Tooltip', () => {
  const defaultProps = {
    content: <span>Sample tooltip content</span>,
    children: 'Sample tooltip body',
  } satisfies TooltipProps;

  const setup = (props?: Partial<TooltipProps>) => {
    render(<Tooltip {...defaultProps} {...props}></Tooltip>);

    const user = userEvent.setup();
    const getTooltipBodyText = (value: string = defaultProps.children) =>
      screen.findByText(value);
    const getTooltipText = () => screen.findByText(/sample tooltip content/i);

    return {
      user,
      getTooltipBodyText,
      getTooltipText,
    };
  };

  it('should render correctly', async () => {
    const { getTooltipBodyText } = setup();

    const tooltipBody = await getTooltipBodyText();

    expect(tooltipBody).toBeInTheDocument();
  });

  it('should render correctly the tooltip content', async () => {
    const { user, getTooltipBodyText, getTooltipText } = setup();

    const tooltipBody = await getTooltipBodyText();

    await user.hover(tooltipBody);

    const tooltip = await getTooltipText();

    expect(tooltip).toBeInTheDocument();
  });
});
