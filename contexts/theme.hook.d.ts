import { Theme } from './theme.context';
type ThemeProps = {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
};
export declare const useTheme: () => ThemeProps;
export {};
