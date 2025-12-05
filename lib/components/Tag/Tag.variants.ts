import { cva } from 'class-variance-authority';

export const tagVariants = cva(
  [
    'px-2',
    'py-1',
    'rounded-md',
    'w-max',
    'text-xs',
    'flex',
    'items-center',
    'justify-center',
    'gap-1',
  ],
  {
    variants: {
      color: {
        gray: ['bg-[#f4f4f5]', 'text-[#71717a]'],
        'gray-800': ['bg-gray-100', 'text-gray-800'],
        cyan: ['bg-[#ecfeff]', 'text-[#0e7490]'],
        gold: ['bg-[#fef9c3]', 'text-[#a16207]'],
        green: ['bg-[#dcfce7]', 'text-[#15803d]'],
        'light blue': ['bg-[#e0f2fe]', 'text-[#0369a1]'],
        lime: ['bg-[#ecfccb]', 'text-[#4d7c0f]'],
        pink: ['bg-[#fce7f3]', 'text-[#be185d]'],
        purple: ['bg-[#ede9fe]', 'text-[#6d28d9]'],
        emerald: ['bg-[#ecfdf5]', 'text-[#047857]'],
        fuscia: ['bg-[#fdf4ff]', 'text-[#a21caf]'],
        indigo: ['bg-[#e0e7ff]', 'text-[#4338ca]'],
        'light-orange': ['bg-[#fef3c7]', 'text-[#d97706]'],
        'dark-sky-blue': ['bg-[#dbeafe]', 'text-[#1d4ed8]'],
        mistery: ['bg-[#1e2235]', 'text-[#81e2b4]'],
        default: ['bg-transparent', 'text-[#71717A]'],
      },
    },
    defaultVariants: {
      color: 'default',
    },
  },
);
