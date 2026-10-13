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
    const user = userEvent.setup();
    const { container: component, rerender } = render(
      <Tooltip {...defaultProps} {...props} />,
    );

    const getTooltipBodyText = (value: string = defaultProps.children) =>
      screen.findByText(value);

    return {
      component,
      rerender,
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

  describe('disabled', () => {
    it('should keep the children but never open', async () => {
      const { user, getTooltipBodyText } = setup({ disabled: true });

      const tooltipBody = await getTooltipBodyText();

      await user.hover(tooltipBody);
      tooltipBody.focus();

      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });

    it('should not remount the children when toggled', () => {
      const { rerender } = setup({
        disabled: true,
        children: <input aria-label="Name" defaultValue="typed" />,
      });

      const input = screen.getByRole('textbox', { name: 'Name' });

      rerender(
        <Tooltip
          {...defaultProps}
          disabled={false}
          children={<input aria-label="Name" defaultValue="typed" />}
        />,
      );

      expect(screen.getByRole('textbox', { name: 'Name' })).toBe(input);
    });
  });

  describe('asOverlay', () => {
    it('should render the children untouched and an overlay trigger named after the content', async () => {
      const { user } = setup({
        asOverlay: true,
        children: <input aria-label="Name" />,
      });

      const input = screen.getByRole('textbox', { name: 'Name' });
      const overlay = screen.getByRole('img', {
        name: 'Sample tooltip content',
      });

      expect(input.parentElement).toBe(overlay.parentElement);

      await user.hover(overlay);

      expect(await screen.findByRole('tooltip')).toHaveTextContent(
        'Sample tooltip content',
      );
    });

    it('should position the overlay with overlayClassName and name it with overlayLabel', () => {
      setup({
        asOverlay: true,
        content: <strong>Rich content</strong>,
        overlayLabel: 'Why this field is locked',
        overlayClassName: 'right-0 top-7 h-10 w-8',
        children: <input aria-label="Name" />,
      });

      const overlay = screen.getByRole('img', {
        name: 'Why this field is locked',
      });

      expect(overlay).toHaveClass('right-0', 'top-7', 'h-10', 'w-8');
      expect(overlay).not.toHaveClass('inset-0');
    });

    it('should hide the overlay while disabled', () => {
      setup({
        asOverlay: true,
        disabled: true,
        children: <input aria-label="Name" />,
      });

      expect(
        screen.queryByRole('img', { name: 'Sample tooltip content' }),
      ).not.toBeInTheDocument();
      expect(screen.getByRole('textbox', { name: 'Name' })).toBeInTheDocument();
    });

    it("shouldn't have accessibility violations", async () => {
      const { component } = setup({
        asOverlay: true,
        children: <input aria-label="Name" />,
      });

      const results = await axe(component);

      expect(results).toHaveNoViolations();
    });
  });
});
