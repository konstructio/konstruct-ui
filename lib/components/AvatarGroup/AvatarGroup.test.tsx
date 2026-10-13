import { render, screen, within } from '@testing-library/react';
import { axe } from 'jest-axe';

import { AvatarGroup } from './AvatarGroup';

const items = [
  { id: 1, alt: 'Ada Lovelace', fallback: 'AL' },
  { id: 2, alt: 'Grace Hopper', fallback: 'GH' },
  { id: 3, alt: 'Katherine Johnson', fallback: 'KJ' },
  { id: 4, alt: 'Margaret Hamilton', fallback: 'MH' },
];

describe('AvatarGroup', () => {
  it('should list every avatar when they fit', () => {
    render(<AvatarGroup items={items} />);

    const list = screen.getByRole('list', { name: '4 members' });

    expect(within(list).getAllByRole('img')).toHaveLength(4);
    expect(
      within(list).getByRole('img', { name: 'Ada Lovelace' }),
    ).toBeInTheDocument();
  });

  it('should collapse the avatars beyond max into an overflow bubble', () => {
    render(<AvatarGroup items={items} max={2} />);

    const list = screen.getByRole('list');

    expect(
      within(list).getByRole('img', { name: 'Grace Hopper' }),
    ).toBeInTheDocument();
    expect(
      within(list).queryByRole('img', { name: 'Katherine Johnson' }),
    ).not.toBeInTheDocument();
    expect(
      within(list).getByRole('img', { name: '2 more members' }),
    ).toHaveTextContent('+2');
  });

  it('should render a placeholder without items', () => {
    render(<AvatarGroup items={[]} emptyLabel="Nobody yet" />);

    expect(screen.getByRole('img', { name: 'Nobody yet' })).toHaveTextContent(
      '?',
    );
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = render(<AvatarGroup items={items} max={3} />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
