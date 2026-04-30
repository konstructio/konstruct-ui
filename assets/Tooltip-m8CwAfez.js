import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./iframe-Y1_HDYN6.js";import{a as n,r}from"./dist-C7OvCdCY.js";import{a as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./dist-BFvXm0RI.js";var d,f,p=e((()=>{l(),n(),d=t(),f=({content:e,children:t,side:n=`top`,sideOffset:l=4,bgClassName:f=`bg-slate-700`,arrowClassName:p=`fill-slate-700`,textClassName:m=`text-white`,className:h,delayDuration:g=0})=>(0,d.jsx)(a,{delayDuration:g,children:(0,d.jsxs)(i,{children:[(0,d.jsx)(s,{asChild:!0,children:(0,d.jsx)(`span`,{children:t})}),(0,d.jsx)(c,{children:(0,d.jsxs)(o,{side:n,sideOffset:l,className:r(`rounded px-2 py-1 text-xs shadow-md`,`animate-in fade-in-0`,f,m,h),children:[e,(0,d.jsx)(u,{className:p})]})})]})}),f.__docgenInfo={description:`A tooltip component that shows on hover.
Built on Radix UI for accessible, well-positioned tooltips.

@example
\`\`\`tsx
<Tooltip content="Click to save">
  <Button>Save</Button>
</Tooltip>

<Tooltip content="More information" side="bottom">
  <InfoIcon />
</Tooltip>

<Tooltip content="Danger!" bgClassName="bg-red-500">
  <Button variant="danger">Delete</Button>
</Tooltip>
\`\`\``,methods:[],displayName:`Tooltip`,props:{content:{required:!0,tsType:{name:`union`,raw:`ReactNode | string`,elements:[{name:`ReactNode`},{name:`string`}]},description:`Tooltip text or content`},children:{required:!0,tsType:{name:`ReactNode`},description:`The trigger element`},side:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom' | 'left' | 'right'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`Tooltip position relative to trigger`,defaultValue:{value:`'top'`,computed:!1}},sideOffset:{required:!1,tsType:{name:`number`},description:`Distance from trigger in px`,defaultValue:{value:`4`,computed:!1}},bgClassName:{required:!1,tsType:{name:`string`},description:`Background color class for tooltip (e.g. 'bg-slate-700', 'bg-red-500')`,defaultValue:{value:`'bg-slate-700'`,computed:!1}},arrowClassName:{required:!1,tsType:{name:`string`},description:`Arrow fill color class (e.g. 'fill-slate-700', 'fill-red-500'). Should match bgClassName`,defaultValue:{value:`'fill-slate-700'`,computed:!1}},textClassName:{required:!1,tsType:{name:`string`},description:`Text color class (e.g. 'text-white')`,defaultValue:{value:`'text-white'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Additional className for tooltip content`},delayDuration:{required:!1,tsType:{name:`number`},description:`Delay before showing tooltip in ms`,defaultValue:{value:`0`,computed:!1}}}}}));export{p as n,f as t};