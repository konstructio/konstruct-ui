import { AlertDialogProps as AlertDialogProps_2 } from '@radix-ui/react-alert-dialog';
import { ButtonHTMLAttributes } from '../../../node_modules/react';
import { CellContext } from '@tanstack/react-table';
import { CheckboxProps as CheckboxProps_2 } from '@radix-ui/react-checkbox';
import { ClassProp } from 'class-variance-authority/types';
import { ColumnDef } from '@tanstack/react-table';
import { ComponentRef } from '../../../node_modules/react';
import { Context } from '../../node_modules/react';
import { DayPickerProps } from 'react-day-picker';
import { FC } from '../../../node_modules/react';
import { FC as FC_2 } from '../../../../../node_modules/react';
import { FC as FC_3 } from '../../../../node_modules/react';
import { FC as FC_4 } from '../../node_modules/react';
import { ForwardRefExoticComponent } from '../../../node_modules/react';
import { getAllTimezones } from 'countries-and-timezones';
import { HTMLAttributes } from '../../../node_modules/react';
import { HTMLAttributes as HTMLAttributes_2 } from '../../../../../node_modules/react';
import { HtmlHTMLAttributes } from '../../../../../node_modules/react';
import { InputHTMLAttributes } from '../../../node_modules/react';
import { JSX } from 'react/jsx-runtime';
import { JSX as JSX_2 } from '../../../node_modules/react';
import { PropsWithChildren } from '../../../node_modules/react';
import { PropsWithChildren as PropsWithChildren_2 } from '../../../../../node_modules/react';
import { PropsWithChildren as PropsWithChildren_3 } from '../../node_modules/react';
import { ReactNode } from '../../../node_modules/react';
import { ReactNode as ReactNode_2 } from '../../../../../node_modules/react';
import * as ReactTabs from '@radix-ui/react-tabs';
import { Ref } from '../../../node_modules/react';
import { RefAttributes } from '../../../node_modules/react';
import { RowData as RowData_2 } from '@tanstack/react-table';
import { SliderProps } from '@radix-ui/react-slider';
import { TabsContentProps } from '@radix-ui/react-tabs';
import { VariantProps } from 'class-variance-authority';

declare type Action<TData> = {
    label: string;
    onClick: (rowData: TData) => void;
};

export declare const Alert: FC<AlertProps>;

export declare const AlertDialog: FC<AlertDialogProps>;

declare interface AlertDialogProps extends PropsWithChildren, AlertDialogProps_2 {
    buttonCancel?: ButtonCancelProps;
    buttonConfirm?: ButtonConfirmProps;
    buttonTriggerText?: string;
    buttonTriggerClassName?: string;
    className?: string;
    description?: string | ReactNode;
    showCancelButton?: boolean;
    theme?: Theme;
    title?: string | ReactNode;
    wrapperClassName?: string;
    onConfirm?: () => void;
}

declare interface AlertProps extends VariantProps<typeof alertVariants> {
    dismissible?: boolean;
    content: string | ReactNode;
    isVisible?: boolean;
    showCloseButton?: boolean;
    theme?: Theme;
}

declare const alertVariants: (props?: ({
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
    placeholder?: string;
    placeHolderEmptyValues?: string | ReactNode;
    placeHolderEmptyValuesClassName?: string;
    theme?: Theme;
    onChange(value: string): void;
}

declare const autocompleteVariants: (props?: ClassProp | undefined) => string;

export declare const Badge: FC<BadgeProps>;

export declare const BadgeMultiSelect: FC_2<BadgeMultiSelectProps>;

declare type BadgeMultiSelectProps = {
    label: string;
    options: Option_5[];
    position?: 'left' | 'right';
    onApply?: (selectedOptions: Option_5[]) => void;
};

declare type BadgeProps = VariantProps<typeof badgeVariants> & {
    label: string;
    className?: string;
    loading?: boolean;
    dismissible?: true;
    onClick?: VoidFunction;
    onDismiss?: VoidFunction;
};

declare const badgeVariants: (props?: ({
    variant?: "info" | "warning" | "danger" | "default" | "success" | null | undefined;
    size?: "default" | null | undefined;
} & ClassProp) | undefined) => string;

declare interface BodyProps extends React.HTMLAttributes<HTMLTableSectionElement>, PropsWithChildren, VariantProps<typeof bodyVariants> {
}

declare const bodyVariants: (props?: ClassProp | undefined) => string;

export declare const Breadcrumb: FC<BreadcrumbProps>;

declare interface BreadcrumbProps extends VariantProps<typeof breadcrumbVariants>, HTMLAttributes<HTMLOListElement> {
    steps: Step[];
    wrapperClassName?: string;
    theme?: Theme;
}

declare const breadcrumbVariants: (props?: ClassProp | undefined) => string;

export declare const Button: FC<ButtonProps>;

declare type ButtonBaseProps = Partial<ButtonProps> & {
    className?: string;
    text?: string;
};

declare type ButtonCancelProps = ButtonBaseProps;

declare type ButtonConfirmProps = ButtonBaseProps;

declare interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>, VariantProps<typeof buttonVariants> {
    ref?: Ref<HTMLButtonElement>;
    asChild?: boolean;
    disabled?: boolean;
    theme?: Theme;
}

declare const buttonVariants: (props?: ({
    variant?: "danger" | "text" | "primary" | "secondary" | null | undefined;
    shape?: "circle" | null | undefined;
    version?: "default" | "alternate" | null | undefined;
    disabled?: boolean | null | undefined;
    size?: "medium" | "large" | null | undefined;
    appearance?: "compact" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Card: FC<CardProps>;

declare interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants>, PropsWithChildren {
    canHover?: boolean;
    isActive?: boolean;
    theme?: Theme;
    wrapperClassName?: string;
}

declare const cardVariants: (props?: ({
    isActive?: boolean | null | undefined;
    canHover?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Checkbox: FC<CheckboxProps>;

declare interface CheckboxProps extends Omit<CheckboxProps_2, 'onChange'>, Omit<VariantProps<typeof checkboxVariants>, 'checked'> {
    ariaLabelledBy?: string;
    className?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    id?: string;
    label?: string;
    labelClassName?: string;
    name?: string;
    theme?: Theme;
    onChange?: (checked: boolean) => void;
}

declare const checkboxVariants: (props?: ({
    variant?: "default" | null | undefined;
    checked?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Content: FC_3<TabsContentProps>;

export declare const DateFilterDropdown: FC_2<DateFilterDropdownProps>;

declare type DateFilterDropdownProps = {
    label: string;
    position?: 'left' | 'right';
    onApply?: (date?: Date) => void;
};

export declare const DatePicker: FC<DatePickerProps>;

declare type DatePickerProps = Omit<DayPickerProps, 'mode'> & VariantProps<typeof datePickerVariants> & {
    arrowClassName?: string;
    monthsClassName?: string;
    timeZone?: TimeZone;
    defaultSelected?: Date;
    onSelect?: (date: Date) => void;
};

declare const datePickerVariants: (props?: ClassProp | undefined) => string;

export declare const Divider: FC<HTMLAttributes<HTMLDivElement>>;

export declare const Dropdown: FC<DropdownProps>;

export declare const DropdownButton: FC<Props>;

declare type DropdownProps = VariantProps<typeof dropdownVariants> & Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> & {
    additionalOptions?: ReactNode[] | string[];
    className?: string;
    error?: string;
    helperText?: string;
    highlightSearch?: boolean;
    iconClassName?: string;
    inputClassName?: string;
    isLoading?: boolean;
    isRequired?: boolean;
    label?: string;
    labelClassName?: string;
    listClassName?: string;
    listItemClassName?: string;
    options: Option_3[];
    searchable?: boolean;
    showSearchIcon?: boolean;
    theme?: Theme;
    value?: string;
    wrapperClassName?: string;
    onBlur?: VoidFunction;
    onChange?: OnChangeFn;
};

declare const dropdownVariants: (props?: ({
    hasError?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Filter: FilterComponentProps;

declare type FilterComponentProps = FC<FilterProps> & {
    BadgeMultiSelect: FC<BadgeMultiSelectProps>;
    DateFilterDropdown: FC<DateFilterDropdownProps>;
    ResetButton: FC<ResetButtonProps>;
};

declare type FilterProps = VariantProps<typeof filterVariants> & PropsWithChildren & {
    className?: string;
    theme?: Theme;
};

declare interface FilterProps_2 extends React.InputHTMLAttributes<HTMLInputElement>, PropsWithChildren {
    placeholder?: string;
}

declare const filterVariants: (props?: ClassProp | undefined) => string;

export declare const Footer: FC_2<FooterProps>;

declare interface FooterProps extends PropsWithChildren_2, VariantProps<typeof footerVariants> {
    className?: string;
}

declare const footerVariants: (props?: ClassProp | undefined) => string;

declare type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

declare interface HeadProps extends React.HTMLAttributes<HTMLTableSectionElement>, PropsWithChildren, VariantProps<typeof headVariants> {
}

declare const headVariants: (props?: ClassProp | undefined) => string;

declare type HexColor = `#${string}`;

export declare const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>;

declare interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
    error?: string;
    label?: string | ReactNode;
    labelClassName?: string;
    theme?: Theme;
    isRequired?: boolean;
    isSearch?: boolean;
    helperText?: string;
    helperTextClassName?: string;
}

declare const inputVariants: (props?: ({
    variant?: "error" | "default" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const List: FC_3<ListProps>;

declare interface ListProps extends React.HTMLAttributes<HTMLDivElement>, PropsWithChildren {
    orientation: 'horizontal' | 'vertical';
}

export declare const Loading: FC<LoadingProps>;

declare type LoadingProps = InputHTMLAttributes<SVGSVGElement> & VariantProps<typeof loadingVariants> & {
    theme?: Theme;
};

declare const loadingVariants: (props?: ClassProp | undefined) => string;

export declare const Logo: FC_2<LogoProps>;

declare interface LogoProps extends PropsWithChildren_2, VariantProps<typeof logoVariants> {
    className?: string;
}

declare const logoVariants: (props?: ClassProp | undefined) => string;

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
    buttonCloseClassName?: string;
    className?: string;
    container?: Element | DocumentFragment;
    isOpen?: boolean;
    theme?: Theme;
    onClose?: () => void;
}

declare const modalVariants: (props?: ClassProp | undefined) => string;

declare type MultiSelectFilter = {
    key: string;
    label: string;
    position?: 'right' | 'left';
    options: OptionType[];
};

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

declare const navigationGroupsVariants: (props?: ClassProp | undefined) => string;

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
    isActive?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

declare interface NavigationProps extends PropsWithChildren_2, VariantProps<typeof navigationVariants> {
    className?: string;
}

export declare const NavigationSeparator: FC_2<NavigationSeparatorProps>;

declare interface NavigationSeparatorProps extends Pick<HTMLAttributes_2<HTMLDivElement>, 'className' | 'style'>, VariantProps<typeof navigationSeparatorVariant> {
}

declare const navigationSeparatorVariant: (props?: ClassProp | undefined) => string;

declare interface NavigationTitleProps extends VariantProps<typeof navigationTitleVariants>, Pick<HtmlHTMLAttributes<HTMLHeadingElement>, 'className'> {
    title: string;
    className?: string;
    isVisible?: boolean;
}

declare const navigationTitleVariants: (props?: ClassProp | undefined) => string;

declare const navigationVariants: (props?: ClassProp | undefined) => string;

export declare const NumberInput: FC<NumberInputProps>;

declare interface NumberInputProps extends VariantProps<typeof numberInputVariants> {
    className?: string;
    init?: number;
    label?: string | ReactNode;
    max?: number;
    min?: number;
    name?: string;
    value?: number;
    theme?: Theme;
    onChange?: ({ target: { value } }: {
        target: {
            value: number;
        };
    }) => void;
}

declare const numberInputVariants: (props?: ClassProp | undefined) => string;

declare type OnChangeFn = (params: {
    target: {
        value: string;
        name: string;
    };
}) => void;

declare type Option_2 = {
    value: string;
};

declare type Option_3 = {
    label: string | ReactNode;
    leftIcon?: ReactNode | string;
    value: string;
};

declare type Option_4 = {
    label: string | ReactNode;
    onClick?: VoidFunction;
};

declare type Option_5 = {
    id: string;
    label: string;
    variant?: BadgeProps['variant'];
};

declare type OptionType = {
    id: string;
    label: string;
    variant?: 'info' | 'danger' | 'success' | 'default' | 'warning' | null;
};

export declare const PieChart: FC<Props_2>;

export declare const ProgressBar: FC<ProgressBarProps>;

declare interface ProgressBarProps extends VariantProps<typeof progressBarVariants> {
    backgroundBarClassName?: string;
    className?: string;
    label?: string;
    labelClassName?: string;
    labelWrapperClassName?: string;
    percent: number;
    percentClassName?: string;
    progressBarClassName?: string;
    status?: 'success' | 'progress';
    theme?: Theme;
    wrapperClassName?: string;
}

declare const progressBarVariants: (props?: ClassProp | undefined) => string;

declare type Props = {
    buttonClassName?: string;
    className?: string;
    itemClassName?: string;
    listClassName?: string;
    options: Option_4[];
};

/**
 * Props for the PieChart component
 */
declare type Props_2 = {
    /**
     * Array of hexadecimal colors for the borders of the pie chart segments
     * @default ['#FFFFFF', '#FFFFFF']
     */
    borderColors?: HexColor[];
    /**
     * Width of the border for pie chart segments in pixels
     * @default 0
     */
    borderWidth?: number;
    /**
     * Array of hexadecimal colors for filling the pie chart segments
     * @default ['#525252', '#00D492']
     */
    colors?: HexColor[];
    /**
     * Percentage of the pie chart's center that should be cut out, creating a donut chart effect
     * @default 80
     */
    cutoutPercentage?: number;
    /**
     * Whether to redraw the entire chart when props change
     * @default true
     */
    redraw?: boolean;
    /**
     * Hexadecimal color for the subtitle text
     * @default '#6B7280'
     */
    subtitleColor?: HexColor;
    /**
     * Font size for the subtitle in pixels
     * @default 14
     */
    subtitleFontSize?: number;
    /**
     * Font weight for the subtitle
     * @default 'normal'
     */
    subtitleFontWeight?: 'bold' | 'normal';
    /**
     * Hexadecimal color for the title text
     * @default '#111827'
     */
    titleColor?: HexColor;
    /**
     * Font size for the title in pixels
     * @default 16
     */
    titleFontSize?: number;
    /**
     * Font weight for the title
     * @default 'bold'
     */
    titleFontWeight?: 'bold' | 'normal';
    /**
     * Array of numeric values representing data for each segment of the pie chart
     * @required
     */
    values: number[];
} & 
/**
* Union type that enforces either:
* - No title and no subtitle
* - Title with optional subtitle
*/
({
    title?: undefined;
    subtitle?: never;
} | {
    title: string;
    subtitle?: string;
});

declare type Props_3<TData extends RowData> = CellContext<TData, string> & {
    value?: string;
};

declare type Props_4<TData extends RowData_2> = VariantProps<typeof virtualizeTableVariants> & {
    id: string;
    ariaLabel?: string;
    columns: ColumnDef<TData, string>[];
    data: TData[];
    totalItems: number;
    fetchData: (params: Record<string, string | number | string[] | number[] | undefined>) => Promise<{
        data: TData[];
        totalItemsCount: number;
    }>;
    classNameHeaderTable?: string;
    classNameHeaderArrows?: string;
    classNameHeaderActiveArrows?: string;
} & ({
    showPagination: true;
    showTotalItems?: boolean;
    showDropdownPagination?: boolean;
    showDotPagination?: boolean;
    showFormPagination?: boolean;
    pageSizes?: number[] | string[];
} | {
    showPagination?: false | undefined;
    showTotalItems?: never;
    showDropdownPagination?: never;
    showDotPagination?: never;
    showFormPagination?: never;
    pageSizes?: never;
}) & ({
    filterSearchPlaceholder?: string;
    multiSelectFilter?: MultiSelectFilter[];
    showFilter: true;
    showFilterInput?: boolean;
} | {
    filterSearchPlaceholder?: never;
    multiSelectFilter?: never;
    showFilter?: false | undefined;
    showFilterInput?: never;
});

declare type Props_5<TData extends RowData> = CellContext<TData, unknown> & {
    actions: Action<TData>[];
};

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
    theme?: Theme;
    wrapperClassName?: string;
    onValueChange?: (value: string) => void;
};

declare type RadioCardProps = Omit<CardProps, 'canHover' | 'isActive'> & Pick<RadioProps, 'name' | 'value' | 'checked' | 'onChange' | 'label' | 'disabled' | 'defaultChecked' | 'labelTextClassName' | 'description' | 'descriptionClassName'> & {
    labelWrapperClassName?: string;
    theme?: Theme;
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
    theme?: Theme;
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
    description?: string | ReactNode;
    descriptionClassName?: string;
    value: string;
    wrapperClassName?: string;
    theme?: Theme;
    onChange?: (value: string) => void;
}

declare const radioVariants: (props?: ({
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
    theme?: Theme;
}

declare const rangeVariants: (props?: ClassProp | undefined) => string;

declare type ResetButtonProps = ButtonProps & {
    disabled?: boolean;
    onClick?: VoidFunction;
};

declare type RowData = RowData_2;

declare interface RowProps extends React.HTMLAttributes<HTMLTableRowElement>, PropsWithChildren, VariantProps<typeof rowVariants> {
    width?: string;
    isSelected?: boolean;
    onSelect?: () => void;
}

declare const rowVariants: (props?: ({
    isSelected?: boolean | null | undefined;
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
    canResize?: boolean;
    dividerClassName?: string;
    maxWith?: number;
    minWith?: number;
    theme?: Theme;
    wrapperClassName?: string;
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
    theme?: Theme;
}

declare const sliderVariants: (props?: ClassProp | undefined) => string;

declare type Step = {
    label: string;
    to?: string;
    target?: '_self' | '_blank';
    isActive?: boolean;
    component?: FC<any>;
};

export declare const Switch: FC<SwitchProps>;

declare interface SwitchProps extends VariantProps<typeof switchVariants> {
    alignment?: 'horizontal' | 'vertical';
    className?: string;
    defaultChecked?: boolean;
    label?: string;
    helperText?: string;
    name?: string;
    theme?: Theme;
    thumbClassName?: string;
    value?: boolean;
    onChange?: (e: boolean) => void;
}

declare const switchVariants: (props?: ClassProp | undefined) => string;

export declare const Table: FC<TableProps> & {
    Head: FC<HeadProps>;
    Row: FC<RowProps>;
    Filter: FC<FilterProps_2>;
    Body: FC<BodyProps>;
};

declare interface TableProps extends React.HTMLAttributes<HTMLTableElement>, PropsWithChildren, VariantProps<typeof tableVariants> {
    theme?: Theme;
}

declare const tableVariants: (props?: ClassProp | undefined) => string;

export declare const Tabs: FC<TabsProps> & {
    List: FC<ListProps>;
    Trigger: FC<TriggerProps>;
    Content: FC<ReactTabs.TabsContentProps>;
};

declare interface TabsProps extends ReactTabs.TabsProps, PropsWithChildren {
    theme?: Theme;
}

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

declare const tagSelectVariants: (props?: ClassProp | undefined) => string;

export declare const TextArea: FC<TextAreaProps>;

declare interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textAreaVariants> {
    rows?: number;
    label?: string | ReactNode;
    name?: string;
    initialValue?: string;
    theme?: Theme;
}

declare const textAreaVariants: (props?: ClassProp | undefined) => string;

declare type Theme = 'kubefirst' | 'light' | 'kubefirst-dark' | 'dark' | undefined;

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

export declare const ThemeProvider: FC_4<ThemeContextProps>;

export declare const TimePicker: FC<TimePickerProps>;

declare type TimePickerProps = VariantProps<typeof timePickerVariants> & {
    format?: '12' | '24';
    scrollBehavior?: 'smooth' | 'auto';
    time?: Date;
    name?: string;
    label?: string;
    required?: boolean;
    className?: string;
    listClassName?: string;
    listItemClassName?: string;
    listItemButtonClassName?: string;
};

declare const timePickerVariants: (props?: ClassProp | undefined) => string;

declare type TimeZone = keyof ReturnType<typeof getAllTimezones>;

export declare const Toast: FC<ToastProps>;

declare interface ToastProps extends PropsWithChildren, VariantProps<typeof toastVariants> {
    className?: string;
    closeButtonClassName?: string;
    description: string | ReactNode;
    descriptionClassName?: string;
    duration?: number;
    open: boolean;
    showCloseButton?: boolean;
    theme?: Theme;
    title: string | ReactNode;
    titleClassName?: string;
    setOpen: (open: boolean) => void;
}

declare const toastVariants: (props?: ClassProp | undefined) => string;

export declare const Tooltip: FC<TooltipProps>;

declare interface TooltipProps extends PropsWithChildren, VariantProps<typeof tooltipVariants> {
    content: ReactNode | string;
    className?: string;
    wrapperClassName?: string;
    theme?: Theme;
}

declare const tooltipVariants: (props?: ({
    position?: "left" | "right" | "bottom" | "top" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Trigger: FC_3<TriggerProps>;

declare interface TriggerProps extends VariantProps<typeof triggerVariants>, React.HTMLAttributes<HTMLDivElement> {
    tab: string;
    label: string;
    isActive: boolean;
}

declare const triggerVariants: (props?: ({
    variant?: "default" | "active" | "inactive" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const TruncateText: <TData>({ getValue, value }: Props_3<TData>) => JSX.Element;

export declare const Typography: ForwardRefExoticComponent<Omit<TypographyProps, 'ref'> & RefAttributes<HTMLParagraphElement | HTMLHeadingElement>>;

declare interface TypographyProps extends HTMLAttributes<ComponentRef<HeadingTag | 'p' | 'span'>>, VariantProps<typeof typographyVariants> {
    ref?: Ref<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>;
    children: ReactNode;
    component?: HeadingTag | 'p' | 'span';
    theme?: Theme;
}

declare const typographyVariants: (props?: ({
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "tooltip" | "subtitle1" | "subtitle2" | "subtitle3" | "labelLarge" | "labelMedium" | "labelSmall" | "buttonSmall" | "body1" | "body2" | "body3" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const useTheme: () => ThemeProps;

export declare const useToggle: (initialState?: boolean) => [boolean, (value?: boolean) => void];

export declare const VirtualizedTable: VirtualizedTableCompound;

declare type VirtualizedTableCompound = (<TData extends RowData>(props: Props_4<TData>) => JSX_2.Element) & {
    TruncateText: typeof TruncateText;
    Actions: <TData extends RowData>(props: Props_5<TData>) => JSX_2.Element | null;
    displayName?: string;
};

declare const virtualizeTableVariants: (props?: ClassProp | undefined) => string;

declare const wrapperSiderbarVariants: (props?: ClassProp | undefined) => string;

export { }
