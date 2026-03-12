import{j as a}from"./iframe-Bx7A06S6.js";import{M as r}from"./MultiSelectDropdown-D-3wgHgp.js";import"./preload-helper-PPVm8Dsz.js";import"./useToggle-DYsG1k89.js";import"./Loader-DkRYb8L5.js";import"./Badge-uutf6F8U.js";import"./index-CwGTy2we.js";import"./index-BvAy6IBt.js";import"./index-D1FIWJZM.js";import"./x-CWM7iKI1.js";import"./createLucideIcon-BUjuW9lK.js";import"./Typography-CVipnvyR.js";import"./Button-43eHLI6h.js";import"./index-1gMRQfLf.js";const f={title:"In Review/MultiSelectDropdown/Dark",component:r},e={parameters:{theme:"dark"},args:{options:[{id:"1",label:"dev: development",badge:"dev",value:"development"},{id:"2",label:"qa: quality assurance",badge:"qa",value:"quality_assurance"},{id:"3",label:"prod: production",badge:"prod",value:"production"}],isRequired:!0},render:t=>a.jsxs("div",{className:"max-w-75 flex flex-col gap-6",children:[a.jsx(r,{...t,label:"Multiselect"}),a.jsx(r,{...t,label:"Single select",multiselect:!1})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  args: {
    options: [{
      id: '1',
      label: 'dev: development',
      badge: 'dev',
      value: 'development'
    }, {
      id: '2',
      label: 'qa: quality assurance',
      badge: 'qa',
      value: 'quality_assurance'
    }, {
      id: '3',
      label: 'prod: production',
      badge: 'prod',
      value: 'production'
    }],
    isRequired: true
  },
  render: args => <div className="max-w-75 flex flex-col gap-6">
      <MultiSelectDropdownComponent {...args} label="Multiselect" />

      <MultiSelectDropdownComponent {...args} label="Single select" multiselect={false} />
    </div>
} satisfies Story`,...e.parameters?.docs?.source}}};const q=["Dark"];export{e as Dark,q as __namedExportsOrder,f as default};
