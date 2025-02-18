import { FC, useCallback, useState } from 'react';

import { useToggle } from '@/hooks';
import { TagProps } from '@/components/Tag/Tag.types';

import { TagSelectContext } from './TagSelect.context';
import { TagSelectProviderProps } from './TagSelect.types';

export const TagSelectProvider: FC<TagSelectProviderProps> = ({
  children,
  defaultOptions = [],
}) => {
  const [isOpen, setIsOpen] = useToggle(false);
  const [tags, setTags] = useState<TagProps[]>(defaultOptions);
  const [selectedTags, setSelectedTags] = useState<TagProps[]>([]);

  const handleSelectTag = useCallback(
    (tag: TagProps) => {
      const newSelectedTags = [...selectedTags, tag];

      setSelectedTags(newSelectedTags);

      const selectedTagsIds = newSelectedTags.map((tag) => tag.id);

      setTags(() =>
        defaultOptions.filter((tag) => !selectedTagsIds.includes(tag.id)),
      );

      setIsOpen(false);
    },
    [defaultOptions, selectedTags, setIsOpen],
  );

  const handleRemoveTag = useCallback(
    (tag: TagProps) => {
      const newSelectedTags = selectedTags.filter((t) => t.id !== tag.id);

      setSelectedTags(newSelectedTags);

      const selectedTagsIds = newSelectedTags.map((tag) => tag.id);

      setTags(() =>
        defaultOptions.filter((tag) => !selectedTagsIds.includes(tag.id)),
      );
    },
    [defaultOptions, selectedTags],
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
        onSelectTag: handleSelectTag,
        onRemoveTag: handleRemoveTag,
        onOpen: handleOpen,
      }}
    >
      {children}
    </TagSelectContext.Provider>
  );
};
