import{j as a}from"./iframe-Bn_zYVkQ.js";import{M as r}from"./MultiSelectDropdown-n-aWOEAC.js";import"./preload-helper-PPVm8Dsz.js";import"./useToggle-B6ckmTa_.js";import"./Loader-WLi4rQ97.js";import"./Badge-DnRIwH3a.js";import"./index-B-7A89sm.js";import"./index-C3wFPQlr.js";import"./index-aQzbjv51.js";import"./x-xtuj1Vio.js";import"./createLucideIcon-Nq0w9UEh.js";import"./Typography-BK75nqwC.js";import"./index-DWQB616r.js";const x={title:"In Review/MultiSelectDropdown/Dark",component:r},e={parameters:{theme:"dark"},args:{options:[{id:"1",label:"dev: development",badge:"dev",value:"development"},{id:"2",label:"qa: quality assurance",badge:"qa",value:"quality_assurance"},{id:"3",label:"prod: production",badge:"prod",value:"production"}],isRequired:!0},render:t=>a.jsxs("div",{className:"max-w-75 flex flex-col gap-6",children:[a.jsx(r,{...t,label:"Multiselect"}),a.jsx(r,{...t,label:"Single select",multiselect:!1})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
