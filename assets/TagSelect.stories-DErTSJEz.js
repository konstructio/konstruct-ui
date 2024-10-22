import{j as o}from"./jsx-runtime-DEdD30eg.js";import{r as s,R as j}from"./index-RYns6xqu.js";import{t as T}from"./bundle-mjs-Dnoi3Axr.js";import{T as S}from"./Tag-CrydHTa7.js";import{u as E}from"./useToggle-CFy_ecQZ.js";import{c as x}from"./index-Bb4qSo10.js";import{P as f}from"./index-rNTiGNI1.js";import{u as R}from"./theme.hook-Bl8Zju5o.js";function v(){return v=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},v.apply(this,arguments)}function P(e,a){if(e==null)return{};var l=_(e,a),r,t;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],!(a.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function _(e,a){if(e==null)return{};var l={},r=Object.keys(e),t,n;for(n=0;n<r.length;n++)t=r[n],!(a.indexOf(t)>=0)&&(l[t]=e[t]);return l}var w=s.forwardRef(function(e,a){var l=e.color,r=l===void 0?"currentColor":l,t=e.size,n=t===void 0?24:t,c=P(e,["color","size"]);return j.createElement("svg",v({ref:a,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),j.createElement("polyline",{points:"18 15 12 9 6 15"}))});w.propTypes={color:f.string,size:f.oneOfType([f.string,f.number])};w.displayName="ChevronUp";const q=()=>{const e=s.useRef(null),[a,l]=E(!1),[r,t]=s.useState(null),[n,c]=s.useState("");s.useEffect(()=>{const i=new AbortController,g=m=>{m.key==="Escape"&&l(!1)},y=m=>{var b;(b=e.current)!=null&&b.contains(m.target)||l(!1)};return document.addEventListener("keydown",g,{signal:i.signal}),document.addEventListener("mousedown",y,{signal:i.signal}),()=>{i.abort()}},[l,e]);const u=s.useCallback(()=>{l()},[l]),d=s.useCallback(i=>{t(i),l(!1),c(i.label)},[l]);return{isOpen:a,selectedTag:r,value:n,wrapperRef:e,handleClickTag:d,handleOpenDropdown:u}},z=x(["border","cursor-pointer","duration-250","ease-in-out","flex","items-center","justify-between","px-3","py-1","rounded-md","transition-all","w-full"],{variants:{theme:{colony:"",konstruct:"",kubefirst:""}},compoundVariants:[{theme:"kubefirst",class:["aria-expanded:border-kubefirst-purple-light","aria-expanded:text-kubefirst-purple-dark"]},{theme:"konstruct",class:["aria-expanded:border-orange-400","aria-expanded:text-orange-400"]},{theme:"colony",class:["aria-expanded:border-red-400","aria-expanded:text-red-400"]}],defaultVariants:{theme:"kubefirst"}}),L=x(["absolute","bg-white","border","duration-100","ease-in-out","flex","flex-col","mt-1","rounded-md","shadow-sm","top-full","transition-all","w-full","z-10"],{variants:{theme:{colony:"",konstruct:"",kubefirst:""}},compoundVariants:[{theme:"kubefirst",class:["border-kubefirst-purple-light"]},{theme:"konstruct",class:["border-orange-400"]},{theme:"colony",class:["border-red-400"]}],defaultVariants:{theme:"kubefirst"}}),I=x(["cursor-pointer","py-1","px-2","last:mb-2","first:mt-2","h-full"],{variants:{theme:{colony:"hover:bg-red-100",konstruct:"hover:bg-orange-100",kubefirst:"hover:bg-purple-100"}},defaultVariants:{theme:"kubefirst"}}),p=s.forwardRef(({label:e,name:a,options:l,placeholder:r="Select a value...",theme:t},n)=>{const c=s.useId(),{theme:u}=R(),d=s.useRef(null),{isOpen:i,selectedTag:g,value:y,wrapperRef:m,handleClickTag:b,handleOpenDropdown:V}=q();return s.useImperativeHandle(n,()=>d.current,[d]),o.jsxs("div",{ref:m,className:"flex flex-col w-full relative",children:[e?o.jsx("label",{className:"m-2 cursor-pointer",htmlFor:a??c,children:e}):null,o.jsxs("div",{id:a??c,className:z({theme:t??u}),role:"combobox",onClick:V,"aria-expanded":i,children:[g?o.jsx(S,{...g}):o.jsx("span",{className:"text-base text-inherit",children:r}),o.jsx(w,{className:T("w-4 h-4 text-inherit transition-all duration-50",i?"rotate-0":"rotate-180")})]}),o.jsx("input",{ref:d,type:"text",name:a,className:"hidden",value:y}),i?o.jsx("ul",{role:"listbox",className:T(L({theme:t??u})),children:l.map(k=>o.jsx("li",{className:I({theme:t??u}),role:"option",children:o.jsx("button",{type:"button",role:"button",className:"m-0 p-0 w-full",onClick:()=>b(k),children:o.jsx(S,{label:k.label,color:k.color})})}))}):null]})});p.__docgenInfo={description:"",methods:[],displayName:"TagSelect",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| 'mistery'`,elements:[{name:"literal",value:"'gray'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'gold'"},{name:"literal",value:"'green'"},{name:"literal",value:"'light blue'"},{name:"literal",value:"'lime'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'emerald'"},{name:"literal",value:"'fuscia'"},{name:"literal",value:"'indigo'"},{name:"literal",value:"'light-orange'"},{name:"literal",value:"'dark-sky-blue'"},{name:"literal",value:"'mistery'"}],required:!1}}]}}],raw:"TagProps[]"},description:""},name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select a value...'",computed:!1}}},composes:["VariantProps"]};const K={component:p},h={args:{options:[{color:"gray",label:"gray"},{color:"cyan",label:"cyan"},{color:"gold",label:"gold"},{color:"green",label:"green"},{color:"light blue",label:"light blue"},{color:"lime",label:"lime"},{color:"pink",label:"pink"},{color:"purple",label:"purple"},{color:"emerald",label:"emerald"},{color:"fuscia",label:"fuscia"},{color:"indigo",label:"indigo"},{color:"light-orange",label:"light-orange"},{color:"dark-sky-blue",label:"dark-sky-blue"},{color:"mistery",label:"mistery"}]},render:e=>o.jsxs("div",{className:"w-[300px] flex flex-col gap-3",children:[o.jsx(p,{...e,label:"Select tag with kubefirst theme"}),o.jsx(p,{...e,theme:"konstruct",label:"Select tag with konstruct theme"}),o.jsx(p,{...e,theme:"colony",label:"Select tag with colony theme"})]})};var O,C,N;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
  render: args => <div className="w-[300px] flex flex-col gap-3">
      <TagSelectComponent {...args} label="Select tag with kubefirst theme" />
      <TagSelectComponent {...args} theme="konstruct" label="Select tag with konstruct theme" />
      <TagSelectComponent {...args} theme="colony" label="Select tag with colony theme" />
    </div>
}`,...(N=(C=h.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const M=["TagSelect"];export{h as TagSelect,M as __namedExportsOrder,K as default};
