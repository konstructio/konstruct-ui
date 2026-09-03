import { DateRangePresetOption } from '../../../../../DateRangePicker/DateRangePicker.types';
import { DefaultPresetsConfig } from '../../constants';
export type Props = DefaultPresetsConfig & {
    presets?: DateRangePresetOption[];
    showCustomRange: boolean;
};
