import { Option } from '../../Filter.types';

export type StatusProps = {
  options: Option[];
  onSelectStatus?: (...status: Option[]) => void;
};
