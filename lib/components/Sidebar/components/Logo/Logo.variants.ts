import { cva } from 'class-variance-authority';

export const logoVariants = cva([
  'group-data-[mode=expanded]/sidebar:px-4',
  'group-data-[mode=expanded]/sidebar:py-5',
  'flex',
  'flex-col',
  'justify-center',
  'gap-1',
  'group',
  'relative',
  'mb-8',
  '[&>p]:pl-14',
  '[&>p]:-mt-2',
  '[&>img]:pt-3',
  '[&>*>p]:absolute',
  '[&>*>p]:bottom-0',
  '[&>*>p]:-mt-2',
  '[&>*>img]:pt-3',
  'cursor-pointer',
]);
