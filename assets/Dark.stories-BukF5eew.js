import{j as a}from"./iframe-BqDUESjj.js";import{M as r}from"./MultiSelectDropdown-DGd5gSnI.js";import"./preload-helper-PPVm8Dsz.js";import"./useToggle-BVkvD4AP.js";import"./Loader-dX6fHU3p.js";import"./Badge-Cm8rs6J3.js";import"./index-CwGTy2we.js";import"./index-Clwcr3i0.js";import"./index-ClNUCkto.js";import"./x-DPODMCaD.js";import"./createLucideIcon-CnfXAJ7b.js";import"./Typography-1Jbn6Fq-.js";import"./Button-CUsrcIMq.js";import"./index-BEE3l006.js";const f={title:"In Review/MultiSelectDropdown/Dark",component:r},e={parameters:{theme:"dark"},args:{options:[{id:"1",label:"dev: development",badge:"dev",value:"development"},{id:"2",label:"qa: quality assurance",badge:"qa",value:"quality_assurance"},{id:"3",label:"prod: production",badge:"prod",value:"production"}],isRequired:!0},render:t=>a.jsxs("div",{className:"max-w-75 flex flex-col gap-6",children:[a.jsx(r,{...t,label:"Multiselect"}),a.jsx(r,{...t,label:"Single select",multiselect:!1})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
