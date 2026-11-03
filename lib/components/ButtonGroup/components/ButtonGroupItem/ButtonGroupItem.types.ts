import { KeyboardEvent } from 'react';

import {
  ButtonGroupOption,
  ButtonGroupVariant,
  TextAlign,
} from '../../ButtonGroup.types';
import { AnimationDirection } from '../../hooks';

export type Props = {
  animationDirection: AnimationDirection;
  className?: string;
  contentClassName?: string;
  descriptionAlign?: TextAlign;
  descriptionClassName?: string;
  duration?: number;
  labelAlign?: TextAlign;
  hasDescription: boolean;
  index: number;
  isDisabled: boolean;
  isFirst: boolean;
  isLast: boolean;
  isSelected: boolean;
  labelClassName?: string;
  option: ButtonGroupOption;
  value: string;
  variant?: ButtonGroupVariant;
  onKeyDown: (event: KeyboardEvent<HTMLButtonElement>, index: number) => void;
  onSelect: (value: string) => void;
};
