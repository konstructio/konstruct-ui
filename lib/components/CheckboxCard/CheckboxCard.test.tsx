import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { CheckboxCard } from './CheckboxCard';
import { Props } from './CheckboxCard.types';

describe('CheckboxCard', () => {
  const defaultProps = {
    label: 'Instance created',
    description: 'Sent when a new instance finishes provisioning',
    name: 'events',
    value: 'instance.created',
  } satisfies Props;

  const setup = (props?: Partial<Props>) => {
    const user = userEvent.setup();
    const { container } = render(<CheckboxCard {...defaultProps} {...props} />);

    return {
      component: container,
      user,
      getCheckbox: () =>
        screen.getByRole('checkbox', { name: 'Instance created' }),
    };
  };

  it('should name the checkbox after the label and render the description', () => {
    const { getCheckbox } = setup();

    expect(getCheckbox()).toBeInTheDocument();
    expect(
      screen.getByText('Sent when a new instance finishes provisioning'),
    ).toBeInTheDocument();
  });

  it('should toggle when clicking anywhere on the card text', async () => {
    const onChange = vi.fn();
    const { user, getCheckbox } = setup({ onChange });

    await user.click(
      screen.getByText('Sent when a new instance finishes provisioning'),
    );

    expect(onChange).toHaveBeenCalledWith(true);
    expect(getCheckbox()).toBeChecked();

    await user.click(getCheckbox());

    expect(onChange).toHaveBeenLastCalledWith(false);
    expect(getCheckbox()).not.toBeChecked();
  });

  it('should follow the controlled checked value', async () => {
    const onChange = vi.fn();
    const { user, getCheckbox } = setup({ checked: true, onChange });

    expect(getCheckbox()).toBeChecked();

    await user.click(getCheckbox());

    expect(onChange).toHaveBeenCalledWith(false);
    expect(getCheckbox()).toBeChecked();
  });

  it('should not toggle when disabled', async () => {
    const onChange = vi.fn();
    const { user, getCheckbox } = setup({ disabled: true, onChange });

    expect(getCheckbox()).toBeDisabled();

    await user.click(screen.getByText('Instance created'));

    expect(onChange).not.toHaveBeenCalled();
  });

  it("shouldn't have accessibility violations", async () => {
    const { component } = setup({ defaultChecked: true });

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });
});
