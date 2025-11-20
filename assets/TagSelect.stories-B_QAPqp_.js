import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as n,R as C}from"./iframe-CpEEMF-P.js";import{u as V}from"./useToggle-BcRk9np8.js";import{T as R}from"./Tag-BoJF3n6n.js";import{c as x,a as b}from"./index-Bn42e07n.js";import{X as L}from"./x-Bv0ATqi_.js";import{P as T}from"./index-DB9QsRXR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-COyoqs4q.js";import"./index-CIAWnZzI.js";function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},N.apply(this,arguments)}function z(e,t){if(e==null)return{};var r=W(e,t),a,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function W(e,t){if(e==null)return{};var r={},a=Object.keys(e),o,s;for(s=0;s<a.length;s++)o=a[s],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var O=n.forwardRef(function(e,t){var r=e.color,a=r===void 0?"currentColor":r,o=e.size,s=o===void 0?24:o,d=z(e,["color","size"]);return C.createElement("svg",N({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),C.createElement("polyline",{points:"18 15 12 9 6 15"}))});O.propTypes={color:T.string,size:T.oneOfType([T.string,T.number])};O.displayName="ChevronUp";const F={tags:[],selectedTags:[],isOpen:!1,inputRef:null,onSelectTag(){throw new Error("Function not implemented.")},onRemoveTag(){throw new Error("Function not implemented.")},onOpen(){throw new Error("Function not implemented.")}},I=n.createContext(F),S=()=>{const e=n.useContext(I);if(!e)throw new Error("useTagSelect must be used within a TagSelectProvider");return e},P=({children:e,defaultOptions:t=[],multiselect:r=!0})=>{const a=n.useRef(null),[o,s]=V(!1),[d,h]=n.useState(t),[u,m]=n.useState([]),g=n.useCallback(p=>{if(a.current){const i=p.map(({id:f,label:c})=>({id:f,value:c}));a.current.value=JSON.stringify(i)}},[]),j=n.useCallback(p=>{const i=[...r?u:[],p];m(i);const f=i.map(c=>c.id);h(()=>r?t.filter(c=>!f.includes(c.id)):t.map(c=>({...c,isSelected:f.includes(c.id)}))),g(i),s(!1)},[t,g,r,u,s]),y=n.useCallback(p=>{const i=u.filter(c=>c.id!==p.id);m(i);const f=i.map(c=>c.id);h(()=>t.filter(c=>!f.includes(c.id))),g(i)},[t,g,u]),k=n.useCallback(p=>s(p),[s]);return l.jsx(I.Provider,{value:{tags:d,selectedTags:u,isOpen:o,inputRef:a,onSelectTag:j,onRemoveTag:y,onOpen:k},children:e})};P.__docgenInfo={description:"",methods:[],displayName:"TagSelectProvider",props:{defaultOptions:{required:!1,tsType:{name:"Array",elements:[{name:"TagProps"}],raw:"TagProps[]"},description:"",defaultValue:{value:"[]",computed:!1}},multiselect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const $=x(["cursor-pointer","py-1.5","px-2","last:pb-2","first:pt-2","h-full","hover:bg-purple-100"],{variants:{isSelected:{true:"",false:""}},compoundVariants:[{isSelected:!0,class:["bg-purple-100"]}],defaultVariants:{isSelected:!1}}),E=({option:e,theme:t})=>{const{onSelectTag:r}=S();return l.jsx("li",{role:"option","data-theme":t,className:b($({isSelected:e.isSelected})),onClick:()=>r(e),children:l.jsx(R,{...e})})};E.__docgenInfo={description:"",methods:[],displayName:"Item",props:{option:{required:!0,tsType:{name:"TagProps"},description:""},theme:{required:!1,tsType:{name:"Theme"},description:""}}};const A=x(["absolute","bg-white","border","duration-100","flex","flex-col","mt-0.5","rounded","shadow-xs","top-full","transition-all","w-full","z-10","animate-in","fade-in-50","overflow-hidden","border-gray-200"]),q=({theme:e})=>{const{tags:t}=S();return l.jsx("ul",{role:"listbox","data-theme":e,className:b(A()),children:t.length>0?t.map(r=>l.jsx(E,{option:r},r.id)):l.jsx("span",{className:"text-center text-sm px-4 py-2",children:"There is not options available"})})};q.__docgenInfo={description:"",methods:[],displayName:"List",props:{theme:{required:!1,tsType:{name:"Theme"},description:""}}};const H=()=>{const e=n.useRef(null),{onOpen:t}=S();n.useEffect(()=>{const a=new AbortController,o=d=>{d.key==="Escape"&&t(!1)},s=d=>{e.current?.contains(d.target)||t(!1)};return document.addEventListener("keydown",o,{signal:a.signal}),document.addEventListener("mousedown",s,{signal:a.signal}),()=>{a.abort()}},[t,e]);const r=n.useCallback(a=>{a.target?.closest("[data-value]")||t(!0)},[t]);return{wrapperRef:e,handleOpen:r}},U=x(["flex","flex-col","w-full","relative","text-zinc-500"]),D=x(["my-2","cursor-pointer"]),M=x(["border","cursor-pointer","duration-250","ease-in-out","flex","items-center","justify-between","px-2","py-1","rounded","transition-all","w-full","border-gray-200"]),_=n.forwardRef(({label:e,labelClassName:t,name:r,placeholder:a="Select a value...",theme:o,wrapperClassName:s},d)=>{const h=n.useId(),{selectedTags:u,isOpen:m,onOpen:g,onRemoveTag:j,inputRef:y}=S(),{wrapperRef:k,handleOpen:p}=H();return n.useImperativeHandle(d,()=>y.current,[y]),l.jsxs("div",{ref:k,className:b(U({className:s})),"data-theme":o,children:[e?l.jsx("label",{htmlFor:r??h,className:b(D({className:t})),onClick:()=>g(!0),children:e}):null,l.jsxs("div",{id:r??h,className:b(M()),role:"combobox",onClick:p,"aria-expanded":m,children:[u.length===0?l.jsx("span",{className:"text-base text-inherit select-none",children:a}):l.jsx("div",{className:"flex flex-wrap gap-1.5",children:u.map(i=>l.jsx(R,{...i,className:"select-none",rightIcon:l.jsx(L,{className:"w-3 h-3",onClick:()=>j(i)}),"data-value":i.label},i.id))}),l.jsx(O,{className:b("w-4 h-4 text-inherit transition-all duration-50 shrink-0",m?"rotate-0":"rotate-180")})]}),l.jsx("input",{ref:y,type:"text",name:r,className:"hidden"}),m?l.jsx(q,{}):null]})});_.__docgenInfo={description:"",methods:[],displayName:"Wrapper",props:{ref:{required:!1,tsType:{name:"ForwardedRef",elements:[{name:"HTMLInputElement"}],raw:"ForwardedRef<HTMLInputElement>"},description:""},theme:{required:!1,tsType:{name:"Theme"},description:""},placeholder:{defaultValue:{value:"'Select a value...'",computed:!1},required:!1}}};const w=n.forwardRef(({options:e,multiselect:t,...r},a)=>l.jsx(P,{defaultOptions:e,multiselect:t,children:l.jsx(_,{ref:a,...r})}));w.__docgenInfo={description:"",methods:[],displayName:"TagSelect",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"TagProps"}],raw:"TagProps[]"},description:""},name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},multiselect:{required:!1,tsType:{name:"boolean"},description:""}},composes:["VariantProps"]};const re={title:"In Review/TagSelect",component:w},v={args:{options:[{id:"1",color:"gray",label:"gray"},{id:"2",color:"cyan",label:"cyan"},{id:"3",color:"gold",label:"gold"},{id:"4",color:"green",label:"green"},{id:"5",color:"light blue",label:"light blue"},{id:"6",color:"lime",label:"lime"},{id:"7",color:"pink",label:"pink"},{id:"8",color:"purple",label:"purple"},{id:"9",color:"emerald",label:"emerald"},{id:"10",color:"fuscia",label:"fuscia"},{id:"11",color:"indigo",label:"indigo"},{id:"12",color:"light-orange",label:"light-orange"},{id:"13",color:"dark-sky-blue",label:"dark-sky-blue"},{id:"14",color:"mistery",label:"mistery"}]},render:e=>l.jsxs("div",{className:"max-w-[300px] flex flex-col gap-3",children:[l.jsx(w,{...e,label:"Select tag with kubefirst theme multiselect"}),l.jsx("div",{className:"border-t my-3 border-gray-200"}),l.jsx(w,{...e,label:"Select tag with kubefirst theme",multiselect:!1})]})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const ae=["TagSelect"];export{v as TagSelect,ae as __namedExportsOrder,re as default};
