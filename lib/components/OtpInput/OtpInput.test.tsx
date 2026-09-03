import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { OtpInput } from './OtpInput';
import { Props } from './OtpInput.types';

describe('OtpInput', () => {
  const setup = (props: Partial<Props> = {}) => {
    const onChange = vi.fn();
    const onComplete = vi.fn();
    const user = userEvent.setup();
    const utils = render(
      <OtpInput
        label="Verification code"
        onChange={onChange}
        onComplete={onComplete}
        {...props}
      />,
    );

    return {
      ...utils,
      user,
      onChange,
      onComplete,
      getDigit: (position: number) => {
        return screen.getByRole('textbox', { name: `Digit ${position}` });
      },
    };
  };

  it('should render one labelled input per digit inside a named group', () => {
    setup({ length: 4 });

    expect(
      screen.getByRole('group', { name: 'Verification code' }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('textbox')).toHaveLength(4);
    expect(screen.getByRole('textbox', { name: 'Digit 1' })).toHaveAttribute(
      'autocomplete',
      'one-time-code',
    );
  });

  it('should move focus forward while typing and report the code when complete', async () => {
    const { user, onChange, onComplete, getDigit } = setup({ length: 4 });

    await user.click(getDigit(1));
    await user.keyboard('1234');

    expect(onChange).toHaveBeenLastCalledWith('1234');
    expect(onComplete).toHaveBeenCalledWith('1234');
    expect(getDigit(4)).toHaveFocus();
  });

  it('should ignore non-digit characters', async () => {
    const { user, onChange, getDigit } = setup({ length: 4 });

    await user.click(getDigit(1));
    await user.keyboard('a7');

    expect(getDigit(1)).toHaveValue('7');
    expect(onChange).toHaveBeenLastCalledWith('7');
  });

  it('should spread a pasted or autofilled code across the digits', async () => {
    const { user, onComplete, getDigit } = setup({ length: 6 });

    await user.click(getDigit(1));
    await user.paste('482913');

    expect(onComplete).toHaveBeenCalledWith('482913');
    expect(getDigit(6)).toHaveValue('3');
    expect(getDigit(6)).toHaveFocus();
  });

  it('should clear the previous digit with Backspace on an empty box and move with the arrows', async () => {
    const { user, onChange, getDigit } = setup({
      length: 4,
      defaultValue: '12',
    });

    await user.click(getDigit(3));
    await user.keyboard('{Backspace}');

    expect(getDigit(2)).toHaveValue('');
    expect(getDigit(2)).toHaveFocus();
    expect(onChange).toHaveBeenLastCalledWith('1');

    await user.keyboard('{ArrowLeft}');
    expect(getDigit(1)).toHaveFocus();

    await user.keyboard('{ArrowRight}{ArrowRight}');
    expect(getDigit(3)).toHaveFocus();
  });

  it('should follow a controlled value and expose it through the hidden input', () => {
    const { getDigit } = setup({ length: 4, value: '90', name: 'code' });

    expect(getDigit(1)).toHaveValue('9');
    expect(getDigit(2)).toHaveValue('0');
    expect(getDigit(3)).toHaveValue('');
  });

  it('should announce the error and mark the inputs invalid', () => {
    const { getDigit } = setup({ length: 4, error: 'The code is not valid' });

    expect(screen.getByRole('alert')).toHaveTextContent(
      'The code is not valid',
    );
    expect(getDigit(1)).toHaveAttribute('aria-invalid', 'true');
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = setup({ length: 6, error: 'The code is not valid' });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
