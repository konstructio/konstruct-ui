import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as I}from"./index-RYns6xqu.js";import{S as q}from"./index-Br99lKzn.js";import{c as O}from"./index-M5vYqX_W.js";import{c as R}from"./index-Bb4qSo10.js";import{C as A}from"./check-BX4w4CJ5.js";import"./bundle-mjs-Dnoi3Axr.js";import"./index-rNTiGNI1.js";const F=R(["border-2","disabled:pointer-events-none","focus-visible:outline-none","focus-visible:ring-1","focus-visible:ring-ring","gap-1","inline-flex","items-center","justify-center","rounded-md","text-base","transition-colors","whitespace-nowrap","cursor-pointer","font-semibold"],{variants:{variant:{primary:["text-white","border-current"],secondary:["bg-white"],danger:["border-current","bg-red-600","text-white","hover:bg-red-700"],text:["bg-transparent","border-transparent","text-slate-500"]},theme:{colony:"",kontruct:"",kubefirst:"","kubefirst-pro":""},size:{default:"px-5 py-2"},disabled:{true:["text-zinc-500","border-zinc-200","bg-zinc-200"],false:""}},compoundVariants:[{variant:"primary",theme:"kubefirst",disabled:!1,class:["bg-kubefirst-purple-light","hover:bg-kubefirst-purple-dark"]},{variant:"secondary",disabled:!1,class:["text-kubefirst-purple-light","border-kubefirst-purple-light","hover:text-kubefirst-purple-dark","hover:border-kubefirst-purple-dark","hover:bg-purple-50"]},{variant:"secondary",disabled:!0,class:["border-zinc-500"]},{variant:"text",disabled:!1,class:["hover:text-kubefirst-purple-dark","hover:bg-purple-50"]},{variant:"text",disabled:!0,class:["bg-transparent","border-transparent","text-zinc-400"]}],defaultVariants:{variant:"primary",theme:"kubefirst",size:"default",disabled:!1}}),a=I.forwardRef(({className:r,variant:T,theme:V,size:z,disabled:d=!1,asChild:C=!1,...P},_)=>{const E=C?q:"button";return e.jsx(E,{ref:_,className:O(F({variant:T,disabled:d,theme:V,size:z,className:r})),disabled:d,...P})});a.displayName="Button";a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit","VariantProps"]};const W={component:a},t={args:{children:"Primary"}},s={args:{variant:"secondary",children:"Secondary"}},n={args:{variant:"danger",children:"Danger"}},o={args:{variant:"text",children:"Text Button"}},i={args:{variant:"primary"},render:r=>e.jsxs(a,{...r,children:[e.jsx(A,{className:"w-5 h-5"})," Verified"]})},c={args:{disabled:!0,children:"Disabled"},render:r=>e.jsxs("div",{className:"flex gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx("p",{children:"Normal button"}),e.jsx(a,{variant:"primary",...r})]}),e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx("p",{children:"Secondary button"}),e.jsx(a,{variant:"secondary",...r})]}),e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx("p",{children:"Text button"}),e.jsx(a,{variant:"text",...r})]})]})};var l,p,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Primary'
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,f,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,g,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Danger'
  }
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,y,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    children: 'Text Button'
  }
}`,...(k=(y=o.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var j,N,B;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  render: args => {
    return <Button {...args}>
        <Check className="w-5 h-5" /> Verified
      </Button>;
  }
}`,...(B=(N=i.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var S,w,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled'
  },
  render: args => <div className="flex gap-8">
      <div className="flex flex-col items-center gap-3">
        <p>Normal button</p>
        <Button variant="primary" {...args} />
      </div>
      <div className="flex flex-col items-center gap-3">
        <p>Secondary button</p>
        <Button variant="secondary" {...args} />
      </div>
      <div className="flex flex-col items-center gap-3">
        <p>Text button</p>
        <Button variant="text" {...args} />
      </div>
    </div>
}`,...(D=(w=c.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const X=["Primary","Secondary","Danger","TextButton","IconButton","Disabled"];export{n as Danger,c as Disabled,i as IconButton,t as Primary,s as Secondary,o as TextButton,X as __namedExportsOrder,W as default};
