import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{a as n,i as r,n as i,o as a,r as o,t as s}from"./ToastProvider-BhbcILIj.js";import{n as c,t as l}from"./Button-8tIop7wQ.js";var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{c(),n(),r(),i(),u=t(),d={title:`In Review/Toast/Light`,component:o},f=[`success`,`error`,`warning`,`info`],p=()=>{let{addToast:e}=a();return(0,u.jsx)(`div`,{className:`flex flex-wrap gap-3`,children:f.map(t=>(0,u.jsxs)(l,{variant:`secondary`,onClick:()=>{e({title:`This is ${t===`error`?`an`:`a`} ${t} toast!`,description:t===`error`?`Try again in a few seconds.`:void 0,type:t})},children:[`Publish `,t]},t))})},m={render:e=>(0,u.jsxs)(s,{children:[(0,u.jsx)(p,{}),(0,u.jsx)(o,{...e})]})},h=()=>{let{addToast:e}=a();return(0,u.jsx)(l,{variant:`secondary`,onClick:()=>{e({title:`Published without a provider`,type:`info`})},children:`Publish without provider`})},g={render:e=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(h,{}),(0,u.jsx)(o,{...e})]})},_=[`Light`,`Standalone`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <ToastProvider>
      <Publishers />
      <ToastComponent {...args} />
    </ToastProvider>
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <StandalonePublisher />
      <ToastComponent {...args} />
    </>
}`,...g.parameters?.docs?.source}}}})))()}v();export{m as Light,g as Standalone,_ as __namedExportsOrder,d as default};