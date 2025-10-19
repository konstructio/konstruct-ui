import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as s,e as I}from"./iframe-CRVwP_9D.js";import{u as V}from"./useToggle-CHphlABv.js";import{T as R}from"./Tag-xrfTUylo.js";import{c as h,a as b}from"./index-CJCZd66Q.js";import{X as L}from"./x-BZatBqHf.js";import{P as k}from"./index-Bx5xmRM9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0hJ5HCp.js";function q(){return q=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},q.apply(this,arguments)}function z(e,a){if(e==null)return{};var l=W(e,a),n,i;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)n=t[i],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function W(e,a){if(e==null)return{};var l={},n=Object.keys(e),i,t;for(t=0;t<n.length;t++)i=n[t],!(a.indexOf(i)>=0)&&(l[i]=e[i]);return l}var j=s.forwardRef(function(e,a){var l=e.color,n=l===void 0?"currentColor":l,i=e.size,t=i===void 0?24:i,d=z(e,["color","size"]);return I.createElement("svg",q({ref:a,xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),I.createElement("polyline",{points:"18 15 12 9 6 15"}))});j.propTypes={color:k.string,size:k.oneOfType([k.string,k.number])};j.displayName="ChevronUp";const F={tags:[],selectedTags:[],isOpen:!1,inputRef:null,onSelectTag(){throw new Error("Function not implemented.")},onRemoveTag(){throw new Error("Function not implemented.")},onOpen(){throw new Error("Function not implemented.")}},O=s.createContext(F),T=()=>{const e=s.useContext(O);if(!e)throw new Error("useTagSelect must be used within a TagSelectProvider");return e},C=({children:e,defaultOptions:a=[],multiselect:l=!0})=>{const n=s.useRef(null),[i,t]=V(!1),[d,v]=s.useState(a),[m,g]=s.useState([]),p=s.useCallback(c=>{if(n.current){const o=c.map(({id:f,label:u})=>({id:f,value:u}));n.current.value=JSON.stringify(o)}},[]),S=s.useCallback(c=>{const o=[...l?m:[],c];g(o);const f=o.map(u=>u.id);v(()=>l?a.filter(u=>!f.includes(u.id)):a.map(u=>({...u,isSelected:f.includes(u.id)}))),p(o),t(!1)},[a,p,l,m,t]),y=s.useCallback(c=>{const o=m.filter(u=>u.id!==c.id);g(o);const f=o.map(u=>u.id);v(()=>a.filter(u=>!f.includes(u.id))),p(o)},[a,p,m]),N=s.useCallback(c=>t(c),[t]);return r.jsx(O.Provider,{value:{tags:d,selectedTags:m,isOpen:i,inputRef:n,onSelectTag:S,onRemoveTag:y,onOpen:N},children:e})};C.__docgenInfo={description:"",methods:[],displayName:"TagSelectProvider",props:{defaultOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  id: string | number;
  label: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  className?: string;
  'data-value'?: string;
  isSelected?: boolean;
}`,signature:{properties:[{key:"color",value:{name:"union",raw:`| 'gray'
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
| 'mistery'`,elements:[{name:"literal",value:"'gray'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'gold'"},{name:"literal",value:"'green'"},{name:"literal",value:"'light blue'"},{name:"literal",value:"'lime'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'emerald'"},{name:"literal",value:"'fuscia'"},{name:"literal",value:"'indigo'"},{name:"literal",value:"'light-orange'"},{name:"literal",value:"'dark-sky-blue'"},{name:"literal",value:"'mistery'"}],required:!1}},{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"rightIcon",value:{name:"ReactNode",required:!1}},{key:"leftIcon",value:{name:"ReactNode",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"data-value",value:{name:"string",required:!1}},{key:"isSelected",value:{name:"boolean",required:!1}}]}}],raw:"TagProps[]"},description:"",defaultValue:{value:"[]",computed:!1}},multiselect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const $=h(["cursor-pointer","py-1.5","px-2","last:pb-2","first:pt-2","h-full","hover:bg-purple-100"],{variants:{isSelected:{true:"",false:""}},compoundVariants:[{isSelected:!0,class:["bg-purple-100"]}],defaultVariants:{isSelected:!1}}),E=({option:e,theme:a})=>{const{onSelectTag:l}=T();return r.jsx("li",{role:"option","data-theme":a,className:b($({isSelected:e.isSelected})),onClick:()=>l(e),children:r.jsx(R,{...e})})};E.__docgenInfo={description:"",methods:[],displayName:"Item",props:{option:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
  id: string | number;
  label: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  className?: string;
  'data-value'?: string;
  isSelected?: boolean;
}`,signature:{properties:[{key:"color",value:{name:"union",raw:`| 'gray'
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
| 'mistery'`,elements:[{name:"literal",value:"'gray'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'gold'"},{name:"literal",value:"'green'"},{name:"literal",value:"'light blue'"},{name:"literal",value:"'lime'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'emerald'"},{name:"literal",value:"'fuscia'"},{name:"literal",value:"'indigo'"},{name:"literal",value:"'light-orange'"},{name:"literal",value:"'dark-sky-blue'"},{name:"literal",value:"'mistery'"}],required:!1}},{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"rightIcon",value:{name:"ReactNode",required:!1}},{key:"leftIcon",value:{name:"ReactNode",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"data-value",value:{name:"string",required:!1}},{key:"isSelected",value:{name:"boolean",required:!1}}]}},description:""},theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'light'
| 'kubefirst-dark'
| 'dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'light'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'dark'"},{name:"undefined"}]},description:""}}};const A=h(["absolute","bg-white","border","duration-100","flex","flex-col","mt-0.5","rounded","shadow-xs","top-full","transition-all","w-full","z-10","animate-in","fade-in-50","overflow-hidden","border-gray-200"]),_=({theme:e})=>{const{tags:a}=T();return r.jsx("ul",{role:"listbox","data-theme":e,className:b(A()),children:a.length>0?a.map(l=>r.jsx(E,{option:l},l.id)):r.jsx("span",{className:"text-center text-sm px-4 py-2",children:"There is not options available"})})};_.__docgenInfo={description:"",methods:[],displayName:"List",props:{theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'light'
| 'kubefirst-dark'
| 'dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'light'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'dark'"},{name:"undefined"}]},description:""}}};const H=()=>{const e=s.useRef(null),{onOpen:a}=T();s.useEffect(()=>{const n=new AbortController,i=d=>{d.key==="Escape"&&a(!1)},t=d=>{e.current?.contains(d.target)||a(!1)};return document.addEventListener("keydown",i,{signal:n.signal}),document.addEventListener("mousedown",t,{signal:n.signal}),()=>{n.abort()}},[a,e]);const l=s.useCallback(n=>{n.target?.closest("[data-value]")||a(!0)},[a]);return{wrapperRef:e,handleOpen:l}},U=h(["flex","flex-col","w-full","relative","text-zinc-500"]),D=h(["my-2","cursor-pointer"]),M=h(["border","cursor-pointer","duration-250","ease-in-out","flex","items-center","justify-between","px-2","py-1","rounded","transition-all","w-full","border-gray-200"]),P=s.forwardRef(({label:e,labelClassName:a,name:l,placeholder:n="Select a value...",theme:i,wrapperClassName:t},d)=>{const v=s.useId(),{selectedTags:m,isOpen:g,onOpen:p,onRemoveTag:S,inputRef:y}=T(),{wrapperRef:N,handleOpen:c}=H();return s.useImperativeHandle(d,()=>y.current,[y]),r.jsxs("div",{ref:N,className:b(U({className:t})),"data-theme":i,children:[e?r.jsx("label",{htmlFor:l??v,className:b(D({className:a})),onClick:()=>p(!0),children:e}):null,r.jsxs("div",{id:l??v,className:b(M()),role:"combobox",onClick:c,"aria-expanded":g,children:[m.length===0?r.jsx("span",{className:"text-base text-inherit select-none",children:n}):r.jsx("div",{className:"flex flex-wrap gap-1.5",children:m.map(o=>r.jsx(R,{...o,className:"select-none",rightIcon:r.jsx(L,{className:"w-3 h-3",onClick:()=>S(o)}),"data-value":o.label},o.id))}),r.jsx(j,{className:b("w-4 h-4 text-inherit transition-all duration-50 shrink-0",g?"rotate-0":"rotate-180")})]}),r.jsx("input",{ref:y,type:"text",name:l,className:"hidden"}),g?r.jsx(_,{}):null]})});P.__docgenInfo={description:"",methods:[],displayName:"Wrapper",props:{ref:{required:!1,tsType:{name:"ForwardedRef",elements:[{name:"HTMLInputElement"}],raw:"ForwardedRef<HTMLInputElement>"},description:""},theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'light'
| 'kubefirst-dark'
| 'dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'light'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'dark'"},{name:"undefined"}]},description:""},placeholder:{defaultValue:{value:"'Select a value...'",computed:!1},required:!1}}};const x=s.forwardRef(({options:e,multiselect:a,...l},n)=>r.jsx(C,{defaultOptions:e,multiselect:a,children:r.jsx(P,{ref:n,...l})}));x.__docgenInfo={description:"",methods:[],displayName:"TagSelect",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  id: string | number;
  label: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  className?: string;
  'data-value'?: string;
  isSelected?: boolean;
}`,signature:{properties:[{key:"color",value:{name:"union",raw:`| 'gray'
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
| 'mistery'`,elements:[{name:"literal",value:"'gray'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'gold'"},{name:"literal",value:"'green'"},{name:"literal",value:"'light blue'"},{name:"literal",value:"'lime'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'emerald'"},{name:"literal",value:"'fuscia'"},{name:"literal",value:"'indigo'"},{name:"literal",value:"'light-orange'"},{name:"literal",value:"'dark-sky-blue'"},{name:"literal",value:"'mistery'"}],required:!1}},{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"rightIcon",value:{name:"ReactNode",required:!1}},{key:"leftIcon",value:{name:"ReactNode",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"data-value",value:{name:"string",required:!1}},{key:"isSelected",value:{name:"boolean",required:!1}}]}}],raw:"TagProps[]"},description:""},name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},multiselect:{required:!1,tsType:{name:"boolean"},description:""}},composes:["VariantProps"]};const ae={title:"In Review/TagSelect",component:x},w={args:{options:[{id:"1",color:"gray",label:"gray"},{id:"2",color:"cyan",label:"cyan"},{id:"3",color:"gold",label:"gold"},{id:"4",color:"green",label:"green"},{id:"5",color:"light blue",label:"light blue"},{id:"6",color:"lime",label:"lime"},{id:"7",color:"pink",label:"pink"},{id:"8",color:"purple",label:"purple"},{id:"9",color:"emerald",label:"emerald"},{id:"10",color:"fuscia",label:"fuscia"},{id:"11",color:"indigo",label:"indigo"},{id:"12",color:"light-orange",label:"light-orange"},{id:"13",color:"dark-sky-blue",label:"dark-sky-blue"},{id:"14",color:"mistery",label:"mistery"}]},render:e=>r.jsxs("div",{className:"max-w-[300px] flex flex-col gap-3",children:[r.jsx(x,{...e,label:"Select tag with kubefirst theme multiselect"}),r.jsx("div",{className:"border-t my-3 border-gray-200"}),r.jsx(x,{...e,label:"Select tag with kubefirst theme",multiselect:!1})]})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      id: '1',
      color: 'gray',
      label: 'gray'
    }, {
      id: '2',
      color: 'cyan',
      label: 'cyan'
    }, {
      id: '3',
      color: 'gold',
      label: 'gold'
    }, {
      id: '4',
      color: 'green',
      label: 'green'
    }, {
      id: '5',
      color: 'light blue',
      label: 'light blue'
    }, {
      id: '6',
      color: 'lime',
      label: 'lime'
    }, {
      id: '7',
      color: 'pink',
      label: 'pink'
    }, {
      id: '8',
      color: 'purple',
      label: 'purple'
    }, {
      id: '9',
      color: 'emerald',
      label: 'emerald'
    }, {
      id: '10',
      color: 'fuscia',
      label: 'fuscia'
    }, {
      id: '11',
      color: 'indigo',
      label: 'indigo'
    }, {
      id: '12',
      color: 'light-orange',
      label: 'light-orange'
    }, {
      id: '13',
      color: 'dark-sky-blue',
      label: 'dark-sky-blue'
    }, {
      id: '14',
      color: 'mistery',
      label: 'mistery'
    }]
  },
  render: args => <div className="max-w-[300px] flex flex-col gap-3">
      <TagSelectComponent {...args} label="Select tag with kubefirst theme multiselect" />
      <div className="border-t my-3 border-gray-200" />
      <TagSelectComponent {...args} label="Select tag with kubefirst theme" multiselect={false} />
    </div>
}`,...w.parameters?.docs?.source}}};const le=["TagSelect"];export{w as TagSelect,le as __namedExportsOrder,ae as default};
