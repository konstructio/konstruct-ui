import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const filterByValue = (elements: string[], valueToFind: string) =>
  elements.filter(
    (option) =>
      option.toLocaleLowerCase().indexOf(valueToFind.toLocaleLowerCase()) > -1,
  );

export const isClient = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const resolveColor = (cssVar: string): string => {
  return (
    getComputedStyle(document.documentElement)
      .getPropertyValue(cssVar)
      .trim() || cssVar
  );
};
