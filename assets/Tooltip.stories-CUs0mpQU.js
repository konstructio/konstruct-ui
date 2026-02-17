import{r as o,j as t}from"./iframe-CyFn_Qhx.js";import{B as d}from"./Button-CWxRp1ae.js";import{S as v}from"./index-DhmxNnKf.js";import{a as m,c as s}from"./index-BIgQ6y5l.js";import{T}from"./Typography-Bxe8aBKv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B3EGCS26.js";const y=m(["absolute","w-max","py-2","px-[6px]","rounded-xs","shadow-md","transition-all","ease-linear","opacity-0","duration-250","[&[data-visible='true']]:opacity-100","delay-100","bg-slate-700"],{variants:{position:{top:["-top-[120%]","left-[50%]","-translate-x-1/2"],bottom:["-bottom-[120%]","right-[50%]","translate-x-1/2"],right:["top-1/2","ml-1","left-[100%]","-translate-y-2/4"],left:["top-1/2","mr-1","right-[100%]","-translate-y-2/4"]}},defaultVariants:{position:"right"}}),g=m(["absolute","w-0","h-0","border-slate-700"],{variants:{position:{top:["top-full","right-1/2","translate-x-2/4","border-l-4","border-l-transparent","border-r-4","border-r-transparent","border-t-4"],bottom:["bottom-full","right-1/2","translate-x-2/4","border-l-4","border-l-transparent","border-r-4","border-r-transparent","border-b-4"],right:["right-full","top-1/2","-translate-y-2/4","border-t-4","border-t-transparent","border-b-4","border-b-transparent","border-r-4"],left:["left-full","top-1/2","-translate-y-2/4","border-t-4","border-t-transparent","border-b-4","border-b-transparent","border-l-4"]}},defaultVariants:{position:"right"}}),w=()=>{const e=o.useRef(null),[l,n]=o.useState(!1);return o.useEffect(()=>{const r=new AbortController;return e.current?.addEventListener("mouseenter",()=>n(!0),{signal:r.signal}),e.current?.addEventListener("mouseleave",()=>n(!1),{signal:r.signal}),()=>{r.abort()}},[]),{isVisible:l,componentRef:e}},i=o.forwardRef(({children:e,content:l,className:n,theme:r,position:c,wrapperClassName:u},f)=>{const h=o.useRef(null),{isVisible:x,componentRef:p}=w();o.useImperativeHandle(f,()=>p.current,[p]);const b=o.useMemo(()=>o.isValidElement(e)?e:t.jsx("p",{className:"p-2",children:e}),[e]);return t.jsx("div",{className:s("w-full",u),"data-theme":r,children:t.jsxs("div",{className:"relative w-max",children:[t.jsx(v,{ref:p,className:s("cursor-pointer ",n),children:b}),t.jsxs("div",{ref:h,className:s(y({position:c})),"data-visible":x,children:[t.jsx("span",{className:s(g({position:c}))}),t.jsx(T,{variant:"tooltip",className:"text-white",children:l})]})]})})});i.__docgenInfo={description:`A tooltip component that shows on hover.
Wraps any element and displays content on mouse enter.

@example
\`\`\`tsx
// Basic tooltip
<Tooltip content="Click to save">
  <Button>Save</Button>
</Tooltip>

// Tooltip with position
<Tooltip content="More information" position="bottom">
  <InfoIcon />
</Tooltip>

// Tooltip on text
<Tooltip content="This is a helpful tip">
  <span>Hover me</span>
</Tooltip>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-tooltip--docs Storybook}`,methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:"Tooltip text or content"},className:{required:!1,tsType:{name:"string"},description:"CSS classes for the trigger element"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the tooltip wrapper"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"}},composes:["PropsWithChildren","VariantProps"]};const V={title:"In Review/Tooltip",component:i},a={render:()=>{const e=()=>t.jsx("span",{className:"text-white",children:"Hello!"});return t.jsx("div",{className:"w-[350px] h-[350px] flex items-center justify-center",children:t.jsxs("div",{className:"flex flex-col gap-5",children:[t.jsx(i,{content:"Hello",position:"top",wrapperClassName:"flex justify-center",children:t.jsx(d,{children:"Hover on the top!"})}),t.jsx(i,{content:t.jsx(e,{}),position:"left",wrapperClassName:"flex justify-center",children:t.jsx(d,{children:"Hover on the left!"})})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const FancyHover = () => <span className="text-white">Hello!</span>;
    return <div className="w-[350px] h-[350px] flex items-center justify-center">
        <div className="flex flex-col gap-5">
          <TooltipComponent content="Hello" position="top" wrapperClassName="flex justify-center">
            <Button>Hover on the top!</Button>
          </TooltipComponent>

          <TooltipComponent content={<FancyHover />} position="left" wrapperClassName="flex justify-center">
            <Button>Hover on the left!</Button>
          </TooltipComponent>
        </div>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const E=["Tooltip"];export{a as Tooltip,E as __namedExportsOrder,V as default};
