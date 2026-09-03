import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Button-DBH2wbJQ.js";import{n as a,t as o}from"./Drawer-DS2QJ_4N.js";var s,c,l,u,d,f,p;function m(){return(m=e((()=>{s=t(),r(),a(),c=n(),l={title:`In Review/Drawer/Dark`,component:o},u={parameters:{theme:`dark`},render:function(){let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(`div`,{className:`w-112.5`,children:[(0,c.jsx)(i,{onClick:()=>t(!0),children:`Open Drawer`}),(0,c.jsxs)(o,{isOpen:e,onClose:()=>t(!1),children:[(0,c.jsx)(o.Header,{children:(0,c.jsx)(`h2`,{className:`text-lg font-semibold text-white`,children:`Dark Drawer`})}),(0,c.jsx)(o.Body,{children:(0,c.jsx)(`p`,{className:`text-metal-400`,children:`This is the drawer content in dark mode.`})}),(0,c.jsx)(o.Footer,{children:(0,c.jsxs)(`div`,{className:`flex justify-end gap-2`,children:[(0,c.jsx)(i,{variant:`secondary`,onClick:()=>t(!1),children:`Cancel`}),(0,c.jsx)(i,{onClick:()=>t(!1),children:`Confirm`})]})})]})]})}},d={parameters:{theme:`dark`},render:function(){let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(`div`,{className:`w-112.5`,children:[(0,c.jsx)(i,{onClick:()=>t(!0),children:`Open Left Drawer`}),(0,c.jsxs)(o,{isOpen:e,onClose:()=>t(!1),position:`left`,children:[(0,c.jsx)(o.Header,{children:(0,c.jsx)(`h2`,{className:`text-lg font-semibold text-white`,children:`Left Drawer`})}),(0,c.jsx)(o.Body,{children:(0,c.jsx)(`p`,{className:`text-metal-400`,children:`This drawer slides in from the left side.`})}),(0,c.jsx)(o.Footer,{children:(0,c.jsx)(i,{onClick:()=>t(!1),children:`Close`})})]})]})}},f={parameters:{theme:`dark`},render:function(){let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(`div`,{className:`w-112.5`,children:[(0,c.jsx)(i,{onClick:()=>t(!0),children:`Open Resizable Drawer`}),(0,c.jsxs)(o,{isOpen:e,onClose:()=>t(!1),canResize:!0,minWidth:300,maxWidth:900,children:[(0,c.jsx)(o.Header,{children:(0,c.jsx)(`h2`,{className:`text-lg font-semibold text-white`,children:`Resizable Drawer`})}),(0,c.jsx)(o.Body,{children:(0,c.jsx)(`p`,{className:`text-metal-400`,children:`Hover over the left edge and drag to resize this drawer.`})}),(0,c.jsx)(o.Footer,{children:(0,c.jsx)(i,{onClick:()=>t(!1),children:`Close`})})]})]})}},p=[`Default`,`LeftPosition`,`Resizable`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}}})))()}m();export{u as Default,d as LeftPosition,f as Resizable,p as __namedExportsOrder,l as default};