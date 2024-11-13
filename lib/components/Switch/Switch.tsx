import { FC, useId } from 'react';
import { Root, Thumb } from '@radix-ui/react-switch';

import { SwitchProps } from './Switch.types';

export const Switch: FC<SwitchProps> = ({ name }) => {
  const id = useId();
  const componentId = name ? `${id}-${name}` : id;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label
        className="text-base text-red-500"
        htmlFor={componentId}
        style={{ paddingRight: 15 }}
      >
        Airplane mode
      </label>

      <Root
        id={componentId}
        className="w-[42px] h-[25px] bg-red-600 rounded-full shadow focus:shadow-xl"
      >
        <Thumb className="block w-[21px] h-[21px] bg-gray-500 rounded-full shadow transition-all translate-x-1 data-[state=checked]:translate-x-4" />
      </Root>
    </div>
  );
};
