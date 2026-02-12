import{r as l,j as e}from"./iframe-CXfe2m7b.js";import{B as s}from"./Button-C-iR94TL.js";import{D as r}from"./Drawer-BFy9-Gbw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CT5XcF7v.js";import"./index-HWT8ds2M.js";import"./index-B-7A89sm.js";import"./index-FvRiF7xr.js";import"./index-B0Yk7S0c.js";import"./index-CATosLJL.js";import"./Combination-D1HqrIFe.js";import"./x-CDPRTwMM.js";import"./index-DpMUpOLZ.js";const B={title:"In Review/Drawer/Dark",component:r},o={parameters:{theme:"dark"},render:function(){const[a,t]=l.useState(!1);return e.jsxs("div",{className:"w-112.5",children:[e.jsx(s,{onClick:()=>t(!0),children:"Open Drawer"}),e.jsxs(r,{isOpen:a,onClose:()=>t(!1),children:[e.jsx(r.Header,{children:e.jsx("h2",{className:"text-lg font-semibold text-white",children:"Dark Drawer"})}),e.jsx(r.Body,{children:e.jsx("p",{className:"text-metal-400",children:"This is the drawer content in dark mode."})}),e.jsx(r.Footer,{children:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(s,{variant:"secondary",onClick:()=>t(!1),children:"Cancel"}),e.jsx(s,{onClick:()=>t(!1),children:"Confirm"})]})})]})]})}},n={parameters:{theme:"dark"},render:function(){const[a,t]=l.useState(!1);return e.jsxs("div",{className:"w-112.5",children:[e.jsx(s,{onClick:()=>t(!0),children:"Open Left Drawer"}),e.jsxs(r,{isOpen:a,onClose:()=>t(!1),position:"left",children:[e.jsx(r.Header,{children:e.jsx("h2",{className:"text-lg font-semibold text-white",children:"Left Drawer"})}),e.jsx(r.Body,{children:e.jsx("p",{className:"text-metal-400",children:"This drawer slides in from the left side."})}),e.jsx(r.Footer,{children:e.jsx(s,{onClick:()=>t(!1),children:"Close"})})]})]})}},i={parameters:{theme:"dark"},render:function(){const[a,t]=l.useState(!1);return e.jsxs("div",{className:"w-112.5",children:[e.jsx(s,{onClick:()=>t(!0),children:"Open Resizable Drawer"}),e.jsxs(r,{isOpen:a,onClose:()=>t(!1),canResize:!0,minWidth:300,maxWidth:900,children:[e.jsx(r.Header,{children:e.jsx("h2",{className:"text-lg font-semibold text-white",children:"Resizable Drawer"})}),e.jsx(r.Body,{children:e.jsx("p",{className:"text-metal-400",children:"Hover over the left edge and drag to resize this drawer."})}),e.jsx(r.Footer,{children:e.jsx(s,{onClick:()=>t(!1),children:"Close"})})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: function DrawerDarkStory() {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="w-112.5">
        <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>

        <DrawerComponent isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <DrawerComponent.Header>
            <h2 className="text-lg font-semibold text-white">Dark Drawer</h2>
          </DrawerComponent.Header>

          <DrawerComponent.Body>
            <p className="text-metal-400">
              This is the drawer content in dark mode.
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
} satisfies Story`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: function DrawerLeftDarkStory() {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="w-112.5">
        <Button onClick={() => setIsOpen(true)}>Open Left Drawer</Button>

        <DrawerComponent isOpen={isOpen} onClose={() => setIsOpen(false)} position="left">
          <DrawerComponent.Header>
            <h2 className="text-lg font-semibold text-white">Left Drawer</h2>
          </DrawerComponent.Header>

          <DrawerComponent.Body>
            <p className="text-metal-400">
              This drawer slides in from the left side.
            </p>
          </DrawerComponent.Body>

          <DrawerComponent.Footer>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </DrawerComponent.Footer>
        </DrawerComponent>
      </div>;
  }
} satisfies Story`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: function DrawerResizableDarkStory() {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="w-112.5">
        <Button onClick={() => setIsOpen(true)}>Open Resizable Drawer</Button>

        <DrawerComponent isOpen={isOpen} onClose={() => setIsOpen(false)} canResize minWidth={300} maxWidth={900}>
          <DrawerComponent.Header>
            <h2 className="text-lg font-semibold text-white">
              Resizable Drawer
            </h2>
          </DrawerComponent.Header>

          <DrawerComponent.Body>
            <p className="text-metal-400">
              Hover over the left edge and drag to resize this drawer.
            </p>
          </DrawerComponent.Body>

          <DrawerComponent.Footer>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </DrawerComponent.Footer>
        </DrawerComponent>
      </div>;
  }
} satisfies Story`,...i.parameters?.docs?.source}}};const y=["Default","LeftPosition","Resizable"];export{o as Default,n as LeftPosition,i as Resizable,y as __namedExportsOrder,B as default};
