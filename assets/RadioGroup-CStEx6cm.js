import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{o as n,t as r}from"./iframe-Cmi29qjC.js";import{a as i,n as a,r as o,t as s}from"./dist-D8TPiX_U.js";import{r as c,t as l}from"./dist-pBH6xNED.js";import{n as u,t as d}from"./Radio-CI5AZlnV.js";var f,p=e((()=>{a(),f=s([`flex`],{variants:{direction:{row:[`flex-row`,`gap-8`],col:[`flex-col`,`gap-4`]}},defaultVariants:{direction:`col`}})})),m,h,g,_=e((()=>{c(),m=t(n(),1),i(),u(),p(),h=r(),g=({asChild:e,className:t,defaultChecked:n,direction:r,name:i,options:a,theme:s,value:c,wrapperClassName:u,onValueChange:p})=>{let g=e?l:`div`,_=c!==void 0,[v,y]=(0,m.useState)(()=>n),b=_?c:v,x=(0,m.useCallback)(e=>{_||y(e),p?.(e)},[_,p]);return(0,h.jsx)(g,{className:o(f({className:u,direction:r})),"data-theme":s,children:a.map(({value:e,...n})=>(0,h.jsx)(d,{value:e,name:i,className:o(t),checked:b===e,onChange:()=>x(e),...n},e))})},g.__docgenInfo={description:`A group of radio buttons with shared state management.

@example
\`\`\`tsx
// Vertical layout (default)
<RadioGroup
  name="subscription"
  options={[
    { value: 'monthly', label: 'Monthly', description: '$10/mo' },
    { value: 'yearly', label: 'Yearly', description: '$100/yr' },
  ]}
  defaultChecked="monthly"
  onValueChange={(value) => setSubscription(value)}
/>

// Horizontal layout
<RadioGroup
  name="size"
  direction="row"
  options={[
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
  ]}
  onValueChange={setSize}
/>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-radiogroup--docs Storybook}`,methods:[],displayName:`RadioGroup`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:`Merge props onto child element`},className:{required:!1,tsType:{name:`RadioProps['className']`,raw:`RadioProps['className']`},description:`CSS classes for each radio option`},defaultChecked:{required:!1,tsType:{name:`string`},description:`Initially selected value (uncontrolled mode)`},direction:{required:!1,tsType:{name:`union`,raw:`'row' | 'col'`,elements:[{name:`literal`,value:`'row'`},{name:`literal`,value:`'col'`}]},description:`Layout direction (row or col)`},label:{required:!1,tsType:{name:`union`,raw:`string | ReactNode`,elements:[{name:`string`},{name:`ReactNode`}]},description:`Label for the group`},name:{required:!0,tsType:{name:`string`},description:`Form field name (shared by all radios)`},options:{required:!0,tsType:{name:`Array`,elements:[{name:`Omit`,elements:[{name:`RadioProps`},{name:`union`,raw:`'name' | 'checked' | 'defaultChecked'`,elements:[{name:`literal`,value:`'name'`},{name:`literal`,value:`'checked'`},{name:`literal`,value:`'defaultChecked'`}]}],raw:`Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>`}],raw:`Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>[]`},description:`Array of radio options`},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override for this component`},value:{required:!1,tsType:{name:`string`},description:`Currently selected value (controlled mode)`},wrapperClassName:{required:!1,tsType:{name:`string`},description:`CSS classes for the wrapper`},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Callback when selection changes`}}}}));export{_ as n,g as t};