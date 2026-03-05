import{j as e}from"./iframe-BcKbv-lX.js";import{B as o}from"./Button-BQqMbhet.js";import{P as x,R as g,T as C,C as T,A as N}from"./index-DpEoF_iS.js";import{c as j}from"./index-CwGTy2we.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CUevI2Uh.js";import"./index-_mlK3XjR.js";import"./index-Diut3bYb.js";import"./index-BhKwNEBV.js";import"./index-AsspV1sp.js";import"./index-CKKXh6El.js";import"./index-gaNL05AS.js";import"./index-BZk2ZJbl.js";import"./index-bz3Cl1Vw.js";import"./index-Dx3LBVP8.js";const t=({content:a,children:l,side:c="top",sideOffset:p=4,bgClassName:m="bg-slate-700",arrowClassName:d="fill-slate-700",textClassName:u="text-white",className:f,delayDuration:h=0})=>e.jsx(x,{delayDuration:h,children:e.jsxs(g,{children:[e.jsx(C,{asChild:!0,children:e.jsx("span",{children:l})}),e.jsxs(T,{side:c,sideOffset:p,className:j("rounded px-2 py-1 text-xs shadow-md","animate-in fade-in-0",m,u,f),children:[a,e.jsx(N,{className:d})]})]})});t.__docgenInfo={description:`A tooltip component that shows on hover.
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
\`\`\``,methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:"Tooltip text or content"},children:{required:!0,tsType:{name:"ReactNode"},description:"The trigger element"},side:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Tooltip position relative to trigger",defaultValue:{value:"'top'",computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"Distance from trigger in px",defaultValue:{value:"4",computed:!1}},bgClassName:{required:!1,tsType:{name:"string"},description:"Background color class for tooltip (e.g. 'bg-slate-700', 'bg-red-500')",defaultValue:{value:"'bg-slate-700'",computed:!1}},arrowClassName:{required:!1,tsType:{name:"string"},description:"Arrow fill color class (e.g. 'fill-slate-700', 'fill-red-500'). Should match bgClassName",defaultValue:{value:"'fill-slate-700'",computed:!1}},textClassName:{required:!1,tsType:{name:"string"},description:"Text color class (e.g. 'text-white')",defaultValue:{value:"'text-white'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className for tooltip content"},delayDuration:{required:!1,tsType:{name:"number"},description:"Delay before showing tooltip in ms",defaultValue:{value:"0",computed:!1}}}};const k={title:"In Review/Tooltip",component:t},n={render:()=>e.jsx("div",{className:"flex items-center justify-center h-50",children:e.jsx(t,{content:"This is a tooltip",children:e.jsx(o,{children:"Hover me"})})})},s={render:()=>e.jsxs("div",{className:"flex items-center justify-center gap-8 h-50",children:[e.jsx(t,{content:"Top tooltip",side:"top",children:e.jsx(o,{children:"Top"})}),e.jsx(t,{content:"Bottom tooltip",side:"bottom",children:e.jsx(o,{children:"Bottom"})}),e.jsx(t,{content:"Left tooltip",side:"left",children:e.jsx(o,{children:"Left"})}),e.jsx(t,{content:"Right tooltip",side:"right",children:e.jsx(o,{children:"Right"})})]})},i={render:()=>e.jsxs("div",{className:"flex items-center justify-center gap-8 h-50",children:[e.jsx(t,{content:"Danger tooltip",bgClassName:"bg-red-500",arrowClassName:"fill-red-500",textClassName:"text-white",children:e.jsx(o,{variant:"danger",children:"Red"})}),e.jsx(t,{content:"Success tooltip",bgClassName:"bg-green-600",arrowClassName:"fill-green-600",textClassName:"text-white",children:e.jsx(o,{children:"Green"})}),e.jsx(t,{content:"Info tooltip",bgClassName:"bg-blue-500",arrowClassName:"fill-blue-500",textClassName:"text-white",children:e.jsx(o,{variant:"secondary",children:"Blue"})})]})},r={render:()=>e.jsx("div",{className:"flex items-center justify-center h-50",children:e.jsx(t,{content:e.jsxs("span",{className:"font-semibold",children:["Rich ",e.jsx("em",{children:"content"})," tooltip"]}),children:e.jsx(o,{children:"ReactNode content"})})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center h-50">
      <TooltipComponent content="This is a tooltip">
        <Button>Hover me</Button>
      </TooltipComponent>
    </div>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center gap-8 h-50">
      <TooltipComponent content="Top tooltip" side="top">
        <Button>Top</Button>
      </TooltipComponent>

      <TooltipComponent content="Bottom tooltip" side="bottom">
        <Button>Bottom</Button>
      </TooltipComponent>

      <TooltipComponent content="Left tooltip" side="left">
        <Button>Left</Button>
      </TooltipComponent>

      <TooltipComponent content="Right tooltip" side="right">
        <Button>Right</Button>
      </TooltipComponent>
    </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center gap-8 h-50">
      <TooltipComponent content="Danger tooltip" bgClassName="bg-red-500" arrowClassName="fill-red-500" textClassName="text-white">
        <Button variant="danger">Red</Button>
      </TooltipComponent>

      <TooltipComponent content="Success tooltip" bgClassName="bg-green-600" arrowClassName="fill-green-600" textClassName="text-white">
        <Button>Green</Button>
      </TooltipComponent>

      <TooltipComponent content="Info tooltip" bgClassName="bg-blue-500" arrowClassName="fill-blue-500" textClassName="text-white">
        <Button variant="secondary">Blue</Button>
      </TooltipComponent>
    </div>
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center h-50">
      <TooltipComponent content={<span className="font-semibold">
            Rich <em>content</em> tooltip
          </span>}>
        <Button>ReactNode content</Button>
      </TooltipComponent>
    </div>
}`,...r.parameters?.docs?.source}}};const E=["Default","Positions","CustomColors","WithReactNodeContent"];export{i as CustomColors,n as Default,s as Positions,r as WithReactNodeContent,E as __namedExportsOrder,k as default};
