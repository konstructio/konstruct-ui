import { ClassNames } from '../Drawer.types';
export type ContextValue = {
    classNames?: ClassNames;
    headerId?: string;
};
export declare const DrawerContext: import('../../../../node_modules/react').Context<ContextValue>;
export declare const useDrawerContext: () => ContextValue;
