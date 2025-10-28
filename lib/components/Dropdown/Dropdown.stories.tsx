import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '@/components/Button/Button';
import { Modal } from '@/components/Modal/Modal';

import { Dropdown as DropdownComponent } from './Dropdown';
import { Plus } from 'lucide-react';

type Story = StoryObj<typeof DropdownComponent>;

const meta = {
  title: 'In Review/Dropdown',
  component: DropdownComponent,
} satisfies Meta<typeof DropdownComponent>;

export const Dropdown = {
  args: {
    options: [
      {
        label: 'Talos',
        subLabel: 'A modern OS for Kubernetes',
        value: 'talos',
        leftIcon: <img src="./talos.svg" alt="Talos Logo" />,
      },
      {
        label: 'K3S',
        subLabel: 'Lightweight Kubernetes',
        value: 'k3s',
        leftIcon: <img src="./k3s.svg" alt="K3S Logo" />,
      },
    ],
    placeholder: 'Select an option...',
    required: false,
    labelClassName: '',
    isLoading: false,
    name: 'dropdown',
  },
  render: function DropdownStory(args) {
    const [value1, setValue1] = useState<string>();
    const [value2, setValue2] = useState<string>();
    const [value3, setValue3] = useState<string>();
    const [value4, setValue4] = useState<string>();
    const [value5, setValue5] = useState<string>();
    const [value6, setValue6] = useState<string>();

    return (
      <div className="flex flex-col gap-6">
        <div className="max-w-[350px] flex flex-col gap-6 p-6">
          <DropdownComponent
            label="Searchable dropdown with Kubefirst theme"
            onChange={({ target: { value } }) => setValue1(value)}
            value={value1}
            searchable={true}
            theme="kubefirst"
            {...args}
          />

          <DropdownComponent
            label="Searchable dropdown with Civo theme"
            onChange={({ target: { value } }) => setValue2(value)}
            value={value2}
            searchable={true}
            showSearchIcon={true}
            inputMode="text"
            highlightSearch={true}
            additionalOptions={[
              <button className="text-blue-600 dark:text-aurora-500">
                <Plus /> New Team
              </button>,
            ]}
            {...args}
          />

          <DropdownComponent
            label="Dropdown with Civo theme"
            onChange={({ target: { value } }) => setValue3(value)}
            value={value3}
            searchable={false}
            {...args}
          />
        </div>

        <div
          className="max-w-[350px] flex flex-col gap-6 p-6 bg-slate-800 rounded-sm"
          data-theme="dark"
        >
          <DropdownComponent
            label="Searchable dropdown with Kubefirst theme"
            onChange={({ target: { value } }) => setValue4(value)}
            value={value4}
            searchable={true}
            theme="kubefirst"
            {...args}
          />

          <DropdownComponent
            label="Searchable dropdown with Civo theme"
            onChange={({ target: { value } }) => setValue5(value)}
            value={value5}
            searchable={true}
            showSearchIcon={true}
            inputMode="text"
            highlightSearch={true}
            additionalOptions={[
              <button className="text-blue-600 dark:text-aurora-500">
                <Plus /> New Team
              </button>,
            ]}
            {...args}
          />

          <DropdownComponent
            label="Dropdown with Civo theme"
            onChange={({ target: { value } }) => setValue6(value)}
            value={value6}
            searchable={false}
            {...args}
          />
        </div>
      </div>
    );
  },
} satisfies Story;

export const DropdownInModal = {
  render: function DropdownInModalStory() {
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
} satisfies Story;

export default meta;
