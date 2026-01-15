import { AlertDialogProps as AlertDialogProps_2 } from '@radix-ui/react-alert-dialog';
import { ButtonHTMLAttributes } from '../../../node_modules/react';
import { CellContext } from '@tanstack/react-table';
import { ChangeEvent } from '../../../node_modules/react';
import { CheckboxProps as CheckboxProps_2 } from '@radix-ui/react-checkbox';
import { ClassProp } from 'class-variance-authority/types';
import { ClassValue } from 'clsx';
import { ColumnDef as ColumnDef_2 } from '@tanstack/react-table';
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
import { RegionCode } from 'google-libphonenumber';
import { RowData as RowData_2 } from '@tanstack/react-table';
import { SliderProps } from '@radix-ui/react-slider';
import { TabsContentProps } from '@radix-ui/react-tabs';
import { UseQueryOptions } from '@tanstack/react-query';
import { VariantProps } from 'class-variance-authority';

declare type Action<TData> = {
    label: string | React.ReactNode;
    onClick: (rowData: TData) => void;
    className?: string;
};

/**
 * An alert component for displaying feedback messages.
 * Supports success, error, warning, and info variants with optional dismiss button.
 *
 * @example
 * ```tsx
 * // Success alert
 * <Alert type="success" content="Changes saved successfully!" />
 *
 * // Error alert with close button
 * <Alert
 *   type="error"
 *   content="Failed to save changes. Please try again."
 *   showCloseButton
 * />
 *
 * // Warning alert with custom content
 * <Alert
 *   type="warning"
 *   content={
 *     <div>
 *       <strong>Warning:</strong> This action cannot be undone.
 *     </div>
 *   }
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-alert--docs Storybook}
 */
export declare const Alert: FC<AlertProps>;

/**
 * A confirmation dialog component built on Radix UI AlertDialog.
 * Includes a trigger button that opens a modal with title, description, and action buttons.
 *
 * @example
 * ```tsx
 * // Basic confirmation dialog
 * <AlertDialog
 *   buttonTriggerText="Delete Item"
 *   title="Confirm Deletion"
 *   description="This action cannot be undone."
 *   onConfirm={() => deleteItem()}
 * />
 *
 * // Danger variant with custom button text
 * <AlertDialog
 *   buttonTriggerText="Remove"
 *   buttonTriggerVariant="danger"
 *   title="Remove User"
 *   description="Are you sure you want to remove this user?"
 *   buttonConfirm={{ text: "Yes, Remove" }}
 *   buttonCancel={{ text: "No, Keep" }}
 *   onConfirm={() => removeUser()}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-alertdialog--docs Storybook}
 */
export declare const AlertDialog: FC<AlertDialogProps>;

/**
 * Props for the AlertDialog component.
 *
 * @example
 * ```tsx
 * <AlertDialog
 *   buttonTriggerText="Delete"
 *   buttonTriggerVariant="danger"
 *   title="Confirm Deletion"
 *   description="Are you sure you want to delete this item?"
 *   onConfirm={() => handleDelete()}
 * />
 * ```
 */
declare interface AlertDialogProps extends PropsWithChildren, AlertDialogProps_2 {
    /** Cancel button props (className, text, etc.) */
    buttonCancel?: ButtonCancelProps;
    /** Confirm button props (className, text, etc.) */
    buttonConfirm?: ButtonConfirmProps;
    /** Text for the trigger button */
    buttonTriggerText?: string;
    /** CSS classes for the trigger button */
    buttonTriggerClassName?: string;
    /** Variant for the trigger button */
    buttonTriggerVariant?: ButtonProps['variant'];
    /** Additional CSS classes */
    className?: string;
    /** Description text shown in the dialog */
    description?: string | ReactNode;
    /** Whether to show the cancel button (default: true) */
    showCancelButton?: boolean;
    /** Theme override for this component */
    theme?: Theme;
    /** Title text shown in the dialog */
    title?: string | ReactNode;
    /** CSS classes for the dialog wrapper */
    wrapperClassName?: string;
    /** Callback when confirm button is clicked */
    onConfirm?: () => void;
}

/**
 * Props for the Alert component.
 *
 * @example
 * ```tsx
 * <Alert type="success" content="Operation completed successfully!" />
 * <Alert type="error" content="Something went wrong" showCloseButton />
 * <Alert type="warning" content={<span>Warning: <strong>Action required</strong></span>} />
 * ```
 */
declare interface AlertProps extends VariantProps<typeof alertVariants> {
    /** Whether the alert can be dismissed (deprecated, use showCloseButton) */
    dismissible?: boolean;
    /** Alert message content (string or ReactNode) */
    content: string | ReactNode;
    /** Whether the alert is visible */
    isVisible?: boolean;
    /** Show close button to dismiss alert */
    showCloseButton?: boolean;
    /** Theme override for this component */
    theme?: Theme;
}

declare const alertVariants: (props?: ({
    type?: "sucess" | "info" | "warning" | "danger" | null | undefined;
    isVisible?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

/**
 * An autocomplete/typeahead input component that suggests options as you type.
 *
 * @example
 * ```tsx
 * // Basic autocomplete
 * <Autocomplete
 *   label="Programming Language"
 *   options={[
 *     { value: 'JavaScript' },
 *     { value: 'TypeScript' },
 *     { value: 'Python' },
 *   ]}
 *   placeholder="Type to search..."
 *   onChange={(value) => setLanguage(value)}
 * />
 *
 * // With custom empty state
 * <Autocomplete
 *   options={users}
 *   placeholder="Search users..."
 *   placeHolderEmptyValues="No users found"
 *   onChange={handleUserSelect}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-autocomplete--docs Storybook}
 */
export declare const Autocomplete: ForwardRefExoticComponent<AutocompleteProps & RefAttributes<HTMLInputElement>>;

/**
 * Props for the Autocomplete component.
 *
 * @example
 * ```tsx
 * <Autocomplete
 *   label="Search"
 *   options={[{ value: 'React' }, { value: 'Vue' }, { value: 'Angular' }]}
 *   placeholder="Search frameworks..."
 *   onChange={(value) => console.log(value)}
 * />
 * ```
 */
declare interface AutocompleteProps extends VariantProps<typeof autocompleteVariants> {
    /** Disable browser autocomplete (default: 'off') */
    autoComplete?: 'off';
    /** Additional CSS classes */
    className?: string;
    /** Label displayed above the input */
    label?: string;
    /** CSS classes for the label */
    labelClassName?: string;
    /** Form field name */
    name?: string;
    /** Array of options to suggest */
    options: Option_3[];
    /** Placeholder text */
    placeholder?: string;
    /** Text shown when no options match */
    placeHolderEmptyValues?: string | ReactNode;
    /** CSS classes for empty state text */
    placeHolderEmptyValuesClassName?: string;
    /** Theme override for this component */
    theme?: Theme;
    /** Callback when a value is selected */
    onChange(value: string): void;
}

declare const autocompleteVariants: (props?: ClassProp | undefined) => string;

/**
 * A badge/tag component for status indicators and labels.
 * Supports multiple variants, icons, loading state, and dismissible mode.
 *
 * @example
 * ```tsx
 * // Basic badge
 * <Badge label="Active" variant="success" />
 *
 * // Badge with icon
 * <Badge label="Settings" leftIcon={<SettingsIcon />} />
 *
 * // Dismissible badge
 * <Badge
 *   label="Tag"
 *   dismissible
 *   onDismiss={() => removeTag()}
 * />
 *
 * // Clickable badge
 * <Badge
 *   label="Filter"
 *   onClick={() => applyFilter()}
 * />
 *
 * // Loading badge
 * <Badge label="Processing" loading />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-badge--docs Storybook}
 */
export declare const Badge: FC<BadgeProps>;

export declare const BadgeMultiSelect: FC_2<BadgeMultiSelectProps>;

declare type BadgeMultiSelectProps = {
    label: string;
    options: Option_5[];
    position?: 'left' | 'right';
    onApply?: (selectedOptions: Option_5[]) => void;
};

/**
 * Props for the Badge component.
 *
 * @example
 * ```tsx
 * <Badge label="New" variant="success" />
 * <Badge label="Pending" variant="warning" />
 * <Badge label="Error" variant="error" dismissible onDismiss={() => {}} />
 * <Badge label="With Icon" leftIcon={<Icon />} />
 * ```
 */
declare type BadgeProps = VariantProps<typeof badgeVariants> & {
    /** Additional CSS classes */
    className?: string;
    /** Show dismiss button */
    dismissible?: true;
    /** Allow text selection (default: true) */
    isSelectable?: boolean;
    /** Badge text content */
    label: string;
    /** Icon displayed on the left */
    leftIcon?: ReactNode;
    /** Show loading spinner */
    loading?: boolean;
    /** Icon displayed on the right (when not dismissible) */
    rightIcon?: ReactNode;
    /** Click handler (makes badge interactive) */
    onClick?: VoidFunction;
    /** Callback when dismiss button clicked */
    onDismiss?: VoidFunction;
};

declare const badgeVariants: (props?: ({
    variant?: "info" | "warning" | "danger" | "default" | "success" | "violet" | "orange" | null | undefined;
    size?: "default" | null | undefined;
} & ClassProp) | undefined) => string;

/**
 * Props for Table.Body component.
 */
declare interface BodyProps extends React.HTMLAttributes<HTMLTableSectionElement>, PropsWithChildren, VariantProps<typeof bodyVariants> {
}

declare const bodyVariants: (props?: ClassProp | undefined) => string;

/**
 * A breadcrumb navigation component showing the current location in a hierarchy.
 *
 * @example
 * ```tsx
 * // Basic breadcrumb
 * <Breadcrumb
 *   steps={[
 *     { label: 'Home', to: '/' },
 *     { label: 'Settings', to: '/settings' },
 *     { label: 'Profile', isActive: true },
 *   ]}
 * />
 *
 * // With custom Link component (e.g., react-router)
 * <Breadcrumb
 *   steps={[
 *     { label: 'Dashboard', to: '/dashboard', component: Link },
 *     { label: 'Users', to: '/users', component: Link },
 *     { label: 'Edit User', isActive: true },
 *   ]}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-breadcrumb--docs Storybook}
 */
export declare const Breadcrumb: FC<BreadcrumbProps>;

/**
 * Props for the Breadcrumb component.
 *
 * @example
 * ```tsx
 * <Breadcrumb
 *   steps={[
 *     { label: 'Home', to: '/' },
 *     { label: 'Products', to: '/products' },
 *     { label: 'Current Page', isActive: true },
 *   ]}
 * />
 * ```
 */
declare interface BreadcrumbProps extends VariantProps<typeof breadcrumbVariants>, HTMLAttributes<HTMLOListElement> {
    /** Array of breadcrumb steps */
    steps: Step[];
    /** CSS classes for the nav wrapper */
    wrapperClassName?: string;
    /** Theme override for this component */
    theme?: Theme;
}

declare const breadcrumbVariants: (props?: ClassProp | undefined) => string;

/**
 * A customizable button component with multiple variants and styles.
 *
 * @example
 * ```tsx
 * // Primary button (default)
 * <Button>Click me</Button>
 *
 * // Secondary button
 * <Button variant="secondary">Secondary</Button>
 *
 * // Danger button
 * <Button variant="danger">Delete</Button>
 *
 * // Link style button
 * <Button variant="link">Learn more</Button>
 *
 * // Circle icon button
 * <Button shape="circle" size="large"><Icon /></Button>
 *
 * // Compact button
 * <Button appearance="compact">Compact</Button>
 *
 * // As child (renders child element with button styles)
 * <Button asChild><a href="/page">Link</a></Button>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-button--docs Storybook}
 */
export declare const Button: FC<ButtonProps>;

declare type ButtonBaseProps = Partial<ButtonProps> & {
    className?: string;
    text?: string;
};

declare type ButtonCancelProps = ButtonBaseProps;

declare type ButtonConfirmProps = ButtonBaseProps;

/**
 * Props for the Button component.
 *
 * @example
 * ```tsx
 * <Button variant="primary">Click me</Button>
 * <Button variant="secondary" disabled>Disabled</Button>
 * <Button variant="danger" shape="circle"><TrashIcon /></Button>
 * ```
 */
declare interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>, VariantProps<typeof buttonVariants> {
    /** Ref to the underlying button element */
    ref?: Ref<HTMLButtonElement>;
    /** Merge props onto child element instead of rendering a button */
    asChild?: boolean;
    /** Whether the button is disabled */
    disabled?: boolean;
    /** Theme override for this component */
    theme?: Theme;
}

declare const buttonVariants: (props?: ({
    variant?: "danger" | "link" | "primary" | "secondary" | "tertiary" | null | undefined;
    shape?: "circle" | null | undefined;
    version?: "default" | "alternate" | null | undefined;
    disabled?: boolean | null | undefined;
    size?: "medium" | "large" | null | undefined;
    appearance?: "compact" | null | undefined;
} & ClassProp) | undefined) => string;

/**
 * A container card component with optional hover and active states.
 *
 * @example
 * ```tsx
 * // Basic card
 * <Card>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 *
 * // Hoverable card
 * <Card canHover onClick={handleClick}>
 *   Hover to see effect
 * </Card>
 *
 * // Active/selected card
 * <Card isActive>
 *   This card is selected
 * </Card>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-card--docs Storybook}
 */
export declare const Card: FC<CardProps>;

/**
 * Props for the Card component.
 *
 * @example
 * ```tsx
 * <Card>Basic card content</Card>
 * <Card canHover>Hoverable card</Card>
 * <Card isActive>Active/selected card</Card>
 * ```
 */
declare interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants>, PropsWithChildren {
    /** Enable hover effect */
    canHover?: boolean;
    /** Show active/selected state */
    isActive?: boolean;
    /** Theme override for this component */
    theme?: Theme;
    /** CSS classes for the outer wrapper */
    wrapperClassName?: string;
}

declare const cardVariants: (props?: ({
    isActive?: boolean | null | undefined;
    canHover?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

/**
 * A checkbox component built on Radix UI primitives.
 * Supports controlled and uncontrolled modes with label support.
 *
 * @example
 * ```tsx
 * // Basic checkbox with label
 * <Checkbox label="Accept terms and conditions" />
 *
 * // Controlled checkbox
 * <Checkbox
 *   label="Subscribe to newsletter"
 *   defaultChecked={subscribed}
 *   onChange={(checked) => setSubscribed(checked)}
 * />
 *
 * // Disabled checkbox
 * <Checkbox label="Premium feature" disabled />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-checkbox--docs Storybook}
 */
export declare const Checkbox: FC<CheckboxProps>;

/**
 * Props for the Checkbox component.
 *
 * @example
 * ```tsx
 * <Checkbox label="Accept terms" onChange={(checked) => setAccepted(checked)} />
 * <Checkbox label="Remember me" defaultChecked />
 * <Checkbox label="Disabled option" disabled />
 * ```
 */
declare interface CheckboxProps extends Omit<CheckboxProps_2, 'onChange'>, Omit<VariantProps<typeof checkboxVariants>, 'checked'> {
    /** ID of element that labels the checkbox for accessibility */
    ariaLabelledBy?: string;
    /** Additional CSS classes */
    className?: string;
    /** Initial checked state */
    defaultChecked?: boolean;
    /** Whether the checkbox is disabled */
    disabled?: boolean;
    /** HTML id attribute */
    id?: string;
    /** Label text displayed next to checkbox */
    label?: string;
    /** CSS classes for the label */
    labelClassName?: string;
    /** Form field name */
    name?: string;
    /** Theme override for this component */
    theme?: Theme;
    /** Callback when checked state changes */
    onChange?: (checked: boolean) => void;
}

declare const checkboxVariants: (props?: ({
    variant?: "default" | null | undefined;
    checked?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare const cn: (...inputs: ClassValue[]) => string;

export declare type ColumnDef<TData extends RowData> = ColumnDef_2<TData, string>;

export declare const Content: FC_3<TabsContentProps>;

/**
 * A numeric input component with increment/decrement buttons.
 * Also exported as `NumberInput` for convenience.
 *
 * @example
 * ```tsx
 * // Basic counter
 * <Counter
 *   label="Quantity"
 *   value={count}
 *   onChange={({ target }) => setCount(target.value)}
 * />
 *
 * // With min/max limits
 * <Counter
 *   label="Number of nodes"
 *   value={nodes}
 *   min={1}
 *   max={10}
 *   onChange={({ target }) => setNodes(target.value)}
 * />
 *
 * // Disabled increment/decrement
 * <Counter
 *   value={5}
 *   canIncrement={value < max}
 *   canDecrement={value > min}
 *   onChange={handleChange}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-counter--docs Storybook}
 */
declare const Counter: FC<CounterProps>;
export { Counter }
export { Counter as NumberInput }

/**
 * Props for the Counter (NumberInput) component.
 *
 * @example
 * ```tsx
 * <Counter
 *   label="Quantity"
 *   value={quantity}
 *   min={1}
 *   max={10}
 *   onChange={({ target }) => setQuantity(target.value)}
 * />
 * ```
 */
declare interface CounterProps extends VariantProps<typeof counterVariants> {
    /** Allow decrement button to be clicked */
    canDecrement?: boolean;
    /** Allow increment button to be clicked */
    canIncrement?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** CSS classes for decrement button */
    decrementButtonClassName?: string;
    /** CSS classes for increment button */
    incrementButtonClassName?: string;
    /** Initial value (deprecated, use value) */
    init?: number;
    /** Show required indicator */
    isRequired?: boolean;
    /** Label displayed above the counter */
    label?: string;
    /** Maximum allowed value */
    max?: number;
    /** Minimum allowed value */
    min?: number;
    /** Form field name */
    name?: string;
    /** Theme override for this component */
    theme?: Theme;
    /** Current numeric value */
    value?: number;
    /** Callback when value changes */
    onChange?: ({ target: { value } }: {
        target: {
            value: number;
        };
    }) => void;
}

declare const counterVariants: (props?: ClassProp | undefined) => string;

declare type CSSColor = `var(--${string})` | `rgb(${number}, ${number}, ${number})` | `rgba(${number}, ${number}, ${number}, ${number})` | `hsl(${number}, ${number}%, ${number}%)` | `hsla(${number}, ${number}%, ${number}%, ${number})`;

export declare const DateFilterDropdown: FC_2<DateFilterDropdownProps>;

declare type DateFilterDropdownProps = {
    label: string;
    position?: 'left' | 'right';
    onApply?: (date?: Date) => void;
};

/**
 * A date picker component built on react-day-picker.
 * Allows single date selection with calendar navigation.
 *
 * @example
 * ```tsx
 * // Basic date picker
 * <DatePicker
 *   defaultSelected={new Date()}
 *   onSelect={(date) => console.log(date)}
 * />
 *
 * // With custom styling
 * <DatePicker
 *   defaultSelected={startDate}
 *   onSelect={setStartDate}
 *   monthsClassName="custom-months"
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-datepicker--docs Storybook}
 */
export declare const DatePicker: FC<DatePickerProps>;

/**
 * Props for the DatePicker component.
 *
 * @example
 * ```tsx
 * <DatePicker
 *   defaultSelected={new Date()}
 *   onSelect={(date) => setSelectedDate(date)}
 * />
 * ```
 */
declare type DatePickerProps = Omit<DayPickerProps, 'mode'> & VariantProps<typeof datePickerVariants> & {
    /** CSS classes for the navigation arrows */
    arrowClassName?: string;
    /** CSS classes for the months container */
    monthsClassName?: string;
    /** Timezone for date display */
    timeZone?: TimeZone;
    /** Initial selected date */
    defaultSelected?: Date;
    /** Callback when a date is selected */
    onSelect?: (date: Date) => void;
};

declare const datePickerVariants: (props?: ClassProp | undefined) => string;

/**
 * A horizontal divider/separator line.
 *
 * @example
 * ```tsx
 * <div>
 *   <p>Section 1</p>
 *   <Divider />
 *   <p>Section 2</p>
 * </div>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-divider--docs Storybook}
 */
export declare const Divider: FC<HTMLAttributes<HTMLDivElement>>;

/**
 * A button with an attached dropdown menu for selecting actions.
 * Closes automatically on outside click, Escape key, or tab visibility change.
 *
 * @example
 * ```tsx
 * <DropdownButton
 *   options={[
 *     { label: 'Download PDF', onClick: handlePdf },
 *     { label: 'Download CSV', onClick: handleCsv },
 *   ]}
 *   buttonClassName="w-64"
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-dropdownbutton--docs Storybook}
 */
export declare const DropdownButton: FC<Props>;

/**
 * A compound component for building filter interfaces.
 * Includes sub-components for badge multi-select, date filtering, and reset actions.
 *
 * @example
 * ```tsx
 * <Filter theme="civo">
 *   <Filter.BadgeMultiSelect
 *     label="Status"
 *     options={[
 *       { id: 'active', label: 'Active', variant: 'success' },
 *       { id: 'pending', label: 'Pending', variant: 'warning' },
 *     ]}
 *     selectedValues={selected}
 *     onChange={setSelected}
 *   />
 *   <Filter.ResetButton onClick={() => setSelected([])} />
 * </Filter>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-filter--docs Storybook}
 */
export declare const Filter: FilterComponentProps;

declare type FilterAction = {
    label: string;
    onClick: () => void;
    variant?: ButtonProps['variant'];
};

/**
 * Filter compound component type with sub-components.
 */
declare type FilterComponentProps = FC<FilterProps> & {
    BadgeMultiSelect: FC<BadgeMultiSelectProps>;
    DateFilterDropdown: FC<DateFilterDropdownProps>;
    ResetButton: FC<ResetButtonProps>;
};

/**
 * Props for the Filter component.
 * A compound component for building filter interfaces.
 *
 * @example
 * ```tsx
 * <Filter theme="civo">
 *   <Filter.BadgeMultiSelect
 *     label="Status"
 *     options={statusOptions}
 *     selectedValues={selectedStatuses}
 *     onChange={setSelectedStatuses}
 *   />
 *   <Filter.DateFilterDropdown
 *     label="Date"
 *     onDateChange={setDateRange}
 *   />
 *   <Filter.ResetButton onClick={resetFilters} />
 * </Filter>
 * ```
 */
declare type FilterProps = VariantProps<typeof filterVariants> & PropsWithChildren & {
    /** Additional CSS classes for the filter wrapper */
    className?: string;
    /** Theme override for this component */
    theme?: Theme;
};

/**
 * Props for Table.Filter component.
 */
declare interface FilterProps_2 extends React.InputHTMLAttributes<HTMLInputElement>, PropsWithChildren {
    /** Placeholder text for the filter input */
    placeholder?: string;
}

declare const filterVariants: (props?: ClassProp | undefined) => string;

export declare const Footer: FC_2<FooterProps>;

declare interface FooterProps extends PropsWithChildren_2, VariantProps<typeof footerVariants> {
    className?: string;
}

declare const footerVariants: (props?: ClassProp | undefined) => string;

/** Valid HTML heading tags */
declare type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

/**
 * Props for Table.Head component.
 */
declare interface HeadProps extends React.HTMLAttributes<HTMLTableSectionElement>, PropsWithChildren, VariantProps<typeof headVariants> {
}

declare const headVariants: (props?: ClassProp | undefined) => string;

declare type HexColor = `#${string}`;

/**
 * A file input component for uploading images with preview and validation.
 * Supports drag states, file type validation, size limits, and upload progress.
 *
 * @example
 * ```tsx
 * <ImageUpload
 *   label="Profile Picture"
 *   name="avatar"
 *   accept="image/png,image/jpeg"
 *   maxSize={5 * 1024 * 1024}
 *   uploadButtonText="Choose image"
 *   onChange={(e) => console.log(e.target.files?.[0])}
 *   onRemove={() => setAvatar(null)}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-imageupload--docs Storybook}
 */
export declare const ImageUpload: {
    ({ className, error, fileName, fileSize, fileUrl, helperText, isRequired, label, labelClassName, name, onChange, onRemove, status, theme, uploadButtonText, accept, maxSize, }: ImageUploadProps): JSX.Element;
    displayName: string;
};

/**
 * Props for the ImageUpload component.
 * A file input for uploading images with preview, validation, and status states.
 *
 * @example
 * ```tsx
 * <ImageUpload
 *   label="Logo"
 *   name="logo"
 *   accept="image/png,image/svg+xml"
 *   maxSize={2 * 1024 * 1024}
 *   onChange={(e) => handleUpload(e.target.files?.[0])}
 *   onRemove={() => setLogo(null)}
 *   isRequired
 * />
 * ```
 */
declare interface ImageUploadProps extends Omit<VariantProps<typeof imageUploadVariants>, 'status'> {
    /** Additional CSS classes */
    className?: string;
    /** Error message to display */
    error?: string;
    /** Name of the uploaded file */
    fileName?: string;
    /** Formatted size of the uploaded file */
    fileSize?: string;
    /** URL or data URL of the uploaded file for preview */
    fileUrl?: string;
    /** Helper text displayed below the input */
    helperText?: string;
    /** Whether the field is required */
    isRequired?: boolean;
    /** Label displayed above the input */
    label?: string | ReactNode;
    /** Additional CSS classes for the label */
    labelClassName?: string;
    /** Form field name */
    name?: string;
    /** Callback fired when a file is selected */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    /** Callback fired when the uploaded file is removed */
    onRemove?: () => void;
    /** Current upload status */
    status?: ImageUploadStatusType;
    /** Theme override for this component */
    theme?: Theme;
    /** Text displayed on the upload button */
    uploadButtonText?: string;
    /** Accepted file MIME types (comma-separated) */
    accept?: string;
    /** Maximum file size in bytes */
    maxSize?: number;
}

/**
 * Upload status states for the ImageUpload component.
 */
declare enum ImageUploadStatus {
    Default = "default",
    Uploading = "uploading",
    Complete = "complete",
    Error = "error"
}

declare type ImageUploadStatusType = ImageUploadStatus;

declare const imageUploadVariants: (props?: ({
    status?: "error" | "default" | "uploading" | "complete" | null | undefined;
} & ClassProp) | undefined) => string;

/**
 * A text input component with label, error handling, and helper text support.
 * Includes built-in password visibility toggle and search icon variant.
 *
 * @example
 * ```tsx
 * // Basic input with label
 * <Input label="Email" placeholder="Enter your email" />
 *
 * // Required input with helper text
 * <Input
 *   label="Username"
 *   isRequired
 *   helperText="Choose a unique username"
 * />
 *
 * // Input with error state
 * <Input
 *   label="Email"
 *   value={email}
 *   error="Please enter a valid email address"
 * />
 *
 * // Password input (auto show/hide toggle)
 * <Input label="Password" type="password" />
 *
 * // Search input with icon
 * <Input placeholder="Search..." isSearch />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-input--docs Storybook}
 */
export declare const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>;

/**
 * Props for the Input component.
 *
 * @example
 * ```tsx
 * <Input label="Email" placeholder="Enter email" />
 * <Input label="Password" type="password" isRequired />
 * <Input error="Invalid email" helperText="We'll never share your email" />
 * ```
 */
declare interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
    /** Error message to display below the input */
    error?: string;
    /** Helper text displayed below the input when no error */
    helperText?: string;
    /** Additional CSS classes for the helper text */
    helperTextClassName?: string;
    /** Show required indicator (*) next to label */
    isRequired?: boolean;
    /** Show search icon inside the input */
    isSearch?: boolean;
    /** Label text or element displayed above the input */
    label?: string | ReactNode;
    /** Additional CSS classes for the label */
    labelClassName?: string;
    /** Theme override for this component */
    theme?: Theme;
}

declare const inputVariants: (props?: ({
    variant?: "error" | "default" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const List: FC_3<ListProps>;

/**
 * Props for Tabs.List component.
 */
declare interface ListProps extends React.HTMLAttributes<HTMLDivElement>, PropsWithChildren {
    /** Tab list orientation */
    orientation: 'horizontal' | 'vertical';
}

/**
 * A spinning loading indicator.
 *
 * @example
 * ```tsx
 * // Default loading spinner
 * <Loading />
 *
 * // Custom size
 * <Loading className="w-8 h-8" />
 *
 * // In a button
 * <Button disabled>
 *   <Loading className="w-4 h-4 mr-2" />
 *   Loading...
 * </Button>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-loading--docs Storybook}
 */
export declare const Loading: FC<LoadingProps>;

/**
 * Props for the Loading component.
 *
 * @example
 * ```tsx
 * <Loading />
 * <Loading className="w-8 h-8" />
 * ```
 */
declare type LoadingProps = InputHTMLAttributes<SVGSVGElement> & VariantProps<typeof loadingVariants> & {
    /** Theme override for this component */
    theme?: Theme;
};

declare const loadingVariants: (props?: ClassProp | undefined) => string;

export declare const Logo: FC_2<LogoProps>;

declare interface LogoProps extends PropsWithChildren_2, VariantProps<typeof logoVariants> {
    className?: string;
}

declare const logoVariants: (props?: ClassProp | undefined) => string;

/**
 * A modal dialog component with Header, Body, and Footer sub-components.
 * Supports keyboard navigation (Escape to close) and portals to document.body.
 *
 * @example
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
 *
 * <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
 *   <Modal.Header>Confirm Action</Modal.Header>
 *   <Modal.Body>
 *     Are you sure you want to proceed?
 *   </Modal.Body>
 *   <Modal.Footer>
 *     <Button variant="secondary" onClick={() => setIsOpen(false)}>
 *       Cancel
 *     </Button>
 *     <Button onClick={handleConfirm}>Confirm</Button>
 *   </Modal.Footer>
 * </Modal>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-modal--docs Storybook}
 */
export declare const Modal: FC<ModalProps> & {
    Header: FC<ModalChildProps>;
    Body: FC<ModalChildProps>;
    Footer: FC<ModalChildProps>;
};

/**
 * Props for Modal sub-components (Header, Body, Footer).
 */
declare type ModalChildProps = {
    /** Content of the modal section */
    children: ReactNode;
    /** Additional CSS classes */
    className?: string;
    /** Merge props onto child element */
    asChild?: boolean;
};

/**
 * Props for the Modal component.
 *
 * @example
 * ```tsx
 * <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
 *   <Modal.Header>Title</Modal.Header>
 *   <Modal.Body>Content</Modal.Body>
 *   <Modal.Footer>
 *     <Button onClick={() => setIsOpen(false)}>Close</Button>
 *   </Modal.Footer>
 * </Modal>
 * ```
 */
declare interface ModalProps extends PropsWithChildren, VariantProps<typeof modalVariants> {
    /** CSS classes for the close button */
    buttonCloseClassName?: string;
    /** Additional CSS classes for the modal */
    className?: string;
    /** DOM element to portal the modal into (defaults to document.body) */
    container?: Element | DocumentFragment;
    /** Whether the modal is open */
    isOpen?: boolean;
    /** Show the X close button in the corner */
    showCloseButton?: boolean;
    /** Theme override for this component */
    theme?: Theme;
    /** Callback when modal is closed (Escape key or close button) */
    onClose?: () => void;
}

declare const modalVariants: (props?: ClassProp | undefined) => string;

/**
 * A dropdown component for selecting one or multiple options with search functionality.
 * Displays selected items as badges and supports loading states.
 *
 * @example
 * ```tsx
 * const [selected, setSelected] = useState<MultiSelectDropdownOption[]>([]);
 *
 * <MultiSelectDropdown
 *   label="Assign team members"
 *   placeholder="Search members..."
 *   options={teamMembers}
 *   value={selected}
 *   onChange={(e) => setSelected(e.target.value)}
 *   multiselect
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-multiselectdropdown--docs Storybook}
 */
export declare const MultiSelectDropdown: FC<MultiSelectDropdownProps>;

/**
 * Configuration for a multi-select dropdown option.
 */
declare type MultiSelectDropdownOption = {
    /** Unique identifier for the option */
    id: string | number;
    /** Display label for the option */
    label: string;
    /** Optional badge text displayed next to the label */
    badge?: string;
    /** Optional value (defaults to label if not provided) */
    value?: string;
};

/**
 * Props for the MultiSelectDropdown component.
 * A dropdown that allows selecting one or multiple options with search.
 *
 * @example
 * ```tsx
 * <MultiSelectDropdown
 *   label="Select users"
 *   placeholder="Search users..."
 *   options={[
 *     { id: 1, label: 'John Doe', badge: 'Admin' },
 *     { id: 2, label: 'Jane Smith', badge: 'User' },
 *   ]}
 *   value={selectedUsers}
 *   onChange={(e) => setSelectedUsers(e.target.value)}
 *   multiselect
 * />
 * ```
 */
declare interface MultiSelectDropdownProps extends VariantProps<typeof multiSelectDropdownVariants>, Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'onBlur'> {
    /** Whether the dropdown is in a loading state */
    isLoading?: boolean;
    /** Whether the field is required */
    isRequired?: boolean;
    /** Label displayed above the dropdown */
    label?: string;
    /** Additional CSS classes for the label */
    labelClassName?: string;
    /** Whether multiple options can be selected */
    multiselect?: boolean;
    /** Form field name */
    name?: string;
    /** Text shown when no options match the search */
    noOptionsText?: string;
    /** Available options to select from */
    options: MultiSelectDropdownOption[];
    /** Placeholder text when no selection */
    placeholder?: string;
    /** Currently selected options */
    value?: MultiSelectDropdownOption[];
    /** Additional CSS classes for the wrapper */
    wrapperClassName?: string;
    /** Callback fired when selection changes */
    onChange?: OnChangeFn_2;
    /** Callback fired when the input loses focus */
    onBlur?: OnBlurFn;
}

declare const multiSelectDropdownVariants: (props?: ClassProp | undefined) => string;

/**
 * Configuration for a multi-select filter in the table.
 */
declare type MultiSelectFilter = {
    /** Unique key for the filter */
    key: string;
    /** Display label for the filter */
    label: string;
    /** Position of the filter dropdown */
    position?: 'right' | 'left';
    /** Available filter options */
    options: Option_5[];
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

declare type OnBlurFn = (event: {
    target: HTMLInputElement | null;
    type?: string;
}) => void;

declare type OnChangeFn = (params: {
    target: {
        value: string;
        name: string;
    };
}) => void;

declare type OnChangeFn_2 = (params: {
    target: {
        value: MultiSelectDropdownOption[];
        name: string;
    };
}) => void;

/**
 * Option type for Select dropdown items.
 *
 * @example
 * ```tsx
 * const options: Option[] = [
 *   { value: 'us', label: 'United States', leftIcon: <FlagUS /> },
 *   { value: 'uk', label: 'United Kingdom', subLabel: 'Europe' },
 * ];
 * ```
 */
declare type Option_2 = {
    /** Display text for the option */
    label: string;
    /** Secondary text displayed below the label */
    subLabel?: string | ReactNode;
    /** Icon displayed on the left side of the option */
    leftIcon?: ReactNode | string;
    /** CSS classes for the left icon */
    leftIconClassName?: string;
    /** Show right component when this option is selected */
    showRightComponentOnselectedValue?: boolean;
    /** Component displayed on the right side of the option */
    rightComponent?: ReactNode | string;
    /** CSS classes for the right component */
    rightComponentClassName?: string;
    /** CSS classes for wrapper when this option is selected */
    wrapperClassNameOnSelectedValue?: string;
    /** Unique value for the option */
    value: string;
};

/**
 * Option type for Autocomplete suggestions.
 */
declare type Option_3 = {
    /** The value to display and select */
    value: string;
};

/**
 * Configuration for a dropdown menu option.
 */
declare type Option_4 = {
    /** The text or element displayed for this option */
    label: string | ReactNode;
    /** Callback fired when this option is selected */
    onClick?: VoidFunction;
};

/**
 * Configuration for a filter option.
 */
declare type Option_5 = {
    /** Unique identifier for the option */
    id: string;
    /** Display label for the option */
    label: string;
    /** Visual variant for the badge */
    variant?: BadgeProps['variant'];
};

/**
 * A phone number input with country code selector and automatic formatting.
 * Uses google-libphonenumber for validation and formatting.
 *
 * @example
 * ```tsx
 * <PhoneNumberInput
 *   label="Contact Number"
 *   name="contactPhone"
 *   defaultCountryCode="US"
 *   showFlagOnSearch
 *   showInputFilter
 *   isRequired
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-phonenumberinput--docs Storybook}
 */
export declare const PhoneNumberInput: FC<Props_2>;

/**
 * A doughnut/pie chart component for data visualization.
 * Built on Chart.js with support for center text labels.
 *
 * @example
 * ```tsx
 * <PieChart
 *   values={[25, 75]}
 *   colors={['#94a3b8', '#22c55e']}
 *   title="75%"
 *   subtitle="Progress"
 *   cutoutPercentage={80}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-piechart--docs Storybook}
 */
export declare const PieChart: FC<Props_3>;

/**
 * A progress bar component showing completion percentage.
 *
 * @example
 * ```tsx
 * // Basic progress bar
 * <ProgressBar percent={50} />
 *
 * // With label
 * <ProgressBar percent={75} label="Upload Progress" />
 *
 * // Completed state
 * <ProgressBar percent={100} status="success" label="Complete" />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-progressbar--docs Storybook}
 */
export declare const ProgressBar: FC<ProgressBarProps>;

/**
 * Props for the ProgressBar component.
 *
 * @example
 * ```tsx
 * <ProgressBar percent={75} label="Progress" />
 * <ProgressBar percent={100} status="success" />
 * ```
 */
declare interface ProgressBarProps extends VariantProps<typeof progressBarVariants> {
    /** CSS classes for the background bar */
    backgroundBarClassName?: string;
    /** Additional CSS classes */
    className?: string;
    /** Label text displayed above the progress bar */
    label?: string;
    /** CSS classes for the label */
    labelClassName?: string;
    /** CSS classes for the label wrapper */
    labelWrapperClassName?: string;
    /** Progress percentage (0-100) */
    percent: number;
    /** CSS classes for the percent text */
    percentClassName?: string;
    /** CSS classes for the progress bar fill */
    progressBarClassName?: string;
    /** Visual status of the progress bar */
    status?: 'success' | 'progress';
    /** Theme override for this component */
    theme?: Theme;
    /** CSS classes for the outer wrapper */
    wrapperClassName?: string;
}

declare const progressBarVariants: (props?: ClassProp | undefined) => string;

/**
 * Props for the DropdownButton component.
 *
 * @example
 * ```tsx
 * <DropdownButton
 *   options={[
 *     { label: 'PDF', onClick: () => downloadPdf() },
 *     { label: 'CSV', onClick: () => downloadCsv() },
 *     { label: 'Excel', onClick: () => downloadExcel() },
 *   ]}
 * />
 * ```
 */
declare type Props = {
    /** Additional CSS classes for the trigger button */
    buttonClassName?: string;
    /** Additional CSS classes for the wrapper container */
    className?: string;
    /** Additional CSS classes for each dropdown item */
    itemClassName?: string;
    /** Additional CSS classes for the dropdown list */
    listClassName?: string;
    /** Array of options to display in the dropdown */
    options: Option_4[];
};

/**
 * Props for the PhoneNumberInput component.
 * An input with country code selector and phone number formatting.
 *
 * @example
 * ```tsx
 * <PhoneNumberInput
 *   label="Phone Number"
 *   name="phone"
 *   defaultCountryCode="US"
 *   placeholder="Enter phone number"
 *   showFlagOnSearch
 * />
 * ```
 */
declare type Props_2 = InputHTMLAttributes<HTMLInputElement> & {
    /** Default country code for the selector (e.g., 'US', 'GB') */
    defaultCountryCode?: RegionCode;
    /** Whether the input is disabled */
    disabled?: boolean;
    /** Error message to display */
    error?: string;
    /** Helper text displayed below the input */
    helperText?: string;
    /** Additional CSS classes for the helper text */
    helperTextClassName?: string;
    /** Whether the field is required */
    isRequired?: boolean;
    /** Label displayed above the input */
    label?: string;
    /** Additional CSS classes for the label */
    labelClassName?: string;
    /** Form field name */
    name?: string;
    /** Placeholder text for the input */
    placeholder?: string;
    /** Whether to show country flags in the search dropdown */
    showFlagOnSearch?: boolean;
    /** Whether to show the country filter input */
    showInputFilter?: boolean;
    /** Whether to show country names in the search dropdown */
    showNameOnSearch?: boolean;
    /** Whether to show the placeholder text */
    showPlaceHolder?: boolean;
    /** Additional CSS classes for the wrapper */
    wrapperClassName?: string;
};

/**
 * Props for the PieChart component.
 * A doughnut/pie chart built on Chart.js for data visualization.
 *
 * @example
 * ```tsx
 * <PieChart
 *   values={[30, 70]}
 *   colors={['#ef4444', '#22c55e']}
 *   title="70%"
 *   subtitle="Complete"
 *   cutoutPercentage={75}
 * />
 * ```
 */
declare type Props_3 = {
    /**
     * Array of hexadecimal colors for the borders of the pie chart segments
     * @default ['#FFFFFF', '#FFFFFF']
     */
    borderColors?: HexColor[] | CSSColor[] | (HexColor | CSSColor)[];
    /**
     * Width of the border for pie chart segments in pixels
     * @default 0
     */
    borderWidth?: number;
    /**
     * Array of hexadecimal colors for filling the pie chart segments
     * @default ['#525252', '#00D492']
     */
    colors?: HexColor[] | CSSColor[] | (HexColor | CSSColor)[];
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
} /**
* Union type that enforces either:
* - No title and no subtitle
* - Title with optional subtitle
*/ & ({
    title?: undefined;
    subtitle?: never;
} | {
    title: string;
    subtitle?: string;
});

declare type Props_4<TData extends RowData> = CellContext<TData, string> & {
    value?: string;
};

/**
 * Props for the VirtualizedTable component.
 * A feature-rich data table with filtering, pagination, and sorting.
 *
 * @example
 * ```tsx
 * <VirtualizedTable
 *   id="users-table"
 *   ariaLabel="Users list"
 *   columns={[
 *     { accessorKey: 'name', header: 'Name' },
 *     { accessorKey: 'email', header: 'Email' },
 *   ]}
 *   data={users}
 *   totalItems={totalUsers}
 *   showPagination
 *   showFilter
 *   showFilterInput
 *   filterSearchPlaceholder="Search users..."
 * />
 * ```
 */
declare type Props_5<TData extends RowData_2> = VariantProps<typeof virtualizeTableVariants> & {
    id: string | string[];
    ariaLabel?: string;
    columns: ColumnDef_2<TData, string>[];
    data: TData[];
    className?: string;
    classNameHeaderActiveArrows?: string;
    classNameHeaderArrows?: string;
    classNameHeaderTable?: string;
    classNameTable?: string;
    classNameWrapperTable?: string;
    queryOptions?: Omit<UseQueryOptions<any, any, any, any>, 'queryKey' | 'queryFn'>;
    isLoading?: boolean;
    fetchData?: (params: Record<string, string | number | string[] | number[] | undefined>) => Promise<{
        data: TData[];
        totalItemsCount?: number;
    }>;
} & ({
    showPagination: true;
    showTotalItems?: boolean;
    showDropdownPagination?: boolean;
    showDotPagination?: boolean;
    showFormPagination?: boolean;
    pageSizes?: number[] | string[];
    totalItems: number;
} | {
    showPagination?: false | undefined;
    showTotalItems?: never;
    showDropdownPagination?: never;
    showDotPagination?: never;
    showFormPagination?: never;
    pageSizes?: never;
    totalItems?: never;
}) & ({
    filterSearchPlaceholder?: string;
    multiSelectFilter?: MultiSelectFilter[];
    showFilter: true;
    showFilterInput?: boolean;
    filterActions?: FilterAction[];
    showResetButton?: boolean;
    resetButtonClassName?: string;
} | {
    filterSearchPlaceholder?: never;
    multiSelectFilter?: never;
    showFilter?: false | undefined;
    showFilterInput?: never;
    filterActions?: FilterAction[];
    showResetButton?: never;
    resetButtonClassName?: never;
});

declare type Props_6<TData extends RowData> = CellContext<TData, unknown> & {
    actions: Action<TData>[];
    iconTriggerButtonClassName?: string;
    triggerButtonClassName?: string;
    wrapperActionsClassName?: string;
    wrapperClassName?: string;
    wrapperContentActionsClassName?: string;
};

/**
 * A radio button component with label and optional description.
 * Use RadioGroup to manage a group of radio buttons.
 *
 * @example
 * ```tsx
 * <Radio
 *   name="plan"
 *   value="basic"
 *   label="Basic Plan"
 *   description="Free forever"
 *   checked={plan === 'basic'}
 *   onChange={(value) => setPlan(value)}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-radio--docs Storybook}
 */
export declare const Radio: FC<RadioProps>;

/**
 * A card-style radio button for visually prominent selection options.
 * Use RadioCardGroup to manage a group of radio cards.
 *
 * @example
 * ```tsx
 * <RadioCard
 *   name="tier"
 *   value="enterprise"
 *   label="Enterprise"
 *   description="Custom pricing"
 *   checked={tier === 'enterprise'}
 *   onChange={(value) => setTier(value)}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-radiocard--docs Storybook}
 */
export declare const RadioCard: FC<RadioCardProps>;

/**
 * A group of card-style radio buttons with shared state management.
 *
 * @example
 * ```tsx
 * <RadioCardGroup
 *   name="plan"
 *   direction="row"
 *   options={[
 *     { value: 'starter', label: 'Starter', description: 'For individuals' },
 *     { value: 'team', label: 'Team', description: 'For small teams' },
 *     { value: 'business', label: 'Business', description: 'For organizations' },
 *   ]}
 *   defaultChecked="team"
 *   onValueChange={(value) => console.log(value)}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-radiocardgroup--docs Storybook}
 */
export declare const RadioCardGroup: FC<RadioCardGroupProps>;

/**
 * Props for the RadioCardGroup component.
 *
 * @example
 * ```tsx
 * <RadioCardGroup
 *   name="pricing"
 *   options={[
 *     { value: 'basic', label: 'Basic', description: '$9/mo' },
 *     { value: 'pro', label: 'Pro', description: '$29/mo' },
 *     { value: 'enterprise', label: 'Enterprise', description: 'Custom' },
 *   ]}
 *   defaultChecked="pro"
 *   onValueChange={(value) => setTier(value)}
 * />
 * ```
 */
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

/**
 * Props for the RadioCard component.
 * Combines Card styling with Radio functionality.
 *
 * @example
 * ```tsx
 * <RadioCard
 *   name="plan"
 *   value="pro"
 *   label="Pro Plan"
 *   description="$29/month"
 *   checked={selected === 'pro'}
 *   onChange={(value) => setSelected(value)}
 * />
 * ```
 */
declare type RadioCardProps = Omit<CardProps, 'canHover' | 'isActive'> & Pick<RadioProps, 'name' | 'value' | 'checked' | 'onChange' | 'label' | 'disabled' | 'defaultChecked' | 'labelTextClassName' | 'description' | 'descriptionClassName'> & {
    labelWrapperClassName?: string;
    theme?: Theme;
};

/**
 * A group of radio buttons with shared state management.
 *
 * @example
 * ```tsx
 * // Vertical layout (default)
 * <RadioGroup
 *   name="subscription"
 *   options={[
 *     { value: 'monthly', label: 'Monthly', description: '$10/mo' },
 *     { value: 'yearly', label: 'Yearly', description: '$100/yr' },
 *   ]}
 *   defaultChecked="monthly"
 *   onValueChange={(value) => setSubscription(value)}
 * />
 *
 * // Horizontal layout
 * <RadioGroup
 *   name="size"
 *   direction="row"
 *   options={[
 *     { value: 'sm', label: 'Small' },
 *     { value: 'md', label: 'Medium' },
 *     { value: 'lg', label: 'Large' },
 *   ]}
 *   onValueChange={setSize}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-radiogroup--docs Storybook}
 */
export declare const RadioGroup: FC<RadioGroupProps>;

/**
 * Props for the RadioGroup component.
 *
 * @example
 * ```tsx
 * <RadioGroup
 *   name="plan"
 *   options={[
 *     { value: 'basic', label: 'Basic' },
 *     { value: 'pro', label: 'Pro' },
 *     { value: 'enterprise', label: 'Enterprise' },
 *   ]}
 *   defaultChecked="basic"
 *   onValueChange={(value) => setPlan(value)}
 * />
 * ```
 */
declare interface RadioGroupProps {
    /** Merge props onto child element */
    asChild?: boolean;
    /** CSS classes for each radio option */
    className?: RadioProps['className'];
    /** Initially selected value */
    defaultChecked?: string;
    /** Layout direction (row or col) */
    direction?: 'row' | 'col';
    /** Label for the group */
    label?: string | ReactNode;
    /** Form field name (shared by all radios) */
    name: string;
    /** Array of radio options */
    options: Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>[];
    /** Theme override for this component */
    theme?: Theme;
    /** CSS classes for the wrapper */
    wrapperClassName?: string;
    /** Callback when selection changes */
    onValueChange?: (value: string) => void;
}

/**
 * Props for the Radio component.
 *
 * @example
 * ```tsx
 * <Radio
 *   name="plan"
 *   value="basic"
 *   label="Basic Plan"
 *   checked={selected === 'basic'}
 *   onChange={(value) => setSelected(value)}
 * />
 * ```
 */
declare interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'disabled'>, VariantProps<typeof radioVariants> {
    /** Whether the radio is checked */
    checked?: boolean;
    /** Initial checked state (uncontrolled) */
    defaultChecked?: boolean;
    /** Whether the radio is disabled */
    disabled?: boolean;
    /** Label text or element */
    label?: string | ReactNode;
    /** CSS classes for the label text */
    labelTextClassName?: string;
    /** Form field name (groups radios together) */
    name: string;
    /** Description text below the label */
    description?: string | ReactNode;
    /** CSS classes for the description */
    descriptionClassName?: string;
    /** Value submitted when selected */
    value: string;
    /** CSS classes for the wrapper */
    wrapperClassName?: string;
    /** Theme override for this component */
    theme?: Theme;
    /** Callback when selected */
    onChange?: (value: string) => void;
}

declare const radioVariants: (props?: ({
    disabled?: boolean | null | undefined;
    checked?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

/**
 * A dual-thumb slider component for selecting a value range.
 * Built on Radix UI Slider for accessibility.
 *
 * @example
 * ```tsx
 * <Range
 *   label="Budget"
 *   min={0}
 *   max={10000}
 *   defaultValue={[2000, 8000]}
 *   showValue
 *   name="budget"
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-range--docs Storybook}
 */
declare const Range_2: FC<RangeProps>;
export { Range_2 as Range }

/**
 * Props for the Range component.
 * A dual-thumb slider for selecting a value range.
 *
 * @example
 * ```tsx
 * <Range
 *   label="Price Range"
 *   min={0}
 *   max={1000}
 *   defaultValue={[100, 500]}
 *   showValue
 *   size="md"
 * />
 * ```
 */
declare interface RangeProps extends VariantProps<typeof rangeVariants> {
    /** Additional CSS classes */
    className?: string;
    /** Initial range values [min, max] */
    defaultValue?: SliderProps['defaultValue'];
    /** Label displayed above the range slider */
    label?: string;
    /** Maximum value for the range */
    max?: SliderProps['max'];
    /** Minimum value for the range */
    min?: SliderProps['min'];
    /** Form field name for the hidden input */
    name?: string;
    /** Whether to display the current range values */
    showValue?: boolean;
    /** Size of the slider track and thumbs */
    size?: 'sm' | 'md' | 'lg';
    /** Theme override for this component */
    theme?: Theme;
}

declare const rangeVariants: (props?: ClassProp | undefined) => string;

declare type ResetButtonProps = ButtonProps & {
    disabled?: boolean;
    onClick?: VoidFunction;
};

/** Base row data type from TanStack Table */
export declare type RowData = RowData_2;

/**
 * Props for Table.Row component.
 */
declare interface RowProps extends React.HTMLAttributes<HTMLTableRowElement>, PropsWithChildren, VariantProps<typeof rowVariants> {
    /** Width of the row */
    width?: string;
    /** Whether the row is selected */
    isSelected?: boolean;
    /** Callback when row is selected */
    onSelect?: () => void;
}

declare const rowVariants: (props?: ({
    isSelected?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

/**
 * A dropdown select component with search, icons, and infinite scroll support.
 * Also exported as `Dropdown` for convenience.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Select
 *   label="Country"
 *   options={[
 *     { value: 'us', label: 'United States' },
 *     { value: 'uk', label: 'United Kingdom' },
 *   ]}
 *   value={selected}
 *   onChange={(e) => setSelected(e.target.value)}
 * />
 *
 * // Searchable with custom icons
 * <Select
 *   label="Select region"
 *   options={regions.map(r => ({
 *     value: r.id,
 *     label: r.name,
 *     leftIcon: <RegionIcon />,
 *     subLabel: r.description,
 *   }))}
 *   searchable
 *   highlightSearch
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-select--docs Storybook}
 */
declare const Select: FC<SelectProps>;
export { Select as Dropdown }
export { Select }

/**
 * Props for the Select (Dropdown) component.
 *
 * @example
 * ```tsx
 * // Basic select
 * <Select
 *   label="Country"
 *   options={[
 *     { value: 'us', label: 'United States' },
 *     { value: 'uk', label: 'United Kingdom' },
 *   ]}
 *   value={country}
 *   onChange={(e) => setCountry(e.target.value)}
 * />
 *
 * // Searchable select
 * <Select
 *   label="Search countries"
 *   options={countries}
 *   searchable
 *   highlightSearch
 * />
 *
 * // With infinite scroll
 * <Select
 *   options={options}
 *   isInfiniteScrollEnabled
 *   onFetchMoreOptions={async ({ page }) => fetchMore(page)}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-select--docs Storybook}
 */
declare type SelectProps = VariantProps<typeof selectVariants> & Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> & {
    additionalOptions?: ReactNode[] | string[];
    className?: string;
    disabled?: boolean;
    error?: string;
    errorClassName?: string;
    helperText?: string;
    helperTextClassName?: string;
    highlightSearch?: boolean;
    iconClassName?: string;
    inputClassName?: string;
    isLoading?: boolean;
    isRequired?: boolean;
    label?: string;
    labelClassName?: string;
    listClassName?: string;
    listItemClassName?: string;
    listItemSecondRowClassName?: string;
    mainWrapperClassName?: string;
    noOptionsText?: string;
    options: Option_2[];
    searchable?: boolean;
    showSearchIcon?: boolean;
    theme?: Theme;
    value?: string;
    wrapperClassName?: string;
    onBlur?: VoidFunction;
    onChange?: OnChangeFn;
    onSearchChange?: (searchTerm: string) => void;
} & ({
    isInfiniteScrollEnabled: true;
    onFetchMoreOptions: (params: {
        page: number;
        pageSize: number;
        termOfSearch?: string;
    }) => Promise<{
        data: Option_2[];
        hasMore: boolean;
    }>;
} | {
    isInfiniteScrollEnabled?: false | undefined;
    onFetchMoreOptions?: never;
});

declare const selectVariants: (props?: ({
    hasError?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

/**
 * A compound component for building application sidebars.
 * Includes sub-components for logo, navigation, groups, options, and footer.
 *
 * @example
 * ```tsx
 * <Sidebar canResize minWith={200} maxWith={400} theme="dark">
 *   <Sidebar.Logo>
 *     <img src="/logo.svg" alt="Logo" />
 *   </Sidebar.Logo>
 *   <Sidebar.Navigation>
 *     <Sidebar.NavigationGroup label="Menu">
 *       <Sidebar.NavigationOption href="/" icon={<Home />}>
 *         Home
 *       </Sidebar.NavigationOption>
 *     </Sidebar.NavigationGroup>
 *   </Sidebar.Navigation>
 *   <Sidebar.Footer>Version 1.0</Sidebar.Footer>
 * </Sidebar>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-sidebar--docs Storybook}
 */
export declare const Sidebar: FC<SidebarProps> & SidebarChildrenProps;

/**
 * Sidebar compound component type with sub-components.
 */
declare type SidebarChildrenProps = {
    Footer: FC<FooterProps>;
    Logo: FC<LogoProps>;
    Navigation: FC<NavigationProps>;
    NavigationGroup: FC<NavigationGroupProps>;
    NavigationOption: FC<NavigationOptionProps>;
    NavigationSeparator: FC<NavigationSeparatorProps>;
};

/**
 * Props for the Sidebar component.
 * A compound component for building application sidebars with navigation.
 *
 * @example
 * ```tsx
 * <Sidebar canResize minWith={200} maxWith={400}>
 *   <Sidebar.Logo>
 *     <img src="/logo.svg" alt="Logo" />
 *   </Sidebar.Logo>
 *   <Sidebar.Navigation>
 *     <Sidebar.NavigationGroup label="Main">
 *       <Sidebar.NavigationOption href="/dashboard" icon={<Home />}>
 *         Dashboard
 *       </Sidebar.NavigationOption>
 *       <Sidebar.NavigationOption href="/settings" icon={<Settings />}>
 *         Settings
 *       </Sidebar.NavigationOption>
 *     </Sidebar.NavigationGroup>
 *   </Sidebar.Navigation>
 *   <Sidebar.Footer>v1.0.0</Sidebar.Footer>
 * </Sidebar>
 * ```
 */
declare interface SidebarProps extends VariantProps<typeof wrapperSiderbarVariants>, PropsWithChildren {
    /** Whether the sidebar can be resized by dragging */
    canResize?: boolean;
    /** Additional CSS classes for the divider */
    dividerClassName?: string;
    /** Maximum width when resizing (in pixels) */
    maxWith?: number;
    /** Minimum width when resizing (in pixels) */
    minWith?: number;
    /** Theme override for this component */
    theme?: Theme;
    /** Additional CSS classes for the wrapper */
    wrapperClassName?: string;
}

/**
 * A single-thumb slider component for selecting a value.
 * Built on Radix UI Slider for accessibility.
 *
 * @example
 * ```tsx
 * <Slider
 *   label="Brightness"
 *   min={0}
 *   max={100}
 *   defaultValue={[75]}
 *   showValue
 *   name="brightness"
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-slider--docs Storybook}
 */
export declare const Slider: FC<SliderProps_2>;

/**
 * Props for the Slider component.
 * A single-thumb slider for selecting a single value.
 *
 * @example
 * ```tsx
 * <Slider
 *   label="Volume"
 *   min={0}
 *   max={100}
 *   defaultValue={[50]}
 *   showValue
 *   size="md"
 * />
 * ```
 */
declare interface SliderProps_2 extends VariantProps<typeof sliderVariants> {
    /** Additional CSS classes */
    className?: string;
    /** Initial value as single-element array */
    defaultValue?: SliderProps['defaultValue'];
    /** Label displayed above the slider */
    label?: string;
    /** Maximum value for the slider */
    max?: SliderProps['max'];
    /** Minimum value for the slider */
    min?: SliderProps['min'];
    /** Form field name for the hidden input */
    name?: string;
    /** Whether to display the current value */
    showValue?: boolean;
    /** Size of the slider track and thumb */
    size?: 'sm' | 'md' | 'lg';
    /** Theme override for this component */
    theme?: Theme;
}

declare const sliderVariants: (props?: ClassProp | undefined) => string;

/**
 * A single step in the breadcrumb navigation.
 */
declare type Step = {
    /** Display text for the breadcrumb item */
    label: string;
    /** URL to navigate to when clicked */
    to?: string;
    /** Link target (_self or _blank) */
    target?: '_self' | '_blank';
    /** Whether this step is the current/active page */
    isActive?: boolean;
    /** Custom component to render (e.g., Link from react-router) */
    component?: FC<any>;
};

/**
 * A toggle switch component built on Radix UI primitives.
 * Supports horizontal and vertical layouts with label and helper text.
 *
 * @example
 * ```tsx
 * // Basic switch
 * <Switch label="Enable feature" />
 *
 * // Controlled switch
 * <Switch
 *   label="Dark mode"
 *   value={isDarkMode}
 *   onChange={(enabled) => setIsDarkMode(enabled)}
 * />
 *
 * // Vertical layout with helper text
 * <Switch
 *   label="Notifications"
 *   helperText="Receive email notifications"
 *   alignment="vertical"
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-switch--docs Storybook}
 */
export declare const Switch: FC<SwitchProps>;

/**
 * Props for the Switch component.
 *
 * @example
 * ```tsx
 * <Switch label="Enable notifications" onChange={(enabled) => setEnabled(enabled)} />
 * <Switch label="Dark mode" value={isDark} onChange={setIsDark} />
 * <Switch label="Feature" helperText="Enable experimental features" alignment="vertical" />
 * ```
 */
declare interface SwitchProps extends VariantProps<typeof switchVariants> {
    /** Layout direction: horizontal (default) or vertical */
    alignment?: 'horizontal' | 'vertical';
    /** Additional CSS classes */
    className?: string;
    /** Initial checked state */
    defaultChecked?: boolean;
    /** Whether the switch is disabled */
    disabled?: boolean;
    /** Helper text displayed below the label */
    helperText?: string;
    /** CSS classes for helper text */
    helperTextClassName?: string;
    /** Label text displayed next to switch */
    label?: string;
    /** CSS classes for the label */
    labelClassName?: string;
    /** Form field name */
    name?: string;
    /** Theme override for this component */
    theme?: Theme;
    /** CSS classes for the thumb element */
    thumbClassName?: string;
    /** Controlled checked state */
    value?: boolean;
    /** Callback when checked state changes */
    onChange?: (e: boolean) => void;
}

declare const switchVariants: (props?: ClassProp | undefined) => string;

/**
 * A composable table component with Head, Body, Row, and Filter sub-components.
 * For large datasets, consider using VirtualizedTable instead.
 *
 * @example
 * ```tsx
 * <Table>
 *   <Table.Filter placeholder="Search..." />
 *   <Table.Head>
 *     <Table.Row>
 *       <th>Name</th>
 *       <th>Email</th>
 *       <th>Role</th>
 *     </Table.Row>
 *   </Table.Head>
 *   <Table.Body>
 *     {users.map((user) => (
 *       <Table.Row key={user.id}>
 *         <td>{user.name}</td>
 *         <td>{user.email}</td>
 *         <td>{user.role}</td>
 *       </Table.Row>
 *     ))}
 *   </Table.Body>
 * </Table>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-table--docs Storybook}
 */
export declare const Table: FC<TableProps> & {
    Head: FC<HeadProps>;
    Row: FC<RowProps>;
    Filter: FC<FilterProps_2>;
    Body: FC<BodyProps>;
};

/**
 * Props for the Table component.
 *
 * @example
 * ```tsx
 * <Table>
 *   <Table.Head>
 *     <Table.Row>
 *       <th>Name</th>
 *       <th>Email</th>
 *     </Table.Row>
 *   </Table.Head>
 *   <Table.Body>
 *     <Table.Row>
 *       <td>John Doe</td>
 *       <td>john@example.com</td>
 *     </Table.Row>
 *   </Table.Body>
 * </Table>
 * ```
 */
declare interface TableProps extends React.HTMLAttributes<HTMLTableElement>, PropsWithChildren, VariantProps<typeof tableVariants> {
    /** Theme override for this component */
    theme?: Theme;
}

declare const tableVariants: (props?: ClassProp | undefined) => string;

/**
 * A tabs component built on Radix UI primitives.
 * Supports horizontal and vertical orientations with List, Trigger, and Content sub-components.
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="overview">
 *   <Tabs.List orientation="horizontal">
 *     <Tabs.Trigger tab="overview" label="Overview" isActive />
 *     <Tabs.Trigger tab="settings" label="Settings" isActive={false} />
 *     <Tabs.Trigger tab="billing" label="Billing" isActive={false} />
 *   </Tabs.List>
 *
 *   <Tabs.Content value="overview">
 *     Overview content here
 *   </Tabs.Content>
 *   <Tabs.Content value="settings">
 *     Settings content here
 *   </Tabs.Content>
 *   <Tabs.Content value="billing">
 *     Billing content here
 *   </Tabs.Content>
 * </Tabs>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-tabs--docs Storybook}
 */
export declare const Tabs: FC<TabsProps> & {
    List: FC<ListProps>;
    Trigger: FC<TriggerProps>;
    Content: FC<ReactTabs.TabsContentProps>;
};

/**
 * Props for the Tabs component.
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="tab1">
 *   <Tabs.List orientation="horizontal">
 *     <Tabs.Trigger tab="tab1" label="Tab 1" isActive />
 *     <Tabs.Trigger tab="tab2" label="Tab 2" isActive={false} />
 *   </Tabs.List>
 *   <Tabs.Content value="tab1">Content 1</Tabs.Content>
 *   <Tabs.Content value="tab2">Content 2</Tabs.Content>
 * </Tabs>
 * ```
 */
declare interface TabsProps extends ReactTabs.TabsProps, PropsWithChildren {
    /** Theme override for this component */
    theme?: Theme;
}

/**
 * A small label component for categorization, status display, or filtering.
 * Supports multiple color variants and optional icons.
 *
 * @example
 * ```tsx
 * <Tag id="1" label="New" color="green" />
 * <Tag id="2" label="Pending" color="gold" leftIcon={<Clock />} />
 * <Tag id="3" label="Error" color="pink" rightIcon={<X />} />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-tag--docs Storybook}
 */
export declare const Tag: FC<TagProps>;

/**
 * Props for the Tag component.
 * A small label component for categorization or status display.
 *
 * @example
 * ```tsx
 * <Tag
 *   id="status-active"
 *   label="Active"
 *   color="green"
 *   leftIcon={<CheckIcon />}
 * />
 * ```
 */
declare type TagProps = {
    /** Color variant for the tag */
    color?: 'gray' | 'gray-800' | 'cyan' | 'gold' | 'green' | 'light blue' | 'lime' | 'pink' | 'purple' | 'emerald' | 'fuscia' | 'indigo' | 'light-orange' | 'dark-sky-blue' | 'mistery';
    /** Unique identifier for the tag */
    id: string | number;
    /** Text displayed in the tag */
    label: string;
    /** Icon displayed after the label */
    rightIcon?: ReactNode;
    /** Icon displayed before the label */
    leftIcon?: ReactNode;
    /** Additional CSS classes */
    className?: string;
    /** Data attribute for the tag value */
    'data-value'?: string;
    /** Whether the tag is in a selected state */
    isSelected?: boolean;
};

/**
 * An input component for selecting from a list of tag options.
 * Supports single and multi-selection modes.
 *
 * @example
 * ```tsx
 * <TagSelect
 *   label="Skills"
 *   placeholder="Select skills..."
 *   options={[
 *     { label: 'React', color: 'blue' },
 *     { label: 'TypeScript', color: 'purple' },
 *     { label: 'Node.js', color: 'green' },
 *   ]}
 *   multiselect
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-tagselect--docs Storybook}
 */
export declare const TagSelect: FC<TagSelectProps>;

/**
 * Props for the TagSelect component.
 * An input that allows selecting from a list of tags.
 *
 * @example
 * ```tsx
 * <TagSelect
 *   label="Categories"
 *   placeholder="Select categories..."
 *   options={[
 *     { label: 'Frontend', color: 'blue' },
 *     { label: 'Backend', color: 'green' },
 *     { label: 'DevOps', color: 'purple' },
 *   ]}
 *   multiselect
 * />
 * ```
 */
declare interface TagSelectProps extends VariantProps<typeof tagSelectVariants> {
    /** Label displayed above the input */
    label?: string;
    /** Available tag options to select from */
    options: TagProps[];
    /** Form field name for the input */
    name?: string;
    /** Placeholder text when no selection */
    placeholder?: string;
    /** Additional CSS classes for the label */
    labelClassName?: string;
    /** Additional CSS classes for the wrapper */
    wrapperClassName?: string;
    /** Whether multiple tags can be selected */
    multiselect?: boolean;
}

declare const tagSelectVariants: (props?: ClassProp | undefined) => string;

/**
 * A multiline text input component with optional label.
 *
 * @example
 * ```tsx
 * // Basic textarea
 * <TextArea label="Description" placeholder="Enter description..." />
 *
 * // Textarea with more rows
 * <TextArea label="Notes" rows={5} />
 *
 * // Controlled textarea
 * <TextArea
 *   label="Comments"
 *   value={comments}
 *   onChange={(e) => setComments(e.target.value)}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-textarea--docs Storybook}
 */
export declare const TextArea: FC<TextAreaProps>;

/**
 * Props for the TextArea component.
 *
 * @example
 * ```tsx
 * <TextArea label="Description" placeholder="Enter description..." />
 * <TextArea label="Notes" rows={5} />
 * <TextArea name="bio" initialValue="Default text" />
 * ```
 */
declare interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textAreaVariants> {
    /** Number of visible text rows (default: 3) */
    rows?: number;
    /** Label displayed above the textarea */
    label?: string | ReactNode;
    /** Form field name */
    name?: string;
    /** Initial/default value */
    initialValue?: string;
    /** Theme override for this component */
    theme?: Theme;
}

declare const textAreaVariants: (props?: ClassProp | undefined) => string;

declare type Theme = 'kubefirst' | 'light' | 'kubefirst-dark' | 'dark' | undefined;

export declare const ThemeContext: Context<ThemeContextType>;

/**
 * Props for the ThemeProvider component.
 */
export declare type ThemeContextProps = PropsWithChildren_3 & {
    /** Initial theme to use */
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

/**
 * Theme provider component that wraps your app to enable theming.
 * Sets the `data-theme` attribute on the body element and persists theme choice in cookies.
 *
 * @example
 * ```tsx
 * // Wrap your app with ThemeProvider
 * import { ThemeProvider } from '@konstructio/ui';
 *
 * function App() {
 *   return (
 *     <ThemeProvider theme="kubefirst">
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 *
 * // Access theme in components
 * import { useTheme } from '@konstructio/ui';
 *
 * function MyComponent() {
 *   const { theme, setTheme } = useTheme();
 *   return <button onClick={() => setTheme('dark')}>Dark Mode</button>;
 * }
 * ```
 *
 * Available themes: 'kubefirst' | 'light' | 'kubefirst-dark' | 'dark'
 */
export declare const ThemeProvider: FC_4<ThemeContextProps>;

/**
 * A scrollable time picker component with 12 or 24 hour format support.
 * Features smooth scroll navigation through hours, minutes, and AM/PM options.
 *
 * @example
 * ```tsx
 * <TimePicker
 *   label="Start Time"
 *   name="startTime"
 *   format="12"
 *   time={selectedTime}
 *   scrollBehavior="smooth"
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-timepicker--docs Storybook}
 */
export declare const TimePicker: FC<TimePickerProps>;

/**
 * Props for the TimePicker component.
 * A scrollable time picker with support for 12 and 24 hour formats.
 *
 * @example
 * ```tsx
 * <TimePicker
 *   label="Meeting Time"
 *   name="meetingTime"
 *   format="12"
 *   time={new Date()}
 *   isRequired
 * />
 * ```
 */
declare type TimePickerProps = VariantProps<typeof timePickerVariants> & {
    /** Time format: '12' for AM/PM or '24' for military time */
    format?: '12' | '24';
    /** Scroll behavior when navigating times */
    scrollBehavior?: 'smooth' | 'auto';
    /** Currently selected time */
    time?: Date;
    /** Form field name */
    name?: string;
    /** Label displayed above the picker */
    label?: string;
    /** Whether the field is required */
    isRequired?: boolean;
    /** Additional CSS classes for the wrapper */
    className?: string;
    /** Additional CSS classes for the scrollable list */
    listClassName?: string;
    /** Additional CSS classes for list items */
    listItemClassName?: string;
    /** Additional CSS classes for list item buttons */
    listItemButtonClassName?: string;
};

declare const timePickerVariants: (props?: ClassProp | undefined) => string;

declare type TimeZone = keyof ReturnType<typeof getAllTimezones>;

/**
 * A toast notification component built on Radix UI primitives.
 * Wraps a trigger element and shows a toast when clicked.
 *
 * @example
 * ```tsx
 * const [open, setOpen] = useState(false);
 *
 * <Toast
 *   open={open}
 *   setOpen={setOpen}
 *   title="Saved"
 *   description="Your changes have been saved successfully"
 *   variant="success"
 *   duration={3000}
 * >
 *   <Button>Save Changes</Button>
 * </Toast>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-toast--docs Storybook}
 */
export declare const Toast: FC<ToastProps>;

/**
 * Props for the Toast component.
 *
 * @example
 * ```tsx
 * const [open, setOpen] = useState(false);
 *
 * <Toast
 *   open={open}
 *   setOpen={setOpen}
 *   title="Success"
 *   description="Your changes have been saved"
 *   variant="success"
 * >
 *   <Button onClick={() => setOpen(true)}>Show Toast</Button>
 * </Toast>
 * ```
 */
declare interface ToastProps extends PropsWithChildren, VariantProps<typeof toastVariants> {
    /** Additional CSS classes for the toast */
    className?: string;
    /** CSS classes for the close button */
    closeButtonClassName?: string;
    /** Description text or element */
    description: string | ReactNode;
    /** CSS classes for the description */
    descriptionClassName?: string;
    /** Auto-dismiss duration in ms (default: 5000) */
    duration?: number;
    /** Controlled open state */
    open: boolean;
    /** Show close button (default: true) */
    showCloseButton?: boolean;
    /** Theme override for this component */
    theme?: Theme;
    /** Title text or element */
    title: string | ReactNode;
    /** CSS classes for the title */
    titleClassName?: string;
    /** Callback to update open state */
    setOpen: (open: boolean) => void;
}

declare const toastVariants: (props?: ({
    variant?: "warning" | "error" | "success" | null | undefined;
} & ClassProp) | undefined) => string;

/**
 * A tooltip component that shows on hover.
 * Wraps any element and displays content on mouse enter.
 *
 * @example
 * ```tsx
 * // Basic tooltip
 * <Tooltip content="Click to save">
 *   <Button>Save</Button>
 * </Tooltip>
 *
 * // Tooltip with position
 * <Tooltip content="More information" position="bottom">
 *   <InfoIcon />
 * </Tooltip>
 *
 * // Tooltip on text
 * <Tooltip content="This is a helpful tip">
 *   <span>Hover me</span>
 * </Tooltip>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-tooltip--docs Storybook}
 */
export declare const Tooltip: FC<TooltipProps>;

/**
 * Props for the Tooltip component.
 *
 * @example
 * ```tsx
 * <Tooltip content="Click to edit">
 *   <Button>Edit</Button>
 * </Tooltip>
 *
 * <Tooltip content="More info here" position="bottom">
 *   <InfoIcon />
 * </Tooltip>
 * ```
 */
declare interface TooltipProps extends PropsWithChildren, VariantProps<typeof tooltipVariants> {
    /** Tooltip text or content */
    content: ReactNode | string;
    /** CSS classes for the trigger element */
    className?: string;
    /** CSS classes for the tooltip wrapper */
    wrapperClassName?: string;
    /** Theme override for this component */
    theme?: Theme;
}

declare const tooltipVariants: (props?: ({
    position?: "left" | "right" | "top" | "bottom" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Trigger: FC_3<TriggerProps>;

/**
 * Props for Tabs.Trigger component.
 */
declare interface TriggerProps extends VariantProps<typeof triggerVariants>, React.HTMLAttributes<HTMLDivElement> {
    /** Tab value identifier */
    tab: string;
    /** Display label for the tab */
    label: string;
    /** Whether this tab is active */
    isActive: boolean;
}

declare const triggerVariants: (props?: ({
    variant?: "default" | "active" | "inactive" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const TruncateText: <TData>({ getValue, value }: Props_4<TData>) => JSX.Element;

/**
 * A flexible typography component for consistent text styling.
 * Automatically selects semantic HTML elements based on variant.
 *
 * @example
 * ```tsx
 * <Typography variant="h1">Main Heading</Typography>
 * <Typography variant="body1">Paragraph text</Typography>
 * <Typography variant="subtitle1" component="span">Inline text</Typography>
 * <Typography variant="h3" component="label" htmlFor="input">Label</Typography>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-typography--docs Storybook}
 */
export declare const Typography: ForwardRefExoticComponent<Omit<TypographyProps, 'ref'> & RefAttributes<HTMLParagraphElement & HTMLHeadingElement & HTMLLabelElement>>;

/**
 * Props for the Typography component.
 * A flexible text component with semantic variants and theming.
 *
 * @example
 * ```tsx
 * <Typography variant="h1">Page Title</Typography>
 * <Typography variant="body1">Body text content</Typography>
 * <Typography variant="h2" component="p">Styled as h2 but renders as p</Typography>
 * ```
 */
declare interface TypographyProps extends HTMLAttributes<ComponentRef<HeadingTag | 'p' | 'span'>>, VariantProps<typeof typographyVariants> {
    /** Ref to the underlying DOM element */
    ref?: Ref<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>;
    /** Text content to display */
    children: ReactNode;
    /** Override the rendered HTML element */
    component?: HeadingTag | 'p' | 'span' | 'label';
    /** Theme override for this component */
    theme?: Theme;
    /** For use with label component to associate with form input */
    htmlFor?: string;
}

declare const typographyVariants: (props?: ({
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "tooltip" | "subtitle1" | "subtitle2" | "subtitle3" | "labelLarge" | "labelMedium" | "labelSmall" | "buttonSmall" | "body1" | "body2" | "body3" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const useTheme: () => ThemeProps;

export declare const useToggle: (initialState?: boolean) => [boolean, (value?: boolean) => void];

export declare const VirtualizedTable: VirtualizedTableCompound;

declare type VirtualizedTableCompound = (<TData extends RowData>(props: Props_5<TData>) => JSX_2.Element) & {
    TruncateText: typeof TruncateText;
    Actions: <TData extends RowData>(props: Props_6<TData>) => JSX_2.Element | null;
    displayName?: string;
};

declare const virtualizeTableVariants: (props?: ClassProp | undefined) => string;

declare const wrapperSiderbarVariants: (props?: ClassProp | undefined) => string;

export { }


declare module '@tanstack/react-table' {
    interface ColumnMeta<TData extends RowData, TValue> {
        className?: string | ((row: TData) => string);
        attributes?: Record<string, string | number | boolean>;
        headerClassName?: string;
    }
}
