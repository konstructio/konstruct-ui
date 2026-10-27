import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{n,t as r}from"./Home-C7X00Evv.js";import{n as i,t as a}from"./Breadcrumb-DyviIU4R.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),o=t(),s={title:`In Review/Breadcrumb/Dark`,component:a,parameters:{theme:`dark`}},c={args:{steps:[{label:`Step 1`,isActive:!1},{label:`Step 2`,to:`#`},{label:`Step 3`}]},render:e=>(0,o.jsx)(`div`,{className:`max-w-62.5 p-4 flex justify-start`,children:(0,o.jsx)(a,{...e})})},l={args:{backButton:{onClick:()=>console.log(`go back`)},steps:[{label:`Step 1`,to:`#`},{label:`Step 2`,to:`#`},{label:`Step 3`}]},render:e=>(0,o.jsx)(`div`,{className:`p-4 flex justify-start`,children:(0,o.jsx)(a,{...e})})},u={args:{backButton:{icon:(0,o.jsx)(r,{className:`w-5 h-5`}),to:`#`,label:`Go home`},steps:[{label:`Home`,to:`#`,leftIcon:(0,o.jsx)(r,{className:`w-4 h-4`})},{label:`Step 2`,to:`#`},{label:`Step 3`}]},render:e=>(0,o.jsx)(`div`,{className:`p-4 flex justify-start`,children:(0,o.jsx)(a,{...e})})},d={args:{...c.args,maxVisibleItems:3,steps:[{label:`Buckets`,to:`#`},{label:`assets`,to:`#`},{label:`2026`,to:`#`},{label:`october`,to:`#`},{label:`reports`,to:`#`},{label:`summary.pdf`,isActive:!0}]},render:c.render},f=[`Dark`,`WithBackButton`,`WithStepIcons`,`Collapsed`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Dark.args,
    maxVisibleItems: 3,
    steps: [{
      label: 'Buckets',
      to: '#'
    }, {
      label: 'assets',
      to: '#'
    }, {
      label: '2026',
      to: '#'
    }, {
      label: 'october',
      to: '#'
    }, {
      label: 'reports',
      to: '#'
    }, {
      label: 'summary.pdf',
      isActive: true
    }]
  },
  render: Dark.render
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as Collapsed,c as Dark,l as WithBackButton,u as WithStepIcons,f as __namedExportsOrder,s as default};