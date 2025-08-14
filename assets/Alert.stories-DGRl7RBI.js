import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-ByTEjQOg.js";import{V as j}from"./index-COfZEsHp.js";import{c as h,a as m}from"./index-Cr-WShRT.js";import{X as k}from"./x-DP-gqlRd.js";import{I as C}from"./info-BpH6Y0PI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dx_73TQd.js";import"./index-ytRZJbuz.js";import"./index-BYazRHd2.js";import"./index-BPKuc7VD.js";import"./index-Ca5KJtUB.js";const V=h(["relative","border","py-4","px-5","rounded","flex","gap-2","items-center","justify-start","[&>*]:flex","[&>*]:gap-2","[&>*]:items-center","[&>*]:justify-start","text-sm","shadow-sm","duration-300","data-[state=hidden]:animate-out","data-[state=hidden]:fade-out-0","data-[state=hidden]:zoom-out-95"],{variants:{type:{sucess:"",info:["border-blue-100","bg-blue-50","text-zinc-700","[&>*>svg]:text-blue-600","shadow-blue-50/40"],warning:"",danger:""},isVisible:{true:"",false:"hidden"}},defaultVariants:{isVisible:!0}}),A=h(["w-4","h-4","absolute","right-2","top-2","text-inherit","cursor-pointer"],{variants:{type:{sucess:"",info:["text-blue-600"],warning:"",danger:""}}}),i=({theme:r,type:d,content:n,isVisible:l=!0,showCloseButton:v=!1})=>{const s=t.useRef(null),[x,y]=t.useState(l),g=t.useMemo(()=>t.isValidElement(n)?n:e.jsx("p",{children:n}),[n]),w=t.useCallback(()=>{const a=s.current;a&&a.setAttribute("data-state","hidden")},[]);return t.useEffect(()=>{var u;const a=new AbortController;return(u=s.current)==null||u.addEventListener("animationend",()=>{var c;(c=s.current)==null||c.style.setProperty("display","none"),y(!1)},{signal:a.signal}),()=>a.abort()},[]),x?e.jsxs("div",{ref:s,className:m(V({type:d,isVisible:l})),"data-state":l?"visible":"hidden","data-theme":r,role:"alert","aria-live":"polite",children:[g,v?e.jsxs("button",{role:"button",onClick:w,children:[e.jsx(k,{className:m(A({type:d}))}),e.jsx(j,{children:"Dismiss alert"})]}):null]}):null};i.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{dismissible:{required:!1,tsType:{name:"boolean"},description:""},content:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'colony'
| 'civo'
| 'kubefirst-dark'
| 'colony-dark'
| 'civo-dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'colony'"},{name:"literal",value:"'civo'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'colony-dark'"},{name:"literal",value:"'civo-dark'"},{name:"undefined"}]},description:""}},composes:["VariantProps"]};const W={title:"In Review/Alert",component:i},o={args:{content:e.jsxs("p",{children:[e.jsx(C,{className:"w-4 h-4"})," Ensure you have an AWS cloud account with billing enabled."]})},render:r=>e.jsxs("div",{role:"alert","aria-live":"polite",className:"w-[600px] flex flex-col gap-3",children:[e.jsx(i,{...r,type:"info"}),e.jsx(i,{...r,type:"info",showCloseButton:!0})]})};var p,f,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
} satisfies Story`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const D=["Alert"];export{o as Alert,D as __namedExportsOrder,W as default};
