import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-tvICUrOf.js";import{c as x}from"./index-BV_IynQ4.js";import{u as v}from"./theme.hook-CDXgGbzo.js";import"./index-yBjzXJbu.js";const g=x(["h-","w-8","animate-spin"],{variants:{variant:{default:""},theme:{kubefirst:"text-kubefirst-primary",colony:"text-colony-primary",civo:"text-civo-primary"}},defaultVariants:{variant:"default",theme:"kubefirst"}}),h=t=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...t},r.createElement("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})),a=({className:t,theme:m,variant:d,...c})=>{const p=r.useId(),{theme:l}=v();return e.jsx(h,{id:p,className:g({className:t,theme:m??l,variant:d}),...c})};a.displayName="Loading";a.__docgenInfo={description:"",methods:[],displayName:"Loading",composes:["InputHTMLAttributes","VariantProps"]};const y={title:"In Review/Loading",component:a},o={args:{variant:"default"},render:t=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-[350px]",children:e.jsx(a,{...t})}),e.jsx("div",{className:"w-[350px]",children:e.jsx(a,{...t,theme:"colony"})}),e.jsx("div",{className:"w-[350px]",children:e.jsx(a,{...t,theme:"civo"})})]})};var s,i,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(i=o.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const N=["Loading"];export{o as Loading,N as __namedExportsOrder,y as default};
