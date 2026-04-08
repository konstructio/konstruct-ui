import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes, ReactNode } from '../../../../node_modules/react';
import { Props as TypographyProps } from '../../../components/Typography/Typography.types';
import { Theme } from '../../../domain/theme';
import { spinnerVariants } from './Spinner.variants';
export type Props = HTMLAttributes<HTMLDivElement> & VariantProps<typeof spinnerVariants> & {
    spinnerClassName?: string;
    textClassName?: string;
    textVariant?: TypographyProps['variant'];
    text?: string | ReactNode;
    srLabel?: string;
    theme?: Theme;
};
/** @deprecated Use Props instead */
export type SpinnerProps = Props;
