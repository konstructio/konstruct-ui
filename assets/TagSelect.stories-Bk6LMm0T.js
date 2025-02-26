import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-DUAV1Q2A.js";import{u as P}from"./useToggle-BkgZmkan.js";import{T as j}from"./Tag-C5BkIBzC.js";import{u as N}from"./theme.hook-gog7kSAh.js";import{c as b}from"./index-BVvdOpju.js";import{a as y}from"./index-Bj7X0qp-.js";import{X as L}from"./x-DjazElhu.js";import{C as F}from"./chevron-up-r50vysvG.js";import"./index-CDkZDzqB.js";import"./index-ux_S9feM.js";const W={tags:[],selectedTags:[],isOpen:!1,inputRef:null,onSelectTag(){throw new Error("Function not implemented.")},onRemoveTag(){throw new Error("Function not implemented.")},onOpen(){throw new Error("Function not implemented.")}},C=t.createContext(W),T=()=>{const e=t.useContext(C);if(!e)throw new Error("useTagSelect must be used within a TagSelectProvider");return e},V=({children:e,defaultOptions:l=[],multiselect:i=!0})=>{const r=t.useRef(null),[s,c]=P(!1),[g,m]=t.useState(l),[f,h]=t.useState([]),p=t.useCallback(d=>{if(r.current){const o=d.map(({id:u,label:n})=>({id:u,value:n}));r.current.value=JSON.stringify(o)}},[]),w=t.useCallback(d=>{const o=[...i?f:[],d];h(o);const u=o.map(n=>n.id);m(()=>i?l.filter(n=>!u.includes(n.id)):l.map(n=>({...n,isSelected:u.includes(n.id)}))),p(o),c(!1)},[l,p,i,f,c]),S=t.useCallback(d=>{const o=f.filter(n=>n.id!==d.id);h(o);const u=o.map(n=>n.id);m(()=>l.filter(n=>!u.includes(n.id))),p(o)},[l,p,f]),v=t.useCallback(d=>c(d),[c]);return a.jsx(C.Provider,{value:{tags:g,selectedTags:f,isOpen:s,inputRef:r,onSelectTag:w,onRemoveTag:S,onOpen:v},children:e})};V.__docgenInfo={description:"",methods:[],displayName:"TagSelectProvider",props:{defaultOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| 'mistery'`,elements:[{name:"literal",value:"'gray'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'gold'"},{name:"literal",value:"'green'"},{name:"literal",value:"'light blue'"},{name:"literal",value:"'lime'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'emerald'"},{name:"literal",value:"'fuscia'"},{name:"literal",value:"'indigo'"},{name:"literal",value:"'light-orange'"},{name:"literal",value:"'dark-sky-blue'"},{name:"literal",value:"'mistery'"}],required:!1}},{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"rightIcon",value:{name:"ReactNode",required:!1}},{key:"leftIcon",value:{name:"ReactNode",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"data-value",value:{name:"string",required:!1}},{key:"isSelected",value:{name:"boolean",required:!1}}]}}],raw:"TagProps[]"},description:"",defaultValue:{value:"[]",computed:!1}},multiselect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const $=y(["cursor-pointer","py-1.5","px-2","last:pb-2","first:pt-2","h-full"],{variants:{theme:{colony:"",kubefirst:["hover:bg-purple-100"],civo:""},isSelected:{true:"",false:""}},compoundVariants:[{theme:"kubefirst",isSelected:!0,class:["bg-purple-100"]}],defaultVariants:{theme:"kubefirst",isSelected:!1}}),E=({option:e,theme:l})=>{const{theme:i}=N(),{onSelectTag:r}=T(),s=l??i;return a.jsx("li",{role:"option",className:b($({theme:s,isSelected:e.isSelected})),onClick:()=>r(e),children:a.jsx(j,{...e})})};E.__docgenInfo={description:"",methods:[],displayName:"Item",props:{option:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| 'mistery'`,elements:[{name:"literal",value:"'gray'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'gold'"},{name:"literal",value:"'green'"},{name:"literal",value:"'light blue'"},{name:"literal",value:"'lime'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'emerald'"},{name:"literal",value:"'fuscia'"},{name:"literal",value:"'indigo'"},{name:"literal",value:"'light-orange'"},{name:"literal",value:"'dark-sky-blue'"},{name:"literal",value:"'mistery'"}],required:!1}},{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"rightIcon",value:{name:"ReactNode",required:!1}},{key:"leftIcon",value:{name:"ReactNode",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"data-value",value:{name:"string",required:!1}},{key:"isSelected",value:{name:"boolean",required:!1}}]}},description:""},theme:{required:!0,tsType:{name:"TagSelectProps['theme']",raw:"ListProps['theme']"},description:""}}};const z=y(["absolute","bg-white","border","duration-100","flex","flex-col","mt-0.5","rounded","shadow-sm","top-full","transition-all","w-full","z-10","animate-in","fade-in-60","zoom-in-95","overflow-hidden"],{variants:{theme:{colony:"",kubefirst:"",civo:""}},defaultVariants:{theme:"kubefirst"}}),_=({theme:e})=>{const{tags:l}=T(),{theme:i}=N(),r=e??i;return a.jsx("ul",{role:"listbox",className:b(z({theme:r})),children:l.length>0?l.map(s=>a.jsx(E,{theme:r,option:s},s.id)):a.jsx("span",{className:"text-center text-sm px-4 py-2",children:"There is not options available"})})};_.__docgenInfo={description:"",methods:[],displayName:"List",props:{theme:{required:!0,tsType:{name:"TagSelectProps['theme']",raw:"TagSelectProps['theme']"},description:""}}};const A=()=>{const e=t.useRef(null),{onOpen:l}=T();t.useEffect(()=>{const r=new AbortController,s=g=>{g.key==="Escape"&&l(!1)},c=g=>{var m;(m=e.current)!=null&&m.contains(g.target)||l(!1)};return document.addEventListener("keydown",s,{signal:r.signal}),document.addEventListener("mousedown",c,{signal:r.signal}),()=>{r.abort()}},[l,e]);const i=t.useCallback(r=>{const s=r.target;(s==null?void 0:s.closest("[data-value]"))||l(!0)},[l]);return{wrapperRef:e,handleOpen:i}},H=y(["flex","flex-col","w-full","relative","text-zinc-500"],{variants:{theme:{colony:"",kubefirst:"",civo:""}},defaultVariants:{theme:"kubefirst"}}),D=y(["my-2","cursor-pointer"],{variants:{theme:{colony:"",kubefirst:"",civo:""}},defaultVariants:{theme:"kubefirst"}}),M=y(["border","cursor-pointer","duration-250","ease-in-out","flex","items-center","justify-between","px-2","py-1","rounded","transition-all","w-full"],{variants:{theme:{colony:"",kubefirst:"",civo:""}},defaultVariants:{theme:"kubefirst"}}),O=t.forwardRef(({label:e,labelClassName:l,name:i,placeholder:r="Select a value...",theme:s,wrapperClassName:c},g)=>{const m=t.useId(),{theme:f}=N(),{selectedTags:h,isOpen:p,onOpen:w,onRemoveTag:S,inputRef:v}=T(),{wrapperRef:d,handleOpen:o}=A(),u=s??f;return t.useImperativeHandle(g,()=>v.current,[v]),a.jsxs("div",{ref:d,className:b(H({theme:u,className:c})),children:[e?a.jsx("label",{htmlFor:i??m,className:b(D({theme:u,className:l})),onClick:()=>w(!0),children:e}):null,a.jsxs("div",{id:i??m,className:b(M({theme:u})),role:"combobox",onClick:o,"aria-expanded":p,children:[h.length===0?a.jsx("span",{className:"text-base text-inherit select-none",children:r}):a.jsx("div",{className:"flex flex-wrap gap-1.5",children:h.map(n=>a.jsx(j,{...n,className:"select-none",rightIcon:a.jsx(L,{className:"w-3 h-3",onClick:()=>S(n)}),"data-value":n.label},n.id))}),a.jsx(F,{className:b("w-4 h-4 text-inherit transition-all duration-50 shrink-0",p?"rotate-0":"rotate-180")})]}),a.jsx("input",{ref:v,type:"text",name:i,className:"hidden"}),p?a.jsx(_,{theme:u}):null]})});O.__docgenInfo={description:"",methods:[],displayName:"Wrapper",props:{ref:{required:!1,tsType:{name:"ForwardedRef",elements:[{name:"HTMLInputElement"}],raw:"ForwardedRef<HTMLInputElement>"},description:""},placeholder:{defaultValue:{value:"'Select a value...'",computed:!1},required:!1}}};const x=t.forwardRef(({options:e,multiselect:l,...i},r)=>a.jsx(V,{defaultOptions:e,multiselect:l,children:a.jsx(O,{ref:r,...i})}));x.__docgenInfo={description:"",methods:[],displayName:"TagSelect",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| 'mistery'`,elements:[{name:"literal",value:"'gray'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'gold'"},{name:"literal",value:"'green'"},{name:"literal",value:"'light blue'"},{name:"literal",value:"'lime'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'emerald'"},{name:"literal",value:"'fuscia'"},{name:"literal",value:"'indigo'"},{name:"literal",value:"'light-orange'"},{name:"literal",value:"'dark-sky-blue'"},{name:"literal",value:"'mistery'"}],required:!1}},{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"rightIcon",value:{name:"ReactNode",required:!1}},{key:"leftIcon",value:{name:"ReactNode",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"data-value",value:{name:"string",required:!1}},{key:"isSelected",value:{name:"boolean",required:!1}}]}}],raw:"TagProps[]"},description:""},name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},multiselect:{required:!1,tsType:{name:"boolean"},description:""}},composes:["VariantProps"]};const le={title:"In Review/TagSelect",component:x},k={args:{options:[{id:"1",color:"gray",label:"gray"},{id:"2",color:"cyan",label:"cyan"},{id:"3",color:"gold",label:"gold"},{id:"4",color:"green",label:"green"},{id:"5",color:"light blue",label:"light blue"},{id:"6",color:"lime",label:"lime"},{id:"7",color:"pink",label:"pink"},{id:"8",color:"purple",label:"purple"},{id:"9",color:"emerald",label:"emerald"},{id:"10",color:"fuscia",label:"fuscia"},{id:"11",color:"indigo",label:"indigo"},{id:"12",color:"light-orange",label:"light-orange"},{id:"13",color:"dark-sky-blue",label:"dark-sky-blue"},{id:"14",color:"mistery",label:"mistery"}]},render:e=>a.jsxs("div",{className:"max-w-[300px] flex flex-col gap-3",children:[a.jsx(x,{...e,label:"Select tag with kubefirst theme multiselect"}),a.jsx("div",{className:"border-t my-3"}),a.jsx(x,{...e,label:"Select tag with kubefirst theme",multiselect:!1})]})};var q,I,R;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
      <div className="border-t my-3" />
      <TagSelectComponent {...args} label="Select tag with kubefirst theme" multiselect={false} />
    </div>
}`,...(R=(I=k.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const ne=["TagSelect"];export{k as TagSelect,ne as __namedExportsOrder,le as default};
