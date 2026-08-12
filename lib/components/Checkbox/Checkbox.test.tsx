import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { FC, PropsWithChildren } from 'react';

import { Button } from '../Button/Button';

import { Checkbox } from './Checkbox';
import { CheckboxProps } from './Checkbox.types';

describe('Checkbox', () => {
  const defaultProps = {
    defaultChecked: false,
    name: 'button-name',
    label: 'Checkbox',
  } satisfies CheckboxProps;

  const setup = (
    props?: Partial<CheckboxProps>,
    wrapper?: FC<PropsWithChildren>,
  ) => {
    const { container } = render(<Checkbox {...defaultProps} {...props} />, {
      wrapper,
    });

    const user = userEvent.setup();

    return {
      component: container,
      user,
      getCheckbox: async () => screen.findByRole('checkbox'),
    };
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the component', async () => {
    const { getCheckbox } = setup();

    const checkbox = await getCheckbox();

    expect(checkbox).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it.each([
    ['label only', {}],
    ['label and name', { name: 'terms' }],
    ['label and id', { id: 'terms-id' }],
    ['label, name and id', { name: 'terms', id: 'terms-id' }],
  ])('should expose the label as accessible name with %s', async (_, props) => {
    render(<Checkbox label="Accept terms" {...props} />);

    expect(
      await screen.findByRole('checkbox', { name: 'Accept terms' }),
    ).toBeInTheDocument();
  });

  it('should toggle once when the label is clicked', async () => {
    const onChange = vi.fn();
    const { user, getCheckbox } = setup({ onChange });

    await user.click(screen.getByText('Checkbox'));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(true);
    expect(await getCheckbox()).toBeChecked();
  });

  it('should not toggle when the label of a disabled checkbox is clicked', async () => {
    const onChange = vi.fn();
    const { user, getCheckbox } = setup({ disabled: true, onChange });

    await user.click(screen.getByText('Checkbox'));

    expect(onChange).not.toHaveBeenCalled();
    expect(await getCheckbox()).not.toBeChecked();
  });

  it('should render not checked component', async () => {
    const { getCheckbox } = setup();

    const checkbox = await getCheckbox();

    expect(checkbox).not.toBeChecked();
  });

  it('should render checked component', async () => {
    const { getCheckbox } = setup({ defaultChecked: true });

    const checkbox = await getCheckbox();

    expect(checkbox).toBeChecked();
  });

  it('should render disabled component', async () => {
    const { getCheckbox } = setup({ disabled: true });

    const checkbox = await getCheckbox();

    expect(checkbox).toBeDisabled();
  });

  describe('Controlled', () => {
    it('should render checked when the checked prop is true', async () => {
      const { getCheckbox } = setup({ checked: true });

      const checkbox = await getCheckbox();

      expect(checkbox).toBeChecked();
    });

    it('should render unchecked when the checked prop is false', async () => {
      const { getCheckbox } = setup({ checked: false });

      const checkbox = await getCheckbox();

      expect(checkbox).not.toBeChecked();
    });

    it('should call onChange without changing the visual state until the prop changes', async () => {
      const onChange = vi.fn();
      const { rerender } = render(
        <Checkbox {...defaultProps} checked={false} onChange={onChange} />,
      );
      const user = userEvent.setup();

      const checkbox = await screen.findByRole('checkbox');
      await user.click(checkbox);

      expect(onChange).toHaveBeenCalledWith(true);
      expect(checkbox).not.toBeChecked();

      rerender(
        <Checkbox {...defaultProps} checked={true} onChange={onChange} />,
      );

      expect(checkbox).toBeChecked();
    });

    it('should keep the uncontrolled behavior when the checked prop is omitted', async () => {
      const { user, getCheckbox } = setup();

      const checkbox = await getCheckbox();
      await user.click(checkbox);

      expect(checkbox).toBeChecked();
    });
  });

  describe('Form', () => {
    const mockSubmit = vi.fn();

    const Wrapper: FC<PropsWithChildren> = ({ children }) => (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const data = Object.fromEntries(formData.entries());
          mockSubmit(data);
        }}
      >
        {children}

        <Button type="submit">Submit</Button>
      </form>
    );

    beforeEach(() => {
      vi.clearAllMocks();
    });

    it('should send the checkbox name inside a form', async () => {
      const { user, getCheckbox } = setup({ name: 'checkbox' }, Wrapper);

      const checkbox = await getCheckbox();
      const button = screen.getByRole('button', {
        name: /submit/i,
      });

      await user.click(checkbox);
      await user.click(button);

      expect(mockSubmit).toHaveBeenCalledWith({ checkbox: 'on' });
    });
  });
});
