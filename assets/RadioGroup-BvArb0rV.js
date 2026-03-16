import{r as V,j as w}from"./iframe-DLrn8Gk9.js";import{c as G}from"./compiler-runtime-DxXHijtq.js";import{S as P}from"./index-y1nNICkM.js";import{a as j,c as R}from"./index-CwGTy2we.js";import{R as z}from"./Radio-Bpj8wjdA.js";const A=j(["flex"],{variants:{direction:{row:["flex-row","gap-8"],col:["flex-col","gap-4"]}},defaultVariants:{direction:"col"}}),E=b=>{const e=G.c(24),{asChild:S,className:r,defaultChecked:p,direction:h,name:s,options:f,theme:y,value:k,wrapperClassName:g,onValueChange:v}=b,C=S?P:"div",i=k!==void 0;let d;e[0]!==p?(d=()=>p,e[0]=p,e[1]=d):d=e[1];const[T,x]=V.useState(d),l=i?k:T;let c;e[2]!==i||e[3]!==v?(c=a=>{i||x(a),v?.(a)},e[2]=i,e[3]=v,e[4]=c):c=e[4];const n=c;let t;e[5]!==h||e[6]!==g?(t=R(A({className:g,direction:h})),e[5]=h,e[6]=g,e[7]=t):t=e[7];let o;if(e[8]!==r||e[9]!==n||e[10]!==s||e[11]!==f||e[12]!==l){let a;e[14]!==r||e[15]!==n||e[16]!==s||e[17]!==l?(a=N=>{const{value:u,...q}=N;return w.jsx(z,{value:u,name:s,className:R(r),checked:l===u,onChange:()=>n(u),...q},u)},e[14]=r,e[15]=n,e[16]=s,e[17]=l,e[18]=a):a=e[18],o=f.map(a),e[8]=r,e[9]=n,e[10]=s,e[11]=f,e[12]=l,e[13]=o}else o=e[13];let m;return e[19]!==C||e[20]!==t||e[21]!==o||e[22]!==y?(m=w.jsx(C,{className:t,"data-theme":y,children:o}),e[19]=C,e[20]=t,e[21]=o,e[22]=y,e[23]=m):m=e[23],m};E.__docgenInfo={description:`A group of radio buttons with shared state management.

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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-radiogroup--docs Storybook}`,methods:[],displayName:"RadioGroup",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Merge props onto child element"},className:{required:!1,tsType:{name:"RadioProps['className']",raw:"RadioProps['className']"},description:"CSS classes for each radio option"},defaultChecked:{required:!1,tsType:{name:"string"},description:"Initially selected value (uncontrolled mode)"},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'col'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'col'"}]},description:"Layout direction (row or col)"},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Label for the group"},name:{required:!0,tsType:{name:"string"},description:"Form field name (shared by all radios)"},options:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"RadioProps"},{name:"union",raw:"'name' | 'checked' | 'defaultChecked'",elements:[{name:"literal",value:"'name'"},{name:"literal",value:"'checked'"},{name:"literal",value:"'defaultChecked'"}]}],raw:"Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>"}],raw:"Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>[]"},description:"Array of radio options"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"},value:{required:!1,tsType:{name:"string"},description:"Currently selected value (controlled mode)"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the wrapper"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when selection changes"}}};export{E as R};
