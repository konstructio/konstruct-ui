import{j as r}from"./jsx-runtime-DEdD30eg.js";import{B as a}from"./Button-DY8uAGL0.js";import{C as P}from"./check-BX4w4CJ5.js";import"./index-RYns6xqu.js";import"./index-Br99lKzn.js";import"./index-DIYUg_6P.js";import"./bundle-mjs-Dnoi3Axr.js";import"./index-Bb4qSo10.js";import"./index-rNTiGNI1.js";const q={component:a},s={args:{children:"Primary"}},t={args:{variant:"secondary",children:"Secondary"}},n={args:{variant:"danger",children:"Danger"}},o={args:{variant:"text",children:"Text Button"}},c={args:{variant:"primary"},render:e=>r.jsxs(a,{...e,children:[r.jsx(P,{className:"w-5 h-5"})," Verified"]})},i={args:{disabled:!0,children:"Disabled"},render:e=>r.jsxs("div",{className:"flex gap-8",children:[r.jsxs("div",{className:"flex flex-col items-center gap-3",children:[r.jsx("p",{children:"Normal button"}),r.jsx(a,{variant:"primary",...e})]}),r.jsxs("div",{className:"flex flex-col items-center gap-3",children:[r.jsx("p",{children:"Secondary button"}),r.jsx(a,{variant:"secondary",...e})]}),r.jsxs("div",{className:"flex flex-col items-center gap-3",children:[r.jsx("p",{children:"Text button"}),r.jsx(a,{variant:"text",...e})]})]})};var d,m,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Primary'
  }
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,u,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,v,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Danger'
  }
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,y,j;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    children: 'Text Button'
  }
}`,...(j=(y=o.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var B,b,N;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  render: args => {
    return <Button {...args}>
        <Check className="w-5 h-5" /> Verified
      </Button>;
  }
}`,...(N=(b=c.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var S,D,T;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(D=i.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const z=["Primary","Secondary","Danger","TextButton","IconButton","Disabled"];export{n as Danger,i as Disabled,c as IconButton,s as Primary,t as Secondary,o as TextButton,z as __namedExportsOrder,q as default};
