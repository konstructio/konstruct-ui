import{j as e}from"./iframe-DlVqEhCt.js";import{I as r}from"./Input-CqZjL_7y.js";import"./preload-helper-PPVm8Dsz.js";import"./Warning-DSYKGbUd.js";import"./index-B-7A89sm.js";import"./Typography-NWAg16e1.js";import"./index-Y6EkoYN_.js";const d={title:"In Review/Input/Dark",component:r},t={parameters:{theme:"dark"},args:{autoComplete:"off"},render:s=>e.jsxs("div",{className:"w-87.5 flex flex-col gap-10 p-4",children:[e.jsx(r,{...s,label:"This is a label",isRequired:!0,helperText:"This is a helper text."}),e.jsx(r,{...s}),e.jsx(r,{...s,type:"password"}),e.jsx(r,{...s,helperText:"This is a helper text.",error:"This is an error."}),e.jsx(r,{...s,placeholder:"Search...",isSearch:!0,helperText:"This is a helper text."}),e.jsx(r,{...s,placeholder:"This is disabled field.",disabled:!0})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  args: {
    autoComplete: 'off'
  },
  render: args => <div className="w-87.5 flex flex-col gap-10 p-4">
      <InputComponent {...args} label="This is a label" isRequired helperText="This is a helper text." />
      <InputComponent {...args} />
      <InputComponent {...args} type="password" />
      <InputComponent {...args} helperText="This is a helper text." error="This is an error." />
      <InputComponent {...args} placeholder="Search..." isSearch helperText="This is a helper text." />
      <InputComponent {...args} placeholder="This is disabled field." disabled />
    </div>
} satisfies Story`,...t.parameters?.docs?.source}}};const m=["Dark"];export{t as Dark,m as __namedExportsOrder,d as default};
