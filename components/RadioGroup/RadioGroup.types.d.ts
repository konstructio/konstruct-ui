import { RadioProps } from '../Radio/Radio.types';
export interface RadioGroupProps {
    asChild?: boolean;
    className?: RadioProps['className'];
    defaultValue?: string;
    label?: string;
    name: string;
    options: Omit<RadioProps, 'name'>[];
    theme?: RadioProps['theme'];
    wrapperClassName?: string;
    onValueChange?: (value: string) => void;
}
