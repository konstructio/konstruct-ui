import { cva } from 'class-variance-authority';

export const navigationSeparatorVariant = cva([
  'h-px',
  'bg-white/20',
  'my-3',
  // Indent horizontally to match NavigationGroup's `<ul>` padding so the
  // line aligns visually with the items above and below it.
  'mx-2',
  // The line is the element's background; `width: auto` lets the box
  // stretch within the flex column minus the horizontal margin.
  // Prevent the 1px separator from being shrunk to 0 by the parent
  // `flex flex-col overflow-y-auto` container.
  'shrink-0',
]);
