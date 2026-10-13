import { FC } from '../../../node_modules/react';
import { Props } from './CheckboxCard.types';
/**
 * A card-style checkbox for multi-select options with a title and a description.
 * The whole card is clickable and reflects the checked state on its border.
 *
 * @example
 * ```tsx
 * <CheckboxCard
 *   name="events"
 *   value="instance.created"
 *   label="Instance created"
 *   description="Sent when a new instance finishes provisioning"
 *   checked={events.includes('instance.created')}
 *   onChange={(checked) => toggle('instance.created', checked)}
 * />
 * ```
 */
declare const CheckboxCard: FC<Props>;
export { CheckboxCard };
