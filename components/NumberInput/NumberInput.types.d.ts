import { VariantProps } from 'class-variance-authority';
import { numberInputVariants } from './NumberInput.variants';
export interface NumberInputProps extends VariantProps<typeof numberInputVariants> {
    className?: string;
    init?: number;
    label?: string;
    max?: number;
    min?: number;
    name?: string;
    onChange?: (value: number) => void;
}
