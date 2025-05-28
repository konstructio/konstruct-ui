import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-CDlOlYQx.js";import{B as a}from"./Button-d4wb6RDw.js";import{M as t}from"./Modal-CYZ1ck3c.js";import"./index-4AoDZzVP.js";import"./index-DJQVxuCM.js";import"./index-BGZCjPBa.js";import"./index-CA2ozmjx.js";import"./index-B7AWRyS0.js";import"./index-CJ419dTJ.js";import"./Combination-C0pCHLW_.js";import"./x-BnoV_6bz.js";import"./index-_3p-ol44.js";const N={title:"In Review/Modal",component:t},o={render:()=>{const[c,s]=n.useState(!1),[d,h]=n.useState("kubefirst"),p=()=>s(!1),r=u=>{s(!0),h(u)};return e.jsxs("div",{className:"w-[450px]",children:[e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsx(a,{onClick:()=>r("kubefirst"),theme:"kubefirst",children:"Click me to Open Modal with Kubefirst theme!"}),e.jsx(a,{onClick:()=>r("colony"),theme:"colony",children:"Click me to Open Modal with Colony theme!"})]}),e.jsxs(t,{isOpen:c,onClose:p,theme:d,children:[e.jsx(t.Header,{className:"text-center text-xl bg-gray-50 p-4 border-b",children:"This is the Header"}),e.jsx(t.Body,{children:e.jsx("div",{className:"flex justify-center items-center h-full text-gray-900",children:"This is the Body"})}),e.jsx(t.Footer,{className:"text-center text-sm bg-gray-50 p-4 border-t",children:"This is the Footer"})]})]})}};var l,i,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const w=["Modal"];export{o as Modal,w as __namedExportsOrder,N as default};
