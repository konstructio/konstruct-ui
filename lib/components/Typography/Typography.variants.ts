import { cva } from 'class-variance-authority';

export const typographyVariants = cva([''], {
  variants: {
    variant: {
      h1: 'text-[57px] font-normal leading-[64px]',
      h2: 'text-[45px] font-normal leading-[52px]',
      h3: 'text-[36px] font-normal leading-[44px]',
      h4: 'text-[32px] font-normal leading-[40px]',
      h5: 'text-[28px] font-normal leading-[36px]',
      h6: 'text-[24px] font-medium leading-[32px] tracking-[0.15px]',
      subtitle1: 'text-[22px] font-normal leading-[28px]',
      subtitle2: 'text-[16px] font-medium leading-[24px] tracking-[0.15px]',
      subtitle3: 'text-[14px] font-medium leading-[20px] tracking-[0.1px]',
      labelLarge: 'text-[14px] font-normal leading-[20px] tracking-[0.1px]',
      labelMedium:
        'text-[12px] font-medium leading-[16px] tracking-[0.5px] uppercase',
      labelSmall:
        'text-[11px] font-medium leading-[16px] tracking-[0.5px] uppercase',
      buttonSmall: 'text-[14px] font-semibold leading-[20px] tracking-[0.25px]',
      body1: 'text-[16px] font-normal leading-[24px] tracking-[0.5px]',
      body2: 'text-[14px] font-normal leading-[20px] tracking-[0.25px]',
      body3: 'text-[12px] font-normal leading-[16px] tracking-[0.4px]',
      tooltip: 'text-[14px] font-normal leading-[22px]',
    },
    theme: {
      kubefirst: 'text-zinc-700',
      colony: 'text-zinc-700',
      civo: 'text-zinc-700',
    },
  },
  defaultVariants: {
    variant: 'body1',
    theme: 'kubefirst',
  },
});
