import{r,j as n}from"./iframe-CrqmAXTA.js";import{S as b}from"./index-0erROcmX.js";import{a as w,c as s}from"./index-B-7A89sm.js";import{R}from"./Radio-CcuTWOyG.js";const S=w(["flex"],{variants:{direction:{row:["flex-row","gap-8"],col:["flex-col","gap-4"]}},defaultVariants:{direction:"col"}}),T=({asChild:i,className:l,defaultChecked:d,direction:c,name:m,options:p,theme:u,value:o,wrapperClassName:h,onValueChange:t})=>{const f=i?b:"div",a=o!==void 0,[y,g]=r.useState(()=>d),v=a?o:y,C=r.useCallback(e=>{a||g(e),t?.(e)},[a,t]);return n.jsx(f,{className:s(S({className:h,direction:c})),"data-theme":u,children:p.map(({value:e,...k})=>n.jsx(R,{value:e,name:m,className:s(l),checked:v===e,onChange:()=>C(e),...k},e))})};T.__docgenInfo={description:`A group of radio buttons with shared state management.

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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-radiogroup--docs Storybook}`,methods:[],displayName:"RadioGroup",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Merge props onto child element"},className:{required:!1,tsType:{name:"RadioProps['className']",raw:"RadioProps['className']"},description:"CSS classes for each radio option"},defaultChecked:{required:!1,tsType:{name:"string"},description:"Initially selected value (uncontrolled mode)"},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'col'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'col'"}]},description:"Layout direction (row or col)"},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Label for the group"},name:{required:!0,tsType:{name:"string"},description:"Form field name (shared by all radios)"},options:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"RadioProps"},{name:"union",raw:"'name' | 'checked' | 'defaultChecked'",elements:[{name:"literal",value:"'name'"},{name:"literal",value:"'checked'"},{name:"literal",value:"'defaultChecked'"}]}],raw:"Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>"}],raw:"Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>[]"},description:"Array of radio options"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"},value:{required:!1,tsType:{name:"string"},description:"Currently selected value (controlled mode)"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the wrapper"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when selection changes"}}};export{T as R};
