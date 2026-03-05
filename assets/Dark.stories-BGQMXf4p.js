import{r as l,j as e}from"./iframe-BcKbv-lX.js";import{B as i}from"./Button-BQqMbhet.js";import{T as s}from"./Typography-iicAGQNS.js";import{M as t}from"./Modal-BuYr2KyC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CUevI2Uh.js";import"./index-_mlK3XjR.js";import"./index-CwGTy2we.js";import"./index-BhKwNEBV.js";import"./index-AsspV1sp.js";import"./index-C532_06g.js";import"./Combination-DueizrEs.js";import"./proxy-C_d8N2sM.js";import"./x-7lJAfyET.js";import"./index-lLLj1k7t.js";const b={title:"In Review/Modal/Dark",component:t},o={parameters:{theme:"dark"},render:function(){const[r,a]=l.useState(!1),n=()=>a(!1);return e.jsxs("div",{className:"w-112.5",children:[e.jsx(i,{onClick:()=>a(!0),children:"Open Modal"}),e.jsxs(t,{isOpen:r,onClose:n,children:[e.jsx(t.Header,{className:"text-center p-4 border-b",children:e.jsx(s,{variant:"h4",className:"text-slate-200",children:"This is the Header"})}),e.jsx(t.Body,{children:e.jsx("div",{className:"flex justify-center items-center h-full",children:e.jsx(s,{variant:"body1",className:"text-slate-50",children:"This is the Body"})})}),e.jsx(t.Footer,{className:"text-center p-4 border-t",children:e.jsx(s,{variant:"body2",className:"text-slate-400",children:"This is the Footer"})})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const B=["Dark"];export{o as Dark,B as __namedExportsOrder,b as default};
