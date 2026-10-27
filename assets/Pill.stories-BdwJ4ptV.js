import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{n,t as r}from"./ArrowBack-Ce7SbZZg.js";import{n as i,t as a}from"./Button-BDsJAASj.js";var o,s,c,l;function u(){return(u=e((()=>{n(),i(),o=t(),s={title:`In Review/Button/Light/Pill`,component:a},c={parameters:{docs:{description:{story:'`shape="pill"` rounds the button fully. With `asChild` and `disabled`, the rendered child (a link here) becomes inert and `aria-disabled` instead of receiving an invalid `disabled` attribute.'}}},render:()=>(0,o.jsxs)(`div`,{className:`flex flex-col gap-5 w-fit`,children:[(0,o.jsxs)(a,{shape:`pill`,children:[`Continue`,(0,o.jsx)(r,{className:`rotate-180`})]}),(0,o.jsx)(a,{shape:`pill`,variant:`secondary`,children:`Secondary pill`}),(0,o.jsx)(a,{asChild:!0,children:(0,o.jsx)(`a`,{href:`#billing`,children:`Manage billing`})}),(0,o.jsx)(a,{asChild:!0,disabled:!0,children:(0,o.jsx)(`a`,{href:`#billing`,children:`Manage billing (disabled link)`})})]})},l=[`Pill`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`shape="pill"\` rounds the button fully. With \`asChild\` and \`disabled\`, the rendered child (a link here) becomes inert and \`aria-disabled\` instead of receiving an invalid \`disabled\` attribute.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-5 w-fit">
      <Button shape="pill">
        Continue
        <ArrowBackIcon className="rotate-180" />
      </Button>

      <Button shape="pill" variant="secondary">
        Secondary pill
      </Button>

      <Button asChild>
        <a href="#billing">Manage billing</a>
      </Button>

      <Button asChild disabled>
        <a href="#billing">Manage billing (disabled link)</a>
      </Button>
    </div>
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Pill,l as __namedExportsOrder,s as default};