export type UseDrawerProps = {
  /** Enable resizable drawer */
  canResize?: boolean;
  /** Default width */
  defaultWidth?: number;
  /** Whether the drawer is open */
  isOpen?: boolean;
  /** Maximum width when resizable */
  maxWidth?: number;
  /** Minimum width when resizable */
  minWidth?: number;
  /** Position of the drawer */
  position?: 'left' | 'right';
  /** Callback when drawer is closed */
  onClose?: () => void;
};

export type UseDrawerReturn = {
  /** Whether the drawer is animating (for CSS transitions) */
  isAnimating: boolean;
  /** Whether the drawer is visible in the DOM */
  isVisible: boolean;
  /** Current width of the drawer */
  width: number;
  /** The translate class based on animation state */
  translateClass: string;
  /** Handler for resize keyboard events */
  handleKeyDown: (event: React.KeyboardEvent) => void;
  /** Starts a resize from the handle and captures the pointer */
  handleResizePointerDown: (event: React.PointerEvent<HTMLElement>) => void;
  /** Resizes the panel while the captured pointer moves */
  handleResizePointerMove: (event: React.PointerEvent<HTMLElement>) => void;
  /** Ends the resize on pointer up or cancel */
  handleResizePointerEnd: (event: React.PointerEvent<HTMLElement>) => void;
};
