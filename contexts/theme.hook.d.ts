import { Theme } from '../domain/theme';
type ThemeProps = {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
};
export declare const useTheme: () => ThemeProps;
export {};
