import{j as e}from"./iframe-DndQCF3t.js";import{I as t}from"./Input-BrOI9fCe.js";import"./preload-helper-PPVm8Dsz.js";import"./Warning-fOTtNiTV.js";import"./index-B-7A89sm.js";import"./Typography-FWqmQoqE.js";import"./index-DZ4gQ9XF.js";const x={title:"In Review/Input/Dark",component:t},r={parameters:{theme:"dark"},args:{autoComplete:"off"},render:s=>e.jsxs("div",{className:"w-87.5 flex flex-col gap-10 p-4",children:[e.jsx(t,{...s,label:"This is a label",isRequired:!0,helperText:"This is a helper text."}),e.jsx(t,{...s,label:"This is a label",labelAction:e.jsx("button",{type:"button",className:"text-xs text-blue-500",children:"Action"}),helperText:"This is a helper text."}),e.jsx(t,{...s}),e.jsx(t,{...s,type:"password"}),e.jsx(t,{...s,helperText:"This is a helper text.",error:"This is an error."}),e.jsx(t,{...s,placeholder:"Search...",isSearch:!0,helperText:"This is a helper text."}),e.jsx(t,{...s,placeholder:"This is disabled field.",disabled:!0})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  args: {
    autoComplete: 'off'
  },
  render: args => <div className="w-87.5 flex flex-col gap-10 p-4">
      <InputComponent {...args} label="This is a label" isRequired helperText="This is a helper text." />
      <InputComponent {...args} label="This is a label" labelAction={<button type="button" className="text-xs text-blue-500">
            Action
          </button>} helperText="This is a helper text." />
      <InputComponent {...args} />
      <InputComponent {...args} type="password" />
      <InputComponent {...args} helperText="This is a helper text." error="This is an error." />
      <InputComponent {...args} placeholder="Search..." isSearch helperText="This is a helper text." />
      <InputComponent {...args} placeholder="This is disabled field." disabled />
    </div>
} satisfies Story`,...r.parameters?.docs?.source}}};const m=["Dark"];export{r as Dark,m as __namedExportsOrder,x as default};
