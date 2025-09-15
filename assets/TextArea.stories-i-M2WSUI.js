import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-es3ybDkk.js";import{c as x,a as g}from"./index-CJCZd66Q.js";import"./preload-helper-D9Z9MdNV.js";const h=x(["border","border-gray-200","disabled:cursor-not-allowed","disabled:opacity-50","focus-visible:outline-none","focus-visible:ring-1","focus-visible:ring-ring","p-2","placeholder:text-gray-300","resize-none","rounded-md","shadow-xs","w-full","focus:ring-kubefirst-primary"]),s=l.forwardRef(({initialValue:a,label:t,name:d,placeholder:c,rows:m=3,theme:u,className:p,...i},f)=>{const n=l.useId(),o=d?`${n}-name`:n;return e.jsxs("div",{className:"flex flex-col gap-2","data-theme":u,children:[t?e.jsx("label",{htmlFor:o,className:"cursor-pointer",children:t}):null,e.jsx("textarea",{id:o,ref:f,className:g(h({className:p})),rows:m,placeholder:c,value:a??i.value,...i})]})});s.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},name:{required:!1,tsType:{name:"string"},description:""},initialValue:{required:!1,tsType:{name:"string"},description:""},theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'civo'
| 'kubefirst-dark'
| 'civo-dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'civo'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'civo-dark'"},{name:"undefined"}]},description:""}},composes:["InputHTMLAttributes","VariantProps"]};const w={title:"In Review/TextArea",component:s},r={args:{placeholder:"Type your message here."},render:a=>e.jsx("div",{className:"w-[350px] flex flex-col gap-3",children:e.jsx(s,{...a,label:"This is a textarea with Kubefirst theme"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here.'
  },
  render: args => <div className="w-[350px] flex flex-col gap-3">
      <TextAreaComponent {...args} label="This is a textarea with Kubefirst theme" />
    </div>
}`,...r.parameters?.docs?.source}}};const k=["TextArea"];export{r as TextArea,k as __namedExportsOrder,w as default};
