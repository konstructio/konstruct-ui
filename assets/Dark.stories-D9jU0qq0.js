import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{o as n,t as r}from"./iframe-Y1_HDYN6.js";import{n as i,t as a}from"./Typography-BSEqZTC0.js";import{n as o,t as s}from"./Button-6ZrpsF73.js";import{n as c,t as l}from"./Modal-B85DC-BR.js";var u,d,f,p,m;e((()=>{u=t(n(),1),o(),i(),c(),d=r(),f={title:`In Review/Modal/Dark`,component:l},p={parameters:{theme:`dark`},render:function(){let[e,t]=(0,u.useState)(!1);return(0,d.jsxs)(`div`,{className:`w-112.5`,children:[(0,d.jsx)(s,{onClick:()=>t(!0),children:`Open Modal`}),(0,d.jsxs)(l,{isOpen:e,onClose:()=>t(!1),children:[(0,d.jsx)(l.Header,{className:`text-center p-4 border-b`,children:(0,d.jsx)(a,{variant:`h4`,className:`text-slate-200`,children:`This is the Header`})}),(0,d.jsx)(l.Body,{children:(0,d.jsx)(`div`,{className:`flex justify-center items-center h-full`,children:(0,d.jsx)(a,{variant:`body1`,className:`text-slate-50`,children:`This is the Body`})})}),(0,d.jsx)(l.Footer,{className:`text-center p-4 border-t`,children:(0,d.jsx)(a,{variant:`body2`,className:`text-slate-400`,children:`This is the Footer`})})]})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: function ModalStory() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);
    return <div className="w-112.5">
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

        <ModalComponent isOpen={isOpen} onClose={handleClose}>
          <ModalComponent.Header className="text-center p-4 border-b">
            <Typography variant="h4" className="text-slate-200">
              This is the Header
            </Typography>
          </ModalComponent.Header>

          <ModalComponent.Body>
            <div className="flex justify-center items-center h-full">
              <Typography variant="body1" className="text-slate-50">
                This is the Body
              </Typography>
            </div>
          </ModalComponent.Body>

          <ModalComponent.Footer className="text-center p-4 border-t">
            <Typography variant="body2" className="text-slate-400">
              This is the Footer
            </Typography>
          </ModalComponent.Footer>
        </ModalComponent>
      </div>;
  }
}`,...p.parameters?.docs?.source}}},m=[`Dark`]}))();export{p as Dark,m as __namedExportsOrder,f as default};