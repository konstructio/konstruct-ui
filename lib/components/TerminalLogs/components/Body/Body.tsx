import { FC, PropsWithChildren } from 'react';

export const Body: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex-1 bg-slate-200">{children}</div>;
};
