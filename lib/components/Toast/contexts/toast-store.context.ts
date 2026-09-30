import { createContext } from 'react';

import { ToastStore } from '../store/create-toast-store.types';

export const ToastStoreContext = createContext<ToastStore | null>(null);
