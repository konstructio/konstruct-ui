import { FC, forwardRef } from 'react';

import { Wrapper } from './components';
import { TagSelectProvider } from './contexts';
import { TagSelectProps } from './TagSelect.types';

export const TagSelect: FC<TagSelectProps> = forwardRef<
  HTMLInputElement,
  TagSelectProps
>(({ ...delegated }, ref) => (
  <TagSelectProvider>
    <Wrapper ref={ref} {...delegated} />
  </TagSelectProvider>
));
