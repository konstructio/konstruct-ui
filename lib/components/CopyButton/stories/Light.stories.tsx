import type { Meta, StoryObj } from '@storybook/react-vite';

import { Typography } from '@/components/Typography/Typography';

import { CopyButton as CopyButtonComponent } from '../CopyButton';

type Story = StoryObj<typeof CopyButtonComponent>;

const meta: Meta<typeof CopyButtonComponent> = {
  title: 'In Review/CopyButton/Light',
  component: CopyButtonComponent,
};

export const Light: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Typography variant="body2">192.168.0.1</Typography>
        <CopyButtonComponent text="192.168.0.1" label="Public IP" />
      </div>

      <Typography variant="body2" className="flex items-center gap-1">
        Type
        <CopyButtonComponent
          text="my-volume"
          label="my-volume"
          className="border border-slate-300 bg-slate-100 p-1 hover:bg-slate-200"
        >
          my-volume
        </CopyButtonComponent>
        to confirm
      </Typography>

      <div className="flex items-center gap-2">
        <Typography variant="body2">ssh root@192.168.0.1</Typography>
        <CopyButtonComponent
          text="ssh root@192.168.0.1"
          label="SSH command"
          copyLabel="Copiar"
          copiedLabel="¡Copiado!"
        />
      </div>

      <div className="flex items-center gap-2">
        <Typography variant="body2">Disabled</Typography>
        <CopyButtonComponent text="disabled" label="disabled value" disabled />
      </div>
    </div>
  ),
};

export default meta;
