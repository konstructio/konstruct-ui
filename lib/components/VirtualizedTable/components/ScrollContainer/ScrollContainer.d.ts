import { FC } from '../../../../../node_modules/react';
import { Props } from './ScrollContainer.types';
/**
 * The horizontal scroll container. It flags itself with `data-kvt-overflow`
 * while the content is wider than the viewport, which is what the pinned
 * column dividers key on. With pinned columns it also swaps the native
 * scrollbar for a thin one that only spans the columns that actually move and
 * stays visible, and fades the content on whichever side still has more to show.
 */
export declare const ScrollContainer: FC<Props>;
