import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-GVbY7hCP.js";import{u as V}from"./useToggle-_pVJsEp8.js";import{T as N}from"./Tag-eZS1hZBC.js";import{c as T,a as b}from"./index-Bn42e07n.js";import{X as E}from"./x-CfwJY9MW.js";import{C as _}from"./chevron-up-ZlVYLHf6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-VoBJlYmN.js";import"./index-BAv1-HGr.js";import"./index-Quv3eMJB.js";const O={tags:[],selectedTags:[],isOpen:!1,inputRef:null,onSelectTag(){throw new Error("Function not implemented.")},onRemoveTag(){throw new Error("Function not implemented.")},onOpen(){throw new Error("Function not implemented.")}},j=r.createContext(O),S=()=>{const e=r.useContext(j);if(!e)throw new Error("useTagSelect must be used within a TagSelectProvider");return e},C=({children:e,defaultOptions:t=[],multiselect:l=!0})=>{const n=r.useRef(null),[u,i]=V(!1),[p,h]=r.useState(t),[d,m]=r.useState([]),g=r.useCallback(c=>{if(n.current){const s=c.map(({id:f,label:o})=>({id:f,value:o}));n.current.value=JSON.stringify(s)}},[]),v=r.useCallback(c=>{const s=[...l?d:[],c];m(s);const f=s.map(o=>o.id);h(()=>l?t.filter(o=>!f.includes(o.id)):t.map(o=>({...o,isSelected:f.includes(o.id)}))),g(s),i(!1)},[t,g,l,d,i]),x=r.useCallback(c=>{const s=d.filter(o=>o.id!==c.id);m(s);const f=s.map(o=>o.id);h(()=>t.filter(o=>!f.includes(o.id))),g(s)},[t,g,d]),k=r.useCallback(c=>i(c),[i]);return a.jsx(j.Provider,{value:{tags:p,selectedTags:d,isOpen:u,inputRef:n,onSelectTag:v,onRemoveTag:x,onOpen:k},children:e})};C.__docgenInfo={description:"",methods:[],displayName:"TagSelectProvider",props:{defaultOptions:{required:!1,tsType:{name:"Array",elements:[{name:"TagProps"}],raw:"TagProps[]"},description:"",defaultValue:{value:"[]",computed:!1}},multiselect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const P=T(["cursor-pointer","py-1.5","px-2","last:pb-2","first:pt-2","h-full","hover:bg-purple-100"],{variants:{isSelected:{true:"",false:""}},compoundVariants:[{isSelected:!0,class:["bg-purple-100"]}],defaultVariants:{isSelected:!1}}),I=({option:e,theme:t})=>{const{onSelectTag:l}=S();return a.jsx("li",{role:"option","data-theme":t,className:b(P({isSelected:e.isSelected})),onClick:()=>l(e),children:a.jsx(N,{...e})})};I.__docgenInfo={description:"",methods:[],displayName:"Item",props:{option:{required:!0,tsType:{name:"TagProps"},description:""},theme:{required:!1,tsType:{name:"Theme"},description:""}}};const F=T(["absolute","bg-white","border","duration-100","flex","flex-col","mt-0.5","rounded","shadow-xs","top-full","transition-all","w-full","z-10","animate-in","fade-in-50","overflow-hidden","border-gray-200"]),R=({theme:e})=>{const{tags:t}=S();return a.jsx("ul",{role:"listbox","data-theme":e,className:b(F()),children:t.length>0?t.map(l=>a.jsx(I,{option:l},l.id)):a.jsx("span",{className:"text-center text-sm px-4 py-2",children:"There is not options available"})})};R.__docgenInfo={description:"",methods:[],displayName:"List",props:{theme:{required:!1,tsType:{name:"Theme"},description:""}}};const L=()=>{const e=r.useRef(null),{onOpen:t}=S();r.useEffect(()=>{const n=new AbortController,u=p=>{p.key==="Escape"&&t(!1)},i=p=>{e.current?.contains(p.target)||t(!1)};return document.addEventListener("keydown",u,{signal:n.signal}),document.addEventListener("mousedown",i,{signal:n.signal}),()=>{n.abort()}},[t,e]);const l=r.useCallback(n=>{n.target?.closest("[data-value]")||t(!0)},[t]);return{wrapperRef:e,handleOpen:l}},W=T(["flex","flex-col","w-full","relative","text-zinc-500"]),$=T(["my-2","cursor-pointer"]),A=T(["border","cursor-pointer","duration-250","ease-in-out","flex","items-center","justify-between","px-2","py-1","rounded","transition-all","w-full","border-gray-200"]),q=r.forwardRef(({label:e,labelClassName:t,name:l,placeholder:n="Select a value...",theme:u,wrapperClassName:i},p)=>{const h=r.useId(),{selectedTags:d,isOpen:m,onOpen:g,onRemoveTag:v,inputRef:x}=S(),{wrapperRef:k,handleOpen:c}=L();return r.useImperativeHandle(p,()=>x.current,[x]),a.jsxs("div",{ref:k,className:b(W({className:i})),"data-theme":u,children:[e?a.jsx("label",{htmlFor:l??h,className:b($({className:t})),onClick:()=>g(!0),children:e}):null,a.jsxs("div",{id:l??h,className:b(A()),role:"combobox",onClick:c,"aria-expanded":m,children:[d.length===0?a.jsx("span",{className:"text-base text-inherit select-none",children:n}):a.jsx("div",{className:"flex flex-wrap gap-1.5",children:d.map(s=>a.jsx(N,{...s,className:"select-none",rightIcon:a.jsx(E,{className:"w-3 h-3",onClick:()=>v(s)}),"data-value":s.label},s.id))}),a.jsx(_,{className:b("w-4 h-4 text-inherit transition-all duration-50 shrink-0",m?"rotate-0":"rotate-180")})]}),a.jsx("input",{ref:x,type:"text",name:l,className:"hidden"}),m?a.jsx(R,{}):null]})});q.__docgenInfo={description:"",methods:[],displayName:"Wrapper",props:{ref:{required:!1,tsType:{name:"ForwardedRef",elements:[{name:"HTMLInputElement"}],raw:"ForwardedRef<HTMLInputElement>"},description:""},theme:{required:!1,tsType:{name:"Theme"},description:""},placeholder:{defaultValue:{value:"'Select a value...'",computed:!1},required:!1}}};const w=r.forwardRef(({options:e,multiselect:t,...l},n)=>a.jsx(C,{defaultOptions:e,multiselect:t,children:a.jsx(q,{ref:n,...l})}));w.__docgenInfo={description:"",methods:[],displayName:"TagSelect",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"TagProps"}],raw:"TagProps[]"},description:""},name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},multiselect:{required:!1,tsType:{name:"boolean"},description:""}},composes:["VariantProps"]};const Y={title:"In Review/TagSelect",component:w},y={args:{options:[{id:"1",color:"gray",label:"gray"},{id:"2",color:"cyan",label:"cyan"},{id:"3",color:"gold",label:"gold"},{id:"4",color:"green",label:"green"},{id:"5",color:"light blue",label:"light blue"},{id:"6",color:"lime",label:"lime"},{id:"7",color:"pink",label:"pink"},{id:"8",color:"purple",label:"purple"},{id:"9",color:"emerald",label:"emerald"},{id:"10",color:"fuscia",label:"fuscia"},{id:"11",color:"indigo",label:"indigo"},{id:"12",color:"light-orange",label:"light-orange"},{id:"13",color:"dark-sky-blue",label:"dark-sky-blue"},{id:"14",color:"mistery",label:"mistery"}]},render:e=>a.jsxs("div",{className:"max-w-[300px] flex flex-col gap-3",children:[a.jsx(w,{...e,label:"Select tag with kubefirst theme multiselect"}),a.jsx("div",{className:"border-t my-3 border-gray-200"}),a.jsx(w,{...e,label:"Select tag with kubefirst theme",multiselect:!1})]})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const Z=["TagSelect"];export{y as TagSelect,Z as __namedExportsOrder,Y as default};
