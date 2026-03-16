import{j as s}from"./iframe-DLrn8Gk9.js";import{c as l}from"./compiler-runtime-DxXHijtq.js";import{a as o,c as p}from"./index-CwGTy2we.js";import"./preload-helper-PPVm8Dsz.js";const m=o(["h-px","bg-zinc-200","w-full"],{variants:{variant:{default:""}},defaultVariants:{variant:"default"}}),r=d=>{const e=l.c(8);let i,a;e[0]!==d?({className:i,...a}=d,e[0]=d,e[1]=i,e[2]=a):(i=e[1],a=e[2]);let n;e[3]!==i?(n=p(m({className:i})),e[3]=i,e[4]=n):n=e[4];let c;return e[5]!==a||e[6]!==n?(c=s.jsx("div",{className:n,...a}),e[5]=a,e[6]=n,e[7]=c):c=e[7],c};r.displayName="Divider";r.__docgenInfo={description:`A horizontal divider/separator line.

@example
\`\`\`tsx
<div>
  <p>Section 1</p>
  <Divider />
  <p>Section 2</p>
</div>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-divider--docs Storybook}`,methods:[],displayName:"Divider"};const N={title:"In Review/Divider",component:r},t={render:()=>s.jsxs("div",{className:"flex w-full flex-col gap-4",children:[s.jsx("div",{className:"w-[350px] space-y-4",children:s.jsx(r,{})}),s.jsx("div",{className:"w-[600px] space-y-4",children:s.jsx(r,{className:"bg-zinc-300"})}),s.jsx("div",{className:"w-full space-y-4",children:s.jsx(r,{className:"bg-zinc-400"})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const g=["Divider"];export{t as Divider,g as __namedExportsOrder,N as default};
