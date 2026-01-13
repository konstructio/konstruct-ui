import{r,j as e}from"./iframe-Dv_ed3hk.js";import{T as a}from"./Tabs-GrdP5LYg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DRKh_P65.js";import"./index-Bvbp85qh.js";import"./index-Db6OKbb2.js";import"./index-CqmYFDcc.js";import"./index-CSyvGb6X.js";import"./index-_6dcbYVv.js";import"./index-BJbfvLpZ.js";import"./index-CaApckKV.js";import"./index-41MzeGWi.js";import"./index-Bn42e07n.js";import"./Typography-Cb2Ps2fx.js";const C={title:"In Review/Tabs/Light",component:a,args:{orientation:"vertical"}},t={render:function(s){const[n,l]=r.useState("tab1"),o=i=>{console.log("value",i),l(i)};return e.jsxs(a,{onValueChange:o,value:n,orientation:"horizontal",...s,children:[e.jsxs(a.List,{className:"flex gap-6","aria-label":"Manage your account",orientation:s.orientation,children:[e.jsx(a.Trigger,{tab:"tab1",label:"Account",isActive:n==="tab1"}),e.jsx(a.Trigger,{tab:"tab2",label:"Billing",isActive:n==="tab2"})]}),e.jsx(a.Content,{value:"tab1",children:e.jsxs("div",{className:s.orientation==="horizontal"?"space-y-4 mt-6":"",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Account Settings"}),e.jsx("div",{className:"rounded-lg border p-4",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Email"}),e.jsx("p",{className:"font-medium",children:"user@example.com"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Account Type"}),e.jsx("p",{className:"font-medium",children:"Personal Account"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Member Since"}),e.jsx("p",{className:"font-medium",children:"January 15, 2024"})]})]})})]})}),e.jsx(a.Content,{value:"tab2",children:e.jsxs("div",{className:s.orientation==="horizontal"?"space-y-4 mt-6":"",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Billing Overview"}),e.jsxs("div",{className:"rounded-lg border p-4",children:[e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Current Plan"}),e.jsx("p",{className:"font-medium",children:"Pro Plan"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Next Billing Date"}),e.jsx("p",{className:"font-medium",children:"May 1, 2024"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Monthly Subscription"}),e.jsx("span",{children:"$29.99"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Additional Users (2)"}),e.jsx("span",{children:"$10.00"})]}),e.jsx("div",{className:"border-t pt-2 mt-2",children:e.jsxs("div",{className:"flex justify-between font-semibold",children:[e.jsx("span",{children:"Total"}),e.jsx("span",{children:"$39.99"})]})})]})]})]})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const A=["Light"];export{t as Light,A as __namedExportsOrder,C as default};
