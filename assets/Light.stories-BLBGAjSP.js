import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Typography-BJCVf6qf.js";import{n as a,t as o}from"./Button-B0XrGfcK.js";import{n as s,t as c}from"./Modal-DnKq2ddg.js";var l,u,d,f,p;function m(){return(m=e((()=>{l=t(),a(),r(),s(),u=n(),d={title:`In Review/Modal/Light`,component:c},f={render:function(){let[e,t]=(0,l.useState)(!1);return(0,u.jsxs)(`div`,{className:`w-112.5`,children:[(0,u.jsx)(o,{onClick:()=>t(!0),children:`Open Modal`}),(0,u.jsxs)(c,{isOpen:e,onClose:()=>t(!1),children:[(0,u.jsx)(c.Header,{className:`text-center bg-gray-50 p-4 border-b`,children:(0,u.jsx)(i,{variant:`h4`,className:`text-slate-700`,children:`This is the Header`})}),(0,u.jsx)(c.Body,{children:(0,u.jsx)(`div`,{className:`flex justify-center items-center h-full`,children:(0,u.jsx)(i,{variant:`body1`,className:`text-gray-900`,children:`This is the Body`})})}),(0,u.jsx)(c.Footer,{className:`text-center bg-gray-50 p-4 border-t`,children:(0,u.jsx)(i,{variant:`body2`,className:`text-slate-500`,children:`This is the Footer`})})]})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function ModalStory() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);
    return <div className="w-112.5">
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

        <ModalComponent isOpen={isOpen} onClose={handleClose}>
          <ModalComponent.Header className="text-center bg-gray-50 p-4 border-b">
            <Typography variant="h4" className="text-slate-700">
              This is the Header
            </Typography>
          </ModalComponent.Header>

          <ModalComponent.Body>
            <div className="flex justify-center items-center h-full">
              <Typography variant="body1" className="text-gray-900">
                This is the Body
              </Typography>
            </div>
          </ModalComponent.Body>

          <ModalComponent.Footer className="text-center bg-gray-50 p-4 border-t">
            <Typography variant="body2" className="text-slate-500">
              This is the Footer
            </Typography>
          </ModalComponent.Footer>
        </ModalComponent>
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p=[`Light`]})))()}m();export{f as Light,p as __namedExportsOrder,d as default};