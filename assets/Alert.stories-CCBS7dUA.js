import{r as t,j as e}from"./iframe-iNNCIJQj.js";import{V as b}from"./index-lRAc2r8H.js";import{a as u,c as d}from"./index-B-7A89sm.js";import{X as x}from"./x-C1rEJ1IS.js";import{I as y}from"./info-CC8iWoAZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D6fsOiNw.js";import"./index-D1dj3KAc.js";import"./index-NdrXZRaE.js";import"./index-DagSfKua.js";import"./index-D6M8j4DE.js";const w=u(["relative","border","py-4","px-5","rounded","flex","gap-2","items-center","justify-start","[&>*]:flex","[&>*]:gap-2","[&>*]:items-center","[&>*]:justify-start","text-sm","shadow-sm","duration-300","data-[state=hidden]:animate-out","data-[state=hidden]:fade-out-0","data-[state=hidden]:zoom-out-95"],{variants:{type:{sucess:"",info:["border-blue-100","bg-blue-50","text-zinc-700","[&>*>svg]:text-blue-600","shadow-blue-50/40"],warning:"",danger:""},isVisible:{true:"",false:"hidden"}},defaultVariants:{isVisible:!0}}),v=u(["w-4","h-4","absolute","right-2","top-2","text-inherit","cursor-pointer"],{variants:{type:{sucess:"",info:["text-blue-600"],warning:"",danger:""}}}),i=({theme:s,type:c,content:r,isVisible:l=!0,showCloseButton:p=!1})=>{const o=t.useRef(null),[m,h]=t.useState(l),f=t.useMemo(()=>t.isValidElement(r)?r:e.jsx("p",{children:r}),[r]),g=t.useCallback(()=>{const n=o.current;n&&n.setAttribute("data-state","hidden")},[]);return t.useEffect(()=>{const n=new AbortController;return o.current?.addEventListener("animationend",()=>{o.current?.style.setProperty("display","none"),h(!1)},{signal:n.signal}),()=>n.abort()},[]),m?e.jsxs("div",{ref:o,className:d(w({type:c,isVisible:l})),"data-state":l?"visible":"hidden","data-theme":s,role:"alert","aria-live":"polite",children:[f,p?e.jsxs("button",{role:"button",onClick:g,children:[e.jsx(x,{className:d(v({type:c}))}),e.jsx(b,{children:"Dismiss alert"})]}):null]}):null};i.__docgenInfo={description:`An alert component for displaying feedback messages.
Supports success, error, warning, and info variants with optional dismiss button.

@example
\`\`\`tsx
// Success alert
<Alert type="success" content="Changes saved successfully!" />

// Error alert with close button
<Alert
  type="error"
  content="Failed to save changes. Please try again."
  showCloseButton
/>

// Warning alert with custom content
<Alert
  type="warning"
  content={
    <div>
      <strong>Warning:</strong> This action cannot be undone.
    </div>
  }
/>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-alert--docs Storybook}`,methods:[],displayName:"Alert",props:{dismissible:{required:!1,tsType:{name:"boolean"},description:"Whether the alert can be dismissed (deprecated, use showCloseButton)"},content:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Alert message content (string or ReactNode)"},isVisible:{required:!1,tsType:{name:"boolean"},description:"Whether the alert is visible",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Show close button to dismiss alert",defaultValue:{value:"false",computed:!1}},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"}},composes:["VariantProps"]};const I={title:"In Review/Alert",component:i},a={args:{content:e.jsxs("p",{children:[e.jsx(y,{className:"w-4 h-4"})," Ensure you have an AWS cloud account with billing enabled."]})},render:s=>e.jsxs("div",{role:"alert","aria-live":"polite",className:"w-[600px] flex flex-col gap-3",children:[e.jsx(i,{...s,type:"info"}),e.jsx(i,{...s,type:"info",showCloseButton:!0})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    content: <p>
        <Info className="w-4 h-4" /> Ensure you have an AWS cloud account with
        billing enabled.
      </p>
  },
  render: args => {
    return <div role="alert" aria-live="polite" className="w-[600px] flex flex-col gap-3">
        <AlertComponent {...args} type="info" />

        <AlertComponent {...args} type="info" showCloseButton={true} />
      </div>;
  }
} satisfies Story`,...a.parameters?.docs?.source}}};const W=["Alert"];export{a as Alert,W as __namedExportsOrder,I as default};
