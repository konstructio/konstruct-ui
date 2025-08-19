import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-DLdgmZt4.js";import{B as a}from"./Button-CtFCqojV.js";import{M as t}from"./Modal-D4NPvM8r.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CSJ8DwjV.js";import"./index-Cr-WShRT.js";import"./index-CVlngsxW.js";import"./index-DRI8Rog1.js";import"./index-FOwTWP7M.js";import"./index-BiZKgcEk.js";import"./Combination-CxXhutWX.js";import"./x-4TFleLF1.js";import"./index-B3CvqfqZ.js";const w={title:"In Review/Modal",component:t},o={render:()=>{const[c,s]=n.useState(!1),[d,p]=n.useState("kubefirst"),h=()=>s(!1),r=u=>{s(!0),p(u)};return e.jsxs("div",{className:"w-[450px]",children:[e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsx(a,{onClick:()=>r("kubefirst"),theme:"kubefirst",children:"Click me to Open Modal with Kubefirst theme!"}),e.jsx(a,{onClick:()=>r("colony"),theme:"colony",children:"Click me to Open Modal with Colony theme!"})]}),e.jsxs(t,{isOpen:c,onClose:h,theme:d,children:[e.jsx(t.Header,{className:"text-center text-xl bg-gray-50 p-4 border-b",children:"This is the Header"}),e.jsx(t.Body,{children:e.jsx("div",{className:"flex justify-center items-center h-full text-gray-900",children:"This is the Body"})}),e.jsx(t.Footer,{className:"text-center text-sm bg-gray-50 p-4 border-t",children:"This is the Footer"})]})]})}};var l,i,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
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
          <Button onClick={() => handleOpen('colony')} theme="colony">
            Click me to Open Modal with Colony theme!
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
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const F=["Modal"];export{o as Modal,F as __namedExportsOrder,w as default};
