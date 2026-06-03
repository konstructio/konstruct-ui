import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./iframe-BG7KL4WD.js";import{X as n,t as r}from"./components-CTHrmNrc.js";import{n as i,t as a}from"./Breadcrumb-DTFswlN0.js";var o,s,c,l,u,d;e((()=>{r(),i(),o=t(),s={title:`In Review/Breadcrumb/Dark`,component:a,parameters:{theme:`dark`}},c={args:{steps:[{label:`Step 1`,isActive:!1},{label:`Step 2`,to:`#`},{label:`Step 3`}]},render:e=>(0,o.jsx)(`div`,{className:`max-w-62.5 p-4 flex justify-start`,children:(0,o.jsx)(a,{...e})})},l={args:{backButton:{onClick:()=>console.log(`go back`)},steps:[{label:`Step 1`,to:`#`},{label:`Step 2`,to:`#`},{label:`Step 3`}]},render:e=>(0,o.jsx)(`div`,{className:`p-4 flex justify-start`,children:(0,o.jsx)(a,{...e})})},u={args:{backButton:{icon:(0,o.jsx)(n,{className:`w-5 h-5`}),to:`#`,label:`Go home`},steps:[{label:`Home`,to:`#`,leftIcon:(0,o.jsx)(n,{className:`w-4 h-4`})},{label:`Step 2`,to:`#`},{label:`Step 3`}]},render:e=>(0,o.jsx)(`div`,{className:`p-4 flex justify-start`,children:(0,o.jsx)(a,{...e})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: 'Step 1',
      isActive: false
    }, {
      label: 'Step 2',
      to: '#'
    }, {
      label: 'Step 3'
    }]
  },
  render: args => <div className="max-w-62.5 p-4 flex justify-start">
      <BreadcrumbComponent {...args} />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    backButton: {
      onClick: () => console.log('go back')
    },
    steps: [{
      label: 'Step 1',
      to: '#'
    }, {
      label: 'Step 2',
      to: '#'
    }, {
      label: 'Step 3'
    }]
  },
  render: args => <div className="p-4 flex justify-start">
      <BreadcrumbComponent {...args} />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    backButton: {
      icon: <HomeIcon className="w-5 h-5" />,
      to: '#',
      label: 'Go home'
    },
    steps: [{
      label: 'Home',
      to: '#',
      leftIcon: <HomeIcon className="w-4 h-4" />
    }, {
      label: 'Step 2',
      to: '#'
    }, {
      label: 'Step 3'
    }]
  },
  render: args => <div className="p-4 flex justify-start">
      <BreadcrumbComponent {...args} />
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Dark`,`WithBackButton`,`WithStepIcons`]}))();export{c as Dark,l as WithBackButton,u as WithStepIcons,d as __namedExportsOrder,s as default};