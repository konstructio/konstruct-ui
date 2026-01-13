import{r as s,j as t}from"./iframe-Dv_ed3hk.js";import{u as F}from"./useToggle-QqWvE8dJ.js";import{S as W}from"./loader-D8K9OvPO.js";import{c as S,a as q}from"./index-Bn42e07n.js";import{T as I}from"./Tag-B6tU-J0A.js";import{T as P}from"./Typography-Cb2Ps2fx.js";import{C as $}from"./chevron-up-C1SV7TkQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D5MN6fTV.js";import"./index-CqmYFDcc.js";import"./index-DcATTN8n.js";const z={options:[],selectedOptions:[],isOpen:!1,inputRef:null,onSelectOption(){throw new Error("Function not implemented.")},onRemoveOption(){throw new Error("Function not implemented.")},onOpen(){throw new Error("Function not implemented.")},isLoading:!1,noOptionsText:void 0},E=s.createContext(z),O=()=>{const e=s.useContext(E);if(!e)throw new Error("useMultiSelectDropdown must be used within a MultiSelectDropdownProvider");return e},R=({children:e,defaultOptions:r=[],multiselect:a=!0,value:i,onChange:p,onBlur:d,name:m,isLoading:f,noOptionsText:v})=>{const g=s.useRef(null),[x,L]=F(!1),[h,b]=s.useState(r),[y,T]=s.useState([]),u=i!==void 0;s.useEffect(()=>{if(!u){const o=new Set(y.map(n=>n.id));b(a?r.filter(n=>!o.has(n.id)):r.map(n=>({...n,isSelected:o.has(n.id)})))}},[r,a,u,y]),s.useEffect(()=>{if(u){const o=i||[];T(o);const n=new Set(o.map(c=>c.id));b(a?r.filter(c=>!n.has(c.id)):r.map(c=>({...c,isSelected:n.has(c.id)})))}},[i,u,r,a]);const w=s.useCallback(o=>{const n=o.map(({id:l,value:M,label:A})=>({id:l,value:M??A})),c=JSON.stringify(n);g.current&&(g.current.value=c),p&&p({target:{value:o,name:m??""}})},[p,m]),j=s.useCallback(o=>{const n=x;L(o),n&&o===!1&&d&&g.current&&d({target:g.current,type:"blur"})},[x,L,d,g]),_=s.useCallback(o=>{if(u){const l=[...a?y:[],o];w(l),j(!1);return}const n=[...a?y:[],o];T(n);const c=n.map(l=>l.id);b(()=>a?r.filter(l=>!c.includes(l.id)):r.map(l=>({...l,isSelected:c.includes(l.id)}))),w(n),j(!1)},[r,w,a,y,j,u]),H=s.useCallback(o=>{if(u){const l=y.filter(M=>M.id!==o.id);w(l);return}const n=y.filter(l=>l.id!==o.id);T(n);const c=n.map(l=>l.id);b(()=>r.filter(l=>!c.includes(l.id))),w(n)},[r,w,y,u]);return t.jsx(E.Provider,{value:{options:h,selectedOptions:y,isOpen:x,inputRef:g,onSelectOption:_,onRemoveOption:H,onOpen:j,isLoading:f,noOptionsText:v},children:e})};R.__docgenInfo={description:"",methods:[],displayName:"MultiSelectDropdownProvider",props:{defaultOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string | number;
  label: string;
  tagLabel?: string;
  tagColor?: TagProps['color'];
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tagLabel",value:{name:"string",required:!1}},{key:"tagColor",value:{name:"TagProps['color']",raw:"TagProps['color']",required:!1}},{key:"value",value:{name:"string",required:!1}}]}}],raw:"MultiSelectDropdownOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},multiselect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string | number;
  label: string;
  tagLabel?: string;
  tagColor?: TagProps['color'];
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tagLabel",value:{name:"string",required:!1}},{key:"tagColor",value:{name:"TagProps['color']",raw:"TagProps['color']",required:!1}},{key:"value",value:{name:"string",required:!1}}]}}],raw:"MultiSelectDropdownOption[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
  target: { value: MultiSelectDropdownOption[]; name: string };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: MultiSelectDropdownOption[]; name: string };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: MultiSelectDropdownOption[]; name: string }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string | number;
  label: string;
  tagLabel?: string;
  tagColor?: TagProps['color'];
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tagLabel",value:{name:"string",required:!1}},{key:"tagColor",value:{name:"TagProps['color']",raw:"TagProps['color']",required:!1}},{key:"value",value:{name:"string",required:!1}}]}}],raw:"MultiSelectDropdownOption[]",required:!0}},{key:"name",value:{name:"string",required:!0}}]},required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: HTMLInputElement | null; type?: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: HTMLInputElement | null; type?: string }",signature:{properties:[{key:"target",value:{name:"union",raw:"HTMLInputElement | null",elements:[{name:"HTMLInputElement"},{name:"null"}],required:!0}},{key:"type",value:{name:"string",required:!1}}]}},name:"event"}],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},noOptionsText:{required:!1,tsType:{name:"string"},description:""}}};const U=S(["cursor-pointer","py-1.5","px-2","last:pb-2","first:pt-2","h-full","hover:bg-gray-50","focus:bg-gray-50","dark:hover:bg-slate-700","dark:focus:bg-slate-700","flex","items-center","gap-4"],{variants:{isSelected:{true:"",false:""}},compoundVariants:[{isSelected:!0,class:["bg-slate-50"]}],defaultVariants:{isSelected:!1}}),N=({option:e,theme:r,isSelected:a,className:i})=>{const{onSelectOption:p}=O();return t.jsxs("li",{role:"option","data-theme":r,className:q(U({isSelected:a}),i),onClick:()=>p(e),children:[t.jsx(P,{variant:"body2",className:"text-slate-800",children:e.label}),e.tagLabel&&t.jsx(I,{id:e.id,label:e.tagLabel,color:e.tagColor,isSelected:a})]})};N.__docgenInfo={description:"",methods:[],displayName:"Item",props:{option:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  id: string | number;
  label: string;
  tagLabel?: string;
  tagColor?: TagProps['color'];
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tagLabel",value:{name:"string",required:!1}},{key:"tagColor",value:{name:"TagProps['color']",raw:"TagProps['color']",required:!1}},{key:"value",value:{name:"string",required:!1}}]}},description:""},theme:{required:!1,tsType:{name:"Theme"},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const B=S(["absolute","bg-white","border","duration-100","flex","flex-col","mt-0.5","rounded","shadow-xs","top-full","transition-all","w-full","z-10","animate-in","fade-in-50","overflow-hidden","border-gray-200"]),V=({theme:e})=>{const{options:r,selectedOptions:a,isLoading:i,noOptionsText:p}=O();return t.jsx("ul",{role:"listbox","data-theme":e,className:q(B()),children:i?t.jsx(N,{option:{id:"loading",label:"Loading..."},className:"select-none pointer-events-none",isSelected:!1},"loading"):r.length>0?r.map(d=>t.jsx(N,{option:d,isSelected:a.some(m=>m.id===d.id)},d.id)):t.jsx("li",{className:"select-none",children:t.jsx(P,{variant:"body2",className:"text-zinc-800 dark:text-slate-50 italic px-2 py-2",children:p??"No options"})})})};V.__docgenInfo={description:"",methods:[],displayName:"List",props:{theme:{required:!1,tsType:{name:"Theme"},description:""}}};const J=()=>{const e=s.useRef(null),{onOpen:r}=O();s.useEffect(()=>{const i=new AbortController,p=m=>{m.key==="Escape"&&r(!1)},d=m=>{e.current?.contains(m.target)||r(!1)};return document.addEventListener("keydown",p,{signal:i.signal}),document.addEventListener("mousedown",d,{signal:i.signal}),()=>{i.abort()}},[r,e]);const a=s.useCallback(i=>{i.target?.closest("[data-value]")||r(!0)},[r]);return{wrapperRef:e,handleOpen:a}},K=S(["flex","flex-col","w-full","relative","text-slate-500","mb-1","cursor-pointer","text-sm","leading-5","tracking-[0.1px]","dark:text-slate-50"]),X=S(["cursor-pointer","mb-1"]),Z=S(["h-9","border","cursor-pointer","duration-250","ease-in-out","flex","items-center","justify-between","px-2","py-1","rounded-md","transition-all","w-full","border-gray-200"]),G=e=>s.createElement("svg",{width:9,height:9,viewBox:"0 0 9 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},s.createElement("path",{d:"M8.16667 0.8225L7.34417 0L4.08333 3.26083L0.8225 0L0 0.8225L3.26083 4.08333L0 7.34417L0.8225 8.16667L4.08333 4.90583L7.34417 8.16667L8.16667 7.34417L4.90583 4.08333L8.16667 0.8225Z",fill:"#364153"})),D=s.forwardRef(({label:e,labelClassName:r,name:a,placeholder:i="",theme:p,wrapperClassName:d},m)=>{const f=s.useId(),{selectedOptions:v,isOpen:g,onOpen:x,onRemoveOption:L,inputRef:h,isLoading:b}=O(),{wrapperRef:y,handleOpen:T}=J();return s.useImperativeHandle(m,()=>h.current,[h]),t.jsxs("div",{ref:y,className:q(K({className:d})),"data-theme":p,children:[e?t.jsx("label",{htmlFor:a??f,className:q(X({className:r})),onClick:()=>x(!0),children:e}):null,t.jsxs("div",{id:a??f,className:q(Z()),role:"combobox",onClick:T,"aria-expanded":g,children:[v.length===0?t.jsx("span",{className:"text-base text-inherit select-none",children:i}):t.jsx("div",{className:"flex flex-wrap gap-2",children:v.map(u=>t.jsx(I,{id:u.id,label:u.value||u.tagLabel||"",color:u.tagColor||"gray-800",className:"select-none gap-2",rightIcon:t.jsx(G,{className:"w-2 h-2",onClick:()=>L(u)}),"data-value":u.label},u.id))}),b?t.jsx(W,{className:"w-4 h-4 text-slate-400 animate-spin shrink-0"}):t.jsx($,{className:q("w-4 h-4 text-inherit transition-all duration-50 shrink-0",g?"rotate-0":"rotate-180")})]}),t.jsx("input",{ref:h,type:"text",name:a,className:"hidden",readOnly:!0}),g?t.jsx(V,{}):null]})});D.displayName="MultiSelectDropdownWrapper";D.__docgenInfo={description:"",methods:[],displayName:"MultiSelectDropdownWrapper",props:{ref:{required:!1,tsType:{name:"ForwardedRef",elements:[{name:"HTMLInputElement"}],raw:"ForwardedRef<HTMLInputElement>"},description:""},theme:{required:!1,tsType:{name:"Theme"},description:""},placeholder:{defaultValue:{value:"''",computed:!1},required:!1}}};const k=s.forwardRef(({options:e,multiselect:r,value:a,onChange:i,onBlur:p,name:d,isLoading:m,noOptionsText:f,...v},g)=>t.jsx(R,{defaultOptions:e,multiselect:r,value:a,onChange:i,onBlur:p,name:d,isLoading:m,noOptionsText:f,children:t.jsx(D,{ref:g,...v,name:d})}));k.displayName="MultiSelectDropdown";k.__docgenInfo={description:"",methods:[],displayName:"MultiSelectDropdown",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string | number;
  label: string;
  tagLabel?: string;
  tagColor?: TagProps['color'];
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tagLabel",value:{name:"string",required:!1}},{key:"tagColor",value:{name:"TagProps['color']",raw:"TagProps['color']",required:!1}},{key:"value",value:{name:"string",required:!1}}]}}],raw:"MultiSelectDropdownOption[]"},description:""},name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},multiselect:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string | number;
  label: string;
  tagLabel?: string;
  tagColor?: TagProps['color'];
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tagLabel",value:{name:"string",required:!1}},{key:"tagColor",value:{name:"TagProps['color']",raw:"TagProps['color']",required:!1}},{key:"value",value:{name:"string",required:!1}}]}}],raw:"MultiSelectDropdownOption[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
  target: { value: MultiSelectDropdownOption[]; name: string };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: MultiSelectDropdownOption[]; name: string };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: MultiSelectDropdownOption[]; name: string }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string | number;
  label: string;
  tagLabel?: string;
  tagColor?: TagProps['color'];
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tagLabel",value:{name:"string",required:!1}},{key:"tagColor",value:{name:"TagProps['color']",raw:"TagProps['color']",required:!1}},{key:"value",value:{name:"string",required:!1}}]}}],raw:"MultiSelectDropdownOption[]",required:!0}},{key:"name",value:{name:"string",required:!0}}]},required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: HTMLInputElement | null;
  type?: string;
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: HTMLInputElement | null;
  type?: string;
}`,signature:{properties:[{key:"target",value:{name:"union",raw:"HTMLInputElement | null",elements:[{name:"HTMLInputElement"},{name:"null"}],required:!0}},{key:"type",value:{name:"string",required:!1}}]}},name:"event"}],return:{name:"void"}}},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},noOptionsText:{required:!1,tsType:{name:"string"},description:""}},composes:["VariantProps","Omit"]};const ue={title:"In Review/MultiSelectDropdown",component:k},C={args:{options:[{id:"1",label:"dev: development",tagLabel:"dev",tagColor:"gray-800",value:"development"},{id:"2",label:"qa: quality assurance",tagLabel:"qa",tagColor:"gray-800",value:"quality assurance"},{id:"3",label:"prod: production",tagLabel:"prod",tagColor:"gray-800",value:"production"}]},render:e=>t.jsxs("div",{className:"max-w-[300px] flex flex-col gap-3",children:[t.jsx(k,{...e,label:"Multiselect"}),t.jsx("div",{className:"border-t my-3 border-gray-200"}),t.jsx(k,{...e,label:"Single select",multiselect:!1})]})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      id: '1',
      label: 'dev: development',
      tagLabel: 'dev',
      tagColor: 'gray-800',
      value: 'development'
    }, {
      id: '2',
      label: 'qa: quality assurance',
      tagLabel: 'qa',
      tagColor: 'gray-800',
      value: 'quality assurance'
    }, {
      id: '3',
      label: 'prod: production',
      tagLabel: 'prod',
      tagColor: 'gray-800',
      value: 'production'
    }]
  },
  render: args => <div className="max-w-[300px] flex flex-col gap-3">
      <MultiSelectDropdownComponent {...args} label="Multiselect" />
      <div className="border-t my-3 border-gray-200" />
      <MultiSelectDropdownComponent {...args} label="Single select" multiselect={false} />
    </div>
}`,...C.parameters?.docs?.source}}};const de=["MultiSelectDropdown"];export{C as MultiSelectDropdown,de as __namedExportsOrder,ue as default};
