import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { ConfirmDialog } from './ConfirmDialog';
import { Props } from './ConfirmDialog.types';

describe('ConfirmDialog', () => {
  const defaultProps = {
    isOpen: true,
    title: 'Delete prod-cluster?',
    description: 'This cannot be undone.',
    confirmLabel: 'Yes, delete',
    onClose: vi.fn(),
    onConfirm: vi.fn(),
  } satisfies Props;

  const setup = (props?: Partial<Props>) => {
    const onClose = vi.fn();
    const onConfirm = vi.fn();
    const user = userEvent.setup();
    const utils = render(
      <ConfirmDialog
        {...defaultProps}
        onClose={onClose}
        onConfirm={onConfirm}
        {...props}
      />,
    );

    return {
      ...utils,
      user,
      onClose,
      onConfirm,
      getConfirm: () => screen.getByRole('button', { name: 'Yes, delete' }),
      getCancel: () => screen.getByRole('button', { name: 'Cancel' }),
    };
  };

  it('should render the title and description inside a dialog', () => {
    setup();

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Delete prod-cluster?' }),
    ).toBeInTheDocument();
    expect(screen.getByText('This cannot be undone.')).toBeInTheDocument();
  });

  it('should confirm and cancel without a confirmation text', async () => {
    const { user, onClose, onConfirm, getConfirm, getCancel } = setup();

    await user.click(getConfirm());

    expect(onConfirm).toHaveBeenCalledTimes(1);

    await user.click(getCancel());

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  describe('with confirmationText', () => {
    it('should enable the confirm button only when the exact text is typed', async () => {
      const { user, onConfirm, getConfirm } = setup({
        confirmationText: 'prod-cluster',
      });

      const input = screen.getByRole('textbox', {
        name: 'Type prod-cluster to confirm',
      });

      expect(getConfirm()).toBeDisabled();

      await user.type(input, 'prod-clus');

      expect(getConfirm()).toBeDisabled();

      await user.type(input, 'ter');

      expect(getConfirm()).toBeEnabled();

      await user.keyboard('{Enter}');

      expect(onConfirm).toHaveBeenCalledTimes(1);
    });

    it('should offer to copy the confirmation text', () => {
      setup({ confirmationText: 'prod-cluster' });

      expect(
        screen.getByRole('button', { name: 'Copy prod-cluster' }),
      ).toBeInTheDocument();
    });

    it('should clear the typed text when reopened', async () => {
      const { user, rerender, onClose, onConfirm } = setup({
        confirmationText: 'prod-cluster',
      });

      await user.type(
        screen.getByRole('textbox', { name: 'Type prod-cluster to confirm' }),
        'prod-cluster',
      );

      rerender(
        <ConfirmDialog
          {...defaultProps}
          confirmationText="prod-cluster"
          isOpen={false}
          onClose={onClose}
          onConfirm={onConfirm}
        />,
      );
      rerender(
        <ConfirmDialog
          {...defaultProps}
          confirmationText="prod-cluster"
          isOpen
          onClose={onClose}
          onConfirm={onConfirm}
        />,
      );

      expect(
        screen.getByRole('textbox', { name: 'Type prod-cluster to confirm' }),
      ).toHaveValue('');
      expect(
        screen.getByRole('button', { name: 'Yes, delete' }),
      ).toBeDisabled();
    });
  });

  describe('isPending', () => {
    it('should disable both buttons, show the pending label and ignore close requests', async () => {
      const { user, onClose, getCancel } = setup({
        isPending: true,
        pendingLabel: 'Deleting…',
      });

      const confirm = screen.getByRole('button', { name: 'Deleting…' });

      expect(confirm).toBeDisabled();
      expect(getCancel()).toBeDisabled();

      await user.keyboard('{Escape}');

      expect(onClose).not.toHaveBeenCalled();
    });
  });

  it("shouldn't have accessibility violations", async () => {
    setup({ confirmationText: 'prod-cluster' });

    const results = await axe(screen.getByRole('dialog'));

    expect(results).toHaveNoViolations();
  });
});
