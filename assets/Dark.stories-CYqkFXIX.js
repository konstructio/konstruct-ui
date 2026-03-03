import{j as a}from"./iframe-6Wg7OtYN.js";import{M as r}from"./MultiSelectDropdown-DOvKVJSM.js";import"./preload-helper-PPVm8Dsz.js";import"./useToggle-OVnLFLP5.js";import"./Loader-Ddjkt8hB.js";import"./Badge-B6nE3kQ3.js";import"./index-CGPp45Jz.js";import"./index-MZ4BllDj.js";import"./index-imnFuhIZ.js";import"./x-DImnfFSr.js";import"./createLucideIcon-B2KbbkM7.js";import"./Typography-DqSFt_Wx.js";import"./index-DXHLnObS.js";const x={title:"In Review/MultiSelectDropdown/Dark",component:r},e={parameters:{theme:"dark"},args:{options:[{id:"1",label:"dev: development",badge:"dev",value:"development"},{id:"2",label:"qa: quality assurance",badge:"qa",value:"quality_assurance"},{id:"3",label:"prod: production",badge:"prod",value:"production"}],isRequired:!0},render:t=>a.jsxs("div",{className:"max-w-75 flex flex-col gap-6",children:[a.jsx(r,{...t,label:"Multiselect"}),a.jsx(r,{...t,label:"Single select",multiselect:!1})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
