import { cva } from 'class-variance-authority';

export const breadcrumbWrapperVariants = cva([
  'text-slate-500',
  'text-md',
  'flex',
  'gap-2',
  'items-center',
]);

export const breadcrumbVariants = cva(['flex', 'gap-1', 'items-center']);
