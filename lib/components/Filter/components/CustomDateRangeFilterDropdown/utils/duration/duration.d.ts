import { Duration } from './duration.types';
export declare const parseDuration: (input: string) => Duration;
export declare const subtractDuration: (date: Date, input: string) => Date;
export declare const durationToId: (input: string) => string;
