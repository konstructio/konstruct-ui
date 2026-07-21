declare const Command: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & Pick<Pick<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>> & {
    ref?: React.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>> & {
    label?: string;
    shouldFilter?: boolean;
    filter?: (value: string, search: string, keywords?: string[]) => number;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    loop?: boolean;
    disablePointerSelection?: boolean;
    vimBindings?: boolean;
} & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export { Command };
