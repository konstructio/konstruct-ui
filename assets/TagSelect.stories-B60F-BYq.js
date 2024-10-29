import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r}from"./index-CTjT7uj6.js";import{t as k}from"./bundle-mjs-Dnoi3Axr.js";import{T as v}from"./Tag-CEzH7mkW.js";import{u as C}from"./useToggle-CgIIUbFO.js";import{c as y}from"./index-Bb4qSo10.js";import{C as N}from"./chevron-up-DQWdz7-O.js";import{u as V}from"./theme.hook-Bu2Nzwn4.js";import"./index-BzjuzjN8.js";const E=()=>{const l=r.useRef(null),[o,t]=C(!1),[b,n]=r.useState(null),[f,d]=r.useState("");r.useEffect(()=>{const a=new AbortController,m=c=>{c.key==="Escape"&&t(!1)},h=c=>{var p;(p=l.current)!=null&&p.contains(c.target)||t(!1)};return document.addEventListener("keydown",m,{signal:a.signal}),document.addEventListener("mousedown",h,{signal:a.signal}),()=>{a.abort()}},[t,l]);const s=r.useCallback(()=>{t()},[t]),i=r.useCallback(a=>{n(a),t(!1),d(a.label)},[t]);return{isOpen:o,selectedTag:b,value:f,wrapperRef:l,handleClickTag:i,handleOpenDropdown:s}},O=y(["border","cursor-pointer","duration-250","ease-in-out","flex","items-center","justify-between","px-3","py-1","rounded-md","transition-all","w-full"],{variants:{theme:{colony:["aria-expanded:border-red-400","aria-expanded:text-red-400"],konstruct:["aria-expanded:border-orange-400","aria-expanded:text-orange-400"],kubefirst:["aria-expanded:border-kubefirst-purple-light","aria-expanded:text-kubefirst-purple-dark"]}},defaultVariants:{theme:"kubefirst"}}),R=y(["absolute","bg-white","border","duration-100","ease-in-out","flex","flex-col","mt-1","rounded-md","shadow-sm","top-full","transition-all","w-full","z-10"],{variants:{theme:{colony:["border-red-400"],konstruct:["border-orange-400"],kubefirst:["border-kubefirst-purple-light"]}},defaultVariants:{theme:"kubefirst"}}),q=y(["cursor-pointer","py-1","px-2","last:mb-2","first:mt-2","h-full"],{variants:{theme:{colony:"hover:bg-red-100",konstruct:"hover:bg-orange-100",kubefirst:"hover:bg-purple-100"}},defaultVariants:{theme:"kubefirst"}}),u=r.forwardRef(({label:l,name:o,options:t,placeholder:b="Select a value...",theme:n},f)=>{const d=r.useId(),{theme:s}=V(),i=r.useRef(null),{isOpen:a,selectedTag:m,value:h,wrapperRef:c,handleClickTag:p,handleOpenDropdown:j}=E();return r.useImperativeHandle(f,()=>i.current,[i]),e.jsxs("div",{ref:c,className:"flex flex-col w-full relative",children:[l?e.jsx("label",{className:"m-2 cursor-pointer",htmlFor:o??d,children:l}):null,e.jsxs("div",{id:o??d,className:O({theme:n??s}),role:"combobox",onClick:j,"aria-expanded":a,children:[m?e.jsx(v,{...m}):e.jsx("span",{className:"text-base text-inherit",children:b}),e.jsx(N,{className:k("w-4 h-4 text-inherit transition-all duration-50",a?"rotate-0":"rotate-180")})]}),e.jsx("input",{ref:i,type:"text",name:o,className:"hidden",value:h}),a?e.jsx("ul",{role:"listbox",className:k(R({theme:n??s})),children:t.map(x=>e.jsx("li",{className:q({theme:n??s}),role:"option",children:e.jsx("button",{type:"button",role:"button",className:"m-0 p-0 w-full",onClick:()=>p(x),children:e.jsx(v,{label:x.label,color:x.color})})}))}):null]})});u.__docgenInfo={description:"",methods:[],displayName:"TagSelect",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| 'mistery'`,elements:[{name:"literal",value:"'gray'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'gold'"},{name:"literal",value:"'green'"},{name:"literal",value:"'light blue'"},{name:"literal",value:"'lime'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'emerald'"},{name:"literal",value:"'fuscia'"},{name:"literal",value:"'indigo'"},{name:"literal",value:"'light-orange'"},{name:"literal",value:"'dark-sky-blue'"},{name:"literal",value:"'mistery'"}],required:!1}}]}}],raw:"TagProps[]"},description:""},name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select a value...'",computed:!1}}},composes:["VariantProps"]};const K={component:u},g={args:{options:[{color:"gray",label:"gray"},{color:"cyan",label:"cyan"},{color:"gold",label:"gold"},{color:"green",label:"green"},{color:"light blue",label:"light blue"},{color:"lime",label:"lime"},{color:"pink",label:"pink"},{color:"purple",label:"purple"},{color:"emerald",label:"emerald"},{color:"fuscia",label:"fuscia"},{color:"indigo",label:"indigo"},{color:"light-orange",label:"light-orange"},{color:"dark-sky-blue",label:"dark-sky-blue"},{color:"mistery",label:"mistery"}]},render:l=>e.jsxs("div",{className:"max-w-[300px] flex flex-col gap-3",children:[e.jsx(u,{...l,label:"Select tag with kubefirst theme"}),e.jsx(u,{...l,theme:"konstruct",label:"Select tag with konstruct theme"}),e.jsx(u,{...l,theme:"colony",label:"Select tag with colony theme"})]})};var w,T,S;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(T=g.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const M=["TagSelect"];export{g as TagSelect,M as __namedExportsOrder,K as default};
