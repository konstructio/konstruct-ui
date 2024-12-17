export type Theme = 'kubefirst' | 'colony' | 'civo' | undefined;
export type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};
export declare const ThemeContext: import('../../node_modules/react').Context<ThemeContextType>;
