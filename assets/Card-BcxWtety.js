import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{r,t as i}from"./utils-BC5-UmL9.js";import{n as a,t as o}from"./dist-DJsSzQxH.js";var s,c;function l(){return(l=e((()=>{a(),s=o([`rounded-xl`,`border`,`border-gray-200`,`dark:border-metal-700`],{variants:{isActive:{true:`border-transparent`,false:``},canHover:{true:[`group`,`hover:border-transparent`],false:``}}}),c=o([`border`,`border-4`,`p-3`,`text-card-foreground`,`rounded-xl`],{variants:{isActive:{true:[`border-aurora-500`,`shadow`],false:`border-transparent`},canHover:{true:[`cursor-pointer`,`border-transparent`,`group-hover:border-aurora-500`],false:``}},compoundVariants:[{canHover:void 0,isActive:void 0,class:`border-transparent`}]})})))()}var u,d,f;function p(){return(p=e((()=>{u=t(),r(),l(),d=n(),f=(0,u.forwardRef)(({className:e,theme:t,isActive:n,canHover:r,wrapperClassName:a,...o},l)=>(0,d.jsx)(`div`,{"data-theme":t,className:i(s({canHover:r,className:a,isActive:n})),children:(0,d.jsx)(`div`,{ref:l,className:i(c({className:e,isActive:n,canHover:r})),...o})})),f.displayName=`Card`,f.__docgenInfo={description:`A container card component with optional hover and active states.

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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-card--docs Storybook}`,methods:[],displayName:`Card`,props:{canHover:{required:!1,tsType:{name:`boolean`},description:`Enable hover effect`},isActive:{required:!1,tsType:{name:`boolean`},description:`Show active/selected state`},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override for this component`},wrapperClassName:{required:!1,tsType:{name:`string`},description:`CSS classes for the outer wrapper`}},composes:[`HTMLAttributes`,`VariantProps`,`PropsWithChildren`]}})))()}export{p as n,f as t};