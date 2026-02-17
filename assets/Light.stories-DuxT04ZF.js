import{r as i,j as e}from"./iframe-RFUXcFU1.js";import{B as l}from"./Button-CI2FwOyy.js";import{T as n}from"./Typography-CVd2-NB0.js";import{M as t}from"./Modal-CfNmbGJG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DHc_NMzY.js";import"./index-CFloAkMw.js";import"./index-BIgQ6y5l.js";import"./index-BGK4KL-m.js";import"./index-liLHGAx1.js";import"./index-1q7I8vAB.js";import"./Combination-DGMYMVtd.js";import"./x-BmSvVOY4.js";import"./index-hF9rmkUV.js";const T={title:"In Review/Modal/Light",component:t},o={render:function(){const[r,s]=i.useState(!1),a=()=>s(!1);return e.jsxs("div",{className:"w-112.5",children:[e.jsx(l,{onClick:()=>s(!0),children:"Open Modal"}),e.jsxs(t,{isOpen:r,onClose:a,children:[e.jsx(t.Header,{className:"text-center bg-gray-50 p-4 border-b",children:e.jsx(n,{variant:"h4",className:"text-slate-700",children:"This is the Header"})}),e.jsx(t.Body,{children:e.jsx("div",{className:"flex justify-center items-center h-full",children:e.jsx(n,{variant:"body1",className:"text-gray-900",children:"This is the Body"})})}),e.jsx(t.Footer,{className:"text-center bg-gray-50 p-4 border-t",children:e.jsx(n,{variant:"body2",className:"text-slate-500",children:"This is the Footer"})})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const v=["Light"];export{o as Light,v as __namedExportsOrder,T as default};
