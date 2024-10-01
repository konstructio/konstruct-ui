export type Option = {
  value: string;
};

export type AutocompleteProps = {
  className?: string;
  label?: string;
  placeholder?: string;
  options: Option[];
};
