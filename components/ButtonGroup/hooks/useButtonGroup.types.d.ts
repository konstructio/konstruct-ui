import { KeyboardEvent, RefObject } from '../../../../node_modules/react';
import { ButtonGroupOption } from '../ButtonGroup.types';
export type AnimationDirection = 'left' | 'right' | 'none';
export type UseButtonGroupProps = {
    defaultValue?: string;
    disabled?: boolean;
    options: ButtonGroupOption[];
    value?: string;
    onValueChange?: (value: string) => void;
};
export type UseButtonGroupReturn = {
    animationDirection: AnimationDirection;
    groupRef: RefObject<HTMLDivElement | null>;
    id: string;
    selected: string | undefined;
    handleKeyDown: (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => void;
    handleSelect: (value: string) => void;
};
