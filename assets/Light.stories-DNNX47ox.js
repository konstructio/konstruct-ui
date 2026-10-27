import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{n,t as r}from"./MultiSelectDropdown-DpVt-OXC.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),a={title:`In Review/MultiSelectDropdown/Light`,component:r},o={args:{options:[{id:`1`,label:`dev: development`,badge:`dev`,value:`development`},{id:`2`,label:`qa: quality assurance`,badge:`qa`,value:`quality_assurance`},{id:`3`,label:`prod: production`,badge:`prod`,value:`production`}],isRequired:!0},render:e=>(0,i.jsxs)(`div`,{className:`max-w-75 flex flex-col gap-6`,children:[(0,i.jsx)(r,{...e,label:`Multiselect`}),(0,i.jsx)(r,{...e,label:`Single select`,multiselect:!1})]})},s={parameters:{docs:{description:{story:"`error` and `helperText` describe the combobox the same way `Input` does, and `disabled` blocks opening and removing selections. vpc styled these states from outside with `**:[[role=combobox]]:` selectors before."}}},render:e=>(0,i.jsxs)(`div`,{className:`max-w-75 flex flex-col gap-6`,children:[(0,i.jsx)(r,{...e,label:`With helper text`,helperText:`Instances in the selected region`}),(0,i.jsx)(r,{...e,label:`With error`,error:`Pick at least one instance`}),(0,i.jsx)(r,{...e,label:`Disabled`,disabled:!0,value:[e.options[0]],helperText:`Select a region first`})]})},c=[`Light`,`WithMessagesAndDisabled`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`error\` and \`helperText\` describe the combobox the same way \`Input\` does, and \`disabled\` blocks opening and removing selections. vpc styled these states from outside with \`**:[[role=combobox]]:\` selectors before.'
      }
    }
  },
  render: args => <div className="max-w-75 flex flex-col gap-6">
      <MultiSelectDropdownComponent {...args} label="With helper text" helperText="Instances in the selected region" />

      <MultiSelectDropdownComponent {...args} label="With error" error="Pick at least one instance" />

      <MultiSelectDropdownComponent {...args} label="Disabled" disabled value={[args.options[0]]} helperText="Select a region first" />
    </div>
} satisfies Story`,...s.parameters?.docs?.source}}}})))()}l();export{o as Light,s as WithMessagesAndDisabled,c as __namedExportsOrder,a as default};