import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./iframe-Dy5_rkim.js";import{n,t as r}from"./Button-BrWg2iEq.js";import{n as i,t as a}from"./Tooltip-Bt6iaZXp.js";var o,s,c,l,u,d,f;e((()=>{n(),i(),o=t(),s={title:`In Review/Tooltip`,component:a},c={render:()=>(0,o.jsx)(`div`,{className:`flex items-center justify-center h-50`,children:(0,o.jsx)(a,{content:`This is a tooltip`,children:(0,o.jsx)(r,{children:`Hover me`})})})},l={render:()=>(0,o.jsxs)(`div`,{className:`flex items-center justify-center gap-8 h-50`,children:[(0,o.jsx)(a,{content:`Top tooltip`,side:`top`,children:(0,o.jsx)(r,{children:`Top`})}),(0,o.jsx)(a,{content:`Bottom tooltip`,side:`bottom`,children:(0,o.jsx)(r,{children:`Bottom`})}),(0,o.jsx)(a,{content:`Left tooltip`,side:`left`,children:(0,o.jsx)(r,{children:`Left`})}),(0,o.jsx)(a,{content:`Right tooltip`,side:`right`,children:(0,o.jsx)(r,{children:`Right`})})]})},u={render:()=>(0,o.jsxs)(`div`,{className:`flex items-center justify-center gap-8 h-50`,children:[(0,o.jsx)(a,{content:`Danger tooltip`,bgClassName:`bg-red-500`,arrowClassName:`fill-red-500`,textClassName:`text-white`,children:(0,o.jsx)(r,{variant:`danger`,children:`Red`})}),(0,o.jsx)(a,{content:`Success tooltip`,bgClassName:`bg-green-600`,arrowClassName:`fill-green-600`,textClassName:`text-white`,children:(0,o.jsx)(r,{children:`Green`})}),(0,o.jsx)(a,{content:`Info tooltip`,bgClassName:`bg-blue-500`,arrowClassName:`fill-blue-500`,textClassName:`text-white`,children:(0,o.jsx)(r,{variant:`secondary`,children:`Blue`})})]})},d={render:()=>(0,o.jsx)(`div`,{className:`flex items-center justify-center h-50`,children:(0,o.jsx)(a,{content:(0,o.jsxs)(`span`,{className:`font-semibold`,children:[`Rich `,(0,o.jsx)(`em`,{children:`content`}),` tooltip`]}),children:(0,o.jsx)(r,{children:`ReactNode content`})})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center h-50">
      <TooltipComponent content="This is a tooltip">
        <Button>Hover me</Button>
      </TooltipComponent>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center h-50">
      <TooltipComponent content={<span className="font-semibold">
            Rich <em>content</em> tooltip
          </span>}>
        <Button>ReactNode content</Button>
      </TooltipComponent>
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Positions`,`CustomColors`,`WithReactNodeContent`]}))();export{u as CustomColors,c as Default,l as Positions,d as WithReactNodeContent,f as __namedExportsOrder,s as default};