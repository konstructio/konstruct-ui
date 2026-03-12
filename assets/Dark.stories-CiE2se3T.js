import{r as l,j as e}from"./iframe-Bx7A06S6.js";import{B as i}from"./Button-43eHLI6h.js";import{T as s}from"./Typography-CVipnvyR.js";import{M as t}from"./Modal-G-5SBRwD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvAy6IBt.js";import"./index-D1FIWJZM.js";import"./index-CwGTy2we.js";import"./index-DUBB8pZe.js";import"./index-Da4694XD.js";import"./index-C0p74kZS.js";import"./Combination-B7Vjl1fU.js";import"./proxy-L-cjAPQv.js";import"./x-CJGwNnI7.js";import"./index-1gMRQfLf.js";const b={title:"In Review/Modal/Dark",component:t},o={parameters:{theme:"dark"},render:function(){const[r,a]=l.useState(!1),n=()=>a(!1);return e.jsxs("div",{className:"w-112.5",children:[e.jsx(i,{onClick:()=>a(!0),children:"Open Modal"}),e.jsxs(t,{isOpen:r,onClose:n,children:[e.jsx(t.Header,{className:"text-center p-4 border-b",children:e.jsx(s,{variant:"h4",className:"text-slate-200",children:"This is the Header"})}),e.jsx(t.Body,{children:e.jsx("div",{className:"flex justify-center items-center h-full",children:e.jsx(s,{variant:"body1",className:"text-slate-50",children:"This is the Body"})})}),e.jsx(t.Footer,{className:"text-center p-4 border-t",children:e.jsx(s,{variant:"body2",className:"text-slate-400",children:"This is the Footer"})})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
