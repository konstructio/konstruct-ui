'use client';
import { FC, forwardRef } from 'react';

import { Wrapper } from './components';
import { TagSelectProvider } from './contexts';
import { TagSelectProps } from './TagSelect.types';

export const TagSelect: FC<TagSelectProps> = forwardRef<
  HTMLInputElement,
  TagSelectProps
>(({ options, multiselect, ...delegated }, ref) => (
  <TagSelectProvider defaultOptions={options} multiselect={multiselect}>
    <Wrapper ref={ref} {...delegated} />
  </TagSelectProvider>
));
