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

  it('should accept multi-digit values typed into the input', async () => {
    const { user, getInput } = setup();

    const input = await getInput();

    await user.click(input);
    await user.type(input, '500');

    expect(input).toHaveValue(500);
  });

  it('should display empty string while clearing and clamp to min on blur', async () => {
    const { user, getInput } = setup({ init: 5, min: 1 });

    const input = await getInput();

    await user.click(input);
    await user.clear(input);

    expect(input).toHaveValue(null);

    await user.tab();

    expect(input).toHaveValue(1);
  });

  it('should not clamp while typing but clamp to max on blur', async () => {
    const { user, getInput } = setup({ init: 0, max: 10 });

    const input = await getInput();

    await user.click(input);
    await user.type(input, '999');

    expect(input).toHaveValue(999);

    await user.tab();

    expect(input).toHaveValue(10);
  });

  it('should clamp negative typed values to min on blur', async () => {
    const { user, getInput } = setup({ init: 5, min: 0 });

    const input = await getInput();

    await user.click(input);
    await user.clear(input);
    await user.type(input, '-5');

    expect(input).toHaveValue(-5);

    await user.tab();

    expect(input).toHaveValue(0);
  });

  it('should keep increment/decrement buttons working after typing', async () => {
    const { user, getInput, getIncrementButton, getDecrementButton } = setup({
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
});
