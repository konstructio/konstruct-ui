import{r as b,j as v}from"./iframe-DLrn8Gk9.js";import{c as C}from"./compiler-runtime-DxXHijtq.js";import{a as u,c as h}from"./index-CwGTy2we.js";const x=u(["rounded-xl","border","border-gray-200","dark:border-metal-700"],{variants:{isActive:{true:"border-transparent",false:""},canHover:{true:["group","hover:border-transparent"],false:""}}}),A=u(["border","border-4","p-3","text-card-foreground","rounded-xl"],{variants:{isActive:{true:["border-aurora-500","shadow"],false:"border-transparent"},canHover:{true:["cursor-pointer","border-transparent","group-hover:border-aurora-500"],false:""}},compoundVariants:[{canHover:void 0,isActive:void 0,class:"border-transparent"}]}),f=b.forwardRef((p,m)=>{const e=C.c(23);let r,t,a,s,o,n;e[0]!==p?({className:t,theme:o,isActive:a,canHover:r,wrapperClassName:n,...s}=p,e[0]=p,e[1]=r,e[2]=t,e[3]=a,e[4]=s,e[5]=o,e[6]=n):(r=e[1],t=e[2],a=e[3],s=e[4],o=e[5],n=e[6]);let i;e[7]!==r||e[8]!==a||e[9]!==n?(i=h(x({canHover:r,className:n,isActive:a})),e[7]=r,e[8]=a,e[9]=n,e[10]=i):i=e[10];let d;e[11]!==r||e[12]!==t||e[13]!==a?(d=h(A({className:t,isActive:a,canHover:r})),e[11]=r,e[12]=t,e[13]=a,e[14]=d):d=e[14];let c;e[15]!==s||e[16]!==m||e[17]!==d?(c=v.jsx("div",{ref:m,className:d,...s}),e[15]=s,e[16]=m,e[17]=d,e[18]=c):c=e[18];let l;return e[19]!==i||e[20]!==c||e[21]!==o?(l=v.jsx("div",{"data-theme":o,className:i,children:c}),e[19]=i,e[20]=c,e[21]=o,e[22]=l):l=e[22],l});f.displayName="Card";f.__docgenInfo={description:`A container card component with optional hover and active states.

@example
\`\`\`tsx
// Basic card
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>

// Hoverable card
<Card canHover onClick={handleClick}>
  Hover to see effect
</Card>

// Active/selected card
<Card isActive>
  This card is selected
</Card>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-card--docs Storybook}`,methods:[],displayName:"Card",props:{canHover:{required:!1,tsType:{name:"boolean"},description:"Enable hover effect"},isActive:{required:!1,tsType:{name:"boolean"},description:"Show active/selected state"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the outer wrapper"}},composes:["HTMLAttributes","VariantProps","PropsWithChildren"]};export{f as C};
