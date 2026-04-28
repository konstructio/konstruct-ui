import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{o as n,t as r}from"./iframe-Dy5_rkim.js";import{n as i,t as a}from"./Button-BrWg2iEq.js";import{n as o,t as s}from"./Drawer-BFWweu67.js";var c,l,u,d,f,p,m;e((()=>{c=t(n(),1),i(),o(),l=r(),u={title:`In Review/Drawer/Dark`,component:s},d={parameters:{theme:`dark`},render:function(){let[e,t]=(0,c.useState)(!1);return(0,l.jsxs)(`div`,{className:`w-112.5`,children:[(0,l.jsx)(a,{onClick:()=>t(!0),children:`Open Drawer`}),(0,l.jsxs)(s,{isOpen:e,onClose:()=>t(!1),children:[(0,l.jsx)(s.Header,{children:(0,l.jsx)(`h2`,{className:`text-lg font-semibold text-white`,children:`Dark Drawer`})}),(0,l.jsx)(s.Body,{children:(0,l.jsx)(`p`,{className:`text-metal-400`,children:`This is the drawer content in dark mode.`})}),(0,l.jsx)(s.Footer,{children:(0,l.jsxs)(`div`,{className:`flex justify-end gap-2`,children:[(0,l.jsx)(a,{variant:`secondary`,onClick:()=>t(!1),children:`Cancel`}),(0,l.jsx)(a,{onClick:()=>t(!1),children:`Confirm`})]})})]})]})}},f={parameters:{theme:`dark`},render:function(){let[e,t]=(0,c.useState)(!1);return(0,l.jsxs)(`div`,{className:`w-112.5`,children:[(0,l.jsx)(a,{onClick:()=>t(!0),children:`Open Left Drawer`}),(0,l.jsxs)(s,{isOpen:e,onClose:()=>t(!1),position:`left`,children:[(0,l.jsx)(s.Header,{children:(0,l.jsx)(`h2`,{className:`text-lg font-semibold text-white`,children:`Left Drawer`})}),(0,l.jsx)(s.Body,{children:(0,l.jsx)(`p`,{className:`text-metal-400`,children:`This drawer slides in from the left side.`})}),(0,l.jsx)(s.Footer,{children:(0,l.jsx)(a,{onClick:()=>t(!1),children:`Close`})})]})]})}},p={parameters:{theme:`dark`},render:function(){let[e,t]=(0,c.useState)(!1);return(0,l.jsxs)(`div`,{className:`w-112.5`,children:[(0,l.jsx)(a,{onClick:()=>t(!0),children:`Open Resizable Drawer`}),(0,l.jsxs)(s,{isOpen:e,onClose:()=>t(!1),canResize:!0,minWidth:300,maxWidth:900,children:[(0,l.jsx)(s.Header,{children:(0,l.jsx)(`h2`,{className:`text-lg font-semibold text-white`,children:`Resizable Drawer`})}),(0,l.jsx)(s.Body,{children:(0,l.jsx)(`p`,{className:`text-metal-400`,children:`Hover over the left edge and drag to resize this drawer.`})}),(0,l.jsx)(s.Footer,{children:(0,l.jsx)(a,{onClick:()=>t(!1),children:`Close`})})]})]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}},m=[`Default`,`LeftPosition`,`Resizable`]}))();export{d as Default,f as LeftPosition,p as Resizable,m as __namedExportsOrder,u as default};