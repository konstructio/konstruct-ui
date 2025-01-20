import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { AlertDialogProps } from './AlertDialog.types';
import { AlertDialog } from './AlertDialog';

describe('AlertDialog', () => {
  const defaultProps = {
    buttonText: 'Click Me!',
    title: 'Title',
    description: 'Description',
  } satisfies AlertDialogProps;

  const setup = (props?: Partial<AlertDialogProps>) => {
    const { container: component } = render(
      <AlertDialog {...defaultProps} {...props} />,
    );

    const user = userEvent.setup();
    const getButton = () =>
      screen.getByRole('button', {
        name: props?.buttonText ?? defaultProps.buttonText,
      });
    const getAlertDialog = () => screen.queryByRole('alertdialog');
    const getButtonCancel = () =>
      screen.getByRole('button', { name: /cancel/i });
    const getButtonOk = () => screen.getByRole('button', { name: /ok/i });

    return {
      component,
      user,
      getButton,
      getAlertDialog,
      getButtonCancel,
      getButtonOk,
    };
  };

  it('should render the component', async () => {
    const { getButton } = setup();
    const button = getButton();

    expect(button).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should render the alert dialog', async () => {
    const title = 'This is a title';
    const description = 'This is a description';

    const { user, getButton, getAlertDialog } = setup({
      title,
      description,
    });

    const button = getButton();

    await user.click(button);

    const alert = getAlertDialog();

    expect(alert).toHaveTextContent(title);
    expect(alert).toHaveTextContent(description);
  });

  it('should hide after call the onConfirm dialog', async () => {
    const onConfirm = vitest.fn();

    const { user, getButton, getButtonOk, getAlertDialog } = setup({
      onConfirm,
    });

    const button = getButton();

    await user.click(button);

    const okButton = getButtonOk();

    await user.click(okButton);

    const alert = getAlertDialog();

    expect(alert).not.toBeInTheDocument();
    expect(onConfirm).toHaveBeenCalled();
  });

  it('should hide the alert dialog after cancel', async () => {
    const { user, getButton, getButtonCancel, getAlertDialog } = setup();

    const button = getButton();

    await user.click(button);

    const cancelButton = getButtonCancel();

    await user.click(cancelButton);

    const alert = getAlertDialog();

    expect(alert).not.toBeInTheDocument();
  });
});
