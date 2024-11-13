import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as l}from"./index-DRjF_FHU.js";import{c as k}from"./index-Ch1LPoRI.js";import{T as v}from"./Tag-CS3_GFnK.js";import{u as C}from"./useToggle-CSjcspRO.js";import{c as y}from"./index-Bb4qSo10.js";import{C as N}from"./chevron-up-CudvOeva.js";import{u as V}from"./theme.hook-CuwzjDGP.js";import"./index-Dw6WB_A6.js";const E=()=>{const a=l.useRef(null),[n,t]=C(!1),[f,s]=l.useState(null),[h,d]=l.useState("");l.useEffect(()=>{const r=new AbortController,m=c=>{c.key==="Escape"&&t(!1)},p=c=>{var g;(g=a.current)!=null&&g.contains(c.target)||t(!1)};return document.addEventListener("keydown",m,{signal:r.signal}),document.addEventListener("mousedown",p,{signal:r.signal}),()=>{r.abort()}},[t,a]);const i=l.useCallback(()=>{t()},[t]),o=l.useCallback(r=>{s(r),t(!1),d(r.label)},[t]);return{isOpen:n,selectedTag:f,value:h,wrapperRef:a,handleClickTag:o,handleOpenDropdown:i}},O=y(["border","cursor-pointer","duration-250","ease-in-out","flex","items-center","justify-between","px-3","py-1","rounded-md","transition-all","w-full"],{variants:{theme:{colony:["aria-expanded:border-red-400","aria-expanded:text-red-400"],konstruct:["aria-expanded:border-orange-400","aria-expanded:text-orange-400"],kubefirst:["aria-expanded:border-kubefirst-purple-light","aria-expanded:text-kubefirst-purple-dark"]}},defaultVariants:{theme:"kubefirst"}}),R=y(["absolute","bg-white","border","duration-100","ease-in-out","flex","flex-col","mt-1","rounded-md","shadow-sm","top-full","transition-all","w-full","z-10"],{variants:{theme:{colony:["border-red-400"],konstruct:["border-orange-400"],kubefirst:["border-kubefirst-purple-light"]}},defaultVariants:{theme:"kubefirst"}}),q=y(["cursor-pointer","py-1","px-2","last:mb-2","first:mt-2","h-full"],{variants:{theme:{colony:"hover:bg-red-100",konstruct:"hover:bg-orange-100",kubefirst:"hover:bg-purple-100"}},defaultVariants:{theme:"kubefirst"}}),u=l.forwardRef(({label:a,name:n,options:t,placeholder:f="Select a value...",theme:s},h)=>{const d=l.useId(),{theme:i}=V(),o=l.useRef(null),{isOpen:r,selectedTag:m,value:p,wrapperRef:c,handleClickTag:g,handleOpenDropdown:j}=E();return l.useImperativeHandle(h,()=>o.current,[o]),l.useEffect(()=>{o.current&&(o.current.value=p)},[p]),e.jsxs("div",{ref:c,className:"flex flex-col w-full relative",children:[a?e.jsx("label",{className:"m-2 cursor-pointer",htmlFor:n??d,children:a}):null,e.jsxs("div",{id:n??d,className:O({theme:s??i}),role:"combobox",onClick:j,"aria-expanded":r,children:[m?e.jsx(v,{...m}):e.jsx("span",{className:"text-base text-inherit",children:f}),e.jsx(N,{className:k("w-4 h-4 text-inherit transition-all duration-50",r?"rotate-0":"rotate-180")})]}),e.jsx("input",{ref:o,type:"text",name:n,className:"hidden"}),r?e.jsx("ul",{role:"listbox",className:k(R({theme:s??i})),children:t.map(x=>e.jsx("li",{className:q({theme:s??i}),role:"option",children:e.jsx("button",{type:"button",role:"button",className:"m-0 p-0 w-full",onClick:()=>g(x),children:e.jsx(v,{label:x.label,color:x.color})})}))}):null]})});u.__docgenInfo={description:"",methods:[],displayName:"TagSelect",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| 'mistery'`,elements:[{name:"literal",value:"'gray'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'gold'"},{name:"literal",value:"'green'"},{name:"literal",value:"'light blue'"},{name:"literal",value:"'lime'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'emerald'"},{name:"literal",value:"'fuscia'"},{name:"literal",value:"'indigo'"},{name:"literal",value:"'light-orange'"},{name:"literal",value:"'dark-sky-blue'"},{name:"literal",value:"'mistery'"}],required:!1}}]}}],raw:"TagProps[]"},description:""},name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select a value...'",computed:!1}}},composes:["VariantProps"]};const K={component:u},b={args:{options:[{color:"gray",label:"gray"},{color:"cyan",label:"cyan"},{color:"gold",label:"gold"},{color:"green",label:"green"},{color:"light blue",label:"light blue"},{color:"lime",label:"lime"},{color:"pink",label:"pink"},{color:"purple",label:"purple"},{color:"emerald",label:"emerald"},{color:"fuscia",label:"fuscia"},{color:"indigo",label:"indigo"},{color:"light-orange",label:"light-orange"},{color:"dark-sky-blue",label:"dark-sky-blue"},{color:"mistery",label:"mistery"}]},render:a=>e.jsxs("div",{className:"max-w-[300px] flex flex-col gap-3",children:[e.jsx(u,{...a,label:"Select tag with kubefirst theme"}),e.jsx(u,{...a,theme:"konstruct",label:"Select tag with konstruct theme"}),e.jsx(u,{...a,theme:"colony",label:"Select tag with colony theme"})]})};var w,T,S;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
      <TagSelectComponent {...args} theme="konstruct" label="Select tag with konstruct theme" />
      <TagSelectComponent {...args} theme="colony" label="Select tag with colony theme" />
    </div>
}`,...(S=(T=b.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const U=["TagSelect"];export{b as TagSelect,U as __namedExportsOrder,K as default};
