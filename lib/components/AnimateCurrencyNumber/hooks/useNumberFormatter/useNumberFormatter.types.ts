export type UseNumberFormatterOptions = {
  currency?: string;
  formatOptions?: Intl.NumberFormatOptions;
  locale?: string;
  format?: (value: number) => string;
};
