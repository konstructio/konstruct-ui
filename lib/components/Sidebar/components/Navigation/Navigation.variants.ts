import { cva } from 'class-variance-authority';

export const navigationVariants = cva([
  'flex',
  'flex-1',
  'w-full',
  'flex-col',
  // `min-h-0` is required so the nav can shrink below its content size when
  // it sits inside a flex column (e.g. the Sidebar wrapper). Without it,
  // `overflow-y-auto` cannot kick in and tall lists overflow the rail.
  'min-h-0',
  // Scroll long item lists by default so the nav never breaks the wrapper
  // height. Combined with the `min-h-0` above, this is the standard
  // flex-column scroll pattern.
  'overflow-y-auto',
]);
