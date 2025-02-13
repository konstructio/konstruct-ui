import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Alert } from './Alert';
import { AlertProps } from './Alert.types';

describe('Alert', () => {
  const setup = (props?: Partial<AlertProps>) => {
    const defaultProps = {
      content: <p>default text</p>,
    } satisfies AlertProps;

    const { container } = render(<Alert {...defaultProps} {...props} />);

    const user = userEvent.setup();

    const getText = async (text: string | RegExp) =>
      screen.findByText(new RegExp(text, 'i'));
    const getCloseButton = async () =>
      screen.findByRole('button', { name: /dismiss alert/i });
    const getAlert = async () => screen.getByRole('alert');

    return {
      component: container,
      user,
      getText,
      getCloseButton,
      getAlert,
    };
  };

  it('should render the component', () => {
    const { component } = setup();

    expect(component).toBeInTheDocument();
  });

  it('should render the default test', async () => {
    const { getText } = setup();

    const text = await getText(/default text/i);

    expect(text).toBeInTheDocument();
  });

  it('should render the component without close button', async () => {
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

  it('should remove after click on close button', async () => {
    const { user, getAlert, getCloseButton } = setup({
      showCloseButton: true,
    });

    const closeButton = await getCloseButton();

    await user.click(closeButton);

    const alert = await getAlert();

    expect(alert.getAttribute('data-state')).toBe('hidden');
  });
});
