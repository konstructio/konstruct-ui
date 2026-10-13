import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Props } from './Counter.types';
import { Counter } from './Counter';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

describe('Counter', () => {
  const defaultProps = {
    label: 'Counter Input',
    init: 0,
    value: 0,
  } satisfies Props;

  const Wrapper = ({ ...delegated }: Props) => {
    const [count, setCount] = useState(0);

    return (
      <Counter
        {...defaultProps}
        {...delegated}
        value={count}
        onChange={({ target: { value } }) => setCount(value)}
      />
    );
  };

  const setup = (props?: Partial<Props>) => {
    const { container: component } = render(
      <Wrapper {...defaultProps} {...props} />,
    );

    const user = userEvent.setup();
    const getInput = () => screen.findByRole('spinbutton');
    const getIncrementButton = () =>
      screen.getByRole('button', { name: /increment/i });
    const getDecrementButton = () =>
      screen.getByRole('button', { name: /decrement/i });

    return {
      component,
      user,
      getInput,
      getIncrementButton,
      getDecrementButton,
    };
  };

  it('should render correctly', async () => {
    const { getInput } = setup();

    const input = await getInput();

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(defaultProps.init);
  });

  it('should render the provided label', () => {
    setup({ label: 'Number of instances' });

    expect(screen.getByText('Number of instances')).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should increment the value', async () => {
    const { user, getInput, getIncrementButton } = setup();

    const input = await getInput();
    const incrementButton = getIncrementButton();

    await user.click(incrementButton);

    expect(input).toHaveValue(defaultProps.init + 1);
  });

  it('should decrement the value', async () => {
    const { user, getInput, getDecrementButton } = setup();

    const input = await getInput();
    const decrementButton = getDecrementButton();

    await user.click(decrementButton);

    expect(input).toHaveValue(defaultProps.init - 1);
  });

  it('should increment the value without more than max value', async () => {
    const { user, getInput, getIncrementButton } = setup({ init: 0, max: 1 });

    const input = await getInput();
    const incrementButton = getIncrementButton();

    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(incrementButton);

    expect(input).toHaveValue(1);
  });

  it('should decrement the value without less than min value', async () => {
    const { user, getInput, getDecrementButton } = setup({ init: 0, min: -1 });

    const input = await getInput();
    const decrementButton = getDecrementButton();

    await user.click(decrementButton);
    await user.click(decrementButton);
    await user.click(decrementButton);

    expect(input).toHaveValue(-1);
  });

  it('should be read-only by default and ignore typing', async () => {
    const { user, getInput } = setup();

    const input = await getInput();

    expect(input).toHaveAttribute('readonly');

    await user.click(input);
    await user.type(input, '500');

    expect(input).toHaveValue(defaultProps.init);
  });

  it('should accept multi-digit values typed into the input', async () => {
    const { user, getInput } = setup({ editable: true });

    const input = await getInput();

    await user.click(input);
    await user.type(input, '500');

    expect(input).toHaveValue(500);
  });

  it('should display empty string while clearing and clamp to min on blur', async () => {
    const { user, getInput } = setup({ editable: true, init: 5, min: 1 });

    const input = await getInput();

    await user.click(input);
    await user.clear(input);

    expect(input).toHaveValue(null);

    await user.tab();

    expect(input).toHaveValue(1);
  });

  it('should not clamp while typing but clamp to max on blur', async () => {
    const { user, getInput } = setup({ editable: true, init: 0, max: 10 });

    const input = await getInput();

    await user.click(input);
    await user.type(input, '999');

    expect(input).toHaveValue(999);

    await user.tab();

    expect(input).toHaveValue(10);
  });

  it('should clamp negative typed values to min on blur', async () => {
    const { user, getInput } = setup({ editable: true, init: 5, min: 0 });

    const input = await getInput();

    await user.click(input);
    await user.clear(input);
    await user.type(input, '-5');

    expect(input).toHaveValue(-5);

    await user.tab();

    expect(input).toHaveValue(0);
  });

  it('should clamp to max on blur when editable with min and max bounds', async () => {
    const { user, getInput } = setup({
      editable: true,
      init: 5,
      min: 1,
      max: 10,
    });

    const input = await getInput();

    await user.click(input);
    await user.clear(input);
    await user.type(input, '25');

    expect(input).toHaveValue(25);

    await user.tab();

    expect(input).toHaveValue(10);
  });

  it('should clamp to min on blur when editable with min and max bounds', async () => {
    const { user, getInput } = setup({
      editable: true,
      init: 5,
      min: 1,
      max: 10,
    });

    const input = await getInput();

    await user.click(input);
    await user.clear(input);
    await user.type(input, '-3');

    expect(input).toHaveValue(-3);

    await user.tab();

    expect(input).toHaveValue(1);
  });

  it('should keep a value within min and max bounds when editable', async () => {
    const { user, getInput } = setup({
      editable: true,
      init: 5,
      min: 1,
      max: 10,
    });

    const input = await getInput();

    await user.click(input);
    await user.clear(input);
    await user.type(input, '7');

    expect(input).toHaveValue(7);

    await user.tab();

    expect(input).toHaveValue(7);
  });

  it('should keep increment/decrement buttons working after typing', async () => {
    const { user, getInput, getIncrementButton, getDecrementButton } = setup({
      editable: true,
      init: 0,
      max: 100,
    });

    const input = await getInput();

    await user.click(input);
    await user.type(input, '7');

    expect(input).toHaveValue(7);

    await user.click(getIncrementButton());
    expect(input).toHaveValue(8);

    await user.click(getDecrementButton());
    expect(input).toHaveValue(7);
  });
  describe('step, unit and messages', () => {
    it('should add and subtract the step and clamp to the limits', async () => {
      const { user, getInput, getIncrementButton, getDecrementButton } = setup({
        step: 500,
        min: 0,
        max: 1200,
      });

      await user.click(getIncrementButton());
      await user.click(getIncrementButton());

      expect(await getInput()).toHaveValue(1000);

      await user.click(getIncrementButton());

      expect(await getInput()).toHaveValue(1200);

      await user.click(getDecrementButton());
      await user.click(getDecrementButton());
      await user.click(getDecrementButton());

      expect(await getInput()).toHaveValue(0);
    });

    it('should render the unit next to the value', async () => {
      setup({ unit: 'GB' });

      expect(screen.getByText('GB')).toBeInTheDocument();
    });

    it('should associate the label with the input and render the label action', async () => {
      setup({ label: 'Size', labelAction: <span>$12.00/mo</span> });

      expect(screen.getByLabelText('Size')).toBe(
        await screen.findByRole('spinbutton'),
      );
      expect(screen.getByText('$12.00/mo')).toBeInTheDocument();
    });

    it('should describe the input with the error and hide the helper text', async () => {
      setup({ error: 'Quota exceeded', helperText: 'Increments of 500 GB' });

      const input = await screen.findByRole('spinbutton');
      const error = screen.getByText('Quota exceeded');

      expect(input).toHaveAttribute('aria-invalid', 'true');
      expect(input).toHaveAttribute('aria-describedby', error.id);
      expect(
        screen.queryByText('Increments of 500 GB'),
      ).not.toBeInTheDocument();
    });

    it('should describe the input with the helper text', async () => {
      setup({ helperText: 'Increments of 500 GB' });

      const input = await screen.findByRole('spinbutton');
      const helper = screen.getByText('Increments of 500 GB');

      expect(input).toHaveAttribute('aria-describedby', helper.id);
      expect(input).not.toHaveAttribute('aria-invalid');
    });

    it('should disable the buttons and the input when disabled', async () => {
      const { getInput, getIncrementButton, getDecrementButton } = setup({
        disabled: true,
        editable: true,
      });

      expect(await getInput()).toBeDisabled();
      expect(getIncrementButton()).toBeDisabled();
      expect(getDecrementButton()).toBeDisabled();
    });

    it('should use the custom button labels', () => {
      setup({ decrementLabel: 'Remove 500 GB', incrementLabel: 'Add 500 GB' });

      expect(
        screen.getByRole('button', { name: 'Remove 500 GB' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: 'Add 500 GB' }),
      ).toBeInTheDocument();
    });

    it("shouldn't have accessibility violations with unit, error and label action", async () => {
      const { component } = setup({
        unit: 'GB',
        error: 'Quota exceeded',
        labelAction: <span>$12.00/mo</span>,
      });

      const results = await axe(component);

      expect(results).toHaveNoViolations();
    });
  });
});
