import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BlIEEezU.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,t as i}from"./Input-DPQJcHVJ.js";import{n as a,t as o}from"./Button-BDsJAASj.js";import{n as s,t as c}from"./Tooltip-wdAWAsv-.js";var l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{l=t(),a(),r(),s(),u=n(),d={title:`In Review/Tooltip`,component:c},f={render:()=>(0,u.jsx)(`div`,{className:`flex items-center justify-center h-50`,children:(0,u.jsx)(c,{content:`This is a tooltip`,children:(0,u.jsx)(o,{children:`Hover me`})})})},p={render:()=>(0,u.jsxs)(`div`,{className:`flex items-center justify-center gap-8 h-50`,children:[(0,u.jsx)(c,{content:`Top tooltip`,side:`top`,children:(0,u.jsx)(o,{children:`Top`})}),(0,u.jsx)(c,{content:`Bottom tooltip`,side:`bottom`,children:(0,u.jsx)(o,{children:`Bottom`})}),(0,u.jsx)(c,{content:`Left tooltip`,side:`left`,children:(0,u.jsx)(o,{children:`Left`})}),(0,u.jsx)(c,{content:`Right tooltip`,side:`right`,children:(0,u.jsx)(o,{children:`Right`})})]})},m={render:()=>(0,u.jsxs)(`div`,{className:`flex items-center justify-center gap-8 h-50`,children:[(0,u.jsx)(c,{content:`Danger tooltip`,bgClassName:`bg-red-500`,arrowClassName:`fill-red-500`,textClassName:`text-white`,children:(0,u.jsx)(o,{variant:`danger`,children:`Red`})}),(0,u.jsx)(c,{content:`Success tooltip`,bgClassName:`bg-green-600`,arrowClassName:`fill-green-600`,textClassName:`text-white`,children:(0,u.jsx)(o,{children:`Green`})}),(0,u.jsx)(c,{content:`Info tooltip`,bgClassName:`bg-blue-500`,arrowClassName:`fill-blue-500`,textClassName:`text-white`,children:(0,u.jsx)(o,{variant:`secondary`,children:`Blue`})})]})},h={render:()=>(0,u.jsx)(`div`,{className:`flex items-center justify-center h-50`,children:(0,u.jsx)(c,{content:(0,u.jsxs)(`span`,{className:`font-semibold`,children:[`Rich `,(0,u.jsx)(`em`,{children:`content`}),` tooltip`]}),children:(0,u.jsx)(o,{children:`ReactNode content`})})})},g={parameters:{docs:{description:{story:"`disabled` keeps the children mounted exactly as they are and never opens the tooltip, so it can be toggled while the user types in a field without remounting it."}}},render:()=>(0,u.jsxs)(`div`,{className:`flex items-center justify-center gap-8 h-50`,children:[(0,u.jsx)(c,{content:`You will not see me`,disabled:!0,children:(0,u.jsx)(o,{children:`Disabled tooltip`})}),(0,u.jsx)(c,{content:`But you will see me`,children:(0,u.jsx)(o,{children:`Enabled tooltip`})})]})},_={parameters:{docs:{description:{story:"`asOverlay` renders an invisible trigger over the children instead of wrapping them, for elements that cannot be wrapped or are disabled (native pointer events do not fire on disabled controls). `overlayClassName` positions the trigger; here it covers only the right edge of the input so typing still works, and the tooltip is enabled only when the name is taken."}}},render:function(){let[e,t]=(0,l.useState)(``),n=e.trim().toLowerCase()===`taken`;return(0,u.jsxs)(`div`,{className:`flex flex-col gap-4 w-80`,children:[(0,u.jsx)(c,{asOverlay:!0,side:`right`,content:`The name "${e}" is already in use`,disabled:!n,overlayClassName:`right-0 top-7 h-10 w-10`,children:(0,u.jsx)(i,{label:`Name`,value:e,error:n?`This name is already in use`:void 0,helperText:`Type "taken" to see the tooltip`,onChange:e=>{t(e.target.value)}})}),(0,u.jsx)(c,{asOverlay:!0,side:`right`,content:`This field is locked while the resource is running`,children:(0,u.jsx)(i,{label:`Locked field`,value:`prod-cluster`,disabled:!0,readOnly:!0})})]})}},v=[`Default`,`Positions`,`CustomColors`,`WithReactNodeContent`,`Disabled`,`OverlayOnField`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center h-50">
      <TooltipComponent content="This is a tooltip">
        <Button>Hover me</Button>
      </TooltipComponent>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center gap-8 h-50">
      <TooltipComponent content="Top tooltip" side="top">
        <Button>Top</Button>
      </TooltipComponent>

      <TooltipComponent content="Bottom tooltip" side="bottom">
        <Button>Bottom</Button>
      </TooltipComponent>

      <TooltipComponent content="Left tooltip" side="left">
        <Button>Left</Button>
      </TooltipComponent>

      <TooltipComponent content="Right tooltip" side="right">
        <Button>Right</Button>
      </TooltipComponent>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center gap-8 h-50">
      <TooltipComponent content="Danger tooltip" bgClassName="bg-red-500" arrowClassName="fill-red-500" textClassName="text-white">
        <Button variant="danger">Red</Button>
      </TooltipComponent>

      <TooltipComponent content="Success tooltip" bgClassName="bg-green-600" arrowClassName="fill-green-600" textClassName="text-white">
        <Button>Green</Button>
      </TooltipComponent>

      <TooltipComponent content="Info tooltip" bgClassName="bg-blue-500" arrowClassName="fill-blue-500" textClassName="text-white">
        <Button variant="secondary">Blue</Button>
      </TooltipComponent>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center h-50">
      <TooltipComponent content={<span className="font-semibold">
            Rich <em>content</em> tooltip
          </span>}>
        <Button>ReactNode content</Button>
      </TooltipComponent>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`disabled\` keeps the children mounted exactly as they are and never opens the tooltip, so it can be toggled while the user types in a field without remounting it.'
      }
    }
  },
  render: () => <div className="flex items-center justify-center gap-8 h-50">
      <TooltipComponent content="You will not see me" disabled>
        <Button>Disabled tooltip</Button>
      </TooltipComponent>
      <TooltipComponent content="But you will see me">
        <Button>Enabled tooltip</Button>
      </TooltipComponent>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`asOverlay\` renders an invisible trigger over the children instead of wrapping them, for elements that cannot be wrapped or are disabled (native pointer events do not fire on disabled controls). \`overlayClassName\` positions the trigger; here it covers only the right edge of the input so typing still works, and the tooltip is enabled only when the name is taken.'
      }
    }
  },
  render: function OverlayOnFieldStory() {
    const [name, setName] = useState('');
    const isTaken = name.trim().toLowerCase() === 'taken';
    return <div className="flex flex-col gap-4 w-80">
        <TooltipComponent asOverlay side="right" content={\`The name "\${name}" is already in use\`} disabled={!isTaken} overlayClassName="right-0 top-7 h-10 w-10">
          <Input label="Name" value={name} error={isTaken ? 'This name is already in use' : undefined} helperText='Type "taken" to see the tooltip' onChange={event => {
          setName(event.target.value);
        }} />
        </TooltipComponent>

        <TooltipComponent asOverlay side="right" content="This field is locked while the resource is running">
          <Input label="Locked field" value="prod-cluster" disabled readOnly />
        </TooltipComponent>
      </div>;
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{m as CustomColors,f as Default,g as Disabled,_ as OverlayOnField,p as Positions,h as WithReactNodeContent,v as __namedExportsOrder,d as default};