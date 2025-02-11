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
      <div className="rounded relative flex h-full w-full bg-[#0F172A] py-1 overflow-hidden">
        <div className="h-full w-full flex-1">
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
      </div>
    );
  },
);
