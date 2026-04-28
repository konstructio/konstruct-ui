import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{o as n,t as r}from"./iframe-C2WQCK3e.js";import{n as i,t as a}from"./Tabs-EQRow3x0.js";var o,s,c,l,u;e((()=>{o=t(n(),1),i(),s=r(),c={title:`In Review/Tabs/Dark`,component:a,args:{orientation:`vertical`}},l={render:function(e){let[t,n]=(0,o.useState)(`tab1`);return(0,o.useEffect)(()=>(document.body.setAttribute(`data-theme`,`dark`),document.body.classList.add(`bg-metal-900`),()=>{document.body.removeAttribute(`data-theme`),document.body.classList.remove(`bg-metal-900`)}),[]),(0,s.jsxs)(a,{onValueChange:e=>{console.log(`value`,e),n(e)},value:t,orientation:`horizontal`,...e,children:[(0,s.jsxs)(a.List,{className:`flex gap-6`,"aria-label":`Manage your account`,orientation:e.orientation,children:[(0,s.jsx)(a.Trigger,{tab:`tab1`,label:`Account`,isActive:t===`tab1`}),(0,s.jsx)(a.Trigger,{tab:`tab2`,label:`Billing`,isActive:t===`tab2`})]}),(0,s.jsx)(a.Content,{value:`tab1`,children:(0,s.jsxs)(`div`,{className:e.orientation===`horizontal`?`space-y-4 mt-6`:``,children:[(0,s.jsx)(`h3`,{className:`text-lg font-semibold text-metal-50`,children:`Account Settings`}),(0,s.jsx)(`div`,{className:`rounded-lg border p-4 border-metal-700 text-metal-100`,children:(0,s.jsxs)(`div`,{className:`space-y-4`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{className:`text-sm`,children:`Email`}),(0,s.jsx)(`p`,{className:`font-medium`,children:`user@example.com`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{className:`text-sm`,children:`Account Type`}),(0,s.jsx)(`p`,{className:`font-medium`,children:`Personal Account`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{className:`text-sm`,children:`Member Since`}),(0,s.jsx)(`p`,{className:`font-medium`,children:`January 15, 2024`})]})]})})]})}),(0,s.jsx)(a.Content,{value:`tab2`,children:(0,s.jsxs)(`div`,{className:e.orientation===`horizontal`?`space-y-4 mt-6`:``,children:[(0,s.jsx)(`h3`,{className:`text-lg font-semibold text-metal-50`,children:`Billing Overview`}),(0,s.jsxs)(`div`,{className:`rounded-lg border p-4 border-metal-700 text-metal-100`,children:[(0,s.jsxs)(`div`,{className:`flex justify-between mb-4`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{className:`text-sm`,children:`Current Plan`}),(0,s.jsx)(`p`,{className:`font-medium`,children:`Pro Plan`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{className:`text-sm`,children:`Next Billing Date`}),(0,s.jsx)(`p`,{className:`font-medium`,children:`May 1, 2024`})]})]}),(0,s.jsxs)(`div`,{className:`space-y-2`,children:[(0,s.jsxs)(`div`,{className:`flex justify-between`,children:[(0,s.jsx)(`span`,{children:`Monthly Subscription`}),(0,s.jsx)(`span`,{children:`$29.99`})]}),(0,s.jsxs)(`div`,{className:`flex justify-between`,children:[(0,s.jsx)(`span`,{children:`Additional Users (2)`}),(0,s.jsx)(`span`,{children:`$10.00`})]}),(0,s.jsx)(`div`,{className:`border-t pt-2 mt-2`,children:(0,s.jsxs)(`div`,{className:`flex justify-between font-semibold`,children:[(0,s.jsx)(`span`,{children:`Total`}),(0,s.jsx)(`span`,{children:`$39.99`})]})})]})]})]})})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function TabsStory(args) {
    const [selectedTab, setSelectedTab] = useState('tab1');
    useEffect(() => {
      document.body.setAttribute('data-theme', 'dark');
      document.body.classList.add('bg-metal-900');
      return () => {
        document.body.removeAttribute('data-theme');
        document.body.classList.remove('bg-metal-900');
      };
    }, []);
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
            <h3 className="text-lg font-semibold text-metal-50">
              Account Settings
            </h3>
            <div className="rounded-lg border p-4 border-metal-700 text-metal-100">
              <div className="space-y-4">
                <div>
                  <p className="text-sm">Email</p>
                  <p className="font-medium">user@example.com</p>
                </div>
                <div>
                  <p className="text-sm">Account Type</p>
                  <p className="font-medium">Personal Account</p>
                </div>
                <div>
                  <p className="text-sm">Member Since</p>
                  <p className="font-medium">January 15, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </TabsComponent.Content>
        <TabsComponent.Content value="tab2">
          <div className={args.orientation === 'horizontal' ? 'space-y-4 mt-6' : ''}>
            <h3 className="text-lg font-semibold text-metal-50">
              Billing Overview
            </h3>
            <div className="rounded-lg border p-4 border-metal-700 text-metal-100">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-sm">Current Plan</p>
                  <p className="font-medium">Pro Plan</p>
                </div>
                <div>
                  <p className="text-sm">Next Billing Date</p>
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
}`,...l.parameters?.docs?.source}}},u=[`Dark`]}))();export{l as Dark,u as __namedExportsOrder,c as default};