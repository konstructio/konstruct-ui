import { render, screen } from '@testing-library/react';

import { NumberInputProps } from './NumberInput.types';
import { NumberInput } from './NumberInput';
import userEvent from '@testing-library/user-event';

describe('NumberInput', () => {
  const defaultProps = {
    init: 0,
  } satisfies NumberInputProps;

  const setup = (props?: Partial<NumberInputProps>) => {
    render(<NumberInput {...defaultProps} {...props} />);

    const user = userEvent.setup();
    const getInput = () => screen.findByRole('textbox');
    const getIncrementButton = () =>
      screen.getByRole('button', { name: /increment/i });
    const getDecrementButton = () =>
      screen.getByRole('button', { name: /decrement/i });

    return {
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
});
