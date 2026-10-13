type ContentModule = typeof import('../../components/VirtualizedTableContent/VirtualizedTableContent');
type Listener = () => void;
export declare const loadVirtualizedTableContent: () => Promise<ContentModule>;
export declare const isVirtualizedTableContentLoaded: () => boolean;
export declare const subscribeToVirtualizedTableContent: (listener: Listener) => (() => void);
export declare const preloadVirtualizedTable: () => Promise<void>;
export {};
