import{r as T,j as a}from"./iframe-DLrn8Gk9.js";import{c as F}from"./compiler-runtime-DxXHijtq.js";import{L}from"./Loader-Baw2dVMg.js";import{a as R,c as D}from"./index-CwGTy2we.js";import{S as z}from"./index-y1nNICkM.js";import{X as _}from"./x-D3mwUgyG.js";const P=R(["flex","items-center","justify-center","gap-2","rounded","px-2","py-1","w-max","shadow-xs","data-[state=hidden]:animate-out","data-[state=hidden]:fade-out-0","data-[state=hidden]:zoom-out-95"],{variants:{variant:{default:["bg-gray-100","text-gray-800","dark:text-gray-300","dark:bg-gray-300/15"],danger:["bg-red-100","text-red-800","dark:text-red-400","dark:bg-red-400/10"],info:["bg-blue-100","text-blue-800","dark:text-sky-400","dark:bg-sky-400/10"],success:["bg-green-100","text-green-800","dark:text-green-400","dark:bg-green-400/10"],warning:["bg-yellow-100","text-yellow-800","dark:text-amber-300","dark:bg-amber-300/10"],violet:["bg-violet-50","text-violet-800","dark:text-purple-400","dark:bg-purple-400/8"],orange:["bg-orange-50","text-orange-800","dark:text-orange-400","dark:bg-orange-400/10"]},size:{default:"text-xs leading-4"}},defaultVariants:{variant:"default",size:"default"}}),$=R(["rounded-full","inline-flex","items-center","justify-center","focus:outline-none","text-inherit","cursor-pointer","text-gray-700"],{variants:{variant:{default:["text-gray-700","dark:text-gray-300"],danger:["text-red-700","dark:text-red-400"],info:["text-blue-700","dark:text-sky-400"],success:["text-green-700","dark:text-green-400"],warning:["text-yellow-700","dark:text-amber-300"],violet:["text-violet-700","dark:text-purple-400"],orange:["text-orange-800","dark:text-orange-400"]},size:{default:["h-3.5","w-3.5"]}},defaultVariants:{variant:"default",size:"default"}}),X=A=>{const e=F.c(32),{className:y,dismissible:V,isSelectable:q,label:c,leftIcon:u,loading:C,rightIcon:g,size:s,variant:n,onClick:t,onDismiss:h}=A,v=V===void 0?!1:V,w=q===void 0?!0:q,i=C===void 0?!1:C,m=T.useRef(null),[S,E]=T.useState("visible");let b;e[0]!==h?(b=k=>{k.stopPropagation(),h?.(),E("hidden")},e[0]=h,e[1]=b):b=e[1];const I=b;let p,f;e[2]===Symbol.for("react.memo_cache_sentinel")?(p=()=>{const k=new AbortController;return m.current?.addEventListener("animationend",()=>{m.current?.style.setProperty("display","none"),m.current?.remove()},{signal:k.signal}),()=>k.abort()},f=[],e[2]=p,e[3]=f):(p=e[2],f=e[3]),T.useEffect(p,f);let l;e[4]!==y||e[5]!==w||e[6]!==t||e[7]!==s||e[8]!==n?(l=D(P({variant:n,size:s,className:y}),{"select-none":!w,"cursor-pointer":t}),e[4]=y,e[5]=w,e[6]=t,e[7]=s,e[8]=n,e[9]=l):l=e[9];const N=t?"button":void 0,j=t?0:void 0,B=t?`${c} badge`:void 0;let r;e[10]!==i?(r=i&&a.jsx(L,{size:12,className:"animate-spin animate-duration-time-2"}),e[10]=i,e[11]=r):r=e[11];let o;e[12]!==u?(o=u?a.jsx(z,{className:"h-3 w-3",children:u}):null,e[12]=u,e[13]=o):o=e[13];let d;e[14]!==v||e[15]!==I||e[16]!==g||e[17]!==s||e[18]!==n?(d=v?a.jsxs("button",{type:"button",className:D($({size:s,variant:n})),onClick:I,"aria-label":"Dismiss",children:[a.jsx(_,{className:"h-full w-full"}),a.jsx("span",{className:"sr-only",children:"Dismiss"})]}):g?a.jsx(z,{className:"h-3 w-3",children:g}):null,e[14]=v,e[15]=I,e[16]=g,e[17]=s,e[18]=n,e[19]=d):d=e[19];let x;return e[20]!==S||e[21]!==c||e[22]!==i||e[23]!==t||e[24]!==B||e[25]!==r||e[26]!==o||e[27]!==d||e[28]!==l||e[29]!==N||e[30]!==j?(x=a.jsxs("span",{ref:m,className:l,role:N,onClick:t,tabIndex:j,"aria-label":B,"aria-busy":i,"aria-live":"polite","data-state":S,children:[r,o,c,d]}),e[20]=S,e[21]=c,e[22]=i,e[23]=t,e[24]=B,e[25]=r,e[26]=o,e[27]=d,e[28]=l,e[29]=N,e[30]=j,e[31]=x):x=e[31],x};X.__docgenInfo={description:`A badge/tag component for status indicators and labels.
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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-badge--docs Storybook}`,methods:[],displayName:"Badge",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},dismissible:{required:!1,tsType:{name:"literal",value:"true"},description:"Show dismiss button",defaultValue:{value:"false",computed:!1}},isSelectable:{required:!1,tsType:{name:"boolean"},description:"Allow text selection (default: true)",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Badge text content"},leftIcon:{required:!1,tsType:{name:"ReactNode"},description:"Icon displayed on the left"},loading:{required:!1,tsType:{name:"boolean"},description:"Show loading spinner",defaultValue:{value:"false",computed:!1}},rightIcon:{required:!1,tsType:{name:"ReactNode"},description:"Icon displayed on the right (when not dismissible)"},onClick:{required:!1,tsType:{name:"VoidFunction"},description:"Click handler (makes badge interactive)"},onDismiss:{required:!1,tsType:{name:"VoidFunction"},description:"Callback when dismiss button clicked"}}};export{X as B};
