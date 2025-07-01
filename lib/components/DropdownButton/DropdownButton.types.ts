export type Option = {
  label: string;
  onClick?: VoidFunction;
};

export type Props = {
  options: Option[];
};
