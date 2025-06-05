import { FC } from 'react';

import { Button } from '@/components/Button/Button';

import { resetEvent } from '../../events';

import { ResetButtonProps } from './ResetButton.types';

export const ResetButton: FC<ResetButtonProps> = ({ disabled }) => (
  <Button
    type="button"
    variant="text"
    appearance="compact"
    version="alternate"
    onClick={resetEvent}
    disabled={disabled}
  >
    Reset
  </Button>
);
