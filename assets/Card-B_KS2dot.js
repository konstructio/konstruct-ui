import{r as l,j as a}from"./iframe-BXO_EhpM.js";import{a as t,c as o}from"./index-BIgQ6y5l.js";const m=t(["rounded-xl","border","border-gray-200","dark:border-metal-700"],{variants:{isActive:{true:"border-transparent",false:""},canHover:{true:["group","hover:border-transparent"],false:""}}}),h=t(["border","border-4","p-3","text-card-foreground","rounded-xl"],{variants:{isActive:{true:["border-aurora-500","shadow"],false:"border-transparent"},canHover:{true:["cursor-pointer","border-transparent","group-hover:border-aurora-500"],false:""}},compoundVariants:[{canHover:void 0,isActive:void 0,class:"border-transparent"}]}),s=l.forwardRef(({className:n,theme:d,isActive:e,canHover:r,wrapperClassName:i,...c},p)=>a.jsx("div",{"data-theme":d,className:o(m({canHover:r,className:i,isActive:e})),children:a.jsx("div",{ref:p,className:o(h({className:n,isActive:e,canHover:r})),...c})}));s.displayName="Card";s.__docgenInfo={description:`A container card component with optional hover and active states.

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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-card--docs Storybook}`,methods:[],displayName:"Card",props:{canHover:{required:!1,tsType:{name:"boolean"},description:"Enable hover effect"},isActive:{required:!1,tsType:{name:"boolean"},description:"Show active/selected state"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the outer wrapper"}},composes:["HTMLAttributes","VariantProps","PropsWithChildren"]};export{s as C};
