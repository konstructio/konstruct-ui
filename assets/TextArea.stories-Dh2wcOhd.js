import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-ByTEjQOg.js";import{c as g,a as v}from"./index-Cr-WShRT.js";import"./preload-helper-Dp1pzeXC.js";const b=g(["border","border-gray-200","disabled:cursor-not-allowed","disabled:opacity-50","focus-visible:outline-none","focus-visible:ring-1","focus-visible:ring-ring","p-2","placeholder:text-gray-300","resize-none","rounded-md","shadow-xs","w-full","focus:ring-kubefirst-primary","colony:focus:ring-red-700"]),s=l.forwardRef(({initialValue:a,label:t,name:u,placeholder:p,rows:f=3,theme:x,className:h,...o},y)=>{const i=l.useId(),n=u?`${i}-name`:i;return e.jsxs("div",{className:"flex flex-col gap-2","data-theme":x,children:[t?e.jsx("label",{htmlFor:n,className:"cursor-pointer",children:t}):null,e.jsx("textarea",{id:n,ref:y,className:v(b({className:h})),rows:f,placeholder:p,value:a??o.value,...o})]})});s.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},name:{required:!1,tsType:{name:"string"},description:""},initialValue:{required:!1,tsType:{name:"string"},description:""},theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'colony'
| 'civo'
| 'kubefirst-dark'
| 'colony-dark'
| 'civo-dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'colony'"},{name:"literal",value:"'civo'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'colony-dark'"},{name:"literal",value:"'civo-dark'"},{name:"undefined"}]},description:""}},composes:["InputHTMLAttributes","VariantProps"]};const j={title:"In Review/TextArea",component:s},r={args:{placeholder:"Type your message here."},render:a=>e.jsxs("div",{className:"w-[350px] flex flex-col gap-3",children:[e.jsx(s,{...a,label:"This is a textarea with Kubefirst theme"}),e.jsx(s,{...a,theme:"colony",label:"This is a textarea with Colony theme"})]})};var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here.'
  },
  render: args => <div className="w-[350px] flex flex-col gap-3">
      <TextAreaComponent {...args} label="This is a textarea with Kubefirst theme" />
      <TextAreaComponent {...args} theme="colony" label="This is a textarea with Colony theme" />
    </div>
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const N=["TextArea"];export{r as TextArea,N as __namedExportsOrder,j as default};
