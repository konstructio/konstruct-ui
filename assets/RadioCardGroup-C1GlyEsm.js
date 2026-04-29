import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{o as n,t as r}from"./iframe-Cx3vh90H.js";import{a as i,n as a,r as o,t as s}from"./dist-C7OvCdCY.js";import{n as c,t as l}from"./RadioCard-DwSNFX2w.js";var u,d=e((()=>{a(),u=s([`flex`],{variants:{direction:{row:[`flex-row`,`gap-8`],col:[`flex-col`,`gap-4`]}},defaultVariants:{direction:`col`}})})),f,p,m,h=e((()=>{f=t(n(),1),i(),c(),d(),p=r(),m=({className:e,defaultChecked:t,direction:n,name:r,options:i,theme:a,wrapperClassName:s,onValueChange:c})=>{let[d,m]=(0,f.useState)(t),h=(0,f.useCallback)(e=>{m(e),c?.(e)},[c]);return(0,p.jsx)(`div`,{className:o(u({className:s,direction:n})),"data-theme":a,children:i.map(({value:t,...n})=>(0,p.jsx)(l,{value:t,name:r,className:o(e),checked:d===t,onChange:()=>h(t),...n},t))})},m.__docgenInfo={description:`A group of card-style radio buttons with shared state management.

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
}`,signature:{properties:[{key:`labelWrapperClassName`,value:{name:`string`,required:!1}},{key:`theme`,value:{name:`Theme`,required:!1}}]}}]},{name:`union`,raw:`'name' | 'checked' | 'defaultChecked'`,elements:[{name:`literal`,value:`'name'`},{name:`literal`,value:`'checked'`},{name:`literal`,value:`'defaultChecked'`}]}],raw:`Omit<RadioCardProps, 'name' | 'checked' | 'defaultChecked'>`}],raw:`Omit<RadioCardProps, 'name' | 'checked' | 'defaultChecked'>[]`},description:``},theme:{required:!1,tsType:{name:`Theme`},description:``},wrapperClassName:{required:!1,tsType:{name:`string`},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``}}}}));export{h as n,m as t};