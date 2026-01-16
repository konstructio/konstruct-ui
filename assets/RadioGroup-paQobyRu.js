import{r as o,j as r}from"./iframe-BP6xk-sd.js";import{S as k}from"./index-0zgbZz4U.js";import{a as v,c as t}from"./index-B-7A89sm.js";import{R as w}from"./Radio-BgeGChHj.js";const b=v(["flex"],{variants:{direction:{row:["flex-row","gap-8"],col:["flex-col","gap-4"]}},defaultVariants:{direction:"col"}}),C=({asChild:s,className:i,defaultChecked:n,direction:l,name:d,options:c,theme:m,wrapperClassName:p,onValueChange:a})=>{const u=s?k:"div",[h,f]=o.useState(()=>n),y=o.useCallback(e=>{f(e),a?.(e)},[a]);return r.jsx(u,{className:t(b({className:p,direction:l})),"data-theme":m,children:c.map(({value:e,...g})=>r.jsx(w,{value:e,name:d,className:t(i),checked:h===e,onChange:()=>y(e),...g},e))})};C.__docgenInfo={description:`A group of radio buttons with shared state management.

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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-radiogroup--docs Storybook}`,methods:[],displayName:"RadioGroup",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Merge props onto child element"},className:{required:!1,tsType:{name:"RadioProps['className']",raw:"RadioProps['className']"},description:"CSS classes for each radio option"},defaultChecked:{required:!1,tsType:{name:"string"},description:"Initially selected value"},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'col'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'col'"}]},description:"Layout direction (row or col)"},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Label for the group"},name:{required:!0,tsType:{name:"string"},description:"Form field name (shared by all radios)"},options:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"RadioProps"},{name:"union",raw:"'name' | 'checked' | 'defaultChecked'",elements:[{name:"literal",value:"'name'"},{name:"literal",value:"'checked'"},{name:"literal",value:"'defaultChecked'"}]}],raw:"Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>"}],raw:"Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>[]"},description:"Array of radio options"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the wrapper"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when selection changes"}}};export{C as R};
