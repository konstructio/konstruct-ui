import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { ImageUpload as ImageUploadComponent } from './ImageUpload';
import { ImageUploadStatus } from './ImageUpload.types';
import { Typography } from '../Typography/Typography';

type Story = StoryObj<typeof ImageUploadComponent>;

const meta: Meta<typeof ImageUploadComponent> = {
  title: 'In Review/ImageUpload',
  component: ImageUploadComponent,
};

export const ImageUpload: Story = {
  args: {
    label: 'Item logo',
    isRequired: true,
    uploadButtonText: 'Upload logo',
  },
  render: (args) => (
    <>
      <div className="w-[500px] flex flex-col gap-8">
        <Typography variant="h6" className="my-5" theme="kubefirst">
          ImageUpload Component - Light Mode
        </Typography>

        <div className="flex flex-col gap-6">
          <div>
            <Typography variant="body2" className="mb-2 text-slate-600">
              Default State
            </Typography>
            <ImageUploadComponent
              {...args}
              status={ImageUploadStatus.Default}
            />
          </div>

          <div>
            <Typography variant="body2" className="mb-2 text-slate-600">
              Uploading State
            </Typography>
            <ImageUploadComponent
              {...args}
              status={ImageUploadStatus.Uploading}
              fileName="metaphor_logo.svg"
              fileSize="27.33KB"
            />
          </div>

          <div>
            <Typography variant="body2" className="mb-2 text-slate-600">
              Complete State
            </Typography>
            <ImageUploadComponent
              {...args}
              status={ImageUploadStatus.Complete}
              fileName="metaphor_logo.svg"
              fileSize="27.33KB"
              fileUrl="https://via.placeholder.com/32"
            />
          </div>

          <div>
            <Typography variant="body2" className="mb-2 text-slate-600">
              Error State
            </Typography>
            <ImageUploadComponent
              {...args}
              status={ImageUploadStatus.Error}
              error="Invalid file format. Accepted file type is SVG, PNG, JPEG. Max file size is 5MB."
            />
          </div>
        </div>
      </div>

      <Typography variant="h6" className="my-5">
        ImageUpload Component - Dark Mode
      </Typography>

      <div className="w-[500px] bg-slate-950 p-4 rounded-sm">
        <div className="flex flex-col gap-6">
          <div>
            <Typography variant="body2" className="mb-2 text-slate-200">
              Default State
            </Typography>
            <ImageUploadComponent
              {...args}
              status={ImageUploadStatus.Default}
              theme="dark"
            />
          </div>

          <div>
            <Typography variant="body2" className="mb-2 text-slate-200">
              Uploading State
            </Typography>
            <ImageUploadComponent
              {...args}
              status={ImageUploadStatus.Uploading}
              fileName="metaphor_logo.svg"
              fileSize="27.33KB"
              theme="dark"
            />
          </div>

          <div>
            <Typography variant="body2" className="mb-2 text-slate-200">
              Complete State
            </Typography>
            <ImageUploadComponent
              {...args}
              status={ImageUploadStatus.Complete}
              fileName="metaphor_logo.svg"
              fileSize="27.33KB"
              fileUrl="https://via.placeholder.com/32"
              theme="dark"
            />
          </div>

          <div>
            <Typography variant="body2" className="mb-2 text-slate-200">
              Error State
            </Typography>
            <ImageUploadComponent
              {...args}
              status={ImageUploadStatus.Error}
              error="Invalid file format. Accepted file type is SVG, PNG, JPEG. Max file size is 5MB."
              theme="dark"
            />
          </div>
        </div>
      </div>
    </>
  ),
};

export const Interactive: Story = {
  args: {
    label: 'Company Logo',
    isRequired: true,
    uploadButtonText: 'Upload logo',
    helperText:
      'Logo should be 32 x 32 pixels with transparent background (larger images will be downscaled proportionally to fit). Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.',
  },
  render: function InteractiveStory(args) {
    const [file, setFile] = useState<File | undefined>(undefined);
    const [fileUrl, setFileUrl] = useState<string | undefined>(undefined);
    const [fileName, setFileName] = useState<string | undefined>(undefined);
    const [fileSize, setFileSize] = useState<string | undefined>(undefined);
    const [status, setStatus] = useState<ImageUploadStatus>(
      ImageUploadStatus.Default,
    );
    const [error, setError] = useState<string | undefined>(undefined);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0];
      if (!selectedFile) return;

      console.log('File selected:', {
        name: selectedFile.name,
        size: selectedFile.size,
        type: selectedFile.type,
        lastModified: selectedFile.lastModified,
        file: selectedFile,
      });

      setError(undefined);
      setStatus(ImageUploadStatus.Uploading);
      setFile(selectedFile);
      setFileName(selectedFile.name);

      const sizeInKB = (selectedFile.size / 1024).toFixed(2);
      setFileSize(`${sizeInKB}KB`);

      const reader = new FileReader();
      reader.onloadend = () => {
        setTimeout(() => {
          const dataUrl = reader.result as string;
          setFileUrl(dataUrl);
          setStatus(ImageUploadStatus.Complete);
          console.log('File uploaded successfully:', {
            file: selectedFile,
            dataUrl,
            fileName: selectedFile.name,
            fileSize: selectedFile.size,
          });
        }, 500);
      };
      reader.readAsDataURL(selectedFile);
    };

    const handleRemove = () => {
      console.log('File removed');
      setFile(undefined);
      setFileUrl(undefined);
      setFileName(undefined);
      setFileSize(undefined);
      setStatus(ImageUploadStatus.Default);
      setError(undefined);
    };

    return (
      <div className="w-[600px] flex flex-col gap-8">
        <div>
          <Typography variant="h6" className="mb-4" theme="kubefirst">
            Interactive ImageUpload - Light Mode
          </Typography>
          <ImageUploadComponent
            {...args}
            status={status}
            fileUrl={fileUrl}
            fileName={fileName}
            fileSize={fileSize}
            error={error}
            onChange={handleFileChange}
            onRemove={handleRemove}
          />
        </div>

        <div className="bg-slate-950 p-6 rounded-sm">
          <Typography variant="h6" className="mb-4 text-slate-50">
            Interactive ImageUpload - Dark Mode
          </Typography>
          <ImageUploadComponent
            {...args}
            theme="dark"
            status={status}
            fileUrl={fileUrl}
            fileName={fileName}
            fileSize={fileSize}
            error={error}
            onChange={handleFileChange}
            onRemove={handleRemove}
          />
        </div>

        <div className="mt-4 p-4 bg-slate-100 dark:bg-slate-800 rounded">
          <Typography variant="body2" className="mb-2 font-semibold">
            Current State:
          </Typography>
          <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-auto max-h-64">
            {JSON.stringify(
              {
                status,
                file: file
                  ? {
                      name: file.name,
                      size: file.size,
                      type: file.type,
                      lastModified: new Date(file.lastModified).toISOString(),
                    }
                  : null,
                fileName,
                fileSize,
                fileUrl: fileUrl ? `${fileUrl.substring(0, 50)}...` : null,
                hasFile: !!file,
              },
              null,
              2,
            )}
          </pre>
          {file && (
            <div className="mt-4 pt-4 border-t border-slate-300 dark:border-slate-600">
              <Typography variant="body2" className="mb-2 font-semibold">
                File Object Available:
              </Typography>
              <Typography
                variant="body2"
                className="text-xs text-slate-600 dark:text-slate-400"
              >
                You can access the File object in your code via the onChange
                handler.
                <br />
                Check the browser console for detailed file information.
              </Typography>
            </div>
          )}
        </div>
      </div>
    );
  },
};

export default meta;
