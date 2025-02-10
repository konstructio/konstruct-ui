import { Content } from '@radix-ui/react-tabs';
import { ComponentRef, forwardRef } from 'react';

export const Body = forwardRef<ComponentRef<'div'>>((_, ref) => {
  return (
    <div className="mt-5 rounded overflow-hidden w-full relative">
      <Content className="flex-1 bg-[#0F172A] text-white" value="tab-1">
        <p>Hello World</p>
      </Content>
      <Content className="flex-1 bg-[#0F172A] p-3" value="tab-2" ref={ref} />
    </div>
  );
});
