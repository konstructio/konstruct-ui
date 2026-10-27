import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BlIEEezU.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,t as i}from"./Tabs-DErp2sny.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{a=t(),r(),o=n(),s={title:`In Review/Tabs/Dark`,component:i,args:{orientation:`vertical`}},c={render:function(e){let[t,n]=(0,a.useState)(`tab1`);return(0,a.useEffect)(()=>(document.body.setAttribute(`data-theme`,`dark`),document.body.classList.add(`bg-metal-900`),()=>{document.body.removeAttribute(`data-theme`),document.body.classList.remove(`bg-metal-900`)}),[]),(0,o.jsxs)(i,{onValueChange:e=>{console.log(`value`,e),n(e)},value:t,orientation:`horizontal`,...e,children:[(0,o.jsxs)(i.List,{className:`flex gap-6`,"aria-label":`Manage your account`,orientation:e.orientation,children:[(0,o.jsx)(i.Trigger,{tab:`tab1`,label:`Account`,isActive:t===`tab1`}),(0,o.jsx)(i.Trigger,{tab:`tab2`,label:`Billing`,isActive:t===`tab2`})]}),(0,o.jsx)(i.Content,{value:`tab1`,children:(0,o.jsxs)(`div`,{className:e.orientation===`horizontal`?`space-y-4 mt-6`:``,children:[(0,o.jsx)(`h3`,{className:`text-lg font-semibold text-metal-50`,children:`Account Settings`}),(0,o.jsx)(`div`,{className:`rounded-lg border p-4 border-metal-700 text-metal-100`,children:(0,o.jsxs)(`div`,{className:`space-y-4`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{className:`text-sm`,children:`Email`}),(0,o.jsx)(`p`,{className:`font-medium`,children:`user@example.com`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{className:`text-sm`,children:`Account Type`}),(0,o.jsx)(`p`,{className:`font-medium`,children:`Personal Account`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{className:`text-sm`,children:`Member Since`}),(0,o.jsx)(`p`,{className:`font-medium`,children:`January 15, 2024`})]})]})})]})}),(0,o.jsx)(i.Content,{value:`tab2`,children:(0,o.jsxs)(`div`,{className:e.orientation===`horizontal`?`space-y-4 mt-6`:``,children:[(0,o.jsx)(`h3`,{className:`text-lg font-semibold text-metal-50`,children:`Billing Overview`}),(0,o.jsxs)(`div`,{className:`rounded-lg border p-4 border-metal-700 text-metal-100`,children:[(0,o.jsxs)(`div`,{className:`flex justify-between mb-4`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{className:`text-sm`,children:`Current Plan`}),(0,o.jsx)(`p`,{className:`font-medium`,children:`Pro Plan`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{className:`text-sm`,children:`Next Billing Date`}),(0,o.jsx)(`p`,{className:`font-medium`,children:`May 1, 2024`})]})]}),(0,o.jsxs)(`div`,{className:`space-y-2`,children:[(0,o.jsxs)(`div`,{className:`flex justify-between`,children:[(0,o.jsx)(`span`,{children:`Monthly Subscription`}),(0,o.jsx)(`span`,{children:`$29.99`})]}),(0,o.jsxs)(`div`,{className:`flex justify-between`,children:[(0,o.jsx)(`span`,{children:`Additional Users (2)`}),(0,o.jsx)(`span`,{children:`$10.00`})]}),(0,o.jsx)(`div`,{className:`border-t pt-2 mt-2`,children:(0,o.jsxs)(`div`,{className:`flex justify-between font-semibold`,children:[(0,o.jsx)(`span`,{children:`Total`}),(0,o.jsx)(`span`,{children:`$39.99`})]})})]})]})]})})]})}},l={parameters:{docs:{description:{story:"`items` renders the list, triggers and contents from an array. Uncontrolled by default: the first item is selected and, if the active item disappears (for example after changing a region), the selection falls back to the first one. `Tabs.Trigger` no longer needs `isActive`; it derives the active styles from the tabs state."}}},render:function(){let[e,t]=(0,a.useState)(!0),n=[{value:`account`,label:`Account`,content:(0,o.jsx)(`p`,{className:`mt-6`,children:`Account settings`})},{value:`security`,label:`Security`,content:(0,o.jsx)(`p`,{className:`mt-6`,children:`Security settings`})},...e?[{value:`billing`,label:`Billing`,content:(0,o.jsx)(`p`,{className:`mt-6`,children:`Billing settings`})}]:[]];return(0,o.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,o.jsxs)(`label`,{className:`flex items-center gap-2 text-sm`,children:[(0,o.jsx)(`input`,{type:`checkbox`,checked:e,onChange:e=>{t(e.target.checked)}}),`Show the Billing tab`]}),(0,o.jsx)(i,{items:n,orientation:`horizontal`,listClassName:`gap-6`,onValueChange:e=>{console.log(`value`,e)}})]})}},u=[`Dark`,`DeclarativeItems`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`items\` renders the list, triggers and contents from an array. Uncontrolled by default: the first item is selected and, if the active item disappears (for example after changing a region), the selection falls back to the first one. \`Tabs.Trigger\` no longer needs \`isActive\`; it derives the active styles from the tabs state.'
      }
    }
  },
  render: function DeclarativeItemsStory() {
    const [showBilling, setShowBilling] = useState(true);
    const items = [{
      value: 'account',
      label: 'Account',
      content: <p className="mt-6">Account settings</p>
    }, {
      value: 'security',
      label: 'Security',
      content: <p className="mt-6">Security settings</p>
    }, ...(showBilling ? [{
      value: 'billing',
      label: 'Billing',
      content: <p className="mt-6">Billing settings</p>
    }] : [])];
    return <div className="flex flex-col gap-6">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={showBilling} onChange={event => {
          setShowBilling(event.target.checked);
        }} />
          Show the Billing tab
        </label>

        <TabsComponent items={items} orientation="horizontal" listClassName="gap-6" onValueChange={value => {
        console.log('value', value);
      }} />
      </div>;
  }
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Dark,l as DeclarativeItems,u as __namedExportsOrder,s as default};