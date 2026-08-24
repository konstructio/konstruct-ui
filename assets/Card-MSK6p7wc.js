import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{i as r,t as i}from"./utils-0TJZseot.js";import{n as a,t as o}from"./dist-qtULYLvt.js";var s,c;function l(){return(l=e((()=>{a(),s=o([`rounded-xl`,`border`,`border-gray-200`,`dark:border-metal-700`],{variants:{isActive:{true:`border-transparent`,false:``},canHover:{true:[`group`,`hover:border-transparent`],false:``}}}),c=o([`border`,`border-4`,`p-3`,`text-card-foreground`,`rounded-xl`],{variants:{isActive:{true:[`border-aurora-500`,`shadow`],false:`border-transparent`},canHover:{true:[`cursor-pointer`,`border-transparent`,`group-hover:border-aurora-500`],false:``}},compoundVariants:[{canHover:void 0,isActive:void 0,class:`border-transparent`}]})})))()}var u,d,f;function p(){return(p=e((()=>{u=t(),r(),l(),d=n(),f=(0,u.forwardRef)(({className:e,component:t=`div`,theme:n,isActive:r,canHover:a,wrapperClassName:o,...l},u)=>{let f=t;return(0,d.jsx)(`div`,{"data-theme":n,className:i(s({canHover:a,className:o,isActive:r})),children:(0,d.jsx)(f,{ref:u,className:i(c({className:e,isActive:r,canHover:a})),...l})})}),f.displayName=`Card`,f.__docgenInfo={description:`A container card component with optional hover and active states.

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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-card--docs Storybook}`,methods:[],displayName:`Card`,props:{canHover:{required:!1,tsType:{name:`boolean`},description:`Enable hover effect`},component:{required:!1,tsType:{name:`union`,raw:`'div' | 'article' | 'section' | 'aside' | 'li'`,elements:[{name:`literal`,value:`'div'`},{name:`literal`,value:`'article'`},{name:`literal`,value:`'section'`},{name:`literal`,value:`'aside'`},{name:`literal`,value:`'li'`}]},description:``,defaultValue:{value:`'div'`,computed:!1}},isActive:{required:!1,tsType:{name:`boolean`},description:`Show active/selected state`},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override for this component`},wrapperClassName:{required:!1,tsType:{name:`string`},description:`CSS classes for the outer wrapper`}},composes:[`HTMLAttributes`,`VariantProps`,`PropsWithChildren`]}})))()}export{p as n,f as t};