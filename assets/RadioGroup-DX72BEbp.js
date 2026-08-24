import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{i as r,t as i}from"./utils-0TJZseot.js";import{n as a,t as o}from"./dist-qtULYLvt.js";import{i as s,t as c}from"./dist-CdaDnY7t.js";import{n as l,t as u}from"./Radio-DhVgL7nP.js";var d;function f(){return(f=e((()=>{a(),d=o([`flex`],{variants:{direction:{row:[`flex-row`,`gap-8`],col:[`flex-col`,`gap-4`]}},defaultVariants:{direction:`col`}})})))()}var p,m,h;function g(){return(g=e((()=>{s(),p=t(),r(),l(),f(),m=n(),h=({asChild:e,className:t,defaultChecked:n,direction:r,name:a,options:o,theme:s,value:l,wrapperClassName:f,onValueChange:h})=>{let g=e?c:`div`,_=l!==void 0,[v,y]=(0,p.useState)(()=>n),b=_?l:v,x=e=>{_||y(e),h?.(e)};return(0,m.jsx)(g,{className:i(d({className:f,direction:r})),"data-theme":s,children:o.map(({value:e,...n})=>(0,m.jsx)(u,{value:e,name:a,className:i(t),checked:b===e,onChange:()=>x(e),...n},e))})},h.__docgenInfo={description:`A group of radio buttons with shared state management.

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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-radiogroup--docs Storybook}`,methods:[],displayName:`RadioGroup`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:`Merge props onto child element`},className:{required:!1,tsType:{name:`RadioProps['className']`,raw:`RadioProps['className']`},description:`CSS classes for each radio option`},defaultChecked:{required:!1,tsType:{name:`string`},description:`Initially selected value (uncontrolled mode)`},direction:{required:!1,tsType:{name:`union`,raw:`'row' | 'col'`,elements:[{name:`literal`,value:`'row'`},{name:`literal`,value:`'col'`}]},description:`Layout direction (row or col)`},label:{required:!1,tsType:{name:`union`,raw:`string | ReactNode`,elements:[{name:`string`},{name:`ReactNode`}]},description:`Label for the group`},name:{required:!0,tsType:{name:`string`},description:`Form field name (shared by all radios)`},options:{required:!0,tsType:{name:`Array`,elements:[{name:`Omit`,elements:[{name:`RadioProps`},{name:`union`,raw:`'name' | 'checked' | 'defaultChecked'`,elements:[{name:`literal`,value:`'name'`},{name:`literal`,value:`'checked'`},{name:`literal`,value:`'defaultChecked'`}]}],raw:`Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>`}],raw:`Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>[]`},description:`Array of radio options`},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override for this component`},value:{required:!1,tsType:{name:`string`},description:`Currently selected value (controlled mode)`},wrapperClassName:{required:!1,tsType:{name:`string`},description:`CSS classes for the wrapper`},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Callback when selection changes`}}}})))()}export{g as n,h as t};