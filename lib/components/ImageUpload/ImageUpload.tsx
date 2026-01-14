'use client';
import { useEffect, useId, useRef, useState } from 'react';
import { Image as ImageIcon, X } from 'lucide-react';

import Loader from '@/assets/icons/loader.svg';
import { Button } from '@/components/Button/Button';
import { WarningIcon } from '@/assets/icons/components';
import { cn } from '@/utils';

import { ImageUploadProps, ImageUploadStatus } from './ImageUpload.types';
import {
  imageUploadVariants,
  inputContainerVariants,
  inputFieldVariants,
  labelVariants,
  helperTextVariants,
} from './ImageUpload.variants';

const ImageUpload = ({
  className,
  error,
  fileName,
  fileSize,
  fileUrl,
  helperText = 'Logo should be 32 x 32 pixels with transparent background (larger images will be downscaled proportionally to fit). Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.',
  isRequired = false,
  label = 'Item logo',
  labelClassName,
  name,
  onChange,
  onRemove,
  status = ImageUploadStatus.Default,
  theme,
  uploadButtonText = 'Upload logo',
  accept = 'image/svg+xml,image/png,image/jpeg,image/jpg',
  maxSize = 5 * 1024 * 1024,
}: ImageUploadProps) => {
  const id = useId();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uploadTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [internalStatus, setInternalStatus] = useState(status);
  const [internalFileUrl, setInternalFileUrl] = useState(fileUrl);
  const [internalFileName, setInternalFileName] = useState(fileName);
  const [internalFileSize, setInternalFileSize] = useState(fileSize);

  useEffect(() => {
    return () => {
      if (uploadTimeoutRef.current) {
        clearTimeout(uploadTimeoutRef.current);
      }
    };
  }, []);

  const currentStatus =
    status !== ImageUploadStatus.Default ? status : internalStatus;
  const currentFileUrl = fileUrl ?? internalFileUrl;
  const currentFileName = fileName ?? internalFileName;
  const currentFileSize = fileSize ?? internalFileSize;

  const hasError = Boolean(error) || currentStatus === ImageUploadStatus.Error;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const validTypes = accept.split(',').map((type) => type.trim());
    const isValidType = validTypes.some((type) => {
      if (type.includes('*')) {
        const baseType = type.split('/')[0];
        return file.type.startsWith(baseType);
      }
      return file.type === type;
    });

    if (!isValidType) {
      setInternalStatus(ImageUploadStatus.Error);
      onChange?.(event);
      return;
    }

    if (file.size > maxSize) {
      setInternalStatus(ImageUploadStatus.Error);
      onChange?.(event);
      return;
    }

    setInternalStatus(ImageUploadStatus.Uploading);
    setInternalFileName(file.name);
    setInternalFileSize(formatFileSize(file.size));

    const reader = new FileReader();
    reader.onloadend = () => {
      setInternalFileUrl(reader.result as string);
      uploadTimeoutRef.current = setTimeout(() => {
        setInternalStatus(ImageUploadStatus.Complete);
      }, 500);
    };
    reader.readAsDataURL(file);

    onChange?.(event);
  };

  const handleRemove = () => {
    if (uploadTimeoutRef.current) {
      clearTimeout(uploadTimeoutRef.current);
      uploadTimeoutRef.current = null;
    }
    setInternalFileUrl(undefined);
    setInternalFileName(undefined);
    setInternalFileSize(undefined);
    setInternalStatus(ImageUploadStatus.Default);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onRemove?.();
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))}${sizes[i]}`;
  };

  const defaultHelperText =
    'Logo should be 32 x 32 pixels with transparent background (larger images will be downscaled proportionally to fit). Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.';

  const displayHelperText =
    error ||
    (hasError
      ? 'Invalid file format. Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.'
      : helperText || defaultHelperText);

  return (
    <div
      className={cn(
        imageUploadVariants({
          status: currentStatus,
          className,
        }),
      )}
      data-theme={theme}
    >
      {label && (
        <label
          htmlFor={id}
          className={cn(
            labelVariants({
              className: labelClassName,
            }),
            'cursor-pointer',
          )}
        >
          {label}
          {isRequired && (
            <span className="text-red-600 dark:text-red-500 text-xs mt-0.5">
              *
            </span>
          )}
        </label>
      )}

      <div
        className={cn(
          inputContainerVariants({
            status: currentStatus,
          }),
        )}
      >
        <div
          className={cn(
            inputFieldVariants({
              status: currentStatus,
            }),
            {
              'justify-between': hasError,
              'justify-start': !hasError,
            },
          )}
        >
          {currentStatus === ImageUploadStatus.Uploading && (
            <>
              <Loader className="w-5 h-5 shrink-0 animate-spin text-metal-400" />
              {currentFileName && (
                <div className="flex flex-col items-start min-w-0 flex-1">
                  <p className="text-sm leading-5 truncate w-full text-slate-800 dark:text-metal-50">
                    {currentFileName}
                  </p>
                  {currentFileSize && (
                    <p className="text-xs leading-4 text-slate-600 dark:text-metal-300 tracking-[0.15px]">
                      {currentFileSize}
                    </p>
                  )}
                </div>
              )}
            </>
          )}

          {currentStatus === ImageUploadStatus.Complete && currentFileUrl && (
            <>
              <div className="w-8 h-8 shrink-0 relative">
                <img
                  src={currentFileUrl}
                  alt={currentFileName || 'Uploaded image'}
                  className="w-full h-full object-contain"
                />
              </div>
              {currentFileName && (
                <div className="flex flex-col items-start min-w-0 flex-1">
                  <p className="text-sm leading-5 truncate w-full text-slate-800 dark:text-slate-50 kubefirst-dark:text-slate-50">
                    {currentFileName}
                  </p>
                  {currentFileSize && (
                    <p className="text-xs leading-4 text-slate-600 dark:text-slate-400 kubefirst-dark:text-slate-400 tracking-[0.15px]">
                      {currentFileSize}
                    </p>
                  )}
                </div>
              )}
            </>
          )}

          {(currentStatus === ImageUploadStatus.Default ||
            (currentStatus === ImageUploadStatus.Error && !currentFileUrl)) && (
            <div className="w-8 h-8 shrink-0 flex items-center justify-center">
              <ImageIcon className="w-8 h-8 text-slate-400 dark:text-slate-500 kubefirst-dark:text-slate-500" />
            </div>
          )}

          {hasError && (
            <div className="shrink-0">
              <WarningIcon className="w-5 h-5 text-red-700 dark:text-red-500 kubefirst-dark:text-red-500" />
            </div>
          )}
        </div>

        {(currentStatus === ImageUploadStatus.Default ||
          currentStatus === ImageUploadStatus.Error) && (
          <Button
            variant="secondary"
            onClick={handleUploadClick}
            theme={theme}
            className="h-10 px-4 py-2 shrink-0"
          >
            {uploadButtonText}
          </Button>
        )}

        {currentStatus === ImageUploadStatus.Uploading && (
          <Button
            variant="secondary"
            shape="circle"
            size="medium"
            onClick={handleRemove}
            theme={theme}
            className="shrink-0"
            aria-label="Cancel upload"
          >
            <X className="w-6 h-6" />
          </Button>
        )}

        {currentStatus === ImageUploadStatus.Complete && (
          <Button
            variant="secondary"
            shape="circle"
            size="medium"
            onClick={handleRemove}
            theme={theme}
            className="shrink-0"
            aria-label="Remove file"
          >
            <X className="w-6 h-6" />
          </Button>
        )}
      </div>

      {displayHelperText && (
        <div className="flex w-full gap-2">
          <div className="flex-1 min-w-0">
            <p
              className={cn(
                helperTextVariants({
                  status: currentStatus,
                }),
              )}
            >
              {displayHelperText}
            </p>
          </div>
          {(currentStatus === ImageUploadStatus.Default ||
            currentStatus === ImageUploadStatus.Error) && (
            <div className="shrink-0 w-29" />
          )}
          {currentStatus === ImageUploadStatus.Uploading && (
            <div className="shrink-0 w-10" />
          )}
        </div>
      )}

      <input
        ref={fileInputRef}
        id={id}
        type="file"
        name={name}
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
        aria-label={typeof label === 'string' ? label : 'File upload'}
      />
    </div>
  );
};

ImageUpload.displayName = 'KonstructImageUpload';

export { ImageUpload };
