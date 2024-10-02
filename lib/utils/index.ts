import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const filterByValue = (elements: string[], valueToFind: string) =>
  elements.filter(
    (option) =>
      option.toLocaleLowerCase().indexOf(valueToFind.toLocaleLowerCase()) > -1,
  );
