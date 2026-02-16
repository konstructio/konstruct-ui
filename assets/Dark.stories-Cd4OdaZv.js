import{r as l,j as e}from"./iframe-CoBiGKUL.js";import{T as t}from"./Tabs-BG98bBMK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dt2jClfr.js";import"./index-Buesxbiu.js";import"./index-BG4t6Fzh.js";import"./index-D1HSvG2h.js";import"./index-CWPEqVLx.js";import"./index-BsypZwSS.js";import"./index-BlOPMcvx.js";import"./index-CD5jxwaq.js";import"./index-a_w-usLh.js";import"./index-BIgQ6y5l.js";import"./Typography-DZ3by0j3.js";const C={title:"In Review/Tabs/Dark",component:t,args:{orientation:"vertical"}},s={render:function(a){const[n,o]=l.useState("tab1");l.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]);const r=i=>{console.log("value",i),o(i)};return e.jsxs(t,{onValueChange:r,value:n,orientation:"horizontal",...a,children:[e.jsxs(t.List,{className:"flex gap-6","aria-label":"Manage your account",orientation:a.orientation,children:[e.jsx(t.Trigger,{tab:"tab1",label:"Account",isActive:n==="tab1"}),e.jsx(t.Trigger,{tab:"tab2",label:"Billing",isActive:n==="tab2"})]}),e.jsx(t.Content,{value:"tab1",children:e.jsxs("div",{className:a.orientation==="horizontal"?"space-y-4 mt-6":"",children:[e.jsx("h3",{className:"text-lg font-semibold text-metal-50",children:"Account Settings"}),e.jsx("div",{className:"rounded-lg border p-4 border-metal-700 text-metal-100",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm",children:"Email"}),e.jsx("p",{className:"font-medium",children:"user@example.com"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm",children:"Account Type"}),e.jsx("p",{className:"font-medium",children:"Personal Account"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm",children:"Member Since"}),e.jsx("p",{className:"font-medium",children:"January 15, 2024"})]})]})})]})}),e.jsx(t.Content,{value:"tab2",children:e.jsxs("div",{className:a.orientation==="horizontal"?"space-y-4 mt-6":"",children:[e.jsx("h3",{className:"text-lg font-semibold text-metal-50",children:"Billing Overview"}),e.jsxs("div",{className:"rounded-lg border p-4 border-metal-700 text-metal-100",children:[e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm",children:"Current Plan"}),e.jsx("p",{className:"font-medium",children:"Pro Plan"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm",children:"Next Billing Date"}),e.jsx("p",{className:"font-medium",children:"May 1, 2024"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Monthly Subscription"}),e.jsx("span",{children:"$29.99"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Additional Users (2)"}),e.jsx("span",{children:"$10.00"})]}),e.jsx("div",{className:"border-t pt-2 mt-2",children:e.jsxs("div",{className:"flex justify-between font-semibold",children:[e.jsx("span",{children:"Total"}),e.jsx("span",{children:"$39.99"})]})})]})]})]})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const A=["Dark"];export{s as Dark,A as __namedExportsOrder,C as default};
