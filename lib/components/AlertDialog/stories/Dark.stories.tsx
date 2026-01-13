import type { Meta, StoryObj } from '@storybook/react-vite';
import { Check } from 'lucide-react';

import WarningIcon from '@/assets/icons/warning.svg';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { Typography } from '@/components/Typography/Typography';

import { AlertDialog as AlertDialogComponent } from '../AlertDialog';

type Story = StoryObj<typeof AlertDialogComponent>;

const meta = {
  title: 'In Review/AlertDialog/Dark',
  component: AlertDialogComponent,
} satisfies Meta<typeof AlertDialogComponent>;

export const Dark = {
  parameters: {
    theme: 'dark',
  },
  render: () => (
    <div className="flex flex-col gap-3">
      <AlertDialogComponent
        buttonTriggerText="Information"
        showCancelButton={false}
        buttonTriggerClassName="w-fit"
        title={
          <span className="flex flex-row gap-3 items-center font-medium text-slate-200">
            <WarningIcon className="text-blue-600 w-6 h-6 rotate-180" />
            Upload will take a few minutes...
          </span>
        }
        description={
          <div className="text-sm text-slate-50 pl-9 font-normal flex flex-col gap-6">
            <p>
              Uploading an image may take up to a few minutes depending on image
              size and connection speed. We'll let you know when the import is
              complete.
            </p>

            <Checkbox defaultChecked label="Don't show this message again" />
          </div>
        }
        wrapperClassName="max-w-[500px]"
        buttonConfirm={{
          text: 'Got it!',
        }}
      />

      <AlertDialogComponent
        buttonTriggerText="Delete"
        buttonTriggerVariant="danger"
        buttonTriggerClassName="w-fit"
        title={
          <span className="flex flex-row gap-3 items-center font-semibold text-slate-200">
            <WarningIcon className="text-red-500 w-6 h-6" /> Delete{' '}
            {'<image name>'}?
          </span>
        }
        description={
          <div className="text-sm pl-9 text-slate-50">
            <p>
              Are you sure you want to delete image {'<image name>'}? Once
              deleted the image cannot be recovered.
            </p>
          </div>
        }
        wrapperClassName="max-w-[500px]"
        buttonConfirm={{
          text: 'Yes, delete',
          variant: 'danger',
        }}
      />

      <AlertDialogComponent
        buttonTriggerText="Centered"
        buttonTriggerClassName="w-fit"
        title={
          <div className="flex flex-col gap-4 items-center justify-center">
            <span className="p-3 rounded-full bg-green-400/15 w-12 h-12 flex items-center justify-center">
              <Check className="text-green-400" />
            </span>

            <Typography className="font-normal">
              Cluster successfully deleted
            </Typography>
          </div>
        }
        description={
          <div className="text-sm text-slate-50 flex flex-col gap-6">
            <p className="text-center">
              When you close the Cluster details drawer you can view the logs in{' '}
              <span className="text-aurora-500">Cluster archives</span>.
            </p>

            <Checkbox defaultChecked label="Don't show this message again" />
          </div>
        }
        showCancelButton={false}
        wrapperClassName="max-w-[384px] gap-4"
        buttonConfirm={{
          text: 'Got it!',
          className: 'w-full mt-4',
        }}
      />
    </div>
  ),
} satisfies Story;

export default meta;
