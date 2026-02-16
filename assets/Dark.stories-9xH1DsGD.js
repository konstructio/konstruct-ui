import{j as a}from"./iframe-BXO_EhpM.js";import{M as r}from"./MultiSelectDropdown-DfgiddwI.js";import"./preload-helper-PPVm8Dsz.js";import"./useToggle-BldnEv0p.js";import"./Loader-Bu_oHQo7.js";import"./Badge-Bi8xE0_V.js";import"./index-BIgQ6y5l.js";import"./index-CxlmtjIK.js";import"./index-D_E6ICQ7.js";import"./x-ht38r2Si.js";import"./createLucideIcon-BvIK0-7g.js";import"./Typography-Bc3KsAQu.js";import"./index-jSjLyp38.js";const x={title:"In Review/MultiSelectDropdown/Dark",component:r},e={parameters:{theme:"dark"},args:{options:[{id:"1",label:"dev: development",badge:"dev",value:"development"},{id:"2",label:"qa: quality assurance",badge:"qa",value:"quality_assurance"},{id:"3",label:"prod: production",badge:"prod",value:"production"}],isRequired:!0},render:t=>a.jsxs("div",{className:"max-w-75 flex flex-col gap-6",children:[a.jsx(r,{...t,label:"Multiselect"}),a.jsx(r,{...t,label:"Single select",multiselect:!1})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...e.parameters?.docs?.source}}};const f=["Dark"];export{e as Dark,f as __namedExportsOrder,x as default};
