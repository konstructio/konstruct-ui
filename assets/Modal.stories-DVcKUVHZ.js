import{r,j as e}from"./iframe-CnMfofFe.js";import{B as c}from"./Button-uwP2Lhrv.js";import{M as t}from"./Modal-C2LAY5mm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-IjtP-zJr.js";import"./index-CC9DTSuM.js";import"./index-B-7A89sm.js";import"./index-DWzABNC7.js";import"./index-6GNezexY.js";import"./index-lCSATOKl.js";import"./Combination-CB1l8Zjf.js";import"./x-BE7-eQn1.js";import"./index-CwzAOfX9.js";const v={title:"In Review/Modal",component:t},s={render:function(){const[n,o]=r.useState(!1),[a,i]=r.useState("kubefirst"),l=()=>o(!1),m=d=>{o(!0),i(d)};return e.jsxs("div",{className:"w-[450px]",children:[e.jsx("div",{className:"flex flex-col gap-5",children:e.jsx(c,{onClick:()=>m("kubefirst"),theme:"kubefirst",children:"Click me to Open Modal with Kubefirst theme!"})}),e.jsxs(t,{isOpen:n,onClose:l,theme:a,children:[e.jsx(t.Header,{className:"text-center text-xl bg-gray-50 p-4 border-b",children:"This is the Header"}),e.jsx(t.Body,{children:e.jsx("div",{className:"flex justify-center items-center h-full text-gray-900",children:"This is the Body"})}),e.jsx(t.Footer,{className:"text-center text-sm bg-gray-50 p-4 border-t",children:"This is the Footer"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function ModalStory() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState<Theme>('kubefirst');
    const handleClose = () => setIsOpen(false);
    const handleOpen = (theme?: Theme) => {
      setIsOpen(true);
      setCurrentTheme(theme);
    };
    return <div className="w-[450px]">
        <div className="flex flex-col gap-5">
          <Button onClick={() => handleOpen('kubefirst')} theme="kubefirst">
            Click me to Open Modal with Kubefirst theme!
          </Button>
        </div>

        <ModalComponent isOpen={isOpen} onClose={handleClose} theme={currentTheme}>
          <ModalComponent.Header className="text-center text-xl bg-gray-50 p-4 border-b">
            This is the Header
          </ModalComponent.Header>

          <ModalComponent.Body>
            <div className="flex justify-center items-center h-full text-gray-900">
              This is the Body
            </div>
          </ModalComponent.Body>

          <ModalComponent.Footer className="text-center text-sm bg-gray-50 p-4 border-t">
            This is the Footer
          </ModalComponent.Footer>
        </ModalComponent>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const N=["Modal"];export{s as Modal,N as __namedExportsOrder,v as default};
