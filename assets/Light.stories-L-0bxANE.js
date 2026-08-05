import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Button-B0XrGfcK.js";import{n as a,t as o}from"./Drawer-BUlFRLXx.js";var s,c,l,u,d,f,p;function m(){return(m=e((()=>{s=t(),r(),a(),c=n(),l={title:`In Review/Drawer/Light`,component:o},u={render:function(){let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(`div`,{className:`w-112.5`,children:[(0,c.jsx)(i,{onClick:()=>t(!0),children:`Open Drawer`}),(0,c.jsxs)(o,{isOpen:e,onClose:()=>t(!1),children:[(0,c.jsx)(o.Header,{children:(0,c.jsx)(`h2`,{className:`text-lg font-semibold`,children:`Drawer Title`})}),(0,c.jsx)(o.Body,{children:(0,c.jsx)(`p`,{className:`text-gray-600`,children:`This is the drawer content. You can put any content here.`})}),(0,c.jsx)(o.Footer,{children:(0,c.jsxs)(`div`,{className:`flex justify-end gap-2`,children:[(0,c.jsx)(i,{variant:`secondary`,onClick:()=>t(!1),children:`Cancel`}),(0,c.jsx)(i,{onClick:()=>t(!1),children:`Confirm`})]})})]})]})}},d={render:function(){let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(`div`,{className:`w-112.5`,children:[(0,c.jsx)(i,{onClick:()=>t(!0),children:`Open Left Drawer`}),(0,c.jsxs)(o,{isOpen:e,onClose:()=>t(!1),position:`left`,children:[(0,c.jsx)(o.Header,{children:(0,c.jsx)(`h2`,{className:`text-lg font-semibold`,children:`Left Drawer`})}),(0,c.jsx)(o.Body,{children:(0,c.jsx)(`p`,{className:`text-gray-600`,children:`This drawer slides in from the left side.`})}),(0,c.jsx)(o.Footer,{children:(0,c.jsx)(i,{onClick:()=>t(!1),children:`Close`})})]})]})}},f={render:function(){let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(`div`,{className:`w-112.5`,children:[(0,c.jsx)(i,{onClick:()=>t(!0),children:`Open Resizable Drawer`}),(0,c.jsxs)(o,{isOpen:e,onClose:()=>t(!1),canResize:!0,minWidth:300,maxWidth:900,children:[(0,c.jsx)(o.Header,{children:(0,c.jsx)(`h2`,{className:`text-lg font-semibold`,children:`Resizable Drawer`})}),(0,c.jsx)(o.Body,{children:(0,c.jsx)(`p`,{className:`text-gray-600`,children:`Hover over the left edge and drag to resize this drawer. The width is constrained between 300px and 900px.`})}),(0,c.jsx)(o.Footer,{children:(0,c.jsx)(i,{onClick:()=>t(!1),children:`Close`})})]})]})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}},p=[`Default`,`LeftPosition`,`Resizable`]})))()}m();export{u as Default,d as LeftPosition,f as Resizable,p as __namedExportsOrder,l as default};