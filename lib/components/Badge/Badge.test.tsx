import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Badge } from './Badge';
import { BadgeProps } from './Badge.types';

describe('Badge', () => {
  const defaultProps = {
    label: 'Badge',
    onClick: () => {},
  } satisfies BadgeProps;

  const setup = (props?: Partial<BadgeProps>) => {
    const { container: component } = render(
      <Badge {...defaultProps} {...props} />,
    );

    const user = userEvent.setup();
    const getBadge = () => screen.findByText(defaultProps.label);
    const getButtonDismiss = () =>
      screen.findByRole('button', {
        name: /dismiss/i,
      });

    return {
      component,
      user,
      getBadge,
      getButtonDismiss,
    };
  };

  it('should render correctly', async () => {
    const { getBadge } = setup();

    const badge = await getBadge();

    expect(badge).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should show the dismiss button when the dismissible prop is true', async () => {
    const { user, getButtonDismiss, getBadge } = setup({ dismissible: true });

    const buttonDismiss = await getButtonDismiss();

    await user.click(buttonDismiss);

    const badge = await getBadge();

    expect(badge).toHaveAttribute('data-state', 'hidden');
  });

  it('should show the loading icon when the loading prop is true', async () => {
    const { getBadge } = setup({ loading: true });

    const badge = await getBadge();

    expect(badge).toHaveAttribute('aria-busy', 'true');
  });

  it('should show the badge label', async () => {
    const mockOnClick = vi.fn();

    const { getBadge, user } = setup({ onClick: mockOnClick });

    const badge = await getBadge();

    await user.click(badge);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
