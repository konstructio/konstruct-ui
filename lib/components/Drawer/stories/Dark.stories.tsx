import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '@/components/Button/Button';

import { Drawer as DrawerComponent } from '../Drawer';

type Story = StoryObj<typeof DrawerComponent>;

const meta = {
  title: 'In Review/Drawer/Dark',
  component: DrawerComponent,
} satisfies Meta<typeof DrawerComponent>;

export const Default = {
  parameters: {
    theme: 'dark',
  },
  render: function DrawerDarkStory() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="w-112.5">
        <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>

        <DrawerComponent isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <DrawerComponent.Header>
            <h2 className="text-lg font-semibold text-white">Dark Drawer</h2>
          </DrawerComponent.Header>

          <DrawerComponent.Body>
            <p className="text-metal-400">
              This is the drawer content in dark mode.
            </p>
          </DrawerComponent.Body>

          <DrawerComponent.Footer>
            <div className="flex justify-end gap-2">
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>Confirm</Button>
            </div>
          </DrawerComponent.Footer>
        </DrawerComponent>
      </div>
    );
  },
} satisfies Story;

export const LeftPosition = {
  parameters: {
    theme: 'dark',
  },
  render: function DrawerLeftDarkStory() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="w-112.5">
        <Button onClick={() => setIsOpen(true)}>Open Left Drawer</Button>

        <DrawerComponent
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          position="left"
        >
          <DrawerComponent.Header>
            <h2 className="text-lg font-semibold text-white">Left Drawer</h2>
          </DrawerComponent.Header>

          <DrawerComponent.Body>
            <p className="text-metal-400">
              This drawer slides in from the left side.
            </p>
          </DrawerComponent.Body>

          <DrawerComponent.Footer>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </DrawerComponent.Footer>
        </DrawerComponent>
      </div>
    );
  },
} satisfies Story;

export const Resizable = {
  parameters: {
    theme: 'dark',
  },
  render: function DrawerResizableDarkStory() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="w-112.5">
        <Button onClick={() => setIsOpen(true)}>Open Resizable Drawer</Button>

        <DrawerComponent
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          canResize
          minWidth={300}
          maxWidth={900}
        >
          <DrawerComponent.Header>
            <h2 className="text-lg font-semibold text-white">
              Resizable Drawer
            </h2>
          </DrawerComponent.Header>

          <DrawerComponent.Body>
            <p className="text-metal-400">
              Hover over the left edge and drag to resize this drawer.
            </p>
          </DrawerComponent.Body>

          <DrawerComponent.Footer>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </DrawerComponent.Footer>
        </DrawerComponent>
      </div>
    );
  },
} satisfies Story;

export default meta;
