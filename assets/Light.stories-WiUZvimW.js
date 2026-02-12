import{j as e}from"./iframe-CXfe2m7b.js";import{S as t}from"./Stepper-BJp0FP2T.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Exclamation-CKmW4ZJX.js";import"./check-HC_XVOv1.js";import"./createLucideIcon-DP3qgoNS.js";import"./index-CT5XcF7v.js";import"./index-HWT8ds2M.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,L={title:"In Review/Stepper/Light",component:t,parameters:{layout:"padded"}},o=[{id:1,label:"Initial configuration",status:"active"},{id:2,label:"CivoStack details",status:"pending"},{id:3,label:"Control plane",status:"error"},{id:4,label:"Initial configuration",status:"completed"}],m=[{id:1,label:"Select platform",status:"completed"},{id:2,label:"Set up cluster",status:"active"},{id:3,label:"Preparing",status:"pending"}],u=[{id:1,label:"Current step",status:"active"},{id:2,label:"Default step",status:"pending"},{id:3,label:"Error",status:"error"},{id:4,label:"Completed",status:"completed"}],S=[{id:1,label:"Select platform",status:"completed",onClick:()=>c("step-click")("Step 1 clicked (custom callback)")},{id:2,label:"Set up cluster",status:"active"},{id:3,label:"Preparing",status:"pending"},{id:4,label:"Review",status:"pending",disabled:!0}],s={name:"Light - Inline (sm)",render:()=>e.jsx("div",{className:"max-w-fit",children:e.jsx(t,{steps:o,size:"sm"})})},a={name:"Light - Inline (md)",render:()=>e.jsx("div",{className:"max-w-fit",children:e.jsx(t,{steps:o,size:"md"})})},i={name:"Light - Inline (lg)",render:()=>e.jsx("div",{className:"max-w-fit",children:e.jsx(t,{steps:o,size:"lg"})})},r={name:"Light - Stacked (lg)",render:()=>e.jsx("div",{className:"max-w-fit",children:e.jsx(t,{steps:m,variant:"stacked",size:"lg"})})},n={name:"Light - Horizontal (md)",render:()=>e.jsx("div",{className:"max-w-fit",children:e.jsx(t,{steps:u,variant:"horizontal",size:"md"})})},l={name:"Light - Clickable",render:()=>e.jsx(t,{steps:S,size:"md",clickable:!0,onStepClick:(p,d)=>c("onStepClick")(`Step ${d+1}: ${p.label}`)})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Light - Inline (sm)',
  render: () => <div className="max-w-fit">
      <StepperComponent steps={inlineSteps} size="sm" />
    </div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Light - Inline (md)',
  render: () => <div className="max-w-fit">
      <StepperComponent steps={inlineSteps} size="md" />
    </div>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Light - Inline (lg)',
  render: () => <div className="max-w-fit">
      <StepperComponent steps={inlineSteps} size="lg" />
    </div>
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Light - Stacked (lg)',
  render: () => <div className="max-w-fit">
      <StepperComponent steps={stackedSteps} variant="stacked" size="lg" />
    </div>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Light - Horizontal (md)',
  render: () => <div className="max-w-fit">
      <StepperComponent steps={horizontalSteps} variant="horizontal" size="md" />
    </div>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Light - Clickable',
  render: () => <StepperComponent steps={clickableSteps} size="md" clickable onStepClick={(step, index) => action('onStepClick')(\`Step \${index + 1}: \${step.label}\`)} />
}`,...l.parameters?.docs?.source}}};const I=["Default","InlineMd","InlineLg","Stacked","Horizontal","Clickable"];export{l as Clickable,s as Default,n as Horizontal,i as InlineLg,a as InlineMd,r as Stacked,I as __namedExportsOrder,L as default};
