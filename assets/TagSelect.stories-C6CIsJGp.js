import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-CDlOlYQx.js";import{u as O}from"./useToggle-BALwLbl6.js";import{T as R}from"./Tag-BiWKra0n.js";import{c as k,a as b}from"./index-DJQVxuCM.js";import{X as P}from"./x-BnoV_6bz.js";import{C as F}from"./chevron-up-UzVUTr3-.js";import"./index-4AoDZzVP.js";import"./index-_3p-ol44.js";const L={tags:[],selectedTags:[],isOpen:!1,inputRef:null,onSelectTag(){throw new Error("Function not implemented.")},onRemoveTag(){throw new Error("Function not implemented.")},onOpen(){throw new Error("Function not implemented.")}},j=r.createContext(L),w=()=>{const e=r.useContext(j);if(!e)throw new Error("useTagSelect must be used within a TagSelectProvider");return e},C=({children:e,defaultOptions:l=[],multiselect:n=!0})=>{const s=r.useRef(null),[o,u]=O(!1),[g,c]=r.useState(l),[m,p]=r.useState([]),f=r.useCallback(d=>{if(s.current){const t=d.map(({id:v,label:i})=>({id:v,value:i}));s.current.value=JSON.stringify(t)}},[]),T=r.useCallback(d=>{const t=[...n?m:[],d];p(t);const v=t.map(i=>i.id);c(()=>n?l.filter(i=>!v.includes(i.id)):l.map(i=>({...i,isSelected:v.includes(i.id)}))),f(t),u(!1)},[l,f,n,m,u]),y=r.useCallback(d=>{const t=m.filter(i=>i.id!==d.id);p(t);const v=t.map(i=>i.id);c(()=>l.filter(i=>!v.includes(i.id))),f(t)},[l,f,m]),S=r.useCallback(d=>u(d),[u]);return a.jsx(j.Provider,{value:{tags:g,selectedTags:m,isOpen:o,inputRef:s,onSelectTag:T,onRemoveTag:y,onOpen:S},children:e})};C.__docgenInfo={description:"",methods:[],displayName:"TagSelectProvider",props:{defaultOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| 'mistery'`,elements:[{name:"literal",value:"'gray'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'gold'"},{name:"literal",value:"'green'"},{name:"literal",value:"'light blue'"},{name:"literal",value:"'lime'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'emerald'"},{name:"literal",value:"'fuscia'"},{name:"literal",value:"'indigo'"},{name:"literal",value:"'light-orange'"},{name:"literal",value:"'dark-sky-blue'"},{name:"literal",value:"'mistery'"}],required:!1}},{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"rightIcon",value:{name:"ReactNode",required:!1}},{key:"leftIcon",value:{name:"ReactNode",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"data-value",value:{name:"string",required:!1}},{key:"isSelected",value:{name:"boolean",required:!1}}]}}],raw:"TagProps[]"},description:"",defaultValue:{value:"[]",computed:!1}},multiselect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const W=k(["cursor-pointer","py-1.5","px-2","last:pb-2","first:pt-2","h-full","hover:bg-purple-100"],{variants:{isSelected:{true:"",false:""}},compoundVariants:[{isSelected:!0,class:["bg-purple-100"]}],defaultVariants:{isSelected:!1}}),V=({option:e,theme:l})=>{const{onSelectTag:n}=w();return a.jsx("li",{role:"option","data-theme":l,className:b(W({isSelected:e.isSelected})),onClick:()=>n(e),children:a.jsx(R,{...e})})};V.__docgenInfo={description:"",methods:[],displayName:"Item",props:{option:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| 'colony'
| 'civo'
| 'kubefirst-dark'
| 'colony-dark'
| 'civo-dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'colony'"},{name:"literal",value:"'civo'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'colony-dark'"},{name:"literal",value:"'civo-dark'"},{name:"undefined"}]},description:""}}};const $=k(["absolute","bg-white","border","duration-100","flex","flex-col","mt-0.5","rounded","shadow-xs","top-full","transition-all","w-full","z-10","animate-in","fade-in-50","overflow-hidden","border-gray-200"]),E=({theme:e})=>{const{tags:l}=w();return a.jsx("ul",{role:"listbox","data-theme":e,className:b($()),children:l.length>0?l.map(n=>a.jsx(V,{option:n},n.id)):a.jsx("span",{className:"text-center text-sm px-4 py-2",children:"There is not options available"})})};E.__docgenInfo={description:"",methods:[],displayName:"List",props:{theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'colony'
| 'civo'
| 'kubefirst-dark'
| 'colony-dark'
| 'civo-dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'colony'"},{name:"literal",value:"'civo'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'colony-dark'"},{name:"literal",value:"'civo-dark'"},{name:"undefined"}]},description:""}}};const A=()=>{const e=r.useRef(null),{onOpen:l}=w();r.useEffect(()=>{const s=new AbortController,o=g=>{g.key==="Escape"&&l(!1)},u=g=>{var c;(c=e.current)!=null&&c.contains(g.target)||l(!1)};return document.addEventListener("keydown",o,{signal:s.signal}),document.addEventListener("mousedown",u,{signal:s.signal}),()=>{s.abort()}},[l,e]);const n=r.useCallback(s=>{const o=s.target;(o==null?void 0:o.closest("[data-value]"))||l(!0)},[l]);return{wrapperRef:e,handleOpen:n}},H=k(["flex","flex-col","w-full","relative","text-zinc-500"]),z=k(["my-2","cursor-pointer"]),D=k(["border","cursor-pointer","duration-250","ease-in-out","flex","items-center","justify-between","px-2","py-1","rounded","transition-all","w-full","border-gray-200"]),_=r.forwardRef(({label:e,labelClassName:l,name:n,placeholder:s="Select a value...",theme:o,wrapperClassName:u},g)=>{const c=r.useId(),{selectedTags:m,isOpen:p,onOpen:f,onRemoveTag:T,inputRef:y}=w(),{wrapperRef:S,handleOpen:d}=A();return r.useImperativeHandle(g,()=>y.current,[y]),a.jsxs("div",{ref:S,className:b(H({className:u})),"data-theme":o,children:[e?a.jsx("label",{htmlFor:n??c,className:b(z({className:l})),onClick:()=>f(!0),children:e}):null,a.jsxs("div",{id:n??c,className:b(D()),role:"combobox",onClick:d,"aria-expanded":p,children:[m.length===0?a.jsx("span",{className:"text-base text-inherit select-none",children:s}):a.jsx("div",{className:"flex flex-wrap gap-1.5",children:m.map(t=>a.jsx(R,{...t,className:"select-none",rightIcon:a.jsx(P,{className:"w-3 h-3",onClick:()=>T(t)}),"data-value":t.label},t.id))}),a.jsx(F,{className:b("w-4 h-4 text-inherit transition-all duration-50 shrink-0",p?"rotate-0":"rotate-180")})]}),a.jsx("input",{ref:y,type:"text",name:n,className:"hidden"}),p?a.jsx(E,{}):null]})});_.__docgenInfo={description:"",methods:[],displayName:"Wrapper",props:{ref:{required:!1,tsType:{name:"ForwardedRef",elements:[{name:"HTMLInputElement"}],raw:"ForwardedRef<HTMLInputElement>"},description:""},theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'colony'
| 'civo'
| 'kubefirst-dark'
| 'colony-dark'
| 'civo-dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'colony'"},{name:"literal",value:"'civo'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'colony-dark'"},{name:"literal",value:"'civo-dark'"},{name:"undefined"}]},description:""},placeholder:{defaultValue:{value:"'Select a value...'",computed:!1},required:!1}}};const x=r.forwardRef(({options:e,multiselect:l,...n},s)=>a.jsx(C,{defaultOptions:e,multiselect:l,children:a.jsx(_,{ref:s,...n})}));x.__docgenInfo={description:"",methods:[],displayName:"TagSelect",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| 'mistery'`,elements:[{name:"literal",value:"'gray'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'gold'"},{name:"literal",value:"'green'"},{name:"literal",value:"'light blue'"},{name:"literal",value:"'lime'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'emerald'"},{name:"literal",value:"'fuscia'"},{name:"literal",value:"'indigo'"},{name:"literal",value:"'light-orange'"},{name:"literal",value:"'dark-sky-blue'"},{name:"literal",value:"'mistery'"}],required:!1}},{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"rightIcon",value:{name:"ReactNode",required:!1}},{key:"leftIcon",value:{name:"ReactNode",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"data-value",value:{name:"string",required:!1}},{key:"isSelected",value:{name:"boolean",required:!1}}]}}],raw:"TagProps[]"},description:""},name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},multiselect:{required:!1,tsType:{name:"boolean"},description:""}},composes:["VariantProps"]};const Z={title:"In Review/TagSelect",component:x},h={args:{options:[{id:"1",color:"gray",label:"gray"},{id:"2",color:"cyan",label:"cyan"},{id:"3",color:"gold",label:"gold"},{id:"4",color:"green",label:"green"},{id:"5",color:"light blue",label:"light blue"},{id:"6",color:"lime",label:"lime"},{id:"7",color:"pink",label:"pink"},{id:"8",color:"purple",label:"purple"},{id:"9",color:"emerald",label:"emerald"},{id:"10",color:"fuscia",label:"fuscia"},{id:"11",color:"indigo",label:"indigo"},{id:"12",color:"light-orange",label:"light-orange"},{id:"13",color:"dark-sky-blue",label:"dark-sky-blue"},{id:"14",color:"mistery",label:"mistery"}]},render:e=>a.jsxs("div",{className:"max-w-[300px] flex flex-col gap-3",children:[a.jsx(x,{...e,label:"Select tag with kubefirst theme multiselect"}),a.jsx("div",{className:"border-t my-3 border-gray-200"}),a.jsx(x,{...e,label:"Select tag with kubefirst theme",multiselect:!1})]})};var N,q,I;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(I=(q=h.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};const ee=["TagSelect"];export{h as TagSelect,ee as __namedExportsOrder,Z as default};
