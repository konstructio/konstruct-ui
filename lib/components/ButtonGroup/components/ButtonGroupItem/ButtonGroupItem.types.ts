import { KeyboardEvent } from 'react';

import { ButtonGroupOption } from '../../ButtonGroup.types';
import { AnimationDirection } from '../../hooks';

export type Props = {
  animationDirection: AnimationDirection;
  className?: string;
  contentClassName?: string;
  descriptionClassName?: string;
  duration?: number;
  hasDescription: boolean;
  index: number;
  isDisabled: boolean;
  isSelected: boolean;
  labelClassName?: string;
  layoutId: string;
  option: ButtonGroupOption;
  pillClassName?: string;
  value: string;
  onKeyDown: (event: KeyboardEvent<HTMLButtonElement>, index: number) => void;
  onSelect: (value: string) => void;
};
