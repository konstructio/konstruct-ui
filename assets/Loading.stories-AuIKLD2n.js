import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-DUAV1Q2A.js";import{a as x}from"./index-Bj7X0qp-.js";import{u as v}from"./theme.hook-gog7kSAh.js";const g=x(["h-","w-8","animate-spin"],{variants:{variant:{default:""},theme:{kubefirst:"text-kubefirst-primary",colony:"text-colony-primary",civo:"text-civo-primary"}},defaultVariants:{variant:"default",theme:"kubefirst"}}),h=t=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...t},s.createElement("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})),a=({className:t,theme:d,variant:m,...c})=>{const p=s.useId(),{theme:l}=v();return e.jsx(h,{id:p,className:g({className:t,theme:d??l,variant:m}),...c})};a.displayName="Loading";a.__docgenInfo={description:"",methods:[],displayName:"Loading",composes:["InputHTMLAttributes","VariantProps"]};const j={title:"In Review/Loading",component:a},o={args:{variant:"default"},render:t=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-[350px]",children:e.jsx(a,{...t})}),e.jsx("div",{className:"w-[350px]",children:e.jsx(a,{...t,theme:"colony"})}),e.jsx("div",{className:"w-[350px]",children:e.jsx(a,{...t,theme:"civo"})})]})};var r,n,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  },
  render: args => <>
      <div className="w-[350px]">
        <LoadingComponent {...args} />
      </div>
      <div className="w-[350px]">
        <LoadingComponent {...args} theme="colony" />
      </div>
      <div className="w-[350px]">
        <LoadingComponent {...args} theme="civo" />
      </div>
    </>
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const y=["Loading"];export{o as Loading,y as __namedExportsOrder,j as default};
