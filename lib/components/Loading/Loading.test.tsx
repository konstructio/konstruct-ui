import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Loading } from './Loading';

describe('Loading', () => {
  it('should expose a status role with an accessible name', () => {
    render(<Loading />);

    expect(screen.getByRole('status')).toHaveAccessibleName('Loading');
  });

  it('should allow overriding the accessible name', () => {
    render(<Loading aria-label="Fetching results" />);

    expect(screen.getByRole('status')).toHaveAccessibleName('Fetching results');
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = render(<Loading />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
