import{j as e}from"./iframe-CnMfofFe.js";import{a as r,c}from"./index-B-7A89sm.js";import"./preload-helper-PPVm8Dsz.js";const d=r(["h-px","bg-zinc-200","w-full"],{variants:{variant:{default:""}},defaultVariants:{variant:"default"}}),s=({className:a,...n})=>e.jsx("div",{className:c(d({className:a})),...n});s.displayName="Divider";s.__docgenInfo={description:`A horizontal divider/separator line.

@example
\`\`\`tsx
<div>
  <p>Section 1</p>
  <Divider />
  <p>Section 2</p>
</div>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-divider--docs Storybook}`,methods:[],displayName:"Divider"};const p={title:"In Review/Divider",component:s},i={render:()=>e.jsxs("div",{className:"flex w-full flex-col gap-4",children:[e.jsx("div",{className:"w-[350px] space-y-4",children:e.jsx(s,{})}),e.jsx("div",{className:"w-[600px] space-y-4",children:e.jsx(s,{className:"bg-zinc-300"})}),e.jsx("div",{className:"w-full space-y-4",children:e.jsx(s,{className:"bg-zinc-400"})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-full flex-col gap-4">
      <div className="w-[350px] space-y-4">
        <DividerComponent />
      </div>
      <div className="w-[600px] space-y-4">
        <DividerComponent className="bg-zinc-300" />
      </div>
      <div className="w-full space-y-4">
        <DividerComponent className="bg-zinc-400" />
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};const m=["Divider"];export{i as Divider,m as __namedExportsOrder,p as default};
