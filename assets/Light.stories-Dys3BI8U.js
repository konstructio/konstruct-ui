import{j as e}from"./iframe-RFUXcFU1.js";import{I as t}from"./Input-vqSmHewy.js";import"./preload-helper-PPVm8Dsz.js";import"./Warning-42Y0Tt-y.js";import"./index-BIgQ6y5l.js";import"./Typography-CVd2-NB0.js";import"./index-hF9rmkUV.js";const x={title:"In Review/Input/Light",component:t},r={args:{autoComplete:"off"},render:s=>e.jsxs("div",{className:"w-100 flex flex-col gap-4 p-4",children:[e.jsx(t,{...s,label:"This is a label",isRequired:!0,helperText:"This is a helper text."}),e.jsx(t,{...s,label:"This is a label",labelAction:e.jsx("button",{type:"button",className:"text-xs text-blue-500",children:"Action"}),helperText:"This is a helper text."}),e.jsx(t,{...s}),e.jsx(t,{...s,type:"password"}),e.jsx(t,{...s,helperText:"This is a helper text.",error:"This is an error."}),e.jsx(t,{...s,placeholder:"Search...",isSearch:!0,helperText:"This is a helper text."}),e.jsx(t,{...s,placeholder:"This is disabled field.",disabled:!0})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    autoComplete: 'off'
  },
  render: args => <div className="w-100 flex flex-col gap-4 p-4">
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
} satisfies Story`,...r.parameters?.docs?.source}}};const d=["Light"];export{r as Light,d as __namedExportsOrder,x as default};
