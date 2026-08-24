import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { CardProps } from './Card.types';
import { Card } from './Card';

describe('Test for Card component', () => {
  const defaultProps = {
    children: (
      <>
        <header>Header</header>
        <div>Body</div>
        <footer>Footer</footer>
      </>
    ),
  } satisfies CardProps;

  const setup = (props?: Partial<CardProps>) => {
    const { container } = render(<Card {...defaultProps} {...props} />);

    return {
      component: container,
    };
  };

  it('should render the component', () => {
    const { component } = setup();

    expect(component).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should render as a div by default', () => {
    setup();

    expect(screen.queryByRole('article')).not.toBeInTheDocument();
  });

  it('should render as the element passed in component', () => {
    render(
      <Card component="article" aria-labelledby="account-name">
        <h3 id="account-name">Production</h3>
      </Card>,
    );

    expect(
      screen.getByRole('article', { name: 'Production' }),
    ).toBeInTheDocument();
  });

  it("shouldn't have violations when rendered as a named article", async () => {
    const { container } = render(
      <Card component="article" aria-label="Production">
        Body
      </Card>,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
