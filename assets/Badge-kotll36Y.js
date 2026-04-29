import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{o as n,t as r}from"./iframe-Cx3vh90H.js";import{R as i,t as a}from"./components-CZdAfRmJ.js";import{a as o,n as s,r as c,t as l}from"./dist-C7OvCdCY.js";import{r as u,t as d}from"./dist-D2z1JHdN.js";import{n as f,t as p}from"./lucide-react-CXSoYJMC.js";var m,h,g=e((()=>{s(),m=l([`flex`,`items-center`,`justify-center`,`gap-2`,`rounded`,`px-2`,`py-1`,`w-max`,`shadow-xs`,`data-[state=hidden]:animate-out`,`data-[state=hidden]:fade-out-0`,`data-[state=hidden]:zoom-out-95`],{variants:{variant:{default:[`bg-gray-100`,`text-gray-800`,`dark:text-gray-300`,`dark:bg-gray-300/15`],danger:[`bg-red-100`,`text-red-800`,`dark:text-red-400`,`dark:bg-red-400/10`],info:[`bg-blue-100`,`text-blue-800`,`dark:text-sky-400`,`dark:bg-sky-400/10`],success:[`bg-green-100`,`text-green-800`,`dark:text-green-400`,`dark:bg-green-400/10`],warning:[`bg-yellow-100`,`text-yellow-800`,`dark:text-amber-300`,`dark:bg-amber-300/10`],violet:[`bg-violet-50`,`text-violet-800`,`dark:text-purple-400`,`dark:bg-purple-400/8`],orange:[`bg-orange-50`,`text-orange-800`,`dark:text-orange-400`,`dark:bg-orange-400/10`]},size:{default:`text-xs leading-4`}},defaultVariants:{variant:`default`,size:`default`}}),h=l([`rounded-full`,`inline-flex`,`items-center`,`justify-center`,`focus:outline-none`,`text-inherit`,`cursor-pointer`,`text-gray-700`],{variants:{variant:{default:[`text-gray-700`,`dark:text-gray-300`],danger:[`text-red-700`,`dark:text-red-400`],info:[`text-blue-700`,`dark:text-sky-400`],success:[`text-green-700`,`dark:text-green-400`],warning:[`text-yellow-700`,`dark:text-amber-300`],violet:[`text-violet-700`,`dark:text-purple-400`],orange:[`text-orange-800`,`dark:text-orange-400`]},size:{default:[`h-3.5`,`w-3.5`]}},defaultVariants:{variant:`default`,size:`default`}})})),_,v,y,b=e((()=>{p(),_=t(n(),1),a(),o(),g(),u(),v=r(),y=({className:e,dismissible:t=!1,isSelectable:n=!0,label:r,leftIcon:a,loading:o=!1,rightIcon:s,size:l,variant:u,onClick:p,onDismiss:g})=>{let y=(0,_.useRef)(null),[b,x]=(0,_.useState)(`visible`),S=(0,_.useCallback)(e=>{e.stopPropagation(),g?.(),x(`hidden`)},[g]);return(0,_.useEffect)(()=>{let e=new AbortController;return y.current?.addEventListener(`animationend`,()=>{y.current?.style.setProperty(`display`,`none`),y.current?.remove()},{signal:e.signal}),()=>e.abort()},[]),(0,v.jsxs)(`span`,{ref:y,className:c(m({variant:u,size:l,className:e}),{"select-none":!n,"cursor-pointer":p}),role:p?`button`:void 0,onClick:p,tabIndex:p?0:void 0,"aria-label":p?`${r} badge`:void 0,"aria-busy":o,"aria-live":`polite`,"data-state":b,children:[o&&(0,v.jsx)(i,{size:12,className:`animate-spin animate-duration-time-2`}),a?(0,v.jsx)(d,{className:`h-3 w-3`,children:a}):null,r,t?(0,v.jsxs)(`button`,{type:`button`,className:c(h({size:l,variant:u})),onClick:S,"aria-label":`Dismiss`,children:[(0,v.jsx)(f,{className:`h-full w-full`}),(0,v.jsx)(`span`,{className:`sr-only`,children:`Dismiss`})]}):s?(0,v.jsx)(d,{className:`h-3 w-3`,children:s}):null]})},y.__docgenInfo={description:`A badge/tag component for status indicators and labels.
Supports multiple variants, icons, loading state, and dismissible mode.

@example
\`\`\`tsx
// Basic badge
<Badge label="Active" variant="success" />

// Badge with icon
<Badge label="Settings" leftIcon={<SettingsIcon />} />

// Dismissible badge
<Badge
  label="Tag"
  dismissible
  onDismiss={() => removeTag()}
/>

// Clickable badge
<Badge
  label="Filter"
  onClick={() => applyFilter()}
/>

// Loading badge
<Badge label="Processing" loading />
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-badge--docs Storybook}`,methods:[],displayName:`Badge`,props:{className:{required:!1,tsType:{name:`string`},description:`Additional CSS classes`},dismissible:{required:!1,tsType:{name:`literal`,value:`true`},description:`Show dismiss button`,defaultValue:{value:`false`,computed:!1}},isSelectable:{required:!1,tsType:{name:`boolean`},description:`Allow text selection (default: true)`,defaultValue:{value:`true`,computed:!1}},label:{required:!0,tsType:{name:`string`},description:`Badge text content`},leftIcon:{required:!1,tsType:{name:`ReactNode`},description:`Icon displayed on the left`},loading:{required:!1,tsType:{name:`boolean`},description:`Show loading spinner`,defaultValue:{value:`false`,computed:!1}},rightIcon:{required:!1,tsType:{name:`ReactNode`},description:`Icon displayed on the right (when not dismissible)`},onClick:{required:!1,tsType:{name:`VoidFunction`},description:`Click handler (makes badge interactive)`},onDismiss:{required:!1,tsType:{name:`VoidFunction`},description:`Callback when dismiss button clicked`}}}}));export{b as n,y as t};