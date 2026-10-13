import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { EmptyState } from './EmptyState';

describe('EmptyState', () => {
  it('should render the title as a heading with the description', () => {
    render(
      <EmptyState
        title="No clusters yet"
        description="Create your first cluster to get started."
      />,
    );

    expect(
      screen.getByRole('heading', { level: 2, name: 'No clusters yet' }),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Create your first cluster to get started.'),
    ).toBeInTheDocument();
  });

  it('should render the image and the action when provided', () => {
    render(
      <EmptyState
        title="No clusters yet"
        image={<img alt="Empty shelf" src="empty.svg" />}
        action={<button type="button">Create cluster</button>}
      />,
    );

    expect(
      screen.getByRole('img', { name: 'Empty shelf' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Create cluster' }),
    ).toBeInTheDocument();
  });

  it('should not render an empty description or action', () => {
    render(<EmptyState title="No clusters yet" />);

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(screen.queryByRole('paragraph')).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = render(
      <EmptyState
        title="No clusters yet"
        description="Create your first cluster to get started."
        action={<button type="button">Create cluster</button>}
      />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
