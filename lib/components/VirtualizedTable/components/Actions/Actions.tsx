import { EllipsisVertical } from 'lucide-react';
import { FC } from 'react';

import { Button } from '@/components/Button/Button';

import { Props } from './Actions.types';

export const Actions: FC<Props> = () => (
  <div className="relative group w-fit">
    <Button
      variant="text"
      shape="circle"
      size="large"
      className="text-slate-400 group-hover:text-slate-800 group-hover:bg-aurora-50"
      role="presentation"
    >
      <EllipsisVertical aria-hidden="true" className="w-7 h-7" />
      <span className="sr-only">Show Actions</span>
    </Button>

    <div className="absolute top-full right-0 w-[215px] hidden group-hover:block z-10">
      <div className="bg-white mt-0.5 py-2 rounded-lg shadow-lg border border-zinc-100 animate-in fade-in-0">
        <Button
          className="w-full text-slate-800 cursor-pointer p-0 h-9 flex gap-2 text-sm font-normal justify-start hover:bg-gray-50 hover:text-slate-800 rounded-none px-6"
          variant="text"
          asChild
          role="presentation"
        >
          <Button>View details</Button>
        </Button>
      </div>
    </div>
  </div>
);
