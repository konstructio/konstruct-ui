import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-BMXKAMB9.js";import{B as c}from"./Button-DKVlLj91.js";import{M as t}from"./Modal-Cvr8BFQQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CoCdh8rt.js";import"./index-BFzgEiTr.js";import"./index-Bn42e07n.js";import"./index-DfXB-iMf.js";import"./index-Dos7AJl6.js";import"./index-QMvHY_Q7.js";import"./Combination-CG8RNvIm.js";import"./x-iSxXfK4j.js";import"./index-DCPe9Z67.js";const N={title:"In Review/Modal",component:t},o={render:function(){const[n,s]=r.useState(!1),[a,i]=r.useState("kubefirst"),l=()=>s(!1),m=d=>{s(!0),i(d)};return e.jsxs("div",{className:"w-[450px]",children:[e.jsx("div",{className:"flex flex-col gap-5",children:e.jsx(c,{onClick:()=>m("kubefirst"),theme:"kubefirst",children:"Click me to Open Modal with Kubefirst theme!"})}),e.jsxs(t,{isOpen:n,onClose:l,theme:a,children:[e.jsx(t.Header,{className:"text-center text-xl bg-gray-50 p-4 border-b",children:"This is the Header"}),e.jsx(t.Body,{children:e.jsx("div",{className:"flex justify-center items-center h-full text-gray-900",children:"This is the Body"})}),e.jsx(t.Footer,{className:"text-center text-sm bg-gray-50 p-4 border-t",children:"This is the Footer"})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const B=["Modal"];export{o as Modal,B as __namedExportsOrder,N as default};
