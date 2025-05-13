import { FC } from 'react';

import { Button } from '@/components/Button/Button';
import { cn } from '@/utils';

import { FilterProps } from './Filter.types';
import { filterVariants } from './Filter.variants';
import { Created, Status, Type } from './components';

export const Filter: FC<FilterProps> = ({
  className,
  statusOptions = [],
  onSelectStatus,
}) => (
  <div className={cn(filterVariants({ className }))} data-theme="civo">
    <Status options={statusOptions} onSelectStatus={onSelectStatus} />

    <Created />

    <Type />

    <Button
      type="button"
      variant="text"
      appearance="compact"
      version="alternate"
    >
      Reset
    </Button>
  </div>
);
