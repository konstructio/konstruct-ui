import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-D01DnpOT.js";import{u as V}from"./useToggle-C8QLhViD.js";import{T as N}from"./Tag-6NXxTxOY.js";import{c as k,a as b}from"./index-CJCZd66Q.js";import{X as E}from"./x-DpLxdFPe.js";import{C as _}from"./chevron-up-BCwm5asX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D60xDcd1.js";import"./index-BczJ4cjc.js";const O={tags:[],selectedTags:[],isOpen:!1,inputRef:null,onSelectTag(){throw new Error("Function not implemented.")},onRemoveTag(){throw new Error("Function not implemented.")},onOpen(){throw new Error("Function not implemented.")}},q=r.createContext(O),w=()=>{const e=r.useContext(q);if(!e)throw new Error("useTagSelect must be used within a TagSelectProvider");return e},I=({children:e,defaultOptions:l=[],multiselect:n=!0})=>{const s=r.useRef(null),[m,o]=V(!1),[c,v]=r.useState(l),[d,g]=r.useState([]),p=r.useCallback(u=>{if(s.current){const t=u.map(({id:f,label:i})=>({id:f,value:i}));s.current.value=JSON.stringify(t)}},[]),T=r.useCallback(u=>{const t=[...n?d:[],u];g(t);const f=t.map(i=>i.id);v(()=>n?l.filter(i=>!f.includes(i.id)):l.map(i=>({...i,isSelected:f.includes(i.id)}))),p(t),o(!1)},[l,p,n,d,o]),y=r.useCallback(u=>{const t=d.filter(i=>i.id!==u.id);g(t);const f=t.map(i=>i.id);v(()=>l.filter(i=>!f.includes(i.id))),p(t)},[l,p,d]),S=r.useCallback(u=>o(u),[o]);return a.jsx(q.Provider,{value:{tags:c,selectedTags:d,isOpen:m,inputRef:s,onSelectTag:T,onRemoveTag:y,onOpen:S},children:e})};I.__docgenInfo={description:"",methods:[],displayName:"TagSelectProvider",props:{defaultOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| 'mistery'`,elements:[{name:"literal",value:"'gray'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'gold'"},{name:"literal",value:"'green'"},{name:"literal",value:"'light blue'"},{name:"literal",value:"'lime'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'emerald'"},{name:"literal",value:"'fuscia'"},{name:"literal",value:"'indigo'"},{name:"literal",value:"'light-orange'"},{name:"literal",value:"'dark-sky-blue'"},{name:"literal",value:"'mistery'"}],required:!1}},{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"rightIcon",value:{name:"ReactNode",required:!1}},{key:"leftIcon",value:{name:"ReactNode",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"data-value",value:{name:"string",required:!1}},{key:"isSelected",value:{name:"boolean",required:!1}}]}}],raw:"TagProps[]"},description:"",defaultValue:{value:"[]",computed:!1}},multiselect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const P=k(["cursor-pointer","py-1.5","px-2","last:pb-2","first:pt-2","h-full","hover:bg-purple-100"],{variants:{isSelected:{true:"",false:""}},compoundVariants:[{isSelected:!0,class:["bg-purple-100"]}],defaultVariants:{isSelected:!1}}),R=({option:e,theme:l})=>{const{onSelectTag:n}=w();return a.jsx("li",{role:"option","data-theme":l,className:b(P({isSelected:e.isSelected})),onClick:()=>n(e),children:a.jsx(N,{...e})})};R.__docgenInfo={description:"",methods:[],displayName:"Item",props:{option:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'light'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'dark'"},{name:"undefined"}]},description:""}}};const F=k(["absolute","bg-white","border","duration-100","flex","flex-col","mt-0.5","rounded","shadow-xs","top-full","transition-all","w-full","z-10","animate-in","fade-in-50","overflow-hidden","border-gray-200"]),j=({theme:e})=>{const{tags:l}=w();return a.jsx("ul",{role:"listbox","data-theme":e,className:b(F()),children:l.length>0?l.map(n=>a.jsx(R,{option:n},n.id)):a.jsx("span",{className:"text-center text-sm px-4 py-2",children:"There is not options available"})})};j.__docgenInfo={description:"",methods:[],displayName:"List",props:{theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'light'
| 'kubefirst-dark'
| 'dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'light'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'dark'"},{name:"undefined"}]},description:""}}};const L=()=>{const e=r.useRef(null),{onOpen:l}=w();r.useEffect(()=>{const s=new AbortController,m=c=>{c.key==="Escape"&&l(!1)},o=c=>{e.current?.contains(c.target)||l(!1)};return document.addEventListener("keydown",m,{signal:s.signal}),document.addEventListener("mousedown",o,{signal:s.signal}),()=>{s.abort()}},[l,e]);const n=r.useCallback(s=>{s.target?.closest("[data-value]")||l(!0)},[l]);return{wrapperRef:e,handleOpen:n}},W=k(["flex","flex-col","w-full","relative","text-zinc-500"]),$=k(["my-2","cursor-pointer"]),A=k(["border","cursor-pointer","duration-250","ease-in-out","flex","items-center","justify-between","px-2","py-1","rounded","transition-all","w-full","border-gray-200"]),C=r.forwardRef(({label:e,labelClassName:l,name:n,placeholder:s="Select a value...",theme:m,wrapperClassName:o},c)=>{const v=r.useId(),{selectedTags:d,isOpen:g,onOpen:p,onRemoveTag:T,inputRef:y}=w(),{wrapperRef:S,handleOpen:u}=L();return r.useImperativeHandle(c,()=>y.current,[y]),a.jsxs("div",{ref:S,className:b(W({className:o})),"data-theme":m,children:[e?a.jsx("label",{htmlFor:n??v,className:b($({className:l})),onClick:()=>p(!0),children:e}):null,a.jsxs("div",{id:n??v,className:b(A()),role:"combobox",onClick:u,"aria-expanded":g,children:[d.length===0?a.jsx("span",{className:"text-base text-inherit select-none",children:s}):a.jsx("div",{className:"flex flex-wrap gap-1.5",children:d.map(t=>a.jsx(N,{...t,className:"select-none",rightIcon:a.jsx(E,{className:"w-3 h-3",onClick:()=>T(t)}),"data-value":t.label},t.id))}),a.jsx(_,{className:b("w-4 h-4 text-inherit transition-all duration-50 shrink-0",g?"rotate-0":"rotate-180")})]}),a.jsx("input",{ref:y,type:"text",name:n,className:"hidden"}),g?a.jsx(j,{}):null]})});C.__docgenInfo={description:"",methods:[],displayName:"Wrapper",props:{ref:{required:!1,tsType:{name:"ForwardedRef",elements:[{name:"HTMLInputElement"}],raw:"ForwardedRef<HTMLInputElement>"},description:""},theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'light'
| 'kubefirst-dark'
| 'dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'light'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'dark'"},{name:"undefined"}]},description:""},placeholder:{defaultValue:{value:"'Select a value...'",computed:!1},required:!1}}};const x=r.forwardRef(({options:e,multiselect:l,...n},s)=>a.jsx(I,{defaultOptions:e,multiselect:l,children:a.jsx(C,{ref:s,...n})}));x.__docgenInfo={description:"",methods:[],displayName:"TagSelect",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| 'mistery'`,elements:[{name:"literal",value:"'gray'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'gold'"},{name:"literal",value:"'green'"},{name:"literal",value:"'light blue'"},{name:"literal",value:"'lime'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'emerald'"},{name:"literal",value:"'fuscia'"},{name:"literal",value:"'indigo'"},{name:"literal",value:"'light-orange'"},{name:"literal",value:"'dark-sky-blue'"},{name:"literal",value:"'mistery'"}],required:!1}},{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"rightIcon",value:{name:"ReactNode",required:!1}},{key:"leftIcon",value:{name:"ReactNode",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"data-value",value:{name:"string",required:!1}},{key:"isSelected",value:{name:"boolean",required:!1}}]}}],raw:"TagProps[]"},description:""},name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},multiselect:{required:!1,tsType:{name:"boolean"},description:""}},composes:["VariantProps"]};const Q={title:"In Review/TagSelect",component:x},h={args:{options:[{id:"1",color:"gray",label:"gray"},{id:"2",color:"cyan",label:"cyan"},{id:"3",color:"gold",label:"gold"},{id:"4",color:"green",label:"green"},{id:"5",color:"light blue",label:"light blue"},{id:"6",color:"lime",label:"lime"},{id:"7",color:"pink",label:"pink"},{id:"8",color:"purple",label:"purple"},{id:"9",color:"emerald",label:"emerald"},{id:"10",color:"fuscia",label:"fuscia"},{id:"11",color:"indigo",label:"indigo"},{id:"12",color:"light-orange",label:"light-orange"},{id:"13",color:"dark-sky-blue",label:"dark-sky-blue"},{id:"14",color:"mistery",label:"mistery"}]},render:e=>a.jsxs("div",{className:"max-w-[300px] flex flex-col gap-3",children:[a.jsx(x,{...e,label:"Select tag with kubefirst theme multiselect"}),a.jsx("div",{className:"border-t my-3 border-gray-200"}),a.jsx(x,{...e,label:"Select tag with kubefirst theme",multiselect:!1})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Y=["TagSelect"];export{h as TagSelect,Y as __namedExportsOrder,Q as default};
