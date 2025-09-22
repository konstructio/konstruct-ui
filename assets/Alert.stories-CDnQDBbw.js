import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-D01DnpOT.js";import{V as x}from"./index-D8tTFsQn.js";import{c,a as u}from"./index-CJCZd66Q.js";import{X as g}from"./x-DpLxdFPe.js";import{I as v}from"./info-cCUjG26C.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DT-OuMj9.js";import"./index-Bik-xiTe.js";import"./index-CkWzIIhm.js";import"./index-D60xDcd1.js";import"./index-BczJ4cjc.js";const y=c(["relative","border","py-4","px-5","rounded","flex","gap-2","items-center","justify-start","[&>*]:flex","[&>*]:gap-2","[&>*]:items-center","[&>*]:justify-start","text-sm","shadow-sm","duration-300","data-[state=hidden]:animate-out","data-[state=hidden]:fade-out-0","data-[state=hidden]:zoom-out-95"],{variants:{type:{sucess:"",info:["border-blue-100","bg-blue-50","text-zinc-700","[&>*>svg]:text-blue-600","shadow-blue-50/40"],warning:"",danger:""},isVisible:{true:"",false:"hidden"}},defaultVariants:{isVisible:!0}}),w=c(["w-4","h-4","absolute","right-2","top-2","text-inherit","cursor-pointer"],{variants:{type:{sucess:"",info:["text-blue-600"],warning:"",danger:""}}}),i=({theme:a,type:d,content:n,isVisible:l=!0,showCloseButton:p=!1})=>{const s=t.useRef(null),[m,f]=t.useState(l),h=t.useMemo(()=>t.isValidElement(n)?n:e.jsx("p",{children:n}),[n]),b=t.useCallback(()=>{const r=s.current;r&&r.setAttribute("data-state","hidden")},[]);return t.useEffect(()=>{const r=new AbortController;return s.current?.addEventListener("animationend",()=>{s.current?.style.setProperty("display","none"),f(!1)},{signal:r.signal}),()=>r.abort()},[]),m?e.jsxs("div",{ref:s,className:u(y({type:d,isVisible:l})),"data-state":l?"visible":"hidden","data-theme":a,role:"alert","aria-live":"polite",children:[h,p?e.jsxs("button",{role:"button",onClick:b,children:[e.jsx(g,{className:u(w({type:d}))}),e.jsx(x,{children:"Dismiss alert"})]}):null]}):null};i.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{dismissible:{required:!1,tsType:{name:"boolean"},description:""},content:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'light'
| 'kubefirst-dark'
| 'dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'light'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'dark'"},{name:"undefined"}]},description:""}},composes:["VariantProps"]};const B={title:"In Review/Alert",component:i},o={args:{content:e.jsxs("p",{children:[e.jsx(v,{className:"w-4 h-4"})," Ensure you have an AWS cloud account with billing enabled."]})},render:a=>e.jsxs("div",{role:"alert","aria-live":"polite",className:"w-[600px] flex flex-col gap-3",children:[e.jsx(i,{...a,type:"info"}),e.jsx(i,{...a,type:"info",showCloseButton:!0})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...o.parameters?.docs?.source}}};const _=["Alert"];export{o as Alert,_ as __namedExportsOrder,B as default};
