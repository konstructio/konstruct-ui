import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{o as n,t as r}from"./iframe-Dy5_rkim.js";import{a as i,m as a,t as o}from"./components-BPskYh_8.js";import{d as s,f as c,t as l}from"./dist-CV0trVvB.js";import{a as u,n as d,r as f,t as p}from"./dist-C7OvCdCY.js";import{n as m,t as h}from"./Typography-CX6LeJ8a.js";var g,_=e((()=>{d(),g=p(`bg-white,border,border-gray-300,caret-text-slate-800,disabled:cursor-not-allowed,disabled:text-slate-500,flex,focus-visible:border-transparent,focus-visible:outline-none,focus-visible:ring-1,h-10,px-2.5,py-2,rounded,text-slate-800,text-sm,transition-all,w-full,disabled:bg-gray-50,placeholder:text-slate-400,data-[error=false]:dark:focus:ring-aurora-500,data-[error=false]:focus:ring-aurora-500,dark:bg-metal-800,dark:border-metal-700,dark:caret-text-metal-50,dark:disabled:bg-metal-900,dark:disabled:placeholder:text-metal-400,dark:disabled:text-metal-400,dark:disabled:text-slate-400,dark:placeholder:text-metal-300,dark:text-slate-50,dark:text-white`.split(`,`),{variants:{variant:{default:``,error:[`pr-8`,`border-red-600`,`focus-visible:border-red-600`,`focus-visible:ring-transparent`,`dark:border-red-500`]}},defaultVariants:{variant:`default`}})})),v,y,b,x=e((()=>{v=t(n(),1),l(),o(),u(),_(),m(),y=r(),b=(0,v.forwardRef)(({className:e,error:t,helperText:n,helperTextClassName:r,isRequired:o=!1,isSearch:l=!1,label:u,labelAction:d,labelClassName:p,labelWrapperClassName:m,name:_,theme:b,type:x=`text`,...S},C)=>{let w=(0,v.useId)(),T=(0,v.useRef)(x===`password`),[E,D]=(0,v.useState)(()=>x!==`password`),O=typeof t==`string`&&t.length>=0,k=E?s:c;return(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 w-full relative`,"data-theme":b,children:[u?(0,y.jsxs)(`div`,{className:f(`flex items-center justify-between`,m),children:[(0,y.jsxs)(h,{component:`label`,variant:`labelLarge`,htmlFor:w,className:f(`cursor-pointer`,`flex`,`gap-1`,`text-sm`,`font-medium`,p),children:[u,` `,o&&(0,y.jsx)(h,{component:`span`,className:f(`text-red-600`,`dark:text-red-500`,`text-xs`,`mt-0.5`),children:`*`})]}),d]}):null,(0,y.jsxs)(`div`,{className:`relative`,children:[l?(0,y.jsx)(`i`,{className:f(`absolute`,`left-2.5`,`top-1/2`,`-translate-y-[50%]`,`text-slate-400`,`dark:text-metal-400`,{"text-red-700":O}),children:(0,y.jsx)(a,{className:`w-5 h-5`})}):null,(0,y.jsx)(`input`,{id:u?w:void 0,ref:C,name:_,type:E?T.current?`text`:x:`password`,"data-error":O,className:f(g({className:e,variant:O?`error`:`default`}),{"pr-10":x===`password`||O,"pl-8":l}),...S}),O?(0,y.jsx)(`i`,{className:f(`-translate-y-[50%]`,`absolute`,`right-3`,`text-red-700`,`top-1/2`,`dark:text-red-500`),children:(0,y.jsx)(i,{className:`w-5 h-5`})}):null,x===`password`&&!t?(0,y.jsx)(`i`,{className:f(`-translate-y-[50%]`,`absolute`,`right-3`,`text-slate-400`,`top-1/2`),children:(0,y.jsx)(k,{className:`w-5 h-5 cursor-pointer`,onClick:()=>D(!E)})}):null]}),t?(0,y.jsx)(h,{component:`span`,className:f(`text-xs`,`tracking-normal`,`text-red-700`,`dark:text-red-400`),children:t}):null,!t&&n?(0,y.jsx)(h,{component:`span`,variant:`body1`,className:f(`text-xs`,`text-slate-600`,`dark:text-slate-200`,`select-none`,`tracking-normal`,r),children:n}):null]})}),b.displayName=`KonstructInput`,b.__docgenInfo={description:`A text input component with label, error handling, and helper text support.
Includes built-in password visibility toggle and search icon variant.

@example
\`\`\`tsx
// Basic input with label
<Input label="Email" placeholder="Enter your email" />

// Required input with helper text
<Input
  label="Username"
  isRequired
  helperText="Choose a unique username"
/>

// Input with error state
<Input
  label="Email"
  value={email}
  error="Please enter a valid email address"
/>

// Password input (auto show/hide toggle)
<Input label="Password" type="password" />

// Search input with icon
<Input placeholder="Search..." isSearch />
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-input--docs Storybook}`,methods:[],displayName:`KonstructInput`,props:{error:{required:!1,tsType:{name:`string`},description:`Error message to display below the input`},helperText:{required:!1,tsType:{name:`string`},description:`Helper text displayed below the input when no error`},helperTextClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the helper text`},isRequired:{required:!1,tsType:{name:`boolean`},description:`Show required indicator (*) next to label`,defaultValue:{value:`false`,computed:!1}},isSearch:{required:!1,tsType:{name:`boolean`},description:`Show search icon inside the input`,defaultValue:{value:`false`,computed:!1}},label:{required:!1,tsType:{name:`union`,raw:`string | ReactNode`,elements:[{name:`string`},{name:`ReactNode`}]},description:`Label text or element displayed above the input`},labelAction:{required:!1,tsType:{name:`ReactNode`},description:`Custom element rendered on the right side of the label (e.g. icon, button)`},labelClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the label`},labelWrapperClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the label wrapper container`},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override for this component`},type:{defaultValue:{value:`'text'`,computed:!1},required:!1}},composes:[`InputHTMLAttributes`,`VariantProps`]}}));export{x as n,b as t};