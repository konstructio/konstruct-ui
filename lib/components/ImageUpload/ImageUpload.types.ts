import { VariantProps } from 'class-variance-authority';
import { ChangeEvent, ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { imageUploadVariants } from './ImageUpload.variants';

export enum ImageUploadStatus {
  Default = 'default',
  Uploading = 'uploading',
  Complete = 'complete',
  Error = 'error',
}

export type ImageUploadStatusType = ImageUploadStatus;

export interface ImageUploadProps extends Omit<
  VariantProps<typeof imageUploadVariants>,
  'status'
> {
  className?: string;
  error?: string;
  fileName?: string;
  fileSize?: string;
  fileUrl?: string;
  helperText?: string;
  isRequired?: boolean;
  label?: string | ReactNode;
  labelClassName?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onRemove?: () => void;
  status?: ImageUploadStatusType;
  theme?: Theme;
  uploadButtonText?: string;
  accept?: string;
  maxSize?: number; // in bytes
}
