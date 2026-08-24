import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Input } from './Input';

describe('Input', () => {
  it('should associate the label with the input', () => {
    render(<Input label="Email" />);

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('should keep the label associated when a custom id is provided', () => {
    render(<Input label="Email" id="my-id" />);

    expect(screen.getByLabelText('Email')).toHaveAttribute('id', 'my-id');
  });

  it('should mark the label when the field is required', () => {
    render(<Input label="Email" isRequired />);

    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('should expose the required state without polluting the accessible name', () => {
    render(<Input label="Email address" isRequired />);

    const input = screen.getByRole('textbox', { name: 'Email address' });

    expect(input).toHaveAttribute('aria-required', 'true');
  });

  it('should describe the input with its error message', () => {
    render(<Input label="Email" error="Invalid email" />);

    const input = screen.getByLabelText('Email');

    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAccessibleDescription('Invalid email');
  });

  it('should describe the input with its helper text', () => {
    render(<Input label="Email" helperText="We never share it" />);

    const input = screen.getByLabelText('Email');

    expect(input).not.toHaveAttribute('aria-invalid');
    expect(input).toHaveAccessibleDescription('We never share it');
  });

  it('should not treat an empty error string as an error', () => {
    render(<Input label="Email" error="" helperText="We never share it" />);

    const input = screen.getByLabelText('Email');

    expect(input).toHaveAttribute('data-error', 'false');
    expect(input).not.toHaveAttribute('aria-invalid');
    expect(input).toHaveAccessibleDescription('We never share it');
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

    render(<Input label="Password" type="password" />);

    const input = screen.getByLabelText('Password');

    expect(input).toHaveAttribute('type', 'password');

    await user.click(screen.getByRole('button', { name: 'Show password' }));

    expect(input).toHaveAttribute('type', 'text');
    expect(
      screen.getByRole('button', { name: 'Hide password' }),
    ).toBeInTheDocument();
  });

  it('should keep the password toggle available while in error', async () => {
    const user = userEvent.setup();

    render(<Input label="Password" type="password" error="Too short" />);

    const input = screen.getByLabelText('Password');

    expect(input).toHaveAttribute('type', 'password');

    await user.click(screen.getByRole('button', { name: 'Show password' }));

    expect(input).toHaveAttribute('type', 'text');
  });

  it('should not lose focus on the password toggle when an error appears', () => {
    const { rerender } = render(<Input label="Password" type="password" />);

    const toggle = screen.getByRole('button', { name: 'Show password' });
    toggle.focus();

    expect(toggle).toHaveFocus();

    rerender(<Input label="Password" type="password" error="Too short" />);

    expect(screen.getByRole('button', { name: 'Show password' })).toHaveFocus();
  });

  it('should allow overriding the password toggle labels', async () => {
    const user = userEvent.setup();

    render(
      <Input
        label="Password"
        type="password"
        showPasswordLabel="Mostrar contraseña"
        hidePasswordLabel="Ocultar contraseña"
      />,
    );

    await user.click(
      screen.getByRole('button', { name: 'Mostrar contraseña' }),
    );

    expect(
      screen.getByRole('button', { name: 'Ocultar contraseña' }),
    ).toBeInTheDocument();
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = render(
      <Input label="Email" helperText="We never share it" />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
