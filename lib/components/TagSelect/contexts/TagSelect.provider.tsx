import { FC, useCallback, useState } from 'react';

import { TagProps } from '@/components/Tag/Tag.types';

import { TagSelectContext } from './TagSelect.context';
import { TagSelectProviderProps } from './TagSelect.types';

export const TagSelectProvider: FC<TagSelectProviderProps> = ({ children }) => {
  const [tags, setTags] = useState<TagProps[]>([]);
  const [selectedTags, setSelectedTags] = useState<TagProps[]>([]);

  const handleSelectTag = useCallback(
    (tag: TagProps) => {
      const tagIndex = tags.findIndex((t) => t.id === tag.id);

      if (!tagIndex) {
        setTags([...tags, tag]);
      }
    },
    [tags],
  );

  const handleRemoveTag = useCallback(
    (tag: TagProps) => {
      setSelectedTags(tags.filter((t) => t.id !== tag.id));
    },
    [tags],
  );

  return (
    <TagSelectContext.Provider
      value={{
        tags,
        selectedTags,
        onSelectTag: handleSelectTag,
        onRemoveTag: handleRemoveTag,
      }}
    >
      {children}
    </TagSelectContext.Provider>
  );
};
