import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{o as n,t as r}from"./iframe-Cx3vh90H.js";import{n as i,t as a}from"./Button-Dac2gy9s.js";import{n as o,t as s}from"./Drawer-lSu9AEpY.js";var c,l,u,d,f,p,m;e((()=>{c=t(n(),1),i(),o(),l=r(),u={title:`In Review/Drawer/Light`,component:s},d={render:function(){let[e,t]=(0,c.useState)(!1);return(0,l.jsxs)(`div`,{className:`w-112.5`,children:[(0,l.jsx)(a,{onClick:()=>t(!0),children:`Open Drawer`}),(0,l.jsxs)(s,{isOpen:e,onClose:()=>t(!1),children:[(0,l.jsx)(s.Header,{children:(0,l.jsx)(`h2`,{className:`text-lg font-semibold`,children:`Drawer Title`})}),(0,l.jsx)(s.Body,{children:(0,l.jsx)(`p`,{className:`text-gray-600`,children:`This is the drawer content. You can put any content here.`})}),(0,l.jsx)(s.Footer,{children:(0,l.jsxs)(`div`,{className:`flex justify-end gap-2`,children:[(0,l.jsx)(a,{variant:`secondary`,onClick:()=>t(!1),children:`Cancel`}),(0,l.jsx)(a,{onClick:()=>t(!1),children:`Confirm`})]})})]})]})}},f={render:function(){let[e,t]=(0,c.useState)(!1);return(0,l.jsxs)(`div`,{className:`w-112.5`,children:[(0,l.jsx)(a,{onClick:()=>t(!0),children:`Open Left Drawer`}),(0,l.jsxs)(s,{isOpen:e,onClose:()=>t(!1),position:`left`,children:[(0,l.jsx)(s.Header,{children:(0,l.jsx)(`h2`,{className:`text-lg font-semibold`,children:`Left Drawer`})}),(0,l.jsx)(s.Body,{children:(0,l.jsx)(`p`,{className:`text-gray-600`,children:`This drawer slides in from the left side.`})}),(0,l.jsx)(s.Footer,{children:(0,l.jsx)(a,{onClick:()=>t(!1),children:`Close`})})]})]})}},p={render:function(){let[e,t]=(0,c.useState)(!1);return(0,l.jsxs)(`div`,{className:`w-112.5`,children:[(0,l.jsx)(a,{onClick:()=>t(!0),children:`Open Resizable Drawer`}),(0,l.jsxs)(s,{isOpen:e,onClose:()=>t(!1),canResize:!0,minWidth:300,maxWidth:900,children:[(0,l.jsx)(s.Header,{children:(0,l.jsx)(`h2`,{className:`text-lg font-semibold`,children:`Resizable Drawer`})}),(0,l.jsx)(s.Body,{children:(0,l.jsx)(`p`,{className:`text-gray-600`,children:`Hover over the left edge and drag to resize this drawer. The width is constrained between 300px and 900px.`})}),(0,l.jsx)(s.Footer,{children:(0,l.jsx)(a,{onClick:()=>t(!1),children:`Close`})})]})]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}},m=[`Default`,`LeftPosition`,`Resizable`]}))();export{d as Default,f as LeftPosition,p as Resizable,m as __namedExportsOrder,u as default};