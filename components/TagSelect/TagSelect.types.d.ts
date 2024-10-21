import { VariantProps } from 'class-variance-authority';
import { TagProps } from '../Tag/Tag.types';
import { tagSelectVariants } from './TagSelect.variants';
export interface TagSelectProps extends VariantProps<typeof tagSelectVariants> {
    label?: string;
    options: TagProps[];
    name?: string;
    placeholder?: string;
}
