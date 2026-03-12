import{j as e}from"./iframe-Bx7A06S6.js";import{P as p,R as m,T as u,a as c,C as f,A as g}from"./index-DF4Docbl.js";import{c as T}from"./index-CwGTy2we.js";const x=({content:t,children:o,side:a="top",sideOffset:l=4,bgClassName:s="bg-slate-700",arrowClassName:n="fill-slate-700",textClassName:i="text-white",className:r,delayDuration:d=0})=>e.jsx(p,{delayDuration:d,children:e.jsxs(m,{children:[e.jsx(u,{asChild:!0,children:e.jsx("span",{children:o})}),e.jsx(c,{children:e.jsxs(f,{side:a,sideOffset:l,className:T("rounded px-2 py-1 text-xs shadow-md","animate-in fade-in-0",s,i,r),children:[t,e.jsx(g,{className:n})]})})]})});x.__docgenInfo={description:`A tooltip component that shows on hover.
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
\`\`\``,methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:"Tooltip text or content"},children:{required:!0,tsType:{name:"ReactNode"},description:"The trigger element"},side:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Tooltip position relative to trigger",defaultValue:{value:"'top'",computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"Distance from trigger in px",defaultValue:{value:"4",computed:!1}},bgClassName:{required:!1,tsType:{name:"string"},description:"Background color class for tooltip (e.g. 'bg-slate-700', 'bg-red-500')",defaultValue:{value:"'bg-slate-700'",computed:!1}},arrowClassName:{required:!1,tsType:{name:"string"},description:"Arrow fill color class (e.g. 'fill-slate-700', 'fill-red-500'). Should match bgClassName",defaultValue:{value:"'fill-slate-700'",computed:!1}},textClassName:{required:!1,tsType:{name:"string"},description:"Text color class (e.g. 'text-white')",defaultValue:{value:"'text-white'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className for tooltip content"},delayDuration:{required:!1,tsType:{name:"number"},description:"Delay before showing tooltip in ms",defaultValue:{value:"0",computed:!1}}}};export{x as T};
