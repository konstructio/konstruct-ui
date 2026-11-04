import { FC } from '../../../../../node_modules/react';
import { Props } from './SheetStep.types';
/**
 * One step of a sheet's content. It owns its horizontal offset so a step that
 * was swiped away keeps that offset while it unmounts and the next step mounts
 * in place.
 */
export declare const SheetStep: FC<Props>;
