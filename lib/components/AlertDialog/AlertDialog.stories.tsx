import type { Meta, StoryObj } from '@storybook/react-vite';

import WarningIcon from '@/assets/icons/warning.svg';
import { Checkbox } from '@/components/Checkbox/Checkbox';

import { AlertDialog as AlertDialogComponent } from './AlertDialog';

type Story = StoryObj<typeof AlertDialogComponent>;

const meta = {
  title: 'In Review/AlertDialog',
  component: AlertDialogComponent,
} satisfies Meta<typeof AlertDialogComponent>;

export const AlertDialog = {
  render: () => (
    <>
      <div className="w-[350px]">
        <AlertDialogComponent
          buttonTriggerText="Destroy machine"
          title={
            <span className="flex flex-row gap-4 items-center font-semibold">
              <WarningIcon className="text-kubefirst-primary w-6 h-6" /> Delete
              image?
            </span>
          }
          description={
            <div className="text-sm text-slate-800 pl-9">
              <p className="mb-4">
                Are you sure you want to delete image? Once deleted the image
                cannot be recovered.
              </p>
            </div>
          }
          wrapperClassName="max-w-[500px] gap-4"
          buttonConfirm={{
            text: 'Yes, delete',
          }}
        />
      </div>

      <div className="my-3" />
      <div className="w-[350px]">
        <AlertDialogComponent
          buttonTriggerText="Destroy machine"
          theme="civo"
          title={
            <span className="flex flex-row gap-4 items-center font-semibold">
              <WarningIcon className="text-red-700 w-6 h-6" /> Delete image?
            </span>
          }
          description={
            <div className="text-sm text-slate-800 pl-9">
              <p className="mb-4">
                Are you sure you want to delete image? Once deleted the image
                cannot be recovered.
              </p>
            </div>
          }
          wrapperClassName="max-w-[500px] gap-4"
          buttonConfirm={{
            text: 'Yes, delete',
            variant: 'danger',
          }}
        />
      </div>

      <div className="my-3" />

      <div className="w-[350px]">
        <AlertDialogComponent
          buttonTriggerText="Destroy"
          theme="civo"
          title={
            <span className="flex flex-row gap-4 items-center font-semibold">
              <WarningIcon className="text-civo-primary w-6 h-6" /> Upload will
              take a few minutes...
            </span>
          }
          description={
            <div className="text-sm text-slate-800 pl-9">
              <p className="mb-4">
                Uploading an image may take up to a few minutes depending on
                image size and connection speed. We'll let you know when the
                import is complete.
              </p>

              <Checkbox
                defaultChecked
                label="This is a checkbox with civo colors"
              />
            </div>
          }
          showCancelButton={false}
          wrapperClassName="max-w-[500px] gap-4"
          buttonConfirm={{
            text: 'Got it!',
          }}
        />
      </div>
    </>
  ),
} satisfies Story;

export default meta;
