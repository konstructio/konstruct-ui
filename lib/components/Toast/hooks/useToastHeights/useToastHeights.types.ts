import { ToastHeights } from '../../Toast.types';

export type UseToastHeightsResult = {
  heights: ToastHeights;
  removeHeight: (id: string) => void;
  setHeight: (id: string, height: number) => void;
};
