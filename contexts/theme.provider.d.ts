import { FC, PropsWithChildren } from '../../node_modules/react';
import { ThemeContextType } from './theme.context';
type Props = PropsWithChildren & {
    theme?: ThemeContextType['theme'];
};
export declare const ThemeProvider: FC<Props>;
export {};
