import { ToastHeights, ToastItem } from '../../Toast.types';

export type StackLayoutInput = {
  expanded: boolean;
  heights: ToastHeights;
  maxVisible: number;
  toasts: ToastItem[];
};

export type StackLayout = {
  frontHeight: number;
  offsets: number[];
  regionHeight: number;
};
