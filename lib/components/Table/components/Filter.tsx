import { Input } from '@/components/Input/Input';
import { FilterProps } from '../Table.types';

export const Filter = ({ children, ...delegated }: FilterProps) => {
  return (
    <div className="flex px-4 py-6 rounded-t">
      <Input className="!w-1/3" {...delegated} />
      <div className="w-1/4 flex justify-end">{children}</div>
    </div>
  );
};
