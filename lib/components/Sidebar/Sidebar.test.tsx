import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactNode } from 'react';

import {
  Footer,
  Logo,
  Navigation,
  NavigationGroup,
  NavigationOption,
  Sidebar,
} from './Sidebar';
import { SidebarProps as SidebarPropsPrimitive } from './Sidebar.types';

type SidebarProps = SidebarPropsPrimitive & { options?: ReactNode };

describe('Sidebar', () => {
  const setup = ({ options, ...props }: SidebarProps = {}) => {
    const defaultProps = {
      minWith: 100,
      maxWith: 400,
      ...props,
    } satisfies SidebarPropsPrimitive;

    const { container: component } = render(
      <Sidebar {...defaultProps}>
        <Logo>Header</Logo>

        <Navigation>
          <NavigationGroup>{options}</NavigationGroup>
        </Navigation>

        <Footer>Footer</Footer>
      </Sidebar>,
    );

    const user = userEvent.setup();

    const getOption = async (optionText: RegExp) => {
      return screen.findByRole('option', { name: new RegExp(optionText, 'i') });
    };

    const getLink = async (linkText: RegExp) => {
      return screen.findByRole('link', { name: new RegExp(linkText, 'i') });
    };

    return {
      user,
      component,
      getOption,
      getLink,
    };
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('should render correctly', () => {
    const { component } = setup();

    expect(component).toBeInTheDocument();
  });

  it('should render the header', () => {
    const { component } = setup();

    expect(component).toHaveTextContent('Header');
  });

  it('should render the footer', () => {
    const { component } = setup();

    expect(component).toHaveTextContent('Footer');
  });

  it('should click on the option when the option has a button role', async () => {
    const mockOnClick = vitest.fn();

    const { getOption, user } = setup({
      options: (
        <NavigationOption role="button" onClick={mockOnClick}>
          Option 1
        </NavigationOption>
      ),
    });

    const option = await getOption(/option 1/i);

    await user.click(option);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should click on the option when the option has a chindren', async () => {
    vi.spyOn(window, 'open').mockImplementation(() => null);

    const mockOnClick = vi.fn();
    const mockUrl = 'https://konstruct.io';

    const { getLink, user } = setup({
      options: (
        <NavigationOption>
          <a href={mockUrl} target="_blank" onClick={mockOnClick}>
            Option 1
          </a>
        </NavigationOption>
      ),
    });

    const link = await getLink(/option 1/i);

    await user.click(link);

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', mockUrl);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
