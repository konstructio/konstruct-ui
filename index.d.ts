import { ButtonHTMLAttributes } from '../../../node_modules/react';
import { ClassProp } from 'class-variance-authority/types';
import { Config } from 'tailwindcss/types/config';
import { Context } from '../../node_modules/react';
import { FC } from '../../../node_modules/react';
import { FC as FC_2 } from '../../../../../node_modules/react';
import { FC as FC_3 } from '../../node_modules/react';
import { ForwardRefExoticComponent } from '../../../node_modules/react';
import { FunctionComponent } from '../../../node_modules/react';
import { HTMLAttributes } from '../../../node_modules/react';
import { HTMLAttributes as HTMLAttributes_2 } from '../../../../../node_modules/react';
import { HtmlHTMLAttributes } from '../../../../../node_modules/react';
import { InputHTMLAttributes } from '../../../node_modules/react';
import { PluginCreator } from 'tailwindcss/types/config';
import { PropsWithChildren } from '../../../node_modules/react';
import { PropsWithChildren as PropsWithChildren_2 } from '../../../../../node_modules/react';
import { PropsWithChildren as PropsWithChildren_3 } from '../../node_modules/react';
import { ReactNode } from '../../../node_modules/react';
import { ReactNode as ReactNode_2 } from '../../../../../node_modules/react';
import { RefAttributes } from '../../../node_modules/react';
import { SliderProps } from '@radix-ui/react-slider';
import { VariantProps } from 'class-variance-authority';

export declare const Alert: FC<AlertProps>;

export declare const AlertDialog: FC<AlertDialogProps>;

declare interface AlertDialogProps extends PropsWithChildren, VariantProps<typeof buttonAlertDialogVariants> {
    buttonCancelClassName?: string;
    buttonCancelText?: string;
    buttonConfirmClassName?: string;
    buttonConfirmText?: string;
    buttonText?: string;
    className?: string;
    description?: string;
    o?: string;
    title?: string;
    onConfirm?: () => void;
}

declare interface AlertProps extends VariantProps<typeof alertVariants> {
    dismissible?: boolean;
    content: string | ReactNode;
    isVisible?: boolean;
    showCloseButton?: boolean;
}

declare const alertVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
    type?: "sucess" | "info" | "warning" | "danger" | null | undefined;
    isVisible?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Autocomplete: ForwardRefExoticComponent<AutocompleteProps & RefAttributes<HTMLInputElement>>;

declare interface AutocompleteProps extends VariantProps<typeof autocompleteVariants> {
    autoComplete?: 'off';
    className?: string;
    label?: string;
    labelClassName?: string;
    name?: string;
    options: Option_2[];
    placeHolderEmptyValues?: string | ReactNode;
    placeHolderEmptyValuesClassName?: string;
    placeholder?: string;
    onChange(value: string): void;
}

declare const autocompleteVariants: (props?: ({
    variant?: "default" | null | undefined;
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Breadcrumb: FC<BreadcrumbProps>;

declare interface BreadcrumbProps extends VariantProps<typeof breadcrumbVariants>, HTMLAttributes<HTMLOListElement> {
    steps: Step[];
    wrapperClassName?: string;
}

declare const breadcrumbVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
    size?: "base" | "sm" | "lg" | "xl" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Button: FC<ButtonProps>;

declare const buttonAlertDialogVariants: (props?: ({
    theme?: "kubefirst" | "colony" | null | undefined;
} & ClassProp) | undefined) => string;

declare interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    disabled?: boolean;
}

declare const buttonVariants: (props?: ({
    variant?: "danger" | "circle" | "text" | "primary" | "secondary" | null | undefined;
    version?: "default" | "alternate" | null | undefined;
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
    disabled?: boolean | null | undefined;
    size?: "medium" | "large" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Card: FC<CardProps>;

declare interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants>, PropsWithChildren {
    isActive?: boolean;
    canHover?: boolean;
    wrapperClassName?: string;
}

declare const cardVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
    isActive?: boolean | null | undefined;
    canHover?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Checkbox: FC<CheckboxProps>;

declare interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'checked'>, VariantProps<typeof checkboxVariants> {
    ariaLabelledBy?: string;
    className?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    id?: string;
    label?: string;
    labelClassName?: string;
    name?: string;
    onChange?: () => void;
}

declare const checkboxVariants: (props?: ({
    variant?: "default" | null | undefined;
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
    checked?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Divider: FunctionComponent<HTMLAttributes<HTMLDivElement>>;

export declare const Dropdown: FC<DropdownProps>;

declare interface DropdownProps extends VariantProps<typeof dropdownVariants> {
    defaultValue?: string;
    label?: string;
    name?: string;
    options: Option_3[];
    placeholder?: string;
    onChange?: (value: Option_3) => void;
    labelClassName?: string;
    required?: boolean;
}

declare const dropdownVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Footer: FC_2<FooterProps>;

declare interface FooterProps extends PropsWithChildren_2, VariantProps<typeof footerVariants> {
    className?: string;
}

declare const footerVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
} & ClassProp) | undefined) => string;

declare type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export declare const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>;

declare interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
    label?: string | ReactNode;
    labelClassName?: string;
    error?: string;
}

declare const inputVariants: (props?: ({
    variant?: "error" | "default" | null | undefined;
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const konstructPlugin: {
    handler: PluginCreator;
    config?: Partial<Config>;
};

export declare const Loading: FunctionComponent<LoadingProps>;

declare type LoadingProps = InputHTMLAttributes<SVGSVGElement> & VariantProps<typeof loadingVariants>;

declare const loadingVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Logo: FC_2<LogoProps>;

declare interface LogoProps extends PropsWithChildren_2, VariantProps<typeof logoVariants> {
    className?: string;
}

declare const logoVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Modal: FC<ModalProps> & {
    Header: FC<ModalChildProps>;
    Body: FC<ModalChildProps>;
    Footer: FC<ModalChildProps>;
};

declare type ModalChildProps = {
    children: ReactNode;
    className?: string;
    asChild?: boolean;
};

declare interface ModalProps extends PropsWithChildren, VariantProps<typeof modalVariants> {
    className?: string;
    buttonCloseClassName?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

declare const modalVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Navigation: FC_2<NavigationProps> & NavigationChildrenProps;

declare type NavigationChildrenProps = {
    NavigationGroup: FC_2<NavigationGroupProps>;
    NavigationOption: FC_2<NavigationOptionProps>;
    NavigationSeparator: FC_2<NavigationSeparatorProps>;
    NavigationTitle: FC_2<NavigationTitleProps>;
};

export declare const NavigationGroup: FC_2<NavigationGroupProps>;

declare interface NavigationGroupProps extends PropsWithChildren_2, VariantProps<typeof navigationGroupsVariants>, Pick<HtmlHTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
    title?: string;
    titleClassName?: string;
    isVisible?: boolean;
}

declare const navigationGroupsVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const NavigationOption: FC_2<NavigationOptionProps>;

declare type NavigationOption_2 = VariantProps<typeof navigationOptionVariants> & {
    className?: string;
    isVisible?: boolean;
    isActive?: boolean;
};

declare type NavigationOptionProps = NavigationOption_2 & ({
    role: 'button';
    children: ReactNode_2;
    onClick: VoidFunction;
} | {
    role?: never;
    children: ReactNode_2;
});

declare const navigationOptionVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
    isActive?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

declare interface NavigationProps extends PropsWithChildren_2, VariantProps<typeof navigationVariants> {
    className?: string;
}

export declare const NavigationSeparator: FC_2<NavigationSeparatorProps>;

declare interface NavigationSeparatorProps extends Pick<HTMLAttributes_2<HTMLDivElement>, 'className' | 'style'>, VariantProps<typeof navigationSeparatorVariant> {
}

declare const navigationSeparatorVariant: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
} & ClassProp) | undefined) => string;

declare interface NavigationTitleProps extends VariantProps<typeof navigationTitleVariants>, Pick<HtmlHTMLAttributes<HTMLHeadingElement>, 'className'> {
    title: string;
    className?: string;
    isVisible?: boolean;
}

declare const navigationTitleVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
} & ClassProp) | undefined) => string;

declare const navigationVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const NumberInput: FC<NumberInputProps>;

declare interface NumberInputProps extends VariantProps<typeof numberInputVariants> {
    className?: string;
    init?: number;
    label?: string;
    max?: number;
    min?: number;
    name?: string;
    onChange?: (value: number) => void;
}

declare const numberInputVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
} & ClassProp) | undefined) => string;

declare type Option_2 = {
    value: string;
};

declare type Option_3 = {
    label: string | ReactNode;
    leftIcon?: ReactNode | string;
    value: string;
};

export declare const ProgressBar: FC<ProgressBarProps>;

declare interface ProgressBarProps extends VariantProps<typeof progressBarVariants> {
    className?: string;
    label?: string;
    percent: number;
    status?: 'success' | 'progress';
}

declare const progressBarVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Radio: FC<RadioProps>;

export declare const RadioCard: FC<RadioCardProps>;

export declare const RadioCardGroup: FC<RadioCardGroupProps>;

declare type RadioCardGroupProps = {
    asChild?: boolean;
    className?: string;
    defaultChecked?: string;
    direction?: 'row' | 'col';
    name: string;
    options: Omit<RadioCardProps, 'name' | 'checked' | 'defaultChecked'>[];
    theme?: RadioCardProps['theme'];
    wrapperClassName?: string;
    onValueChange?: (value: string) => void;
};

declare type RadioCardProps = Omit<CardProps, 'canHover' | 'isActive'> & Pick<RadioProps, 'name' | 'value' | 'checked' | 'onChange' | 'label' | 'disabled' | 'defaultChecked' | 'labelTextClassName'> & {
    labelWrapperClassName?: string;
};

export declare const RadioGroup: FC<RadioGroupProps>;

declare interface RadioGroupProps {
    asChild?: boolean;
    className?: RadioProps['className'];
    defaultChecked?: string;
    direction?: 'row' | 'col';
    label?: string | ReactNode;
    name: string;
    options: Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>[];
    theme?: RadioProps['theme'];
    wrapperClassName?: string;
    onValueChange?: (value: string) => void;
}

declare interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'disabled'>, VariantProps<typeof radioVariants> {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    label?: string | ReactNode;
    labelTextClassName?: string;
    name: string;
    value: string;
    wrapperClassName?: string;
    onChange?: (value: string) => void;
}

declare const radioVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
    disabled?: boolean | null | undefined;
    checked?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

declare const Range_2: FC<RangeProps>;
export { Range_2 as Range }

declare interface RangeProps extends VariantProps<typeof rangeVariants> {
    className?: string;
    defaultValue?: SliderProps['defaultValue'];
    label?: string;
    max?: SliderProps['max'];
    min?: SliderProps['min'];
    name?: string;
    showValue?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

declare const rangeVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Sidebar: FC<SidebarProps> & SidebarChildrenProps;

declare type SidebarChildrenProps = {
    Footer: FC<FooterProps>;
    Logo: FC<LogoProps>;
    Navigation: FC<NavigationProps>;
    NavigationGroup: FC<NavigationGroupProps>;
    NavigationOption: FC<NavigationOptionProps>;
    NavigationSeparator: FC<NavigationSeparatorProps>;
};

declare interface SidebarProps extends VariantProps<typeof wrapperSiderbarVariants>, PropsWithChildren {
    wrapperClassName?: string;
    minWith?: number;
    maxWith?: number;
    canResize?: boolean;
}

export declare const Slider: FC<SliderProps_2>;

declare interface SliderProps_2 extends VariantProps<typeof sliderVariants> {
    className?: string;
    defaultValue?: SliderProps['defaultValue'];
    label?: string;
    max?: SliderProps['max'];
    min?: SliderProps['min'];
    name?: string;
    showValue?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

declare const sliderVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
} & ClassProp) | undefined) => string;

declare type Step = {
    label: string;
    to?: string;
    target?: '_self' | '_blank';
    isActive?: boolean;
};

export declare const Switch: FC<SwitchProps>;

declare interface SwitchProps extends VariantProps<typeof switchVariants> {
    alignment?: 'horizontal' | 'vertical';
    className?: string;
    defaultChecked?: boolean;
    label?: string;
    name?: string;
    thumbClassName?: string;
}

declare const switchVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Tag: FC<TagProps>;

declare type TagProps = {
    color?: 'gray' | 'cyan' | 'gold' | 'green' | 'light blue' | 'lime' | 'pink' | 'purple' | 'emerald' | 'fuscia' | 'indigo' | 'light-orange' | 'dark-sky-blue' | 'mistery';
    id: string | number;
    label: string;
    rightIcon?: ReactNode;
    leftIcon?: ReactNode;
    className?: string;
    'data-value'?: string;
    isSelected?: boolean;
};

export declare const TagSelect: FC<TagSelectProps>;

declare interface TagSelectProps extends VariantProps<typeof tagSelectVariants> {
    label?: string;
    options: TagProps[];
    name?: string;
    placeholder?: string;
    labelClassName?: string;
    wrapperClassName?: string;
    multiselect?: boolean;
}

declare const tagSelectVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const TextArea: FC<TextAreaProps>;

declare interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textAreaVariants> {
    rows?: number;
    label?: string | ReactNode;
    name?: string;
    initialValue?: string;
}

declare const textAreaVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
} & ClassProp) | undefined) => string;

export declare type Theme = 'kubefirst' | 'colony' | 'civo' | undefined;

export declare const ThemeContext: Context<ThemeContextType>;

export declare type ThemeContextProps = PropsWithChildren_3 & {
    theme?: ThemeContextType['theme'];
};

export declare type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

declare type ThemeProps = {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
};

export declare const ThemeProvider: FC_3<ThemeContextProps>;

export declare const Toast: FC<ToastProps>;

declare interface ToastProps extends PropsWithChildren, VariantProps<typeof toastVariants> {
    className?: string;
    description: string | ReactNode;
    descriptionClassName?: string;
    duration?: number;
    showCloseButton?: boolean;
    title: string | ReactNode;
    titleClassName?: string;
    open: boolean;
    setOpen: (open: boolean) => void;
    closeButtonClassName?: string;
}

declare const toastVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Tooltip: FC<TooltipProps>;

declare interface TooltipProps extends PropsWithChildren, VariantProps<typeof tooltipVariants> {
    content: ReactNode | string;
    className?: string;
    wrapperClassName?: string;
}

declare const tooltipVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
    position?: "left" | "right" | "top" | "bottom" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Typography: FunctionComponent<TypographyProps>;

declare interface TypographyProps extends InputHTMLAttributes<HTMLParagraphElement>, VariantProps<typeof typographyVariants> {
    children: ReactNode;
    component?: HeadingTag | 'p' | 'span';
}

declare const typographyVariants: (props?: ({
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "tooltip" | "subtitle1" | "subtitle2" | "subtitle3" | "labelLarge" | "labelMedium" | "labelSmall" | "buttonSmall" | "body1" | "body2" | "body3" | null | undefined;
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const useTheme: () => ThemeProps;

export declare const useToggle: (initialState?: boolean) => [boolean, (value?: boolean) => void];

declare const wrapperSiderbarVariants: (props?: ({
    theme?: "kubefirst" | "colony" | "civo" | null | undefined;
} & ClassProp) | undefined) => string;

export { }
