import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Autocomplete } from './Autocomplete';
import { AutocompleteProps } from './Autocomplete.types';

describe('Autocomplete', () => {
  const defaultProps = {
    options: [
      {
        value: 'Option 1',
      },
      {
        value: 'Option 2',
      },
      {
        value: 'Option 3',
      },
    ],
    onChange: () => {},
  } satisfies AutocompleteProps;

  const setup = (props?: Partial<AutocompleteProps>) => {
    render(<Autocomplete {...defaultProps} {...props} />);

    const user = userEvent.setup();
    const getInput = () => screen.findByRole('combobox');
    const getOptions = () => screen.findAllByRole('option');
    const getQueryOptions = () => screen.queryAllByRole('option');
    const getText = (value: string) =>
      screen.findByText(new RegExp(value, 'i'));

    return {
      user,
      getInput,
      getOptions,
      getText,
      getQueryOptions,
    };
  };

  it('should render correctly', async () => {
    const { getInput } = setup();

    const input = await getInput();

    expect(input).toBeInTheDocument();
  });

  it('should show all the options when the input is focused', async () => {
    const { user, getInput, getOptions } = setup();

    const input = await getInput();

    await user.click(input);

    const options = await getOptions();

    expect(options).toHaveLength(defaultProps.options.length);

    for (const option of defaultProps.options) {
      expect(screen.getByText(option.value)).toBeInTheDocument();
    }
  });

  it('should how the user select the first option through the keyboard', async () => {
    const onChangeMock = vitest.fn();
    const { user, getInput } = setup({ onChange: onChangeMock });

    const input = await getInput();

    await user.click(input);
    await user.keyboard('[ArrowDown]');
    await user.keyboard('[Enter]');

    expect(onChangeMock).toHaveBeenCalledWith(defaultProps.options[0].value);
  });

  it('should how the user select the second option through the keyboard', async () => {
    const onChangeMock = vitest.fn();
    const { user, getInput } = setup({ onChange: onChangeMock });

    const input = await getInput();

    await user.click(input);
    await user.keyboard('[ArrowDown]');
    await user.keyboard('[ArrowDown]');
    await user.keyboard('[Enter]');

    expect(onChangeMock).toHaveBeenCalledWith(defaultProps.options[1].value);
  });

  it('should show nothing to show when there are no options', async () => {
    const TEXT_TO_FIND_EMPTY_VALUES = 'There are not options...';
    const { user, getInput, getText } = setup({
      placeHolderEmptyValues: TEXT_TO_FIND_EMPTY_VALUES,
    });

    const input = await getInput();

    await user.click(input);
    await user.keyboard('Option NOT VALID');

    const text = await getText(TEXT_TO_FIND_EMPTY_VALUES);

    expect(text).toBeInTheDocument();
  });

  it('should close the autocomplete when the user press Esc', async () => {
    const { user, getInput, getQueryOptions } = setup();

    const input = await getInput();

    await user.click(input);

    await user.keyboard('[Escape]');

    const options = getQueryOptions();

    expect(options).toHaveLength(0);
  });
});
