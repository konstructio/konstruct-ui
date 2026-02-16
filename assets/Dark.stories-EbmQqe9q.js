import{j as e}from"./iframe-BXO_EhpM.js";import{S as a}from"./Stepper-Vm_jqfFt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIgQ6y5l.js";import"./Exclamation-D1EmYde8.js";import"./check-DUkP-dZI.js";import"./createLucideIcon-BvIK0-7g.js";import"./index-CxlmtjIK.js";import"./index-D_E6ICQ7.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,D={title:"In Review/Stepper/Dark",component:a,parameters:{layout:"padded",theme:"dark"}},m=[{id:1,label:"Initial configuration",status:"active"},{id:2,label:"CivoStack details",status:"pending"},{id:3,label:"Control plane",status:"error"},{id:4,label:"Initial configuration",status:"completed"}],c=[{id:1,label:"Select platform",status:"completed"},{id:2,label:"Set up cluster",status:"active"},{id:3,label:"Preparing",status:"pending"}],k=[{id:1,label:"Current step",status:"active"},{id:2,label:"Default step",status:"pending"},{id:3,label:"Error",status:"error"},{id:4,label:"Completed",status:"completed"}],u=[{id:1,label:"Select platform",status:"completed",onClick:()=>o("step-click")("Step 1 clicked (custom callback)")},{id:2,label:"Set up cluster",status:"active"},{id:3,label:"Preparing",status:"pending"},{id:4,label:"Review",status:"pending",disabled:!0}],t={name:"Dark - Inline (sm)",parameters:{theme:"dark"},render:()=>e.jsx("div",{className:"max-w-fit",children:e.jsx(a,{steps:m,size:"sm"})})},r={name:"Dark - Inline (md)",parameters:{theme:"dark"},render:()=>e.jsx("div",{className:"max-w-fit",children:e.jsx(a,{steps:m,size:"md"})})},s={name:"Dark - Inline (lg)",parameters:{theme:"dark"},render:()=>e.jsx("div",{className:"max-w-fit",children:e.jsx(a,{steps:m,size:"lg"})})},i={name:"Dark - Stacked (lg)",parameters:{theme:"dark"},render:()=>e.jsx("div",{className:"max-w-fit",children:e.jsx(a,{steps:c,variant:"stacked",size:"lg"})})},n={name:"Dark - Horizontal (md)",parameters:{theme:"dark"},render:()=>e.jsx("div",{className:"max-w-fit",children:e.jsx(a,{steps:k,variant:"horizontal",size:"md"})})},l={name:"Dark - Clickable",parameters:{theme:"dark"},render:()=>e.jsx(a,{steps:u,size:"md",clickable:!0,onStepClick:(p,d)=>o("onStepClick")(`Step ${d+1}: ${p.label}`)})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Dark - Inline (sm)',
  parameters: {
    theme: 'dark'
  },
  render: () => <div className="max-w-fit">
      <StepperComponent steps={inlineSteps} size="sm" />
    </div>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Dark - Inline (md)',
  parameters: {
    theme: 'dark'
  },
  render: () => <div className="max-w-fit">
      <StepperComponent steps={inlineSteps} size="md" />
    </div>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Dark - Inline (lg)',
  parameters: {
    theme: 'dark'
  },
  render: () => <div className="max-w-fit">
      <StepperComponent steps={inlineSteps} size="lg" />
    </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Dark - Stacked (lg)',
  parameters: {
    theme: 'dark'
  },
  render: () => <div className="max-w-fit">
      <StepperComponent steps={stackedSteps} variant="stacked" size="lg" />
    </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Dark - Horizontal (md)',
  parameters: {
    theme: 'dark'
  },
  render: () => <div className="max-w-fit">
      <StepperComponent steps={horizontalSteps} variant="horizontal" size="md" />
    </div>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Dark - Clickable',
  parameters: {
    theme: 'dark'
  },
  render: () => <StepperComponent steps={clickableSteps} size="md" clickable onStepClick={(step, index) => action('onStepClick')(\`Step \${index + 1}: \${step.label}\`)} />
}`,...l.parameters?.docs?.source}}};const I=["Default","InlineMd","InlineLg","Stacked","Horizontal","Clickable"];export{l as Clickable,t as Default,n as Horizontal,s as InlineLg,r as InlineMd,i as Stacked,I as __namedExportsOrder,D as default};
