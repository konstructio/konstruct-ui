import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

import { logoVariants } from './Logo.variants';

export type LogoProps = PropsWithChildren & VariantProps<typeof logoVariants>;
