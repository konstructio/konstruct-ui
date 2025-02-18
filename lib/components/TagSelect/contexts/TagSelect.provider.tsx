import { ComponentRef, FC, useCallback, useRef, useState } from 'react';

import { useToggle } from '@/hooks';
import { TagProps } from '@/components/Tag/Tag.types';

import { TagSelectContext } from './TagSelect.context';
import { TagSelectProviderProps } from './TagSelect.types';

export const TagSelectProvider: FC<TagSelectProviderProps> = ({
  children,
  defaultOptions = [],
  multiselect = true,
}) => {
  const inputRef = useRef<ComponentRef<'input'>>(null);
  const [isOpen, setIsOpen] = useToggle(false);
  const [tags, setTags] = useState<TagProps[]>(defaultOptions);
  const [selectedTags, setSelectedTags] = useState<TagProps[]>([]);

  const handleUpdateInputValue = useCallback((selectedTags: TagProps[]) => {
    if (inputRef.current) {
      const values = selectedTags.map(({ id, label }) => ({
        id,
        value: label,
      }));

      inputRef.current.value = JSON.stringify(values);
    }
  }, []);

  const handleSelectTag = useCallback(
    (tag: TagProps) => {
      const newSelectedTags = [...(multiselect ? selectedTags : []), tag];

      setSelectedTags(newSelectedTags);

      const selectedTagsIds = newSelectedTags.map((tag) => tag.id);

      setTags(() => {
        if (!multiselect) {
          return defaultOptions.map((tag) => ({
            ...tag,
            isSelected: selectedTagsIds.includes(tag.id),
          }));
        }

        return defaultOptions.filter(
          (tag) => !selectedTagsIds.includes(tag.id),
        );
      });

      handleUpdateInputValue(newSelectedTags);

      setIsOpen(false);
    },
    [
      defaultOptions,
      handleUpdateInputValue,
      multiselect,
      selectedTags,
      setIsOpen,
    ],
  );

  const handleRemoveTag = useCallback(
    (tag: TagProps) => {
      const newSelectedTags = selectedTags.filter((t) => t.id !== tag.id);

      setSelectedTags(newSelectedTags);

      const selectedTagsIds = newSelectedTags.map((tag) => tag.id);

      setTags(() =>
        defaultOptions.filter((tag) => !selectedTagsIds.includes(tag.id)),
      );

      handleUpdateInputValue(newSelectedTags);
    },
    [defaultOptions, handleUpdateInputValue, selectedTags],
  );

  const handleOpen = useCallback(
    (value?: boolean) => setIsOpen(value),
    [setIsOpen],
  );

  return (
    <TagSelectContext.Provider
      value={{
        tags,
        selectedTags,
        isOpen,
        inputRef,
        onSelectTag: handleSelectTag,
        onRemoveTag: handleRemoveTag,
        onOpen: handleOpen,
      }}
    >
      {children}
    </TagSelectContext.Provider>
  );
};
