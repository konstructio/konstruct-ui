export type RollingPreset = {
  duration: string;
  label: string;
  value?: string;
};

export type DefaultPresetsConfig = {
  labelCustomRange: string;
  rollingPresets: RollingPreset[];
};
