import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { BadgeGroup } from './BadgeGroup';

const items = [
  { id: 1, label: 'web' },
  { id: 2, label: 'database' },
  { id: 3, label: 'staging' },
  { id: 4, label: 'europe' },
  { id: 5, label: 'critical' },
];

describe('BadgeGroup', () => {
  it('should render every badge when nothing limits them', () => {
    render(<BadgeGroup items={items} />);

    items.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should collapse the badges beyond maxVisible into an overflow badge with a tooltip', async () => {
    const user = userEvent.setup();

    render(<BadgeGroup items={items} maxVisible={2} />);

    expect(screen.getByText('web')).toBeInTheDocument();
    expect(screen.getByText('database')).toBeInTheDocument();
    expect(screen.queryByText('staging')).not.toBeInTheDocument();

    const overflow = screen.getByRole('button', { name: 'Show 3 more' });

    expect(overflow).toHaveTextContent('+3');

    await user.hover(overflow);

    expect(await screen.findByRole('tooltip')).toHaveTextContent(
      'staging, europe, critical',
    );
  });

  it('should list every label for assistive technology when collapsed', () => {
    render(<BadgeGroup items={items} maxVisible={1} />);

    expect(
      screen.getByText('web, database, staging, europe, critical'),
    ).toHaveClass('sr-only');
  });

  it('should support a custom overflow label and tooltip content', async () => {
    const user = userEvent.setup();

    render(
      <BadgeGroup
        items={items}
        maxVisible={4}
        overflowLabel={(count) => `${count} etiqueta más`}
        renderOverflow={(hidden) => (
          <strong>{hidden[0].label.toUpperCase()}</strong>
        )}
      />,
    );

    const overflow = screen.getByRole('button', { name: '1 etiqueta más' });

    await user.hover(overflow);

    expect(await screen.findByRole('tooltip')).toHaveTextContent('CRITICAL');
  });

  it('should render nothing without items', () => {
    const { container } = render(<BadgeGroup items={[]} maxVisible={2} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('should show every badge when the width cannot be measured', () => {
    render(<BadgeGroup items={items} maxWidth={120} />);

    items.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = render(<BadgeGroup items={items} maxVisible={2} />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
