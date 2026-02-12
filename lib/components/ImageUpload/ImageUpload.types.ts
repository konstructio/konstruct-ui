import { VariantProps } from 'class-variance-authority';
import { ChangeEvent, ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { imageUploadVariants } from './ImageUpload.variants';

/**
 * Upload status states for the ImageUpload component.
 */
export enum ImageUploadStatus {
  Default = 'default',
  Uploading = 'uploading',
  Complete = 'complete',
  Error = 'error',
}

export type ImageUploadStatusType = ImageUploadStatus;

/**
 * Props for the ImageUpload component.
 * A file input for uploading images with preview, validation, and status states.
 *
 * @example
 * ```tsx
 * <ImageUpload
 *   label="Logo"
 *   name="logo"
 *   accept="image/png,image/svg+xml"
 *   maxSize={2 * 1024 * 1024}
 *   onChange={(e) => handleUpload(e.target.files?.[0])}
 *   onRemove={() => setLogo(null)}
 *   isRequired
 * />
 * ```
 */
export interface ImageUploadProps extends Omit<
  VariantProps<typeof imageUploadVariants>,
  'status'
> {
  /** Additional CSS classes */
  className?: string;
  /** Error message to display */
  error?: string;
  /** Name of the uploaded file */
  fileName?: string;
  /** Formatted size of the uploaded file */
  fileSize?: string;
  /** URL or data URL of the uploaded file for preview */
  fileUrl?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Whether the field is required */
  isRequired?: boolean;
  /** Label displayed above the input */
  label?: string | ReactNode;
  /** Additional CSS classes for the label */
  labelClassName?: string;
  /** Additional CSS classes for the label wrapper */
  labelWrapperClassName?: string;
  /** Form field name */
  name?: string;
  /** Callback fired when a file is selected */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Callback fired when the uploaded file is removed */
  onRemove?: () => void;
  /** Current upload status */
  status?: ImageUploadStatusType;
  /** Theme override for this component */
  theme?: Theme;
  /** Text displayed on the upload button */
  uploadButtonText?: string;
  /** Accepted file MIME types (comma-separated) */
  accept?: string;
  /** Maximum file size in bytes */
  maxSize?: number;
}
