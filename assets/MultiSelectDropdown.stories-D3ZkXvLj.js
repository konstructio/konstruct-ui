import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as s}from"./iframe-GVbY7hCP.js";import{u as F}from"./useToggle-_pVJsEp8.js";import{T as j}from"./Tag-eZS1hZBC.js";import{c as x,a as w}from"./index-Bn42e07n.js";import{T as M}from"./Typography-CmI2Y2ub.js";import{C as A}from"./chevron-up-ZlVYLHf6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-VoBJlYmN.js";import"./index-BAv1-HGr.js";import"./index-Quv3eMJB.js";const W={options:[],selectedOptions:[],isOpen:!1,inputRef:null,onSelectOption(){throw new Error("Function not implemented.")},onRemoveOption(){throw new Error("Function not implemented.")},onOpen(){throw new Error("Function not implemented.")}},D=s.createContext(W),C=()=>{const e=s.useContext(D);if(!e)throw new Error("useMultiSelectDropdown must be used within a MultiSelectDropdownProvider");return e},N=({children:e,defaultOptions:r=[],multiselect:a=!0,value:n,onChange:p,onBlur:c,name:g})=>{const v=s.useRef(null),[f,y]=F(!1),[O,h]=s.useState(r),[m,q]=s.useState([]),b=n!==void 0;s.useEffect(()=>{if(b){const o=n||[];q(o);const i=new Set(o.map(d=>d.id));h(a?r.filter(d=>!i.has(d.id)):r.map(d=>({...d,isSelected:i.has(d.id)})))}},[n,b,r,a]);const u=s.useCallback(o=>{const i=o.map(({id:l,value:L,label:_})=>({id:l,value:L??_})),d=JSON.stringify(i);v.current&&(v.current.value=d),p&&p({target:{value:o,name:g??""}})},[p,g]),k=s.useCallback(o=>{const i=f;y(o),i&&o===!1&&c&&c()},[f,y,c]),V=s.useCallback(o=>{if(b){const l=[...a?m:[],o];u(l),k(!1);return}const i=[...a?m:[],o];q(i);const d=i.map(l=>l.id);h(()=>a?r.filter(l=>!d.includes(l.id)):r.map(l=>({...l,isSelected:d.includes(l.id)}))),u(i),k(!1)},[r,u,a,m,k,b]),E=s.useCallback(o=>{if(b){const l=m.filter(L=>L.id!==o.id);u(l);return}const i=m.filter(l=>l.id!==o.id);q(i);const d=i.map(l=>l.id);h(()=>r.filter(l=>!d.includes(l.id))),u(i)},[r,u,m,b]);return t.jsx(D.Provider,{value:{options:O,selectedOptions:m,isOpen:f,inputRef:v,onSelectOption:V,onRemoveOption:E,onOpen:k},children:e})};N.__docgenInfo={description:"",methods:[],displayName:"MultiSelectDropdownProvider",props:{defaultOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string | number;
  label: string;
  tagLabel: string;
  tagColor?: TagProps['color'];
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tagLabel",value:{name:"string",required:!0}},{key:"tagColor",value:{name:"TagProps['color']",raw:"TagProps['color']",required:!1}},{key:"value",value:{name:"string",required:!1}}]}}],raw:"MultiSelectDropdownOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},multiselect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string | number;
  label: string;
  tagLabel: string;
  tagColor?: TagProps['color'];
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tagLabel",value:{name:"string",required:!0}},{key:"tagColor",value:{name:"TagProps['color']",raw:"TagProps['color']",required:!1}},{key:"value",value:{name:"string",required:!1}}]}}],raw:"MultiSelectDropdownOption[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
  target: { value: MultiSelectDropdownOption[]; name: string };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: MultiSelectDropdownOption[]; name: string };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: MultiSelectDropdownOption[]; name: string }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string | number;
  label: string;
  tagLabel: string;
  tagColor?: TagProps['color'];
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tagLabel",value:{name:"string",required:!0}},{key:"tagColor",value:{name:"TagProps['color']",raw:"TagProps['color']",required:!1}},{key:"value",value:{name:"string",required:!1}}]}}],raw:"MultiSelectDropdownOption[]",required:!0}},{key:"name",value:{name:"string",required:!0}}]},required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"VoidFunction"},description:""},name:{required:!1,tsType:{name:"string"},description:""}}};const $=x(["cursor-pointer","py-1.5","px-2","last:pb-2","first:pt-2","h-full","hover:bg-gray-50","focus:bg-gray-50","dark:hover:bg-slate-700","dark:focus:bg-slate-700","flex","items-center","gap-4"],{variants:{isSelected:{true:"",false:""}},compoundVariants:[{isSelected:!0,class:["bg-slate-50"]}],defaultVariants:{isSelected:!1}}),P=({option:e,theme:r,isSelected:a})=>{const{onSelectOption:n}=C();return t.jsxs("li",{role:"option","data-theme":r,className:w($({isSelected:a})),onClick:()=>n(e),children:[t.jsx(M,{variant:"body2",className:"text-slate-800",children:e.label}),t.jsx(j,{id:e.id,label:e.tagLabel,color:e.tagColor,isSelected:a})]})};P.__docgenInfo={description:"",methods:[],displayName:"Item",props:{option:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  id: string | number;
  label: string;
  tagLabel: string;
  tagColor?: TagProps['color'];
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tagLabel",value:{name:"string",required:!0}},{key:"tagColor",value:{name:"TagProps['color']",raw:"TagProps['color']",required:!1}},{key:"value",value:{name:"string",required:!1}}]}},description:""},theme:{required:!1,tsType:{name:"Theme"},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:""}}};const B=x(["absolute","bg-white","border","duration-100","flex","flex-col","mt-0.5","rounded","shadow-xs","top-full","transition-all","w-full","z-10","animate-in","fade-in-50","overflow-hidden","border-gray-200"]),I=({theme:e})=>{const{options:r,selectedOptions:a}=C();return t.jsx("ul",{role:"listbox","data-theme":e,className:w(B()),children:r.length>0?r.map(n=>t.jsx(P,{option:n,isSelected:a.some(p=>p.id===n.id)},n.id)):t.jsx(M,{variant:"body2",className:"text-zinc-800 dark:text-slate-50 italic px-2 py-2",children:"No options"})})};I.__docgenInfo={description:"",methods:[],displayName:"List",props:{theme:{required:!1,tsType:{name:"Theme"},description:""}}};const H=()=>{const e=s.useRef(null),{onOpen:r}=C();s.useEffect(()=>{const n=new AbortController,p=g=>{g.key==="Escape"&&r(!1)},c=g=>{e.current?.contains(g.target)||r(!1)};return document.addEventListener("keydown",p,{signal:n.signal}),document.addEventListener("mousedown",c,{signal:n.signal}),()=>{n.abort()}},[r,e]);const a=s.useCallback(n=>{n.target?.closest("[data-value]")||r(!0)},[r]);return{wrapperRef:e,handleOpen:a}},z=x(["flex","flex-col","w-full","relative","text-slate-500","mb-1","cursor-pointer","text-sm","leading-5","tracking-[0.1px]","dark:text-slate-50"]),U=x(["cursor-pointer","mb-1"]),J=x(["h-9","border","cursor-pointer","duration-250","ease-in-out","flex","items-center","justify-between","px-2","py-1","rounded-md","transition-all","w-full","border-gray-200"]),K=e=>s.createElement("svg",{width:9,height:9,viewBox:"0 0 9 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},s.createElement("path",{d:"M8.16667 0.8225L7.34417 0L4.08333 3.26083L0.8225 0L0 0.8225L3.26083 4.08333L0 7.34417L0.8225 8.16667L4.08333 4.90583L7.34417 8.16667L8.16667 7.34417L4.90583 4.08333L8.16667 0.8225Z",fill:"#364153"})),R=s.forwardRef(({label:e,labelClassName:r,name:a,placeholder:n="",theme:p,wrapperClassName:c},g)=>{const v=s.useId(),{selectedOptions:f,isOpen:y,onOpen:O,onRemoveOption:h,inputRef:m}=C(),{wrapperRef:q,handleOpen:b}=H();return s.useImperativeHandle(g,()=>m.current,[m]),t.jsxs("div",{ref:q,className:w(z({className:c})),"data-theme":p,children:[e?t.jsx("label",{htmlFor:a??v,className:w(U({className:r})),onClick:()=>O(!0),children:e}):null,t.jsxs("div",{id:a??v,className:w(J()),role:"combobox",onClick:b,"aria-expanded":y,children:[f.length===0?t.jsx("span",{className:"text-base text-inherit select-none",children:n}):t.jsx("div",{className:"flex flex-wrap gap-2",children:f.map(u=>t.jsx(j,{id:u.id,label:u.tagLabel,color:u.tagColor||"gray-800",className:"select-none gap-2",rightIcon:t.jsx(K,{className:"w-2 h-2",onClick:()=>h(u)}),"data-value":u.label},u.id))}),t.jsx(A,{className:w("w-4 h-4 text-inherit transition-all duration-50 shrink-0",y?"rotate-0":"rotate-180")})]}),t.jsx("input",{ref:m,type:"text",name:a,className:"hidden",readOnly:!0}),y?t.jsx(I,{}):null]})});R.__docgenInfo={description:"",methods:[],displayName:"Wrapper",props:{ref:{required:!1,tsType:{name:"ForwardedRef",elements:[{name:"HTMLInputElement"}],raw:"ForwardedRef<HTMLInputElement>"},description:""},theme:{required:!1,tsType:{name:"Theme"},description:""},placeholder:{defaultValue:{value:"''",computed:!1},required:!1}}};const S=s.forwardRef(({options:e,multiselect:r,value:a,onChange:n,onBlur:p,name:c,...g},v)=>t.jsx(N,{defaultOptions:e,multiselect:r,value:a,onChange:n,onBlur:p,name:c,children:t.jsx(R,{ref:v,...g,name:c})}));S.__docgenInfo={description:"",methods:[],displayName:"MultiSelectDropdown",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string | number;
  label: string;
  tagLabel: string;
  tagColor?: TagProps['color'];
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tagLabel",value:{name:"string",required:!0}},{key:"tagColor",value:{name:"TagProps['color']",raw:"TagProps['color']",required:!1}},{key:"value",value:{name:"string",required:!1}}]}}],raw:"MultiSelectDropdownOption[]"},description:""},name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},multiselect:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string | number;
  label: string;
  tagLabel: string;
  tagColor?: TagProps['color'];
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tagLabel",value:{name:"string",required:!0}},{key:"tagColor",value:{name:"TagProps['color']",raw:"TagProps['color']",required:!1}},{key:"value",value:{name:"string",required:!1}}]}}],raw:"MultiSelectDropdownOption[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
  target: { value: MultiSelectDropdownOption[]; name: string };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: MultiSelectDropdownOption[]; name: string };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: MultiSelectDropdownOption[]; name: string }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string | number;
  label: string;
  tagLabel: string;
  tagColor?: TagProps['color'];
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tagLabel",value:{name:"string",required:!0}},{key:"tagColor",value:{name:"TagProps['color']",raw:"TagProps['color']",required:!1}},{key:"value",value:{name:"string",required:!1}}]}}],raw:"MultiSelectDropdownOption[]",required:!0}},{key:"name",value:{name:"string",required:!0}}]},required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"VoidFunction"},description:""}},composes:["VariantProps","Omit"]};const le={title:"In Review/MultiSelectDropdown",component:S},T={args:{options:[{id:"1",label:"dev: development",tagLabel:"dev",tagColor:"gray-800",value:"dev"},{id:"2",label:"qa: quality assurance",tagLabel:"qa",tagColor:"gray-800",value:"qa"},{id:"3",label:"prod: production",tagLabel:"prod",tagColor:"gray-800",value:"prod"}],onBlur:()=>console.log("blur"),onChange:e=>console.log("change",e)},render:e=>t.jsxs("div",{className:"max-w-[300px] flex flex-col gap-3",children:[t.jsx(S,{...e,label:"Multiselect"}),t.jsx("div",{className:"border-t my-3 border-gray-200"}),t.jsx(S,{...e,label:"Single select",multiselect:!1})]})};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      id: '1',
      label: 'dev: development',
      tagLabel: 'dev',
      tagColor: 'gray-800',
      value: 'dev'
    }, {
      id: '2',
      label: 'qa: quality assurance',
      tagLabel: 'qa',
      tagColor: 'gray-800',
      value: 'qa'
    }, {
      id: '3',
      label: 'prod: production',
      tagLabel: 'prod',
      tagColor: 'gray-800',
      value: 'prod'
    }],
    onBlur: () => console.log('blur'),
    onChange: args => console.log('change', args)
  },
  render: args => <div className="max-w-[300px] flex flex-col gap-3">
      <MultiSelectDropdownComponent {...args} label="Multiselect" />
      <div className="border-t my-3 border-gray-200" />
      <MultiSelectDropdownComponent {...args} label="Single select" multiselect={false} />
    </div>
}`,...T.parameters?.docs?.source}}};const oe=["MultiSelectDropdown"];export{T as MultiSelectDropdown,oe as __namedExportsOrder,le as default};
