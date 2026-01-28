import { HelpIcon } from '@/assets/icons/components';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';
import { ButtonProps } from './Button.types';

describe('Button', () => {
  const setup = (props?: ButtonProps) => {
    const defaultProps = {
      children: 'Button Text',
      role: 'button',
      ...props,
    } satisfies ButtonProps;

    render(<Button {...defaultProps}></Button>);

    const user = userEvent.setup();

    const button = screen.getByRole('button');

    return {
      user,
      button,
    };
  };

  it('should render the component', () => {
    const { button } = setup();

    expect(button).toBeInTheDocument();
  });

  it('should render the component with the title', () => {
    const { button } = setup({ children: 'Konstruct' });

    expect(button).toHaveTextContent(/konstruct/i);
  });

  it('should render the component with the disabled state', () => {
    const { button } = setup({ disabled: true });

    expect(button).toBeDisabled();
  });

  it('should render the component with circle shape', () => {
    const { button } = setup({ shape: 'circle', children: <HelpIcon /> });

    expect(button).toHaveClass('rounded-full');
  });

  it('should click the button', async () => {
    const mockOnClick = vitest.fn();

    const { button, user } = setup({ onClick: mockOnClick });

    await user.click(button);

    expect(button).toBeEnabled();
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('should cannot click the button when disabled', async () => {
    const mockOnClick = vitest.fn();

    const { button, user } = setup({ onClick: mockOnClick, disabled: true });

    await user.click(button);

    expect(button).toBeDisabled();
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
