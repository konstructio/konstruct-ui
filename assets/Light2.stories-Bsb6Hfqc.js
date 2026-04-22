import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-De-1JGbp.js";import{n,t as r}from"./Stepper-DJzoja9k.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{n(),i=t(),{action:a}=__STORYBOOK_MODULE_ACTIONS__,o={title:`In Review/Stepper/Light`,component:r,parameters:{layout:`padded`}},s=[{id:1,label:`Initial configuration`,status:`active`},{id:2,label:`CivoStack details`,status:`pending`},{id:3,label:`Control plane`,status:`error`},{id:4,label:`Initial configuration`,status:`completed`}],c=[{id:1,label:`Select platform`,status:`completed`},{id:2,label:`Set up cluster`,status:`active`},{id:3,label:`Preparing`,status:`pending`}],l=[{id:1,label:`Current step`,status:`active`},{id:2,label:`Default step`,status:`pending`},{id:3,label:`Error`,status:`error`},{id:4,label:`Completed`,status:`completed`}],u=[{id:1,label:`Select platform`,status:`completed`,onClick:()=>a(`step-click`)(`Step 1 clicked (custom callback)`)},{id:2,label:`Set up cluster`,status:`active`},{id:3,label:`Preparing`,status:`pending`},{id:4,label:`Review`,status:`pending`,disabled:!0}],d={name:`Light - Inline (sm)`,render:()=>(0,i.jsx)(`div`,{className:`max-w-fit`,children:(0,i.jsx)(r,{steps:s,size:`sm`})})},f={name:`Light - Inline (md)`,render:()=>(0,i.jsx)(`div`,{className:`max-w-fit`,children:(0,i.jsx)(r,{steps:s,size:`md`})})},p={name:`Light - Inline (lg)`,render:()=>(0,i.jsx)(`div`,{className:`max-w-fit`,children:(0,i.jsx)(r,{steps:s,size:`lg`})})},m={name:`Light - Stacked (lg)`,render:()=>(0,i.jsx)(`div`,{className:`max-w-fit`,children:(0,i.jsx)(r,{steps:c,variant:`stacked`,size:`lg`})})},h={name:`Light - Horizontal (md)`,render:()=>(0,i.jsx)(`div`,{className:`max-w-fit`,children:(0,i.jsx)(r,{steps:l,variant:`horizontal`,size:`md`})})},g={name:`Light - Clickable`,render:()=>(0,i.jsx)(r,{steps:u,size:`md`,clickable:!0,onStepClick:(e,t)=>a(`onStepClick`)(`Step ${t+1}: ${e.label}`)})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Light - Inline (sm)',
  render: () => <div className="max-w-fit">
      <StepperComponent steps={inlineSteps} size="sm" />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Light - Inline (md)',
  render: () => <div className="max-w-fit">
      <StepperComponent steps={inlineSteps} size="md" />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Light - Inline (lg)',
  render: () => <div className="max-w-fit">
      <StepperComponent steps={inlineSteps} size="lg" />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Light - Stacked (lg)',
  render: () => <div className="max-w-fit">
      <StepperComponent steps={stackedSteps} variant="stacked" size="lg" />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Light - Horizontal (md)',
  render: () => <div className="max-w-fit">
      <StepperComponent steps={horizontalSteps} variant="horizontal" size="md" />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Light - Clickable',
  render: () => <StepperComponent steps={clickableSteps} size="md" clickable onStepClick={(step, index) => action('onStepClick')(\`Step \${index + 1}: \${step.label}\`)} />
}`,...g.parameters?.docs?.source}}},_=[`Default`,`InlineMd`,`InlineLg`,`Stacked`,`Horizontal`,`Clickable`]}))();export{g as Clickable,d as Default,h as Horizontal,p as InlineLg,f as InlineMd,m as Stacked,_ as __namedExportsOrder,o as default};