import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Input } from './Input';

describe('Input', () => {
  it('should associate the label with the input', () => {
    render(<Input label="Email" />);

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('should mark the label when the field is required', () => {
    render(<Input label="Email" isRequired />);

    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('should call onChange when typing', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    render(<Input label="Email" onChange={onChange} />);

    await user.type(screen.getByLabelText('Email'), 'abc');

    expect(onChange).toHaveBeenCalledTimes(3);
    expect(screen.getByLabelText('Email')).toHaveValue('abc');
  });

  it('should show the error message and flag the input', () => {
    render(<Input label="Email" error="Invalid email" />);

    expect(screen.getByText('Invalid email')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toHaveAttribute(
      'data-error',
      'true',
    );
  });

  it('should show the helper text only when there is no error', () => {
    const { rerender } = render(
      <Input label="Email" helperText="We never share it" />,
    );

    expect(screen.getByText('We never share it')).toBeInTheDocument();

    rerender(
      <Input label="Email" helperText="We never share it" error="Invalid" />,
    );

    expect(screen.queryByText('We never share it')).not.toBeInTheDocument();
    expect(screen.getByText('Invalid')).toBeInTheDocument();
  });

  it('should toggle password visibility', async () => {
    const user = userEvent.setup();

    const { container } = render(<Input label="Password" type="password" />);

    const input = screen.getByLabelText('Password');

    expect(input).toHaveAttribute('type', 'password');

    const toggle = container.querySelector('svg.cursor-pointer');

    await user.click(toggle as Element);

    expect(input).toHaveAttribute('type', 'text');
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = render(
      <Input label="Email" helperText="We never share it" />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
