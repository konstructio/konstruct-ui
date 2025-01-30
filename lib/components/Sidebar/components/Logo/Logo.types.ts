import { VariantProps } from 'class-variance-authority';

import { logoVariants } from './Logo.variants';

export type LogoProps = VariantProps<typeof logoVariants>;
