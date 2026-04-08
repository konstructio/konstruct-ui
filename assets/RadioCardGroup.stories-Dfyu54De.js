import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-De-1JGbp.js";import{n,t as r}from"./Typography-D1gUyuQD.js";import{n as i,t as a}from"./RadioCardGroup-DUuUfr-D.js";import{n as o,t as s}from"./civo-logo-B0_ELa8U.js";var c,l,u,d,f;e((()=>{o(),i(),n(),c=t(),l={title:`In Review/RadioCardGroup`,component:a},u=[{label:(0,c.jsx)(r,{variant:`subtitle3`,className:`text-zinc-700`,children:`Kubefirst template`}),value:`option-1`,description:(0,c.jsx)(r,{variant:`body2`,className:`text-zinc-700`,children:`Provision a new cluster from a Kubefirst defined template`}),wrapperClassName:`rounded-lg w-full`},{label:(0,c.jsx)(r,{variant:`subtitle3`,className:`text-zinc-700`,children:`Custom template`}),value:`option-2`,description:(0,c.jsx)(r,{variant:`body2`,className:`text-zinc-700`,children:`Provision a new cluster from a pre-defined custom template`}),wrapperClassName:`rounded-lg w-full`}],d={args:{defaultChecked:`option-1`,options:[{label:(0,c.jsx)(s,{}),value:`option-1`,wrapperClassName:`w-[200px]`},{label:(0,c.jsx)(s,{}),value:`option-2`,wrapperClassName:`w-[200px]`},{label:(0,c.jsx)(s,{}),value:`option-3`,wrapperClassName:`w-[200px]`}]},render:e=>(0,c.jsxs)(`div`,{className:`w-[635px] flex flex-col gap-3`,children:[(0,c.jsx)(`h6`,{children:`Row`}),(0,c.jsx)(a,{...e,name:`radio-card-group-1`,direction:`row`}),(0,c.jsx)(`h6`,{className:`mt-5`,children:`Column`}),(0,c.jsx)(a,{...e,name:`radio-card-group-2`}),(0,c.jsx)(`h6`,{className:`mt-5`,children:`Column with description`}),(0,c.jsx)(a,{defaultChecked:`option-1`,options:u,wrapperClassName:`w-full`,name:`radio-card-group-3`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: 'option-1',
    options: [{
      label: <CivoLogo />,
      value: 'option-1',
      wrapperClassName: 'w-[200px]'
    }, {
      label: <CivoLogo />,
      value: 'option-2',
      wrapperClassName: 'w-[200px]'
    }, {
      label: <CivoLogo />,
      value: 'option-3',
      wrapperClassName: 'w-[200px]'
    }]
  },
  render: args => <div className="w-[635px] flex flex-col gap-3">
      <h6>Row</h6>
      <RadioCardGroupComponent {...args} name="radio-card-group-1" direction="row" />

      <h6 className="mt-5">Column</h6>
      <RadioCardGroupComponent {...args} name="radio-card-group-2" />

      <h6 className="mt-5">Column with description</h6>
      <RadioCardGroupComponent defaultChecked="option-1" options={optionsWithDescription} wrapperClassName="w-full" name="radio-card-group-3" />
    </div>
} satisfies Story`,...d.parameters?.docs?.source}}},f=[`RadioCardGroup`]}))();export{d as RadioCardGroup,f as __namedExportsOrder,l as default};