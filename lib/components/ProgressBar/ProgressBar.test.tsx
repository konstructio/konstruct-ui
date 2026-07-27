import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
  it('should expose progressbar semantics with the current value', () => {
    render(<ProgressBar percent={40} ariaLabel="Storage usage" />);

    const progressbar = screen.getByRole('progressbar');

    expect(progressbar).toHaveAccessibleName('Storage usage');
    expect(progressbar).toHaveAttribute('aria-valuenow', '40');
    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
  });

  it('should clamp values above 100', () => {
    render(<ProgressBar percent={150} />);

    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '100',
    );
  });

  it('should clamp negative values to 0', () => {
    render(<ProgressBar percent={-20} />);

    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '0',
    );
  });

  it('should announce the status as hidden text', () => {
    render(<ProgressBar percent={80} status="warning" />);

    expect(screen.getByRole('progressbar')).toHaveTextContent('warning');
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = render(
      <ProgressBar percent={40} ariaLabel="Storage usage" />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
