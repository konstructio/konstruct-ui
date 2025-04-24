import { cva } from 'class-variance-authority';

export const breadcrumbLinkVariants = cva(
  ['text-sm', 'leading-5', 'text-gray-400'],
  {
    variants: {
      isActive: {
        true: '',
        false: 'cursor-auto',
      },
    },
    defaultVariants: {
      isActive: true,
    },
    compoundVariants: [
      {
        isActive: true,
        class: [
          'group-[&:has(:focus-visible)]:no-underline',
          'group-[&:has(:focus-visible)]:outline-2',
          'group-[&:has(:focus-visible)]:outline-offset-6',
          'group-[&:has(:focus-visible)]:outline-gray-500',
          'group-[&:has(:focus-visible)]:text-gray-500',
          'group-[&:has(:focus-visible)]:rounded-xs',
          'group-hover:rounded-xs',
          'hover:no-underline',
          'hover:text-gray-500',
        ],
      },
      {
        isActive: undefined,
        class: [
          'group-[&:has(:focus-visible)]:no-underline',
          'group-[&:has(:focus-visible)]:outline-2',
          'group-[&:has(:focus-visible)]:outline-offset-6',
          'group-[&:has(:focus-visible)]:outline-gray-500',
          'group-[&:has(:focus-visible)]:text-gray-500',
          'group-[&:has(:focus-visible)]:rounded-xs',
          'group-hover:rounded-xs',
          'hover:no-underline',
          'hover:text-gray-500',
        ],
      },
    ],
  },
);

export const breadcrumbLabelVariants = cva(['text-sm', 'leading-5'], {
  variants: {
    isActive: {
      true: 'text-gray-500',
      false: ['text-gray-400', 'cursor-default'],
    },
  },
  defaultVariants: {
    isActive: true,
  },
});
