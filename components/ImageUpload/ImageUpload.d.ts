import { ImageUploadProps } from './ImageUpload.types';
/**
 * A file input component for uploading images with preview and validation.
 * Supports drag states, file type validation, size limits, and upload progress.
 *
 * @example
 * ```tsx
 * <ImageUpload
 *   label="Profile Picture"
 *   name="avatar"
 *   accept="image/png,image/jpeg"
 *   maxSize={5 * 1024 * 1024}
 *   uploadButtonText="Choose image"
 *   onChange={(e) => console.log(e.target.files?.[0])}
 *   onRemove={() => setAvatar(null)}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-imageupload--docs Storybook}
 */
declare const ImageUpload: {
    ({ className, error, fileName, fileSize, fileUrl, helperText, isRequired, label, labelClassName, name, onChange, onRemove, status, theme, uploadButtonText, accept, maxSize, }: ImageUploadProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { ImageUpload };
