import { Content } from '@radix-ui/react-tabs';
import { ComponentRef, forwardRef } from 'react';

import { useTheme } from '@/contexts';

import { BodyProps } from './Body.types';
import {
  conciseTabTerminalVariants,
  verboseTabTerminalVariants,
} from './Body.variants';

export const Body = forwardRef<ComponentRef<'div'>, BodyProps>(
  ({ theme }, ref) => {
    const { theme: contexTheme } = useTheme();
    const inheritTheme = theme ?? contexTheme;

    return (
      <div className="mt-5 rounded relative flex flex-1 h-full w-full">
        <Content
          className={conciseTabTerminalVariants({ theme: inheritTheme })}
          value="tab-1"
          asChild
        >
          <p>Hello World</p>
        </Content>

        <Content
          className={verboseTabTerminalVariants({ theme: inheritTheme })}
          value="tab-2"
          ref={ref}
        />
      </div>
    );
  },
);
