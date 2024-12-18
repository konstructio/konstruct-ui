import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-2yJIXLcc.js";import{c as k}from"./index-Bs5fonC8.js";import{T as v}from"./Tag-CPgWB1E4.js";import{u as C}from"./useToggle-B4qXb3uG.js";import{c as x}from"./index-BV_IynQ4.js";import{C as N}from"./chevron-up-Da_TZL33.js";import{u as V}from"./theme.hook-CIPM6TIs.js";import"./index-CBoMLUjc.js";const E=()=>{const r=l.useRef(null),[n,t]=C(!1),[f,s]=l.useState(null),[h,u]=l.useState("");l.useEffect(()=>{const a=new AbortController,d=c=>{c.key==="Escape"&&t(!1)},m=c=>{var p;(p=r.current)!=null&&p.contains(c.target)||t(!1)};return document.addEventListener("keydown",d,{signal:a.signal}),document.addEventListener("mousedown",m,{signal:a.signal}),()=>{a.abort()}},[t,r]);const i=l.useCallback(()=>{t()},[t]),o=l.useCallback(a=>{s(a),t(!1),u(a.label)},[t]);return{isOpen:n,selectedTag:f,value:h,wrapperRef:r,handleClickTag:o,handleOpenDropdown:i}},O=x(["border","cursor-pointer","duration-250","ease-in-out","flex","items-center","justify-between","px-3","py-1","rounded-md","transition-all","w-full"],{variants:{theme:{colony:["aria-expanded:border-red-400","aria-expanded:text-red-400"],kubefirst:["aria-expanded:border-kubefirst-primary","aria-expanded:text-kubefirst-secondary"],civo:""}},defaultVariants:{theme:"kubefirst"}}),R=x(["absolute","bg-white","border","duration-100","ease-in-out","flex","flex-col","mt-1","rounded-md","shadow-sm","top-full","transition-all","w-full","z-10"],{variants:{theme:{colony:["border-red-400"],kubefirst:["border-kubefirst-primary"],civo:""}},defaultVariants:{theme:"kubefirst"}}),q=x(["cursor-pointer","py-1","px-2","last:mb-2","first:mt-2","h-full"],{variants:{theme:{colony:"hover:bg-red-100",kubefirst:"hover:bg-purple-100",civo:""}},defaultVariants:{theme:"kubefirst"}}),b=l.forwardRef(({label:r,name:n,options:t,placeholder:f="Select a value...",theme:s},h)=>{const u=l.useId(),{theme:i}=V(),o=l.useRef(null),{isOpen:a,selectedTag:d,value:m,wrapperRef:c,handleClickTag:p,handleOpenDropdown:j}=E();return l.useImperativeHandle(h,()=>o.current,[o]),l.useEffect(()=>{o.current&&(o.current.value=m)},[m]),e.jsxs("div",{ref:c,className:"flex flex-col w-full relative",children:[r?e.jsx("label",{className:"m-2 cursor-pointer",htmlFor:n??u,children:r}):null,e.jsxs("div",{id:n??u,className:O({theme:s??i}),role:"combobox",onClick:j,"aria-expanded":a,children:[d?e.jsx(v,{...d}):e.jsx("span",{className:"text-base text-inherit",children:f}),e.jsx(N,{className:k("w-4 h-4 text-inherit transition-all duration-50",a?"rotate-0":"rotate-180")})]}),e.jsx("input",{ref:o,type:"text",name:n,className:"hidden"}),a?e.jsx("ul",{role:"listbox",className:k(R({theme:s??i})),children:t.map(y=>e.jsx("li",{className:q({theme:s??i}),role:"option",children:e.jsx("button",{type:"button",role:"button",className:"m-0 p-0 w-full",onClick:()=>p(y),children:e.jsx(v,{label:y.label,color:y.color})})}))}):null]})});b.__docgenInfo={description:"",methods:[],displayName:"TagSelect",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  color?:
    | 'gray'
    | 'cyan'
    | 'gold'
    | 'green'
    | 'light blue'
    | 'lime'
    | 'pink'
    | 'purple'
    | 'emerald'
    | 'fuscia'
    | 'indigo'
    | 'light-orange'
    | 'dark-sky-blue'
    | 'mistery';
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"color",value:{name:"union",raw:`| 'gray'
| 'cyan'
| 'gold'
| 'green'
| 'light blue'
| 'lime'
| 'pink'
| 'purple'
| 'emerald'
| 'fuscia'
| 'indigo'
| 'light-orange'
| 'dark-sky-blue'
| 'mistery'`,elements:[{name:"literal",value:"'gray'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'gold'"},{name:"literal",value:"'green'"},{name:"literal",value:"'light blue'"},{name:"literal",value:"'lime'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'emerald'"},{name:"literal",value:"'fuscia'"},{name:"literal",value:"'indigo'"},{name:"literal",value:"'light-orange'"},{name:"literal",value:"'dark-sky-blue'"},{name:"literal",value:"'mistery'"}],required:!1}}]}}],raw:"TagProps[]"},description:""},name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select a value...'",computed:!1}}},composes:["VariantProps"]};const K={title:"Design System/TagSelect",component:b},g={args:{options:[{color:"gray",label:"gray"},{color:"cyan",label:"cyan"},{color:"gold",label:"gold"},{color:"green",label:"green"},{color:"light blue",label:"light blue"},{color:"lime",label:"lime"},{color:"pink",label:"pink"},{color:"purple",label:"purple"},{color:"emerald",label:"emerald"},{color:"fuscia",label:"fuscia"},{color:"indigo",label:"indigo"},{color:"light-orange",label:"light-orange"},{color:"dark-sky-blue",label:"dark-sky-blue"},{color:"mistery",label:"mistery"}]},render:r=>e.jsxs("div",{className:"max-w-[300px] flex flex-col gap-3",children:[e.jsx(b,{...r,label:"Select tag with kubefirst theme"}),e.jsx(b,{...r,theme:"colony",label:"Select tag with colony theme"})]})};var w,T,S;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    options: [{
      color: 'gray',
      label: 'gray'
    }, {
      color: 'cyan',
      label: 'cyan'
    }, {
      color: 'gold',
      label: 'gold'
    }, {
      color: 'green',
      label: 'green'
    }, {
      color: 'light blue',
      label: 'light blue'
    }, {
      color: 'lime',
      label: 'lime'
    }, {
      color: 'pink',
      label: 'pink'
    }, {
      color: 'purple',
      label: 'purple'
    }, {
      color: 'emerald',
      label: 'emerald'
    }, {
      color: 'fuscia',
      label: 'fuscia'
    }, {
      color: 'indigo',
      label: 'indigo'
    }, {
      color: 'light-orange',
      label: 'light-orange'
    }, {
      color: 'dark-sky-blue',
      label: 'dark-sky-blue'
    }, {
      color: 'mistery',
      label: 'mistery'
    }]
  },
  render: args => <div className="max-w-[300px] flex flex-col gap-3">
      <TagSelectComponent {...args} label="Select tag with kubefirst theme" />
      <TagSelectComponent {...args} theme="colony" label="Select tag with colony theme" />
    </div>
}`,...(S=(T=g.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const U=["TagSelect"];export{g as TagSelect,U as __namedExportsOrder,K as default};
