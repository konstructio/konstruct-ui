import{j as a}from"./iframe-BlTjg9l_.js";import{M as r}from"./MultiSelectDropdown-ChHp9JxU.js";import"./preload-helper-PPVm8Dsz.js";import"./useToggle-B3Yv3tMQ.js";import"./Loader-CyxEOiCx.js";import"./Badge-4LzILe4G.js";import"./index-B-7A89sm.js";import"./index-Bu_ar9tm.js";import"./index-zjOL5SK6.js";import"./x-CAYV4wUM.js";import"./createLucideIcon-JNXvXrMe.js";import"./Typography-NrHqQDsO.js";import"./index-BTMMiShY.js";const x={title:"In Review/MultiSelectDropdown/Dark",component:r},e={parameters:{theme:"dark"},args:{options:[{id:"1",label:"dev: development",badge:"dev",value:"development"},{id:"2",label:"qa: quality assurance",badge:"qa",value:"quality_assurance"},{id:"3",label:"prod: production",badge:"prod",value:"production"}],isRequired:!0},render:t=>a.jsxs("div",{className:"max-w-75 flex flex-col gap-6",children:[a.jsx(r,{...t,label:"Multiselect"}),a.jsx(r,{...t,label:"Single select",multiselect:!1})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
