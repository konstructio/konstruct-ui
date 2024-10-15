import { FC } from 'react';

import { TagProps } from './Tag.types';
import { tagVariants } from './Tag.variants';

export const Tag: FC<TagProps> = ({ label, color }) => (
  <div className={tagVariants({ color })}>
    <span className="text-inherit">{label}</span>
  </div>
);
