import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as i}from"./Button-eYJOb9BC.js";import{S as u}from"./index-6l3NbNTq.js";import{r}from"./iframe-C1xpHuwn.js";import{c as h,a as p}from"./index-Cr-WShRT.js";import"./preload-helper-Dp1pzeXC.js";const w=h(["absolute","w-max","p-2.5","rounded-lg","shadow-md","transition-all","ease-linear","opacity-0","duration-250","[&[data-visible='true']]:opacity-100","delay-100","bg-kubefirst-primary","colony:bg-red-700"],{variants:{position:{top:["-top-[120%]","left-[50%]","-translate-x-1/2"],bottom:["-bottom-[120%]","right-[50%]","translate-x-1/2"],right:["top-1/2","ml-1","left-[100%]","-translate-y-2/4"],left:["top-1/2","mr-1","right-[100%]","-translate-y-2/4"]}},defaultVariants:{position:"right"}}),N=h(["absolute","w-0","h-0","border-kubefirst-primary","colony:border-red-700"],{variants:{position:{top:["top-full","right-1/2","translate-x-2/4","border-l-4","border-l-transparent","border-r-4","border-r-transparent","border-t-4"],bottom:["bottom-full","right-1/2","translate-x-2/4","border-l-4","border-l-transparent","border-r-4","border-r-transparent","border-b-4"],right:["right-full","top-1/2","-translate-y-2/4","border-t-4","border-t-transparent","border-b-4","border-b-transparent","border-r-4"],left:["left-full","top-1/2","-translate-y-2/4","border-t-4","border-t-transparent","border-b-4","border-b-transparent","border-l-4"]}},defaultVariants:{position:"right"}}),C=()=>{const t=r.useRef(null),[d,a]=r.useState(!1);return r.useEffect(()=>{var s,l;const n=new AbortController;return(s=t.current)==null||s.addEventListener("mouseenter",()=>a(!0),{signal:n.signal}),(l=t.current)==null||l.addEventListener("mouseleave",()=>a(!1),{signal:n.signal}),()=>{n.abort()}},[]),{isVisible:d,componentRef:t}},o=r.forwardRef(({children:t,content:d,className:a,theme:n,position:s,wrapperClassName:l},v)=>{const y=r.useRef(null),{isVisible:j,componentRef:m}=C();r.useImperativeHandle(v,()=>m.current,[m]);const g=r.useMemo(()=>r.isValidElement(t)?t:e.jsx("p",{className:"p-2",children:t}),[t]);return e.jsx("div",{className:p("w-full",l),"data-theme":n,children:e.jsxs("div",{className:"relative w-max",children:[e.jsx(u,{ref:m,className:p("cursor-pointer ",a),children:g}),e.jsxs("div",{ref:y,className:p(w({position:s})),"data-visible":j,children:[e.jsx("span",{className:p(N({position:s}))}),e.jsx(u,{children:d})]})]})})});o.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'colony'
| 'civo'
| 'kubefirst-dark'
| 'colony-dark'
| 'civo-dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'colony'"},{name:"literal",value:"'civo'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'colony-dark'"},{name:"literal",value:"'civo-dark'"},{name:"undefined"}]},description:""}},composes:["PropsWithChildren","VariantProps"]};const E={title:"In Review/Tooltip",component:o},c={render:()=>{const t=()=>e.jsx("span",{className:"text-white",children:"Hello!"});return e.jsx("div",{className:"w-[350px] h-[350px] flex items-center justify-center",children:e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsx(o,{content:e.jsx(t,{}),position:"top",wrapperClassName:"flex justify-center",children:e.jsx(i,{children:"Hover on the top!"})}),e.jsx(o,{content:e.jsx(t,{}),wrapperClassName:"flex justify-center",theme:"colony",children:e.jsx(i,{children:"Hover on the right!"})}),e.jsx(o,{content:e.jsx(t,{}),position:"left",wrapperClassName:"flex justify-center",children:e.jsx(i,{children:"Hover on the left!"})}),e.jsx(o,{content:e.jsx(t,{}),position:"bottom",wrapperClassName:"flex justify-center",theme:"colony",children:e.jsx(i,{children:"Hover on the bottom!"})})]})})}};var f,x,b;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const FancyHover = () => <span className="text-white">Hello!</span>;
    return <div className="w-[350px] h-[350px] flex items-center justify-center">
        <div className="flex flex-col gap-5">
          <TooltipComponent content={<FancyHover />} position="top" wrapperClassName="flex justify-center">
            <Button>Hover on the top!</Button>
          </TooltipComponent>

          <TooltipComponent content={<FancyHover />} wrapperClassName="flex justify-center" theme="colony">
            <Button>Hover on the right!</Button>
          </TooltipComponent>

          <TooltipComponent content={<FancyHover />} position="left" wrapperClassName="flex justify-center">
            <Button>Hover on the left!</Button>
          </TooltipComponent>

          <TooltipComponent content={<FancyHover />} position="bottom" wrapperClassName="flex justify-center" theme="colony">
            <Button>Hover on the bottom!</Button>
          </TooltipComponent>
        </div>
      </div>;
  }
}`,...(b=(x=c.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const F=["Tooltip"];export{c as Tooltip,F as __namedExportsOrder,E as default};
