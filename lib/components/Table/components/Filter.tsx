import { Input } from '@/components/Input/Input';
import { FilterProps } from '../Table.types';

export const Filter = ({ ...delegated }: FilterProps) => {
  return (
    <div className="flex px-4 py-6 rounded-t">
      <Input className="!w-1/3" {...delegated} />
      {/* <Typography variant="buttonSmall" className="w-1/4 text-slate-500 flex gap-2 justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M8.33333 15H11.6667V13.3333H8.33333V15ZM2.5 5V6.66667H17.5V5H2.5ZM5 10.8333H15V9.16667H5V10.8333Z"
            fill="#94A3B8"
          />
        </svg>
        Filter
      </Typography> */}
    </div>
  );
};
