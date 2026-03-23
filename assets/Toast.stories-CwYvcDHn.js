import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{o as n,t as r}from"./iframe-Cmi29qjC.js";import{n as i,t as a}from"./Button-DqGVNZjK.js";import{n as o,t as s}from"./Toast-C9sF9SLU.js";var c,l,u,d,f,p,m;e((()=>{c=t(n(),1),i(),o(),l=r(),u={title:`In Review/Toast`,component:s},d={args:{duration:5e3,variant:`success`,title:(0,l.jsx)(`span`,{children:`This is an success toast!`})},render:function(e){let[t,n]=(0,c.useState)(!1);return(0,l.jsxs)(`div`,{className:`w-87.5 flex flex-col gap-3`,children:[(0,l.jsx)(a,{onClick:()=>n(!0),children:`Open Success Toast`}),(0,l.jsx)(s,{...e,open:t,setOpen:n})]})}},f={args:{duration:5e3,variant:`error`,title:(0,l.jsx)(`span`,{children:`This is an error toast!`})},render:function(e){let[t,n]=(0,c.useState)(!1);return(0,l.jsxs)(`div`,{className:`w-87.5 flex flex-col gap-3`,children:[(0,l.jsx)(a,{onClick:()=>n(!0),children:`Open Error Toast`}),(0,l.jsx)(s,{...e,open:t,setOpen:n})]})}},p={args:{duration:5e3,variant:`warning`,title:(0,l.jsx)(`span`,{children:`This is a warning toast!`})},render:function(e){let[t,n]=(0,c.useState)(!1);return(0,l.jsxs)(`div`,{className:`w-87.5 flex flex-col gap-3`,children:[(0,l.jsx)(a,{onClick:()=>n(!0),children:`Open Warning Toast`}),(0,l.jsx)(s,{...e,open:t,setOpen:n})]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 5000,
    variant: 'success',
    title: <span>This is an success toast!</span>
  },
  render: function ToastStory(args) {
    const [open, setOpen] = useState(false);
    return <div className="w-87.5 flex flex-col gap-3">
        <Button onClick={() => setOpen(true)}>Open Success Toast</Button>
        <ToastComponent {...args} open={open} setOpen={setOpen} />
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 5000,
    variant: 'error',
    title: <span>This is an error toast!</span>
  },
  render: function ToastStory(args) {
    const [open, setOpen] = useState(false);
    return <div className="w-87.5 flex flex-col gap-3">
        <Button onClick={() => setOpen(true)}>Open Error Toast</Button>
        <ToastComponent {...args} open={open} setOpen={setOpen} />
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 5000,
    variant: 'warning',
    title: <span>This is a warning toast!</span>
  },
  render: function ToastStory(args) {
    const [open, setOpen] = useState(false);
    return <div className="w-87.5 flex flex-col gap-3">
        <Button onClick={() => setOpen(true)}>Open Warning Toast</Button>
        <ToastComponent {...args} open={open} setOpen={setOpen} />
      </div>;
  }
}`,...p.parameters?.docs?.source}}},m=[`Success`,`Error`,`Warning`]}))();export{f as Error,d as Success,p as Warning,m as __namedExportsOrder,u as default};