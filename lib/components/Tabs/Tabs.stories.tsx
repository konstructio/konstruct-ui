import type { Meta, StoryObj } from '@storybook/react-vite';

import TabsComponent from './Tabs';
import { useState } from 'react';

type Story = StoryObj<typeof TabsComponent>;

const meta: Meta<typeof TabsComponent> = {
  title: 'In Review/Tabs',
  component: TabsComponent,
  args: {
    orientation: 'vertical',
  },
};

export const Tabs: Story = {
  render: (args) => {
    const [selectedTab, setSelectedTab] = useState('tab1');

    const handleValueChange = (value: string) => {
      console.log('value', value);
      setSelectedTab(value);
    };

    return (
      <TabsComponent
        onValueChange={handleValueChange}
        value={selectedTab}
        theme="civo"
        orientation="horizontal"
        {...args}
      >
        <TabsComponent.List
          className="flex gap-6"
          aria-label="Manage your account"
          orientation={args.orientation as 'horizontal' | 'vertical'}
        >
          <TabsComponent.Trigger
            tab="tab1"
            label="Account"
            isActive={selectedTab === 'tab1'}
          />
          <TabsComponent.Trigger
            tab="tab2"
            label="Billing"
            isActive={selectedTab === 'tab2'}
          />
        </TabsComponent.List>
        <TabsComponent.Content value="tab1">
          <div
            className={
              args.orientation === 'horizontal' ? 'space-y-4 mt-6' : ''
            }
          >
            <h3 className="text-lg font-semibold">Account Settings</h3>
            <div className="rounded-lg border p-4">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">user@example.com</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Account Type</p>
                  <p className="font-medium">Personal Account</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Member Since</p>
                  <p className="font-medium">January 15, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </TabsComponent.Content>
        <TabsComponent.Content value="tab2">
          <div
            className={
              args.orientation === 'horizontal' ? 'space-y-4 mt-6' : ''
            }
          >
            <h3 className="text-lg font-semibold">Billing Overview</h3>
            <div className="rounded-lg border p-4">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">Current Plan</p>
                  <p className="font-medium">Pro Plan</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Next Billing Date</p>
                  <p className="font-medium">May 1, 2024</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monthly Subscription</span>
                  <span>$29.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Additional Users (2)</span>
                  <span>$10.00</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$39.99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsComponent.Content>
      </TabsComponent>
    );
  },
};

export default meta;
