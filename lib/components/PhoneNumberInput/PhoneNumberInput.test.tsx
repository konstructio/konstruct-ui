import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { PhoneNumberInput } from './PhoneNumberInput';
import { Props } from './PhoneNumberInput.types';

describe('PhoneNumberInput', () => {
  const defaultProps = {
    label: 'Phone Number',
    name: 'phone',
  } satisfies Props;

  const setup = (props?: Partial<Props>) => {
    const { container: component } = render(
      <PhoneNumberInput {...defaultProps} {...props} />,
    );

    const user = userEvent.setup();
    const getInput = () =>
      screen.getByRole('textbox', { name: 'Phone Number' });
    const getTrigger = () =>
      screen.getByRole('button', { name: /select country/i });
    const getSearchInput = () => screen.getByPlaceholderText('Search');
    const querySearchInput = () => screen.queryByPlaceholderText('Search');

    return {
      component,
      user,
      getInput,
      getTrigger,
      getSearchInput,
      querySearchInput,
    };
  };

  beforeEach(() => {
    vi.clearAllMocks();

    vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(400);
    vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(400);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render the label and the default country prefix', () => {
    const { getInput } = setup();

    expect(screen.getByText('Phone Number')).toBeInTheDocument();
    expect(getInput()).toHaveValue('+1 ');
  });

  it('should update the prefix when a different country is selected', async () => {
    const { user, getInput, getTrigger, getSearchInput, querySearchInput } =
      setup();

    await user.click(getTrigger());
    await user.type(getSearchInput(), 'andorra');

    const option = await screen.findByRole('button', { name: /andorra/i });

    await user.click(option);

    expect(getInput()).toHaveValue('+376 ');
    expect(querySearchInput()).not.toBeInTheDocument();
  });

  it('should call onChange when typing a phone number', async () => {
    const onChange = vi.fn();
    const { user, getInput } = setup({ onChange });

    await user.type(getInput(), '2025550123');

    expect(onChange).toHaveBeenCalled();
  });

  it('should close the country selector when pressing Escape', async () => {
    const { user, getTrigger, getSearchInput, querySearchInput } = setup();

    await user.click(getTrigger());

    expect(getSearchInput()).toBeInTheDocument();

    await user.keyboard('{Escape}');

    expect(querySearchInput()).not.toBeInTheDocument();
  });

  it('should close the country selector when clicking outside', async () => {
    const { user, getTrigger, getSearchInput, querySearchInput } = setup();

    await user.click(getTrigger());

    expect(getSearchInput()).toBeInTheDocument();

    await user.click(document.body);

    expect(querySearchInput()).not.toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });
});
