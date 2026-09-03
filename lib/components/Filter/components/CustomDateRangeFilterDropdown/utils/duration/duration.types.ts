export type DurationUnit = 'm' | 'h' | 'd' | 'w' | 'mo' | 'y';

export type Duration = {
  amount: number;
  unit: DurationUnit;
};
