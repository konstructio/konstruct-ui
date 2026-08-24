import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Loader-yZhDQ_yw.js";import{i as a,t as o}from"./utils-0TJZseot.js";import{n as s,t as c}from"./dist-qtULYLvt.js";import{i as l,t as u}from"./dist-CdaDnY7t.js";import{n as d,t as f}from"./x-i7QAllnh.js";var p,m;function h(){return(h=e((()=>{s(),p=c([`flex`,`items-center`,`justify-center`,`gap-2`,`rounded`,`px-2`,`py-1`,`w-max`,`shadow-xs`,`data-[state=hidden]:animate-out`,`data-[state=hidden]:fade-out-0`,`data-[state=hidden]:zoom-out-95`],{variants:{variant:{default:[`bg-gray-100`,`text-gray-800`,`dark:text-gray-300`,`dark:bg-gray-300/15`],danger:[`bg-red-100`,`text-red-800`,`dark:text-red-400`,`dark:bg-red-400/10`],info:[`bg-blue-100`,`text-blue-800`,`dark:text-sky-400`,`dark:bg-sky-400/10`],success:[`bg-green-100`,`text-green-800`,`dark:text-green-400`,`dark:bg-green-400/10`],warning:[`bg-yellow-100`,`text-yellow-800`,`dark:text-amber-300`,`dark:bg-amber-300/10`],violet:[`bg-violet-50`,`text-violet-800`,`dark:text-purple-400`,`dark:bg-purple-400/8`],orange:[`bg-orange-50`,`text-orange-800`,`dark:text-orange-400`,`dark:bg-orange-400/10`]},size:{default:`text-xs leading-4`}},defaultVariants:{variant:`default`,size:`default`}}),m=c([`rounded-full`,`inline-flex`,`items-center`,`justify-center`,`focus:outline-none`,`text-inherit`,`cursor-pointer`,`text-gray-700`],{variants:{variant:{default:[`text-gray-700`,`dark:text-gray-300`],danger:[`text-red-700`,`dark:text-red-400`],info:[`text-blue-700`,`dark:text-sky-400`],success:[`text-green-700`,`dark:text-green-400`],warning:[`text-yellow-700`,`dark:text-amber-300`],violet:[`text-violet-700`,`dark:text-purple-400`],orange:[`text-orange-800`,`dark:text-orange-400`]},size:{default:[`h-3.5`,`w-3.5`]}},defaultVariants:{variant:`default`,size:`default`}})})))()}var g,_,v;function y(){return(y=e((()=>{d(),g=t(),r(),a(),h(),l(),_=n(),v=({className:e,dismissible:t=!1,isSelectable:n=!0,label:r,leftIcon:a,loading:s=!1,rightIcon:c,size:l,variant:d,onClick:h,onDismiss:v})=>{let y=(0,g.useRef)(null),[b,x]=(0,g.useState)(`visible`);return(0,g.useEffect)(()=>{if(b!==`hidden`)return;let e=new AbortController,t=y.current;return t?.addEventListener(`animationend`,e=>{e.target===t&&(t.style.setProperty(`display`,`none`),t.remove())},{signal:e.signal}),()=>e.abort()},[b]),(0,_.jsxs)(`span`,{ref:y,className:o(p({variant:d,size:l,className:e}),{"select-none":!n,"cursor-pointer":h}),role:h?`button`:void 0,onClick:h,tabIndex:h?0:void 0,"aria-label":h?`${r} badge`:void 0,"aria-busy":s,"aria-live":`polite`,"data-state":b,children:[s&&(0,_.jsx)(i,{size:12,className:`animate-spin animate-duration-time-2`}),a?(0,_.jsx)(u,{className:`h-3 w-3`,children:a}):null,r,t?(0,_.jsxs)(`button`,{type:`button`,className:o(m({size:l,variant:d})),onClick:e=>{e.stopPropagation(),v?.(),x(`hidden`)},"aria-label":`Dismiss`,children:[(0,_.jsx)(f,{className:`h-full w-full`}),(0,_.jsx)(`span`,{className:`sr-only`,children:`Dismiss`})]}):c?(0,_.jsx)(u,{className:`h-3 w-3`,children:c}):null]})},v.__docgenInfo={description:`A badge/tag component for status indicators and labels.
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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-badge--docs Storybook}`,methods:[],displayName:`Badge`,props:{className:{required:!1,tsType:{name:`string`},description:`Additional CSS classes`},dismissible:{required:!1,tsType:{name:`literal`,value:`true`},description:`Show dismiss button`,defaultValue:{value:`false`,computed:!1}},isSelectable:{required:!1,tsType:{name:`boolean`},description:`Allow text selection (default: true)`,defaultValue:{value:`true`,computed:!1}},label:{required:!0,tsType:{name:`string`},description:`Badge text content`},leftIcon:{required:!1,tsType:{name:`ReactNode`},description:`Icon displayed on the left`},loading:{required:!1,tsType:{name:`boolean`},description:`Show loading spinner`,defaultValue:{value:`false`,computed:!1}},rightIcon:{required:!1,tsType:{name:`ReactNode`},description:`Icon displayed on the right (when not dismissible)`},onClick:{required:!1,tsType:{name:`VoidFunction`},description:`Click handler (makes badge interactive)`},onDismiss:{required:!1,tsType:{name:`VoidFunction`},description:`Callback when dismiss button clicked`}}}})))()}export{y as n,v as t};