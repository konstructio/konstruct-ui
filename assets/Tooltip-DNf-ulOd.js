import{j as t}from"./iframe-DLrn8Gk9.js";import{c as w}from"./compiler-runtime-DxXHijtq.js";import{T as j,A as q,a as R,C as D,R as B,P as V}from"./index-DU3n5AK5.js";import{c as A}from"./index-CwGTy2we.js";const I=C=>{const e=w.c(20),{content:r,children:d,side:T,sideOffset:h,bgClassName:v,arrowClassName:N,textClassName:b,className:c,delayDuration:y}=C,m=T===void 0?"top":T,p=h===void 0?4:h,u=v===void 0?"bg-slate-700":v,f=N===void 0?"fill-slate-700":N,g=b===void 0?"text-white":b,x=y===void 0?0:y;let o;e[0]!==d?(o=t.jsx(j,{asChild:!0,children:t.jsx("span",{children:d})}),e[0]=d,e[1]=o):o=e[1];let s;e[2]!==u||e[3]!==c||e[4]!==g?(s=A("rounded px-2 py-1 text-xs shadow-md","animate-in fade-in-0",u,g,c),e[2]=u,e[3]=c,e[4]=g,e[5]=s):s=e[5];let a;e[6]!==f?(a=t.jsx(q,{className:f}),e[6]=f,e[7]=a):a=e[7];let l;e[8]!==r||e[9]!==m||e[10]!==p||e[11]!==s||e[12]!==a?(l=t.jsx(R,{children:t.jsxs(D,{side:m,sideOffset:p,className:s,children:[r,a]})}),e[8]=r,e[9]=m,e[10]=p,e[11]=s,e[12]=a,e[13]=l):l=e[13];let i;e[14]!==l||e[15]!==o?(i=t.jsxs(B,{children:[o,l]}),e[14]=l,e[15]=o,e[16]=i):i=e[16];let n;return e[17]!==x||e[18]!==i?(n=t.jsx(V,{delayDuration:x,children:i}),e[17]=x,e[18]=i,e[19]=n):n=e[19],n};I.__docgenInfo={description:`A tooltip component that shows on hover.
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
\`\`\``,methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:"Tooltip text or content"},children:{required:!0,tsType:{name:"ReactNode"},description:"The trigger element"},side:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Tooltip position relative to trigger",defaultValue:{value:"'top'",computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"Distance from trigger in px",defaultValue:{value:"4",computed:!1}},bgClassName:{required:!1,tsType:{name:"string"},description:"Background color class for tooltip (e.g. 'bg-slate-700', 'bg-red-500')",defaultValue:{value:"'bg-slate-700'",computed:!1}},arrowClassName:{required:!1,tsType:{name:"string"},description:"Arrow fill color class (e.g. 'fill-slate-700', 'fill-red-500'). Should match bgClassName",defaultValue:{value:"'fill-slate-700'",computed:!1}},textClassName:{required:!1,tsType:{name:"string"},description:"Text color class (e.g. 'text-white')",defaultValue:{value:"'text-white'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className for tooltip content"},delayDuration:{required:!1,tsType:{name:"number"},description:"Delay before showing tooltip in ms",defaultValue:{value:"0",computed:!1}}}};export{I as T};
