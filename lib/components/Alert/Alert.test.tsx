import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Alert } from './Alert';
import { AlertProps } from './Alert.types';

describe('Alert', () => {
  const setup = (props?: Partial<AlertProps>) => {
    const defaultProps = {
      title: 'Alert title',
      type: 'info',
    } satisfies AlertProps;

    const { container } = render(<Alert {...defaultProps} {...props} />);

    const user = userEvent.setup();

    const getAlert = () => screen.getByRole('alert');
    const getCloseButton = () =>
      screen.findByRole('button', { name: /dismiss alert/i });

    return {
      component: container,
      user,
      getAlert,
      getCloseButton,
    };
  };

  it('should render the component', () => {
    const { component } = setup();

    expect(component).toBeInTheDocument();
  });

  it('should render the title', () => {
    setup({ title: 'Test title' });

    expect(screen.getByText('Test title')).toBeInTheDocument();
  });

  it('should render the title and description', () => {
    setup({ title: 'Test title', description: 'Test description' });

    expect(screen.getByText('Test title')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('should render description as ReactNode', () => {
    setup({
      title: 'Test title',
      description: <span data-testid="custom">Custom content</span>,
    });

    expect(screen.getByTestId('custom')).toBeInTheDocument();
  });

  it('should render the component without close button', () => {
    setup();

    expect(
      screen.queryByRole('button', { name: /dismiss alert/i }),
    ).not.toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should set hidden state after click on close button', async () => {
    const { user, getAlert, getCloseButton } = setup({
      showCloseButton: true,
    });

    const closeButton = await getCloseButton();

    await user.click(closeButton);

    const alert = getAlert();

    expect(alert.getAttribute('data-state')).toBe('hidden');
  });

  it.each(['success', 'info', 'warning', 'danger'] as const)(
    'should render the %s variant with an icon',
    (type) => {
      setup({ type, title: `${type} alert` });

      const alert = screen.getByRole('alert');

      expect(alert).toBeInTheDocument();
      expect(alert.querySelector('svg')).toBeInTheDocument();
    },
  );
});
