import { FC, useCallback, useState } from 'react';

import { TagProps } from '@/components/Tag/Tag.types';

import { TagSelectContext } from './TagSelect.context';
import { TagSelectProviderProps } from './TagSelect.types';

export const TagSelectProvider: FC<TagSelectProviderProps> = ({ children }) => {
  const [tags, setTag] = useState<TagProps[]>([]);

  const handleSelectTag = useCallback(
    (tag: TagProps) => {
      const tagIndex = tags.findIndex((t) => t.id === tag.id);

      if (!tagIndex) {
        setTag([...tags, tag]);
      }
    },
    [tags],
  );

  return (
    <TagSelectContext.Provider value={{ tags, onSelectTag: handleSelectTag }}>
      {children}
    </TagSelectContext.Provider>
  );
};
