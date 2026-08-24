import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{i as r,t as i}from"./utils-0TJZseot.js";import{n as a,t as o}from"./dist-qtULYLvt.js";import{n as s,t as c}from"./Typography-Dr4qxqZo.js";import{i as l,n as u,r as d,t as f}from"./civo-logo-DfZ2ngzL.js";var p;function m(){return(m=e((()=>{a(),p=o([`flex`],{variants:{direction:{row:[`flex-row`,`gap-8`],col:[`flex-col`,`gap-4`]}},defaultVariants:{direction:`col`}})})))()}var h,g,_;function v(){return(v=e((()=>{h=t(),r(),l(),m(),g=n(),_=({className:e,defaultChecked:t,direction:n,name:r,options:a,theme:o,wrapperClassName:s,onValueChange:c})=>{let[l,u]=(0,h.useState)(t),f=e=>{u(e),c?.(e)};return(0,g.jsx)(`div`,{className:i(p({className:s,direction:n})),"data-theme":o,children:a.map(({value:t,...n})=>(0,g.jsx)(d,{value:t,name:r,className:i(e),checked:l===t,onChange:()=>f(t),...n},t))})},_.__docgenInfo={description:`A group of card-style radio buttons with shared state management.

@example
\`\`\`tsx
<RadioCardGroup
  name="plan"
  direction="row"
  options={[
    { value: 'starter', label: 'Starter', description: 'For individuals' },
    { value: 'team', label: 'Team', description: 'For small teams' },
    { value: 'business', label: 'Business', description: 'For organizations' },
  ]}
  defaultChecked="team"
  onValueChange={(value) => console.log(value)}
/>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-radiocardgroup--docs Storybook}`,methods:[],displayName:`RadioCardGroup`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``},defaultChecked:{required:!1,tsType:{name:`string`},description:``},direction:{required:!1,tsType:{name:`union`,raw:`'row' | 'col'`,elements:[{name:`literal`,value:`'row'`},{name:`literal`,value:`'col'`}]},description:``},name:{required:!0,tsType:{name:`string`},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`Omit`,elements:[{name:`intersection`,raw:`Omit<CardProps, 'canHover' | 'isActive'> &
Pick<
  RadioProps,
  | 'name'
  | 'value'
  | 'checked'
  | 'onChange'
  | 'label'
  | 'disabled'
  | 'defaultChecked'
  | 'labelTextClassName'
  | 'description'
  | 'descriptionClassName'
> & {
  labelWrapperClassName?: string;
  theme?: Theme;
}`,elements:[{name:`Omit`,elements:[{name:`CardProps`},{name:`union`,raw:`'canHover' | 'isActive'`,elements:[{name:`literal`,value:`'canHover'`},{name:`literal`,value:`'isActive'`}]}],raw:`Omit<CardProps, 'canHover' | 'isActive'>`},{name:`Pick`,elements:[{name:`RadioProps`},{name:`union`,raw:`| 'name'
| 'value'
| 'checked'
| 'onChange'
| 'label'
| 'disabled'
| 'defaultChecked'
| 'labelTextClassName'
| 'description'
| 'descriptionClassName'`,elements:[{name:`literal`,value:`'name'`},{name:`literal`,value:`'value'`},{name:`literal`,value:`'checked'`},{name:`literal`,value:`'onChange'`},{name:`literal`,value:`'label'`},{name:`literal`,value:`'disabled'`},{name:`literal`,value:`'defaultChecked'`},{name:`literal`,value:`'labelTextClassName'`},{name:`literal`,value:`'description'`},{name:`literal`,value:`'descriptionClassName'`}]}],raw:`Pick<
  RadioProps,
  | 'name'
  | 'value'
  | 'checked'
  | 'onChange'
  | 'label'
  | 'disabled'
  | 'defaultChecked'
  | 'labelTextClassName'
  | 'description'
  | 'descriptionClassName'
>`},{name:`signature`,type:`object`,raw:`{
  labelWrapperClassName?: string;
  theme?: Theme;
}`,signature:{properties:[{key:`labelWrapperClassName`,value:{name:`string`,required:!1}},{key:`theme`,value:{name:`Theme`,required:!1}}]}}]},{name:`union`,raw:`'name' | 'checked' | 'defaultChecked'`,elements:[{name:`literal`,value:`'name'`},{name:`literal`,value:`'checked'`},{name:`literal`,value:`'defaultChecked'`}]}],raw:`Omit<RadioCardProps, 'name' | 'checked' | 'defaultChecked'>`}],raw:`Omit<RadioCardProps, 'name' | 'checked' | 'defaultChecked'>[]`},description:``},theme:{required:!1,tsType:{name:`Theme`},description:``},wrapperClassName:{required:!1,tsType:{name:`string`},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``}}}})))()}var y,b,x,S,C;function w(){return(w=e((()=>{u(),v(),s(),y=n(),b={title:`In Review/RadioCardGroup`,component:_},x=[{label:(0,y.jsx)(c,{variant:`subtitle3`,className:`text-zinc-700`,children:`Kubefirst template`}),value:`option-1`,description:(0,y.jsx)(c,{variant:`body2`,className:`text-zinc-700`,children:`Provision a new cluster from a Kubefirst defined template`}),wrapperClassName:`rounded-lg w-full`},{label:(0,y.jsx)(c,{variant:`subtitle3`,className:`text-zinc-700`,children:`Custom template`}),value:`option-2`,description:(0,y.jsx)(c,{variant:`body2`,className:`text-zinc-700`,children:`Provision a new cluster from a pre-defined custom template`}),wrapperClassName:`rounded-lg w-full`}],S={args:{defaultChecked:`option-1`,options:[{label:(0,y.jsx)(f,{}),value:`option-1`,wrapperClassName:`w-50`},{label:(0,y.jsx)(f,{}),value:`option-2`,wrapperClassName:`w-50`},{label:(0,y.jsx)(f,{}),value:`option-3`,wrapperClassName:`w-50`}]},render:e=>(0,y.jsxs)(`div`,{className:`w-[635px] flex flex-col gap-3`,children:[(0,y.jsx)(`h6`,{children:`Row`}),(0,y.jsx)(_,{...e,name:`radio-card-group-1`,direction:`row`}),(0,y.jsx)(`h6`,{className:`mt-5`,children:`Column`}),(0,y.jsx)(_,{...e,name:`radio-card-group-2`}),(0,y.jsx)(`h6`,{className:`mt-5`,children:`Column with description`}),(0,y.jsx)(_,{defaultChecked:`option-1`,options:x,wrapperClassName:`w-full`,name:`radio-card-group-3`})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: 'option-1',
    options: [{
      label: <CivoLogo />,
      value: 'option-1',
      wrapperClassName: 'w-50'
    }, {
      label: <CivoLogo />,
      value: 'option-2',
      wrapperClassName: 'w-50'
    }, {
      label: <CivoLogo />,
      value: 'option-3',
      wrapperClassName: 'w-50'
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
} satisfies Story`,...S.parameters?.docs?.source}}},C=[`RadioCardGroup`]})))()}w();export{S as RadioCardGroup,C as __namedExportsOrder,b as default};