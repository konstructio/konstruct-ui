import { cva } from 'class-variance-authority';

/**
 * The column runs flush to the picker's edge and is set apart by a hairline, not
 * by a fill — it shares the surface behind it. Its own padding stands in for the
 * padding the picker no longer applies.
 */
export const presetPanelVariants = cva([
  'flex',
  'flex-col',
  'gap-2.5',
  'pt-4',
  'pb-3.5',
  'px-2.5',
  'border-r',
  'border-slate-200',
  'dark:border-metal-700',
  // The design fixes the column at 206px rather than letting it size to its
  // longest label, so the calendar beside it does not shift between preset sets.
  'w-[206px]',
]);

/**
 * The title sits on the same left edge as the option labels below it, so its
 * inset has to match the padding an option row applies on top of the panel's.
 */
export const presetTitleVariants = cva([
  'px-3.5',
  'text-xs',
  'font-medium',
  'uppercase',
  'text-slate-700',
  'dark:text-metal-300',
  'tracking-[0.25px]',
  'leading-4',
]);

/**
 * A row reads as a list item rather than a radio: the control itself is hidden
 * and selection shows as a trailing check, so the whole row is the hit target
 * and carries the hover fill.
 *
 * `[&>div]:flex-1` grows the wrapper Radio puts around its label, which is what
 * lets the trailing icon sit against the right edge.
 */
export const presetOptionVariants = cva(
  [
    'relative',
    'flex',
    'w-full',
    'items-center',
    'px-3.5',
    'py-2',
    'rounded-sm',
    '[&>div]:flex-1',
  ],
  {
    variants: {
      disabled: {
        true: [],
        false: ['hover:bg-slate-100', 'dark:hover:bg-metal-600/40'],
      },
    },
    defaultVariants: { disabled: false },
  },
);

/** Lays the label out as text on the left and its trailing icon on the right. */
export const presetOptionLabelVariants = cva([
  'flex',
  'w-full',
  'items-center',
  'justify-between',
  'gap-2',
]);

/**
 * The rule above a trailing manual-selection entry ('Custom range').
 *
 * It is drawn as a pseudo-element rather than a border so it can run full-bleed
 * across the panel — the insets cancel the panel's `px-2.5` — while the row's own
 * hover fill stays inset. It sits in the row's top margin so the fill never
 * touches it. Keep the two in step.
 */
export const presetSeparatorVariants = cva([
  'mt-4',
  "before:content-['']",
  'before:absolute',
  'before:-left-2.5',
  'before:-right-2.5',
  'before:-top-2.5',
  'before:h-px',
  'before:bg-slate-200',
  'dark:before:bg-metal-700',
]);
