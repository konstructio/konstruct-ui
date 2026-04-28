import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{o as n,t as r}from"./iframe-C2WQCK3e.js";import{a as i,n as a,r as o,t as s}from"./dist-C7OvCdCY.js";var c,l,u=e((()=>{a(),c=s([`rounded-xl`,`border`,`border-gray-200`,`dark:border-metal-700`],{variants:{isActive:{true:`border-transparent`,false:``},canHover:{true:[`group`,`hover:border-transparent`],false:``}}}),l=s([`border`,`border-4`,`p-3`,`text-card-foreground`,`rounded-xl`],{variants:{isActive:{true:[`border-aurora-500`,`shadow`],false:`border-transparent`},canHover:{true:[`cursor-pointer`,`border-transparent`,`group-hover:border-aurora-500`],false:``}},compoundVariants:[{canHover:void 0,isActive:void 0,class:`border-transparent`}]})})),d,f,p,m=e((()=>{d=t(n(),1),i(),u(),f=r(),p=(0,d.forwardRef)(({className:e,theme:t,isActive:n,canHover:r,wrapperClassName:i,...a},s)=>(0,f.jsx)(`div`,{"data-theme":t,className:o(c({canHover:r,className:i,isActive:n})),children:(0,f.jsx)(`div`,{ref:s,className:o(l({className:e,isActive:n,canHover:r})),...a})})),p.displayName=`Card`,p.__docgenInfo={description:`A container card component with optional hover and active states.

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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-card--docs Storybook}`,methods:[],displayName:`Card`,props:{canHover:{required:!1,tsType:{name:`boolean`},description:`Enable hover effect`},isActive:{required:!1,tsType:{name:`boolean`},description:`Show active/selected state`},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override for this component`},wrapperClassName:{required:!1,tsType:{name:`string`},description:`CSS classes for the outer wrapper`}},composes:[`HTMLAttributes`,`VariantProps`,`PropsWithChildren`]}}));export{m as n,p as t};