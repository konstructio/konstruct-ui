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
        gray: ['bg-zinc-100', 'text-zinc-500'],
        'gray-800': ['bg-gray-100', 'text-gray-800'],
        cyan: ['bg-cyan-50', 'text-cyan-700'],
        gold: ['bg-yellow-100', 'text-yellow-700'],
        green: ['bg-green-100', 'text-green-700'],
        'light blue': ['bg-sky-100', 'text-sky-700'],
        lime: ['bg-lime-100', 'text-lime-700'],
        pink: ['bg-pink-100', 'text-pink-700'],
        purple: ['bg-violet-100', 'text-violet-700'],
        emerald: ['bg-emerald-50', 'text-emerald-700'],
        fuscia: ['bg-fuchsia-50', 'text-fuchsia-700'],
        indigo: ['bg-indigo-100', 'text-indigo-700'],
        'light-orange': ['bg-amber-100', 'text-amber-600'],
        'dark-sky-blue': ['bg-blue-100', 'text-blue-700'],
        mistery: ['bg-kubefirst-dark-blue-900', 'text-mistery'],
        default: ['bg-transparent', 'text-zinc-500'],
      },
    },
    defaultVariants: {
      color: 'default',
    },
  },
);
