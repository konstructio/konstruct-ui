import { FC, forwardRef } from 'react';

import { Wrapper } from './components';
import { TagSelectProvider } from './contexts';
import { TagSelectProps } from './TagSelect.types';

export const TagSelect: FC<TagSelectProps> = forwardRef<
  HTMLInputElement,
  TagSelectProps
>(({ options, ...delegated }, ref) => (
  <TagSelectProvider defaultOptions={options}>
    <Wrapper ref={ref} {...delegated} />
  </TagSelectProvider>
));
