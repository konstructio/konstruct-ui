import { InputHTMLAttributes } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { textAreaVariants } from './TextArea.variants';
export interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textAreaVariants> {
    rows?: number;
    label?: string;
    name?: string;
    initialValue?: string;
    onChange?: () => void;
}
