import {
  ComponentRef,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useToggle } from '@/hooks';

import { MultiSelectDropdownContext } from './MultiSelectDropdown.context';
import { MultiSelectDropdownProviderProps } from './MultiSelectDropdown.types';
import { MultiSelectDropdownOption } from '../MultiSelectDropdown.types';

export const MultiSelectDropdownProvider: FC<
  MultiSelectDropdownProviderProps
> = ({
  children,
  defaultOptions = [],
  multiselect = true,
  value,
  onChange,
  onBlur,
  name,
}) => {
  const inputRef = useRef<ComponentRef<'input'>>(null);
  const [isOpen, setIsOpen] = useToggle(false);
  const [options, setOptions] =
    useState<MultiSelectDropdownOption[]>(defaultOptions);
  const [selectedOptions, setSelectedOptions] = useState<
    MultiSelectDropdownOption[]
  >([]);
  const isControlled = value !== undefined;

  // Sync value prop to selected options
  useEffect(() => {
    if (isControlled) {
      const selected = value || [];
      setSelectedOptions(selected);

      const selectedIdsSet = new Set(selected.map((option) => option.id));
      setOptions(
        multiselect
          ? defaultOptions.filter((option) => !selectedIdsSet.has(option.id))
          : defaultOptions.map((option) => ({
              ...option,
              isSelected: selectedIdsSet.has(option.id),
            })),
      );
    }
  }, [value, isControlled, defaultOptions, multiselect]);

  const handleUpdateInputValue = useCallback(
    (selectedOptions: MultiSelectDropdownOption[]) => {
      // Serialize to JSON for the hidden input (for form submission)
      const values = selectedOptions.map(({ id, value, label }) => ({
        id,
        value: value ?? label,
      }));
      const jsonValue = JSON.stringify(values);

      if (inputRef.current) {
        inputRef.current.value = jsonValue;
      }

      // Call onChange with the array of selected options
      if (onChange) {
        onChange({
          target: {
            value: selectedOptions,
            name: name ?? '',
          },
        });
      }
    },
    [onChange, name],
  );

  const handleOpen = useCallback(
    (value?: boolean) => {
      const wasOpen = isOpen;
      setIsOpen(value);

      // Call onBlur when closing the dropdown
      if (wasOpen && value === false && onBlur) {
        onBlur();
      }
    },
    [isOpen, setIsOpen, onBlur],
  );

  const handleSelectOption = useCallback(
    (option: MultiSelectDropdownOption) => {
      if (isControlled) {
        // In controlled mode, onChange will handle the state update
        const newSelectedOptions = [
          ...(multiselect ? selectedOptions : []),
          option,
        ];
        handleUpdateInputValue(newSelectedOptions);
        handleOpen(false);
        return;
      }

      const newSelectedOptions = [
        ...(multiselect ? selectedOptions : []),
        option,
      ];

      setSelectedOptions(newSelectedOptions);

      const selectedOptionIds = newSelectedOptions.map((option) => option.id);

      setOptions(() => {
        if (!multiselect) {
          return defaultOptions.map((option) => ({
            ...option,
            isSelected: selectedOptionIds.includes(option.id),
          }));
        }

        return defaultOptions.filter(
          (option) => !selectedOptionIds.includes(option.id),
        );
      });

      handleUpdateInputValue(newSelectedOptions);

      handleOpen(false);
    },
    [
      defaultOptions,
      handleUpdateInputValue,
      multiselect,
      selectedOptions,
      handleOpen,
      isControlled,
    ],
  );

  const handleRemoveOption = useCallback(
    (option: MultiSelectDropdownOption) => {
      if (isControlled) {
        // In controlled mode, onChange will handle the state update
        const newSelectedOptions = selectedOptions.filter(
          (o) => o.id !== option.id,
        );
        handleUpdateInputValue(newSelectedOptions);
        return;
      }

      const newSelectedOptions = selectedOptions.filter(
        (o) => o.id !== option.id,
      );

      setSelectedOptions(newSelectedOptions);

      const selectedOptionIds = newSelectedOptions.map((option) => option.id);

      setOptions(() =>
        defaultOptions.filter(
          (option) => !selectedOptionIds.includes(option.id),
        ),
      );

      handleUpdateInputValue(newSelectedOptions);
    },
    [defaultOptions, handleUpdateInputValue, selectedOptions, isControlled],
  );

  return (
    <MultiSelectDropdownContext.Provider
      value={{
        options,
        selectedOptions,
        isOpen,
        inputRef,
        onSelectOption: handleSelectOption,
        onRemoveOption: handleRemoveOption,
        onOpen: handleOpen,
      }}
    >
      {children}
    </MultiSelectDropdownContext.Provider>
  );
};
