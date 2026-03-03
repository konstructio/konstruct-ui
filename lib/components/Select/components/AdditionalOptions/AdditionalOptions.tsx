import { Slot } from '@radix-ui/react-slot';
import { FC, Fragment, ReactNode } from 'react';

import { cn } from '@/utils';

import { useSelectContext } from '../../contexts';
import {
  AdditionalOptionGroup,
  isAdditionalOptionGroup,
} from '../../Select.types';
import { listGroupLabelVariants } from '../List/List.variants';

import { Props } from './AdditionalOptions.types';
import { additionalOptionSlotClassName } from './AdditionalOptions.variants';

export const AdditionalOptions: FC<Props> = ({ additionalOptions }) => {
  const { toggleOpen } = useSelectContext();

  if (!additionalOptions?.length) {
    return null;
  }

  const isGrouped = isAdditionalOptionGroup(additionalOptions[0]);

  if (isGrouped) {
    return (additionalOptions as AdditionalOptionGroup[]).map((group) => (
      <Fragment key={group.groupLabel}>
        <li
          role="presentation"
          aria-hidden="true"
          data-action="true"
          className={cn(listGroupLabelVariants())}
        >
          {group.groupLabel}
        </li>
        {group.options.map((option, i) => (
          <li
            key={i}
            role="option"
            data-action="true"
            onClick={() => toggleOpen(false)}
          >
            <Slot className={additionalOptionSlotClassName}>
              {option as ReactNode}
            </Slot>
          </li>
        ))}
      </Fragment>
    ));
  }

  return (additionalOptions as ReactNode[]).map((option, index) => (
    <li
      key={index}
      role="option"
      data-action="true"
      onClick={() => toggleOpen(false)}
    >
      <Slot className={additionalOptionSlotClassName}>{option}</Slot>
    </li>
  ));
};
