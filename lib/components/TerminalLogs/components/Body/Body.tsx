import { Content } from '@radix-ui/react-tabs';
import { FC, PropsWithChildren } from 'react';

export const Body: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mt-5 rounded-md overflow-hidden w-full relative">
      <Content className="flex-1 bg-slate-200" value="tab-1">
        {children}
      </Content>
      <Content className="flex-1 bg-slate-200" value="tab-2">
        {children}
      </Content>
    </div>
  );
};
