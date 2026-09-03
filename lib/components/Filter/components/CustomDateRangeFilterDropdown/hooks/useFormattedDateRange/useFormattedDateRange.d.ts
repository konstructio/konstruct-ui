import { Props } from './useFormattedDateRange.types';
export declare const useFormattedDateRange: ({ range, countryCode }: Props) => {
    appliedRangeLabel: undefined;
    appliedRangeEnds: undefined;
} | {
    appliedRangeLabel: string;
    appliedRangeEnds: {
        from: string;
        to: string | undefined;
    };
};
