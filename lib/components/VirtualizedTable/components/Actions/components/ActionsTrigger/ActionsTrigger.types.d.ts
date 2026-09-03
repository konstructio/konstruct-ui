import { ComponentProps } from '../../../../../../../node_modules/react';
import { Button } from '../../../../../Button/Button';
export type Props = Omit<ComponentProps<typeof Button>, 'ref'> & {
    iconClassName?: string;
    isOpen?: boolean;
};
