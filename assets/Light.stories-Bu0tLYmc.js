import{r as l,j as e}from"./iframe-DLrn8Gk9.js";import{B as t}from"./Button-CIavAXKE.js";import{D as n}from"./Drawer-Dk7bOuvI.js";import"./preload-helper-PPVm8Dsz.js";import"./compiler-runtime-DxXHijtq.js";import"./index-y1nNICkM.js";import"./index-CPvO_3XD.js";import"./index-CwGTy2we.js";import"./index-DFrv0GJx.js";import"./index-BfndZXuq.js";import"./index-8qrDTiGs.js";import"./Combination-Ca5eM5Xw.js";import"./x-DF1zHt4f.js";import"./index-CE1qPSkB.js";const g={title:"In Review/Drawer/Light",component:n},o={render:function(){const[s,r]=l.useState(!1);return e.jsxs("div",{className:"w-112.5",children:[e.jsx(t,{onClick:()=>r(!0),children:"Open Drawer"}),e.jsxs(n,{isOpen:s,onClose:()=>r(!1),children:[e.jsx(n.Header,{children:e.jsx("h2",{className:"text-lg font-semibold",children:"Drawer Title"})}),e.jsx(n.Body,{children:e.jsx("p",{className:"text-gray-600",children:"This is the drawer content. You can put any content here."})}),e.jsx(n.Footer,{children:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(t,{variant:"secondary",onClick:()=>r(!1),children:"Cancel"}),e.jsx(t,{onClick:()=>r(!1),children:"Confirm"})]})})]})]})}},a={render:function(){const[s,r]=l.useState(!1);return e.jsxs("div",{className:"w-112.5",children:[e.jsx(t,{onClick:()=>r(!0),children:"Open Left Drawer"}),e.jsxs(n,{isOpen:s,onClose:()=>r(!1),position:"left",children:[e.jsx(n.Header,{children:e.jsx("h2",{className:"text-lg font-semibold",children:"Left Drawer"})}),e.jsx(n.Body,{children:e.jsx("p",{className:"text-gray-600",children:"This drawer slides in from the left side."})}),e.jsx(n.Footer,{children:e.jsx(t,{onClick:()=>r(!1),children:"Close"})})]})]})}},i={render:function(){const[s,r]=l.useState(!1);return e.jsxs("div",{className:"w-112.5",children:[e.jsx(t,{onClick:()=>r(!0),children:"Open Resizable Drawer"}),e.jsxs(n,{isOpen:s,onClose:()=>r(!1),canResize:!0,minWidth:300,maxWidth:900,children:[e.jsx(n.Header,{children:e.jsx("h2",{className:"text-lg font-semibold",children:"Resizable Drawer"})}),e.jsx(n.Body,{children:e.jsx("p",{className:"text-gray-600",children:"Hover over the left edge and drag to resize this drawer. The width is constrained between 300px and 900px."})}),e.jsx(n.Footer,{children:e.jsx(t,{onClick:()=>r(!1),children:"Close"})})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function DrawerStory() {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="w-112.5">
        <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>

        <DrawerComponent isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <DrawerComponent.Header>
            <h2 className="text-lg font-semibold">Drawer Title</h2>
          </DrawerComponent.Header>

          <DrawerComponent.Body>
            <p className="text-gray-600">
              This is the drawer content. You can put any content here.
            </p>
          </DrawerComponent.Body>

          <DrawerComponent.Footer>
            <div className="flex justify-end gap-2">
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>Confirm</Button>
            </div>
          </DrawerComponent.Footer>
        </DrawerComponent>
      </div>;
  }
} satisfies Story`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function DrawerLeftStory() {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="w-112.5">
        <Button onClick={() => setIsOpen(true)}>Open Left Drawer</Button>

        <DrawerComponent isOpen={isOpen} onClose={() => setIsOpen(false)} position="left">
          <DrawerComponent.Header>
            <h2 className="text-lg font-semibold">Left Drawer</h2>
          </DrawerComponent.Header>

          <DrawerComponent.Body>
            <p className="text-gray-600">
              This drawer slides in from the left side.
            </p>
          </DrawerComponent.Body>

          <DrawerComponent.Footer>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </DrawerComponent.Footer>
        </DrawerComponent>
      </div>;
  }
} satisfies Story`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function DrawerResizableStory() {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="w-112.5">
        <Button onClick={() => setIsOpen(true)}>Open Resizable Drawer</Button>

        <DrawerComponent isOpen={isOpen} onClose={() => setIsOpen(false)} canResize minWidth={300} maxWidth={900}>
          <DrawerComponent.Header>
            <h2 className="text-lg font-semibold">Resizable Drawer</h2>
          </DrawerComponent.Header>

          <DrawerComponent.Body>
            <p className="text-gray-600">
              Hover over the left edge and drag to resize this drawer. The width
              is constrained between 300px and 900px.
            </p>
          </DrawerComponent.Body>

          <DrawerComponent.Footer>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </DrawerComponent.Footer>
        </DrawerComponent>
      </div>;
  }
} satisfies Story`,...i.parameters?.docs?.source}}};const N=["Default","LeftPosition","Resizable"];export{o as Default,a as LeftPosition,i as Resizable,N as __namedExportsOrder,g as default};
