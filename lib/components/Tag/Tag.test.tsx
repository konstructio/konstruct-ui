import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Tag } from './Tag';

describe('Tag', () => {
  it('should render the label', () => {
    render(<Tag id="1" label="Active" />);

    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('should render as a div by default', () => {
    render(<Tag id="1" label="Active" />);

    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('should render as the element passed in component', () => {
    render(
      <ul>
        <Tag id="1" label="Active" component="li" />
      </ul>,
    );

    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = render(<Tag id="1" label="Active" />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
