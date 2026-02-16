import{j as a}from"./iframe-CoBiGKUL.js";import{M as r}from"./MultiSelectDropdown-C4HgXR_H.js";import"./preload-helper-PPVm8Dsz.js";import"./useToggle-BupquSd5.js";import"./Loader-nXKv-31G.js";import"./Badge-pTIsiS5x.js";import"./index-BIgQ6y5l.js";import"./index-rYlKWwxV.js";import"./index-D1HSvG2h.js";import"./x-O0Fh6HXg.js";import"./createLucideIcon-DWMHVhJV.js";import"./Typography-DZ3by0j3.js";import"./index-B_je-Zjp.js";const x={title:"In Review/MultiSelectDropdown/Dark",component:r},e={parameters:{theme:"dark"},args:{options:[{id:"1",label:"dev: development",badge:"dev",value:"development"},{id:"2",label:"qa: quality assurance",badge:"qa",value:"quality_assurance"},{id:"3",label:"prod: production",badge:"prod",value:"production"}],isRequired:!0},render:t=>a.jsxs("div",{className:"max-w-75 flex flex-col gap-6",children:[a.jsx(r,{...t,label:"Multiselect"}),a.jsx(r,{...t,label:"Single select",multiselect:!1})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
