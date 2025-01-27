import { render } from '@testing-library/react';
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
});
