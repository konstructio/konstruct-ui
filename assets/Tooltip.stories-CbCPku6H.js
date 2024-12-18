import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as l}from"./Button-DPouEbjg.js";import{r}from"./index-2yJIXLcc.js";import{S as f}from"./index-nnesT5pB.js";import{c as u}from"./index-Bs5fonC8.js";import{c as j}from"./index-BV_IynQ4.js";import{u as C}from"./theme.hook-CIPM6TIs.js";import{T as h}from"./theme.provider-CgFRmybq.js";const H=j(["absolute","w-max","p-2.5","rounded-lg","shadow-md","transition-all","ease-linear","opacity-0","duration-250","aria-expanded:opacity-100","delay-100"],{variants:{theme:{kubefirst:"bg-kubefirst-primary",colony:"bg-red-700",civo:""},position:{top:["-top-[120%]","left-[50%]","-translate-x-1/2"],bottom:["-bottom-[120%]","right-[50%]","translate-x-1/2"],right:["top-1/2","ml-1","left-[100%]","-translate-y-2/4"],left:["top-1/2","mr-1","right-[100%]","-translate-y-2/4"]}},defaultVariants:{theme:"kubefirst",position:"right"}}),B=j(["absolute","w-0","h-0"],{variants:{theme:{kubefirst:"border-kubefirst-primary",colony:"border-red-700",civo:""},position:{top:["top-full","right-1/2","translate-x-2/4","border-l-4","border-l-transparent","border-r-4","border-r-transparent","border-t-4"],bottom:["bottom-full","right-1/2","translate-x-2/4","border-l-4","border-l-transparent","border-r-4","border-r-transparent","border-b-4"],right:["right-full","top-1/2","-translate-y-2/4","border-t-4","border-t-transparent","border-b-4","border-b-transparent","border-r-4"],left:["left-full","top-1/2","-translate-y-2/4","border-t-4","border-t-transparent","border-b-4","border-b-transparent","border-l-4"]}},defaultVariants:{theme:"kubefirst",position:"right"}}),R=()=>{const t=r.useRef(null),[c,a]=r.useState(!1);return r.useEffect(()=>{var s,i;const n=new AbortController;return(s=t.current)==null||s.addEventListener("mouseenter",()=>a(!0),{signal:n.signal}),(i=t.current)==null||i.addEventListener("mouseleave",()=>a(!1),{signal:n.signal}),()=>{n.abort()}},[]),{isVisible:c,componentRef:t}},o=r.forwardRef(({children:t,content:c,className:a,theme:n,position:s,wrapperClassName:i},y)=>{const g=r.useRef(null),{theme:N}=C(),d=n??N,{isVisible:T,componentRef:m}=R();r.useImperativeHandle(y,()=>m.current,[m]);const w=r.useMemo(()=>r.isValidElement(t)?t:e.jsx("p",{className:"p-2",children:t}),[t]);return e.jsx("div",{className:u("w-full",i),children:e.jsxs("div",{className:"relative w-max",children:[e.jsx(f,{ref:m,className:u("cursor-pointer ",a),children:w}),e.jsxs("div",{ref:g,className:H({theme:d,position:s}),"aria-expanded":T,children:[e.jsx("span",{className:B({theme:d,position:s})}),e.jsx(f,{children:c})]})]})})});o.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren","VariantProps"]};const I={title:"Design System/Tooltip",component:o},p={render:()=>{const t=()=>e.jsx("span",{className:"text-white",children:"Hello!"});return e.jsx("div",{className:"w-[350px] h-[350px] flex items-center justify-center",children:e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsx(o,{content:e.jsx(t,{}),position:"top",wrapperClassName:"flex justify-center",children:e.jsx(l,{children:"Hover on the top!"})}),e.jsx(h,{theme:"colony",children:e.jsx(o,{content:e.jsx(t,{}),wrapperClassName:"flex justify-center",children:e.jsx(l,{children:"Hover on the right!"})})}),e.jsx(o,{content:e.jsx(t,{}),position:"left",wrapperClassName:"flex justify-center",children:e.jsx(l,{children:"Hover on the left!"})}),e.jsx(h,{theme:"colony",children:e.jsx(o,{content:e.jsx(t,{}),position:"bottom",wrapperClassName:"flex justify-center",children:e.jsx(l,{children:"Hover on the bottom!"})})})]})})}};var x,b,v;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const FancyHover = () => <span className="text-white">Hello!</span>;
    return <div className="w-[350px] h-[350px] flex items-center justify-center">
        <div className="flex flex-col gap-5">
          <TooltipComponent content={<FancyHover />} position="top" wrapperClassName="flex justify-center">
            <Button>Hover on the top!</Button>
          </TooltipComponent>

          <ThemeProvider theme="colony">
            <TooltipComponent content={<FancyHover />} wrapperClassName="flex justify-center">
              <Button>Hover on the right!</Button>
            </TooltipComponent>
          </ThemeProvider>

          <TooltipComponent content={<FancyHover />} position="left" wrapperClassName="flex justify-center">
            <Button>Hover on the left!</Button>
          </TooltipComponent>

          <ThemeProvider theme="colony">
            <TooltipComponent content={<FancyHover />} position="bottom" wrapperClassName="flex justify-center">
              <Button>Hover on the bottom!</Button>
            </TooltipComponent>
          </ThemeProvider>
        </div>
      </div>;
  }
}`,...(v=(b=p.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const L=["Tooltip"];export{p as Tooltip,L as __namedExportsOrder,I as default};
