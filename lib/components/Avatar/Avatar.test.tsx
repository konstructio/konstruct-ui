import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('should render the image named after alt', () => {
    render(<Avatar alt="Ada Lovelace" src="/ada.png" fallback="AL" />);

    const avatar = screen.getByRole('img', { name: 'Ada Lovelace' });

    expect(avatar.querySelector('img')).toHaveAttribute('src', '/ada.png');
    expect(screen.queryByText('AL')).not.toBeInTheDocument();
  });

  it('should fall back to the initials when the image fails and recover with a new source', () => {
    const { rerender } = render(
      <Avatar alt="Ada Lovelace" src="/broken.png" fallback="AL" />,
    );

    fireEvent.error(screen.getByRole('img').querySelector('img')!);

    expect(screen.getByText('AL')).toBeInTheDocument();

    rerender(<Avatar alt="Ada Lovelace" src="/ada.png" fallback="AL" />);

    expect(screen.getByRole('img').querySelector('img')).toHaveAttribute(
      'src',
      '/ada.png',
    );
  });

  it('should render the initials without an image and the icon without initials', () => {
    const { rerender } = render(<Avatar alt="Ada Lovelace" fallback="AL" />);

    expect(screen.getByText('AL')).toBeInTheDocument();

    rerender(<Avatar alt="Ada Lovelace" />);

    expect(
      screen.getByRole('img', { name: 'Ada Lovelace' }),
    ).toBeInTheDocument();
    expect(screen.queryByText('AL')).not.toBeInTheDocument();
    expect(screen.getByRole('img').querySelector('svg')).toBeInTheDocument();
  });

  it('should look up a Gravatar for the email', async () => {
    const digest = vi.fn(async (_algorithm: string, _data: Uint8Array) => {
      return new Uint8Array([1, 171, 255]).buffer;
    });
    vi.stubGlobal('crypto', { subtle: { digest } });

    render(
      <Avatar alt="Ada Lovelace" email=" Ada@Example.com " fallback="AL" />,
    );

    await waitFor(() => {
      expect(screen.getByRole('img').querySelector('img')).toHaveAttribute(
        'src',
        'https://gravatar.com/avatar/01abff?d=404&s=80',
      );
    });
    expect(new TextDecoder().decode(digest.mock.calls[0][1])).toBe(
      'ada@example.com',
    );

    vi.unstubAllGlobals();
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = render(
      <div>
        <Avatar alt="Ada Lovelace" src="/ada.png" />
        <Avatar alt="Grace Hopper" fallback="GH" size="lg" />
        <Avatar alt="Unknown" />
      </div>,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
