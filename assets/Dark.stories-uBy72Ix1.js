import{j as e}from"./iframe-Bn_zYVkQ.js";import{R as a}from"./Radio-BcSOuRyW.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-BK75nqwC.js";import"./index-B-7A89sm.js";const i={title:"In Review/Radio/Dark",component:a},d={parameters:{theme:"dark"},args:{value:"radio-button",checked:!0},render:t=>e.jsxs("div",{className:"w-87.5 flex flex-col gap-3",children:[e.jsx(a,{...t,label:"Radio Button selected"}),e.jsx(a,{...t,label:"Radio Button unselected",checked:!1}),e.jsx(a,{...t,label:"Disabled and unselected",disabled:!0,checked:!1}),e.jsx(a,{...t,label:"Disabled and selected",disabled:!0,checked:!0})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  args: {
    value: 'radio-button',
    checked: true
  },
  render: args => <div className="w-87.5 flex flex-col gap-3">
      <RadioComponent {...args} label="Radio Button selected" />

      <RadioComponent {...args} label="Radio Button unselected" checked={false} />

      <RadioComponent {...args} label="Disabled and unselected" disabled={true} checked={false} />

      <RadioComponent {...args} label="Disabled and selected" disabled={true} checked={true} />
    </div>
} satisfies Story`,...d.parameters?.docs?.source}}};const n=["Dark"];export{d as Dark,n as __namedExportsOrder,i as default};
