import{r as i,j as e}from"./iframe-DLrn8Gk9.js";import{B as l}from"./Button-CIavAXKE.js";import{T as s}from"./Typography-CHpAwWZY.js";import{M as t}from"./Modal-a04sypnp.js";import"./preload-helper-PPVm8Dsz.js";import"./compiler-runtime-DxXHijtq.js";import"./index-y1nNICkM.js";import"./index-CPvO_3XD.js";import"./index-CwGTy2we.js";import"./index-BfndZXuq.js";import"./index-8qrDTiGs.js";import"./index-DFrv0GJx.js";import"./Combination-Ca5eM5Xw.js";import"./x-DF1zHt4f.js";import"./index-CE1qPSkB.js";import"./proxy-yAJNhRAm.js";const B={title:"In Review/Modal/Dark",component:t},o={parameters:{theme:"dark"},render:function(){const[a,r]=i.useState(!1),n=()=>r(!1);return e.jsxs("div",{className:"w-112.5",children:[e.jsx(l,{onClick:()=>r(!0),children:"Open Modal"}),e.jsxs(t,{isOpen:a,onClose:n,children:[e.jsx(t.Header,{className:"text-center p-4 border-b",children:e.jsx(s,{variant:"h4",className:"text-slate-200",children:"This is the Header"})}),e.jsx(t.Body,{children:e.jsx("div",{className:"flex justify-center items-center h-full",children:e.jsx(s,{variant:"body1",className:"text-slate-50",children:"This is the Body"})})}),e.jsx(t.Footer,{className:"text-center p-4 border-t",children:e.jsx(s,{variant:"body2",className:"text-slate-400",children:"This is the Footer"})})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const g=["Dark"];export{o as Dark,g as __namedExportsOrder,B as default};
