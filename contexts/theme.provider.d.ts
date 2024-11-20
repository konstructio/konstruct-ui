import { FC, PropsWithChildren } from '../../node_modules/react';
import { ThemeContextType } from './theme.context';
export type ThemeContextProps = PropsWithChildren & {
    theme?: ThemeContextType['theme'];
};
export declare const ThemeProvider: FC<ThemeContextProps>;
