import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{a as n,i as r,n as i,o as a,r as o,t as s}from"./ToastProvider-rKcBy859.js";import{n as c,t as l}from"./Button-8tIop7wQ.js";var u,d,f,p,m,h;function g(){return(g=e((()=>{c(),n(),r(),i(),u=t(),d={title:`In Review/Toast/Dark`,component:o},f=[`success`,`error`,`warning`,`info`],p=()=>{let{addToast:e}=a();return(0,u.jsx)(`div`,{className:`flex flex-wrap gap-3`,children:f.map(t=>(0,u.jsxs)(l,{variant:`secondary`,onClick:()=>{e({title:`This is ${t===`error`?`an`:`a`} ${t} toast!`,description:t===`error`?`Try again in a few seconds.`:void 0,type:t})},children:[`Publish `,t]},t))})},m={parameters:{theme:`dark`},render:e=>(0,u.jsxs)(s,{children:[(0,u.jsx)(p,{}),(0,u.jsx)(o,{...e})]})},h=[`Dark`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: args => <ToastProvider>
      <Publishers />
      <ToastComponent {...args} />
    </ToastProvider>
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as Dark,h as __namedExportsOrder,d as default};