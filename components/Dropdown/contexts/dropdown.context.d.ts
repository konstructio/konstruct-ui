import { Option } from '../Dropdown.types';
export type DropdownContextType = {
    value: Option | null;
    isOpen: boolean;
    setValue: (value: Option) => void;
    toggleOpen: (value?: boolean) => void;
};
export declare const DropdownContext: import('../../../../node_modules/react').Context<DropdownContextType>;
