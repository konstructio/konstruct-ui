import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Tabs-CVSyIcAF.js";var a,o,s,c,l;function u(){return(u=e((()=>{a=t(),r(),o=n(),s={title:`In Review/Tabs/Light`,component:i,args:{orientation:`vertical`}},c={render:function(e){let[t,n]=(0,a.useState)(`tab1`);return(0,o.jsxs)(i,{onValueChange:e=>{console.log(`value`,e),n(e)},value:t,orientation:`horizontal`,...e,children:[(0,o.jsxs)(i.List,{className:`flex gap-6`,"aria-label":`Manage your account`,orientation:e.orientation,children:[(0,o.jsx)(i.Trigger,{tab:`tab1`,label:`Account`,isActive:t===`tab1`}),(0,o.jsx)(i.Trigger,{tab:`tab2`,label:`Billing`,isActive:t===`tab2`})]}),(0,o.jsx)(i.Content,{value:`tab1`,children:(0,o.jsxs)(`div`,{className:e.orientation===`horizontal`?`space-y-4 mt-6`:``,children:[(0,o.jsx)(`h3`,{className:`text-lg font-semibold`,children:`Account Settings`}),(0,o.jsx)(`div`,{className:`rounded-lg border p-4`,children:(0,o.jsxs)(`div`,{className:`space-y-4`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Email`}),(0,o.jsx)(`p`,{className:`font-medium`,children:`user@example.com`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Account Type`}),(0,o.jsx)(`p`,{className:`font-medium`,children:`Personal Account`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Member Since`}),(0,o.jsx)(`p`,{className:`font-medium`,children:`January 15, 2024`})]})]})})]})}),(0,o.jsx)(i.Content,{value:`tab2`,children:(0,o.jsxs)(`div`,{className:e.orientation===`horizontal`?`space-y-4 mt-6`:``,children:[(0,o.jsx)(`h3`,{className:`text-lg font-semibold`,children:`Billing Overview`}),(0,o.jsxs)(`div`,{className:`rounded-lg border p-4`,children:[(0,o.jsxs)(`div`,{className:`flex justify-between mb-4`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Current Plan`}),(0,o.jsx)(`p`,{className:`font-medium`,children:`Pro Plan`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Next Billing Date`}),(0,o.jsx)(`p`,{className:`font-medium`,children:`May 1, 2024`})]})]}),(0,o.jsxs)(`div`,{className:`space-y-2`,children:[(0,o.jsxs)(`div`,{className:`flex justify-between`,children:[(0,o.jsx)(`span`,{children:`Monthly Subscription`}),(0,o.jsx)(`span`,{children:`$29.99`})]}),(0,o.jsxs)(`div`,{className:`flex justify-between`,children:[(0,o.jsx)(`span`,{children:`Additional Users (2)`}),(0,o.jsx)(`span`,{children:`$10.00`})]}),(0,o.jsx)(`div`,{className:`border-t pt-2 mt-2`,children:(0,o.jsxs)(`div`,{className:`flex justify-between font-semibold`,children:[(0,o.jsx)(`span`,{children:`Total`}),(0,o.jsx)(`span`,{children:`$39.99`})]})})]})]})]})})]})}},l=[`Light`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function TabsStory(args) {
    const [selectedTab, setSelectedTab] = useState('tab1');
    const handleValueChange = (value: string) => {
      console.log('value', value);
      setSelectedTab(value);
    };
    return <TabsComponent onValueChange={handleValueChange} value={selectedTab} orientation="horizontal" {...args}>
        <TabsComponent.List className="flex gap-6" aria-label="Manage your account" orientation={args.orientation as 'horizontal' | 'vertical'}>
          <TabsComponent.Trigger tab="tab1" label="Account" isActive={selectedTab === 'tab1'} />
          <TabsComponent.Trigger tab="tab2" label="Billing" isActive={selectedTab === 'tab2'} />
        </TabsComponent.List>
        <TabsComponent.Content value="tab1">
          <div className={args.orientation === 'horizontal' ? 'space-y-4 mt-6' : ''}>
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
          <div className={args.orientation === 'horizontal' ? 'space-y-4 mt-6' : ''}>
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
      </TabsComponent>;
  }
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Light,l as __namedExportsOrder,s as default};