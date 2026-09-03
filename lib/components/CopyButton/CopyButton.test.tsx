import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { CopyButton } from './CopyButton';
import { Props } from './CopyButton.types';

describe('CopyButton', () => {
  const defaultProps = {
    text: '192.168.0.1',
    label: 'Public IP',
  } satisfies Props;

  const setup = (props?: Partial<Props>) => {
    const user = userEvent.setup();
    const { container: component } = render(
      <CopyButton {...defaultProps} {...props} />,
    );

    const getButton = (name = 'Copy Public IP') => {
      return screen.getByRole('button', { name });
    };

    return { component, user, getButton };
  };

  it('should render a button named after the copy and field labels', () => {
    const { getButton } = setup();

    expect(getButton()).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should write the text to the clipboard when clicked', async () => {
    const { user, getButton } = setup();

    await user.click(getButton());

    expect(await navigator.clipboard.readText()).toBe('192.168.0.1');
  });

  it('should announce and show the copied label after copying', async () => {
    const { user, getButton } = setup();

    await user.click(getButton());

    expect(await screen.findByRole('status')).toHaveTextContent('Copied!');
    expect(await screen.findByRole('tooltip')).toHaveTextContent('Copied!');
  });

  it('should clear the copied state after the reset delay', async () => {
    const onCopy = vitest.fn();
    const { user, getButton } = setup({ onCopy, resetDelay: 50 });

    await user.click(getButton());

    expect(onCopy).toHaveBeenCalledWith('192.168.0.1');

    await waitFor(() => {
      expect(screen.getByRole('status')).toBeEmptyDOMElement();
    });
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('should show the copy label in the tooltip on hover', async () => {
    const { user, getButton } = setup();

    await user.hover(getButton());

    expect(await screen.findByRole('tooltip')).toHaveTextContent('Copy');
  });

  it('should use the custom copy and copied labels', async () => {
    const { user, getButton } = setup({
      copyLabel: 'Copiar',
      copiedLabel: '¡Copiado!',
    });

    await user.click(getButton('Copiar Public IP'));

    expect(await screen.findByRole('status')).toHaveTextContent('¡Copiado!');
  });

  it('should call onCopy with the copied text', async () => {
    const onCopy = vitest.fn();
    const { user, getButton } = setup({ onCopy });

    await user.click(getButton());

    expect(onCopy).toHaveBeenCalledWith('192.168.0.1');
  });

  it('should call onCopyError and stay silent when the clipboard fails', async () => {
    const onCopy = vitest.fn();
    const onCopyError = vitest.fn();
    const error = new Error('denied');
    const { user, getButton } = setup({ onCopy, onCopyError });

    vitest.spyOn(navigator.clipboard, 'writeText').mockRejectedValue(error);

    await user.click(getButton());

    expect(onCopyError).toHaveBeenCalledWith(error);
    expect(onCopy).not.toHaveBeenCalled();
    expect(screen.getByRole('status')).toBeEmptyDOMElement();
  });

  it('should render the children instead of the icon', () => {
    const { getButton } = setup({ children: 'my-volume' });

    expect(getButton()).toHaveTextContent('my-volume');
  });

  it('should not propagate the click to the parent', async () => {
    const onParentClick = vitest.fn();
    const user = userEvent.setup();

    render(
      <div onClick={onParentClick}>
        <CopyButton {...defaultProps} />
      </div>,
    );

    await user.click(screen.getByRole('button', { name: 'Copy Public IP' }));

    expect(onParentClick).not.toHaveBeenCalled();
  });
});
