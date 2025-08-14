import type { Meta, StoryObj } from '@storybook/react-vite';

import { Dropdown as DropdownComponent } from './Dropdown';
import { useState } from 'react';
import { Modal } from '@/components/Modal/Modal';
import { Button } from '@/components/Button/Button';

type Story = StoryObj<typeof DropdownComponent>;

const meta: Meta<typeof DropdownComponent> = {
  title: 'In Review/Dropdown',
  component: DropdownComponent,
};

export const Dropdown: Story = {
  args: {
    options: [
      {
        label: 'Talos',
        value: 'talos',
        leftIcon: <img src="./talos.svg" alt="Talos Logo" />,
      },
      {
        label: 'K3S',
        value: 'k3s',
        leftIcon: <img src="./k3s.svg" alt="K3S Logo" />,
      },
    ],
    placeholder: 'Select an option...',
    required: false,
    labelClassName: '',
    isLoading: false,
    name: 'dropdown',
    searchable: true,
  },
  render: (args) => {
    const [value1, setValue1] = useState<string>();
    const [value2, setValue2] = useState<string>();
    const [value3, setValue3] = useState<string>();

    return (
      <div className="max-w-[350px] flex flex-col gap-6">
        <DropdownComponent
          label="Dropdown with Kubefirst theme"
          onChange={({ target: { value } }) => setValue1(value)}
          value={value1}
          {...args}
        />

        <DropdownComponent
          label="Dropdown with Colony theme"
          onChange={({ target: { value } }) => setValue2(value)}
          theme="colony"
          value={value2}
          {...args}
        />

        <DropdownComponent
          label="Dropdown with Civo theme"
          onChange={({ target: { value } }) => setValue3(value)}
          theme="civo"
          value={value3}
          {...args}
        />
      </div>
    );
  },
};

export const DropdownInModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState<string>();

    return (
      <div>
        <Button onClick={() => setIsOpen(true)} theme="kubefirst">
          Open Modal with Dropdown
        </Button>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          theme="kubefirst"
          className="min-h-[100px]"
        >
          <Modal.Body>
            <div className="p-6">
              <DropdownComponent
                label="Choose your distribution"
                options={[
                  {
                    label: 'Talos',
                    value: 'talos',
                    leftIcon: <img src="./talos.svg" alt="Talos Logo" />,
                  },
                  {
                    label: 'K3S',
                    value: 'k3s',
                    leftIcon: <img src="./k3s.svg" alt="K3S Logo" />,
                  },
                ]}
                placeholder="Select an option..."
                onChange={({ target: { value } }) => {
                  console.log('value', value);
                  setValue(value);
                }}
                value={value}
                theme="kubefirst"
                name="modal-dropdown"
              />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  },
};

export default meta;
