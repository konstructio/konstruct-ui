import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Toast } from './Toast';
import { ToastProps } from './Toast.types';
import { Button } from '../Button/Button';

describe('Toast', () => {
  const defaultProps: ToastProps = {
    title: 'Default title',
    description: 'Default description',
  };

  const setup = (props?: Partial<ToastProps>) => {
    render(
      <Toast {...defaultProps} {...props}>
        <Button>Show Toast</Button>
      </Toast>,
    );

    const user = userEvent.setup();
    const getButton = () => screen.findByRole('button');
    const getToast = () => screen.findAllByRole('status');

    return {
      user,
      getButton,
      getToast,
    };
  };

  it('should render correctly', async () => {
    const { getButton } = setup();

    const button = await getButton();

    expect(button).toBeInTheDocument();
  });

  it('should render correctly the toast after the user has been clicked the button', async () => {
    const props = {
      title: 'Title',
      description: 'Description',
    } satisfies ToastProps;

    const { user, getButton, getToast } = setup(props);

    const button = await getButton();

    await user.click(button);

    const [toast] = await getToast();

    expect(toast).toHaveTextContent(props.title);
    expect(toast).toHaveTextContent(props.description);
  });

  it('should render the toast but must be hidden after 100ms', async () => {
    const props = {
      title: 'Title',
      description: 'Description',
      duration: 50,
    } satisfies ToastProps;

    const { user, getButton, getToast } = setup(props);

    const button = await getButton();

    await user.click(button);

    const [toast] = await getToast();

    await waitFor(
      () => {
        expect(toast).not.toBeInTheDocument();
      },
      {
        timeout: 100,
      },
    );
  });
});
