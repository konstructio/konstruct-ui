import { FC } from '../../../node_modules/react';
import { Props } from './ConfirmDialog.types';
/**
 * A confirmation dialog for destructive or important actions, optionally
 * gated behind typing a confirmation text (usually the resource name).
 *
 * @example
 * ```tsx
 * <ConfirmDialog
 *   isOpen={isOpen}
 *   title={`Delete ${cluster.name}?`}
 *   description="This cannot be undone. All node pools will be removed."
 *   confirmationText={cluster.name}
 *   confirmLabel="Yes, delete"
 *   pendingLabel="Deleting…"
 *   isPending={isDeleting}
 *   onClose={() => setIsOpen(false)}
 *   onConfirm={deleteCluster}
 * />
 * ```
 */
declare const ConfirmDialog: FC<Props>;
export { ConfirmDialog };
