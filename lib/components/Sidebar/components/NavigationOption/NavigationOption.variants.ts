import { cva } from 'class-variance-authority';

export const navigationOptionVariants = cva(
  [
    '[&>a]:flex',
    '[&>a]:items-center',
    '[&>a]:gap-4',
    '[&>a]:no-underline',
    '[&>a]:text-inherit',
    '[&>a]:w-full',
    // Padding lives on the inner anchor (not the `<li>`) so the entire
    // hover/click area routes through the link — clicking the padding
    // around the icon/label still triggers navigation.
    '[&>a]:p-2.5',
    'group-data-[mode=expanded]/sidebar:[&>a]:px-4',
    'group-data-[mode=expanded]/sidebar:[&>a]:py-2.5',
    'cursor-pointer',
    'flex',
    'font-normal',
    'gap-4',
    'rounded',
    'shrink-0',
    'group-data-[mode=collapsed]/sidebar:justify-center',
    'group-data-[mode=collapsed]/sidebar:[&>a]:justify-center',
    'w-full',
    'text-kubefirst-dark-blue-300',
    'hover:text-white',
    'hover:bg-kubefirst-dark-blue-800',
    'selection:bg-powder-500',
    'selection:text-white',
  ],
  {
    variants: {
      isActive: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        isActive: true,
        class: [
          'data-[active=true]:text-white',
          'data-[active=true]:bg-kubefirst-dark-blue-800',
        ],
      },
    ],
  },
);
