import type { HeaderCustom } from '../../Sheet.types';

export const headerDirection = (custom: HeaderCustom) =>
  typeof custom === 'number' ? custom : custom.direction;
