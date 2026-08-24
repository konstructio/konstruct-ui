import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Divider } from './Divider';

describe('Divider', () => {
  it('should render as a div by default', () => {
    render(<Divider />);

    expect(screen.queryByRole('separator')).not.toBeInTheDocument();
  });

  it('should expose the separator role when rendered as a hr', () => {
    render(<Divider component="hr" />);

    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = render(<Divider component="hr" />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
