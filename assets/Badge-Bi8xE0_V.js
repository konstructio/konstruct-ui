import{r as n,j as e}from"./iframe-BXO_EhpM.js";import{L as v}from"./Loader-Bu_oHQo7.js";import{a as m,c as g}from"./index-BIgQ6y5l.js";import{S as p}from"./index-CxlmtjIK.js";import{X as w}from"./x-ht38r2Si.js";const S=m(["flex","items-center","justify-center","gap-2","rounded","px-2","py-1","w-max","shadow-xs","data-[state=hidden]:animate-out","data-[state=hidden]:fade-out-0","data-[state=hidden]:zoom-out-95"],{variants:{variant:{default:["bg-gray-100","text-gray-800","dark:text-gray-300","dark:bg-gray-300/15"],danger:["bg-red-100","text-red-800","dark:text-red-400","dark:bg-red-400/10"],info:["bg-blue-100","text-blue-800","dark:text-sky-400","dark:bg-sky-400/10"],success:["bg-green-100","text-green-800","dark:text-green-400","dark:bg-green-400/10"],warning:["bg-yellow-100","text-yellow-800","dark:text-amber-300","dark:bg-amber-300/10"],violet:["bg-violet-50","text-violet-800","dark:text-purple-400","dark:bg-purple-400/8"],orange:["bg-orange-50","text-orange-800","dark:text-orange-400","dark:bg-orange-400/10"]},size:{default:"text-xs leading-4"}},defaultVariants:{variant:"default",size:"default"}}),j=m(["rounded-full","inline-flex","items-center","justify-center","focus:outline-none","text-inherit","cursor-pointer","text-gray-700"],{variants:{variant:{default:["text-gray-700","dark:text-gray-300"],danger:["text-red-700","dark:text-red-400"],info:["text-blue-700","dark:text-sky-400"],success:["text-green-700","dark:text-green-400"],warning:["text-yellow-700","dark:text-amber-300"],violet:["text-violet-700","dark:text-purple-400"],orange:["text-orange-800","dark:text-orange-400"]},size:{default:["h-3.5","w-3.5"]}},defaultVariants:{variant:"default",size:"default"}}),B=({className:b,dismissible:f=!1,isSelectable:x=!0,label:r,leftIcon:i,loading:l=!1,rightIcon:d,size:o,variant:u,onClick:t,onDismiss:c})=>{const a=n.useRef(null),[y,k]=n.useState("visible"),h=n.useCallback(s=>{s.stopPropagation(),c?.(),k("hidden")},[c]);return n.useEffect(()=>{const s=new AbortController;return a.current?.addEventListener("animationend",()=>{a.current?.style.setProperty("display","none"),a.current?.remove()},{signal:s.signal}),()=>s.abort()},[]),e.jsxs("span",{ref:a,className:g(S({variant:u,size:o,className:b}),{"select-none":!x,"cursor-pointer":t}),role:t?"button":void 0,onClick:t,tabIndex:t?0:void 0,"aria-label":t?`${r} badge`:void 0,"aria-busy":l,"aria-live":"polite","data-state":y,children:[l&&e.jsx(v,{size:12,className:"animate-spin animate-duration-time-2"}),i?e.jsx(p,{className:"h-3 w-3",children:i}):null,r,f?e.jsxs("button",{type:"button",className:g(j({size:o,variant:u})),onClick:h,"aria-label":"Dismiss",children:[e.jsx(w,{className:"h-full w-full"}),e.jsx("span",{className:"sr-only",children:"Dismiss"})]}):d?e.jsx(p,{className:"h-3 w-3",children:d}):null]})};B.__docgenInfo={description:`A badge/tag component for status indicators and labels.
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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-badge--docs Storybook}`,methods:[],displayName:"Badge",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},dismissible:{required:!1,tsType:{name:"literal",value:"true"},description:"Show dismiss button",defaultValue:{value:"false",computed:!1}},isSelectable:{required:!1,tsType:{name:"boolean"},description:"Allow text selection (default: true)",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Badge text content"},leftIcon:{required:!1,tsType:{name:"ReactNode"},description:"Icon displayed on the left"},loading:{required:!1,tsType:{name:"boolean"},description:"Show loading spinner",defaultValue:{value:"false",computed:!1}},rightIcon:{required:!1,tsType:{name:"ReactNode"},description:"Icon displayed on the right (when not dismissible)"},onClick:{required:!1,tsType:{name:"VoidFunction"},description:"Click handler (makes badge interactive)"},onDismiss:{required:!1,tsType:{name:"VoidFunction"},description:"Callback when dismiss button clicked"}}};export{B};
