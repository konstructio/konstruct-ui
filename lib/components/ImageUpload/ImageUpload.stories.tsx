import type { Meta, StoryObj } from '@storybook/react-vite';

import { ImageUpload } from './ImageUpload';
import { ImageUploadStatus } from './ImageUpload.types';

const meta: Meta<typeof ImageUpload> = {
  title: 'Components/ImageUpload',
  component: ImageUpload,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A file input for uploading images with preview, validation, and status states. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label displayed above the input',
    },
    name: {
      control: { type: 'text' },
      description: 'Form field name',
    },
    accept: {
      control: { type: 'text' },
      description: 'Accepted file MIME types',
    },
    maxSize: {
      control: { type: 'number' },
      description: 'Maximum file size in bytes',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text displayed below the input',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display',
    },
    isRequired: {
      control: { type: 'boolean' },
      description: 'Whether the field is required',
    },
    status: {
      control: { type: 'select' },
      options: Object.values(ImageUploadStatus),
      description: 'Current upload status',
    },
    uploadButtonText: {
      control: { type: 'text' },
      description: 'Text displayed on the upload button',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
    onChange: { action: 'changed', table: { disable: true } },
    onRemove: { action: 'removed', table: { disable: true } },
  },
  args: {
    label: 'Logo',
    name: 'logo',
    accept: 'image/png,image/svg+xml,image/jpeg',
    maxSize: 2 * 1024 * 1024,
    helperText: 'PNG, SVG or JPEG up to 2 MB',
    isRequired: false,
    status: ImageUploadStatus.Default,
    uploadButtonText: 'Upload image',
  },
};

export default meta;

type Story = StoryObj<typeof ImageUpload>;

export const Playground: Story = {};
