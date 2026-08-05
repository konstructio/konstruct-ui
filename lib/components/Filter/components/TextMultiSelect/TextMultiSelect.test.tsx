import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Filter } from '../../Filter';
import { Option } from '../../Filter.types';

import { TextMultiSelectProps } from './TextMultiSelect.types';

const options: Option[] = [
  {
    id: 'ubuntu',
    label: 'Ubuntu',
  },
  {
    id: 'debian',
    label: 'Debian',
  },
];

describe('TextMultiSelect', () => {
  const setup = (props?: Partial<TextMultiSelectProps>) => {
    const { container: component } = render(
      <Filter>
        <Filter.TextMultiSelect label="OS" options={options} {...props} />
      </Filter>,
    );

    const user = userEvent.setup();

    const getTriggerButton = async () => {
      return screen.findByRole('button', { name: /os/i });
    };

    const getCheckbox = async (name: string) => {
      return screen.findByRole('checkbox', { name });
    };

    const getApplyButton = async () => {
      return screen.findByRole('button', { name: /apply/i });
    };

    return {
      component,
      user,
      getApplyButton,
      getCheckbox,
      getTriggerButton,
    };
  };

  it('should render the component', async () => {
    const { component } = setup();

    expect(component).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should re-check every option when checking select all after unchecking an option', async () => {
    const { user, getTriggerButton, getCheckbox } = setup();

    await user.click(await getTriggerButton());
    await user.click(await getCheckbox('All'));
    await user.click(await getCheckbox('Ubuntu'));

    expect(await getCheckbox('Ubuntu')).not.toBeChecked();
    expect(await getCheckbox('All')).not.toBeChecked();

    await user.click(await getCheckbox('All'));

    expect(await getCheckbox('Ubuntu')).toBeChecked();
    expect(await getCheckbox('Debian')).toBeChecked();
  });

  it('should uncheck every option when unchecking the select all checkbox', async () => {
    const { user, getTriggerButton, getCheckbox } = setup();

    await user.click(await getTriggerButton());
    await user.click(await getCheckbox('All'));
    await user.click(await getCheckbox('All'));

    expect(await getCheckbox('Ubuntu')).not.toBeChecked();
    expect(await getCheckbox('Debian')).not.toBeChecked();
  });

  it('should apply every option after select all and none after unchecking it', async () => {
    const mockOnApply = vi.fn();
    const { user, getTriggerButton, getCheckbox, getApplyButton } = setup({
      onApply: mockOnApply,
    });

    await user.click(await getTriggerButton());
    await user.click(await getCheckbox('All'));
    await user.click(await getApplyButton());

    expect(mockOnApply).toHaveBeenCalledWith([
      { id: 'ubuntu', label: 'Ubuntu' },
      { id: 'debian', label: 'Debian' },
    ]);

    await user.click(await getTriggerButton());
    await user.click(await getCheckbox('All'));
    await user.click(await getApplyButton());

    expect(mockOnApply).toHaveBeenLastCalledWith([]);
  });

  it('should hide the select all checkbox when showSelectAll is false', async () => {
    const { user, getTriggerButton } = setup({ showSelectAll: false });

    await user.click(await getTriggerButton());

    expect(
      screen.queryByRole('checkbox', { name: 'All' }),
    ).not.toBeInTheDocument();
  });
});
