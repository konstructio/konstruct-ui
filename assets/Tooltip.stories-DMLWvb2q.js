import{j as t}from"./iframe-DLrn8Gk9.js";import{B as o}from"./Button-CIavAXKE.js";import{T as e}from"./Tooltip-DNf-ulOd.js";import"./preload-helper-PPVm8Dsz.js";import"./compiler-runtime-DxXHijtq.js";import"./index-y1nNICkM.js";import"./index-CPvO_3XD.js";import"./index-CwGTy2we.js";import"./index-DU3n5AK5.js";import"./index-QG5MEqND.js";import"./index-BfndZXuq.js";import"./index-8qrDTiGs.js";import"./index-yRV-2iis.js";import"./index-BDfI96nn.js";import"./index-CkdhHSWL.js";import"./index-BvLyimqJ.js";import"./index-B2f5QKQL.js";const v={title:"In Review/Tooltip",component:e},n={render:()=>t.jsx("div",{className:"flex items-center justify-center h-50",children:t.jsx(e,{content:"This is a tooltip",children:t.jsx(o,{children:"Hover me"})})})},s={render:()=>t.jsxs("div",{className:"flex items-center justify-center gap-8 h-50",children:[t.jsx(e,{content:"Top tooltip",side:"top",children:t.jsx(o,{children:"Top"})}),t.jsx(e,{content:"Bottom tooltip",side:"bottom",children:t.jsx(o,{children:"Bottom"})}),t.jsx(e,{content:"Left tooltip",side:"left",children:t.jsx(o,{children:"Left"})}),t.jsx(e,{content:"Right tooltip",side:"right",children:t.jsx(o,{children:"Right"})})]})},r={render:()=>t.jsxs("div",{className:"flex items-center justify-center gap-8 h-50",children:[t.jsx(e,{content:"Danger tooltip",bgClassName:"bg-red-500",arrowClassName:"fill-red-500",textClassName:"text-white",children:t.jsx(o,{variant:"danger",children:"Red"})}),t.jsx(e,{content:"Success tooltip",bgClassName:"bg-green-600",arrowClassName:"fill-green-600",textClassName:"text-white",children:t.jsx(o,{children:"Green"})}),t.jsx(e,{content:"Info tooltip",bgClassName:"bg-blue-500",arrowClassName:"fill-blue-500",textClassName:"text-white",children:t.jsx(o,{variant:"secondary",children:"Blue"})})]})},i={render:()=>t.jsx("div",{className:"flex items-center justify-center h-50",children:t.jsx(e,{content:t.jsxs("span",{className:"font-semibold",children:["Rich ",t.jsx("em",{children:"content"})," tooltip"]}),children:t.jsx(o,{children:"ReactNode content"})})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center h-50">
      <TooltipComponent content={<span className="font-semibold">
            Rich <em>content</em> tooltip
          </span>}>
        <Button>ReactNode content</Button>
      </TooltipComponent>
    </div>
}`,...i.parameters?.docs?.source}}};const R=["Default","Positions","CustomColors","WithReactNodeContent"];export{r as CustomColors,n as Default,s as Positions,i as WithReactNodeContent,R as __namedExportsOrder,v as default};
