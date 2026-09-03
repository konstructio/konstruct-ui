export interface Props {
  className?: string;
  /** Fired after the sidebar toggles, with the mode it switched to */
  onToggle?: (mode: 'collapsed' | 'expanded') => void;
}

export type CollapseTriggerProps = Props;
