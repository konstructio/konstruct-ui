import{r as o,R as U,j as s}from"./iframe-C4Xa0_Vd.js";import{u as F}from"./useToggle-BKnIhpFG.js";import{L as $}from"./Loader-DqLmO1af.js";import{B as V}from"./Badge-D6QwgEZp.js";import{T as D}from"./Typography-DyPNlEqN.js";import{a as T,c as h}from"./index-B-7A89sm.js";import{X as B}from"./x-D1G5HUtI.js";import{P as j}from"./index-umurZPFM.js";function I(){return I=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},I.apply(this,arguments)}function K(t,e){if(t==null)return{};var n=J(t,e),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function J(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,a;for(a=0;a<r.length;a++)i=r[a],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var E=o.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,i=t.size,a=i===void 0?24:i,u=K(t,["color","size"]);return U.createElement("svg",I({ref:e,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),U.createElement("polyline",{points:"18 15 12 9 6 15"}))});E.propTypes={color:j.string,size:j.oneOfType([j.string,j.number])};E.displayName="ChevronUp";const X={options:[],selectedOptions:[],isOpen:!1,inputRef:null,onSelectOption(){throw new Error("Function not implemented.")},onRemoveOption(){throw new Error("Function not implemented.")},onOpen(){throw new Error("Function not implemented.")},isLoading:!1,noOptionsText:void 0},A=o.createContext(X),M=()=>{const t=o.useContext(A);if(!t)throw new Error("useMultiSelectDropdown must be used within a MultiSelectDropdownProvider");return t},P=({children:t,defaultOptions:e=[],multiselect:n=!0,value:r,onChange:i,onBlur:a,name:u,isLoading:O,noOptionsText:k})=>{const g=o.useRef(null),[w,x]=F(!1),[N,b]=o.useState(e),[m,S]=o.useState([]),f=r!==void 0;o.useEffect(()=>{if(!f){const p=new Set(m.map(l=>l.id));b(n?e.filter(l=>!p.has(l.id)):e.map(l=>({...l,isSelected:p.has(l.id)})))}},[e,n,f,m]),o.useEffect(()=>{if(f){const p=r||[];S(p);const l=new Set(p.map(c=>c.id));b(n?e.filter(c=>!l.has(c.id)):e.map(c=>({...c,isSelected:l.has(c.id)})))}},[r,f,e,n]);const y=o.useCallback(p=>{const l=p.map(({id:d,value:C,label:z})=>({id:d,value:C??z})),c=JSON.stringify(l);g.current&&(g.current.value=c),i&&i({target:{value:p,name:u??""}})},[i,u]),q=o.useCallback(p=>{const l=w;x(p),l&&p===!1&&a&&g.current&&a({target:g.current,type:"blur"})},[w,x,a,g]),v=o.useCallback(p=>{if(f){const d=[...n?m:[],p];y(d),q(!1);return}const l=[...n?m:[],p];S(l);const c=l.map(d=>d.id);b(()=>n?e.filter(d=>!c.includes(d.id)):e.map(d=>({...d,isSelected:c.includes(d.id)}))),y(l),q(!1)},[e,y,n,m,q,f]),H=o.useCallback(p=>{if(f){const d=m.filter(C=>C.id!==p.id);y(d);return}const l=m.filter(d=>d.id!==p.id);S(l);const c=l.map(d=>d.id);b(()=>e.filter(d=>!c.includes(d.id))),y(l)},[e,y,m,f]);return s.jsx(A.Provider,{value:{options:N,selectedOptions:m,isOpen:w,inputRef:g,onSelectOption:v,onRemoveOption:H,onOpen:q,isLoading:O,noOptionsText:k},children:t})};P.__docgenInfo={description:"",methods:[],displayName:"MultiSelectDropdownProvider",props:{defaultOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Unique identifier for the option */
  id: string | number;
  /** Display label for the option */
  label: string;
  /** Optional badge text displayed next to the label */
  badge?: string;
  /** Optional value (defaults to label if not provided) */
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0},description:"Unique identifier for the option"},{key:"label",value:{name:"string",required:!0},description:"Display label for the option"},{key:"badge",value:{name:"string",required:!1},description:"Optional badge text displayed next to the label"},{key:"value",value:{name:"string",required:!1},description:"Optional value (defaults to label if not provided)"}]}}],raw:"MultiSelectDropdownOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:""},multiselect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},noOptionsText:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Unique identifier for the option */
  id: string | number;
  /** Display label for the option */
  label: string;
  /** Optional badge text displayed next to the label */
  badge?: string;
  /** Optional value (defaults to label if not provided) */
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0},description:"Unique identifier for the option"},{key:"label",value:{name:"string",required:!0},description:"Display label for the option"},{key:"badge",value:{name:"string",required:!1},description:"Optional badge text displayed next to the label"},{key:"value",value:{name:"string",required:!1},description:"Optional value (defaults to label if not provided)"}]}}],raw:"MultiSelectDropdownOption[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
  target: { value: MultiSelectDropdownOption[]; name: string };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: MultiSelectDropdownOption[]; name: string };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: MultiSelectDropdownOption[]; name: string }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Unique identifier for the option */
  id: string | number;
  /** Display label for the option */
  label: string;
  /** Optional badge text displayed next to the label */
  badge?: string;
  /** Optional value (defaults to label if not provided) */
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0},description:"Unique identifier for the option"},{key:"label",value:{name:"string",required:!0},description:"Display label for the option"},{key:"badge",value:{name:"string",required:!1},description:"Optional badge text displayed next to the label"},{key:"value",value:{name:"string",required:!1},description:"Optional value (defaults to label if not provided)"}]}}],raw:"MultiSelectDropdownOption[]",required:!0}},{key:"name",value:{name:"string",required:!0}}]},required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: HTMLInputElement | null; type?: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: HTMLInputElement | null; type?: string }",signature:{properties:[{key:"target",value:{name:"union",raw:"HTMLInputElement | null",elements:[{name:"HTMLInputElement"},{name:"null"}],required:!0}},{key:"type",value:{name:"string",required:!1}}]}},name:"event"}],return:{name:"void"}}},description:""}}};const G=T(["cursor-pointer","py-1.5","px-2","last:pb-2","first:pt-2","h-full","flex","items-center","gap-2","hover:bg-gray-50","focus:bg-gray-50","dark:hover:bg-metal-700","dark:focus:bg-metal-700"],{variants:{isSelected:{true:"",false:""}},compoundVariants:[{isSelected:!0,class:["bg-slate-50","dark:bg-metal-700"]}],defaultVariants:{isSelected:!1}}),L=({option:t,theme:e,isSelected:n,className:r})=>{const{onSelectOption:i}=M();return s.jsxs("li",{role:"option","data-theme":e,className:h(G({isSelected:n}),r),onClick:()=>i(t),children:[s.jsx(D,{variant:"body2",children:t.label}),t.badge&&s.jsx(V,{label:t.badge})]})};L.__docgenInfo={description:"",methods:[],displayName:"Item",props:{option:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /** Unique identifier for the option */
  id: string | number;
  /** Display label for the option */
  label: string;
  /** Optional badge text displayed next to the label */
  badge?: string;
  /** Optional value (defaults to label if not provided) */
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0},description:"Unique identifier for the option"},{key:"label",value:{name:"string",required:!0},description:"Display label for the option"},{key:"badge",value:{name:"string",required:!1},description:"Optional badge text displayed next to the label"},{key:"value",value:{name:"string",required:!1},description:"Optional value (defaults to label if not provided)"}]}},description:""},theme:{required:!1,tsType:{name:"Theme"},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Q=T(["absolute","bg-white","border","duration-100","flex","flex-col","mt-0.5","rounded","shadow-xs","top-full","transition-all","w-full","z-10","animate-in","fade-in-50","overflow-hidden","border-gray-200","dark:border-metal-700","dark:bg-metal-800"]),_=({theme:t})=>{const{options:e,selectedOptions:n,isLoading:r,noOptionsText:i}=M();return s.jsx("ul",{role:"listbox","data-theme":t,className:h(Q()),children:r?s.jsx(L,{option:{id:"loading",label:"Loading..."},className:"select-none pointer-events-none",isSelected:!1},"loading"):e.length>0?e.map(a=>s.jsx(L,{option:a,isSelected:n.some(u=>u.id===a.id)},a.id)):s.jsx("li",{className:"select-none",children:s.jsx(D,{variant:"body2",className:"italic px-2 py-2",children:i??"No options"})})})};_.__docgenInfo={description:"",methods:[],displayName:"List",props:{theme:{required:!1,tsType:{name:"Theme"},description:""}}};const Y=()=>{const t=o.useRef(null),{onOpen:e}=M();o.useEffect(()=>{const r=new AbortController,i=u=>{u.key==="Escape"&&e(!1)},a=u=>{t.current?.contains(u.target)||e(!1)};return document.addEventListener("keydown",i,{signal:r.signal}),document.addEventListener("mousedown",a,{signal:r.signal}),()=>{r.abort()}},[e,t]);const n=o.useCallback(r=>{r.target?.closest("[data-value]")||e(!0)},[e]);return{wrapperRef:t,handleOpen:n}},Z=T(["flex","flex-col","w-full","relative","cursor-pointer"]),ee=T(["cursor-pointer","mb-1","select-none"]),te=T(["min-h-9","border","cursor-pointer","duration-250","ease-in-out","flex","items-center","justify-between","px-2","py-1","rounded-md","transition-all","w-full","border-gray-200","dark:border-metal-700","dark:bg-metal-800"]),R=o.forwardRef(({isRequired:t,label:e,labelClassName:n,labelWrapperClassName:r,name:i,placeholder:a="",theme:u,wrapperClassName:O},k)=>{const g=o.useId(),w=i?`${g}-name`:"id",{inputRef:x,isLoading:N,isOpen:b,selectedOptions:m,onOpen:S,onRemoveOption:f}=M(),{wrapperRef:y,handleOpen:q}=Y();return o.useImperativeHandle(k,()=>x.current,[x]),s.jsxs("div",{ref:y,className:h(Z({className:O})),"data-theme":u,children:[e?s.jsx("div",{className:h(r),children:s.jsxs(D,{component:"label",variant:"labelLarge",htmlFor:w,className:h(ee({className:n})),onClick:()=>S(!0),children:[e," ",t&&s.jsx(D,{component:"span",className:"text-red-500 dark:text-red-500 text-sm font-normal",children:"*"})]})}):null,s.jsxs("div",{id:w,className:h(te()),role:"combobox",onClick:q,"aria-expanded":b,children:[m.length===0?s.jsx("span",{className:"text-base text-inherit select-none",children:a}):s.jsx("div",{className:"flex flex-wrap gap-2",children:m.map(v=>s.jsx(V,{"data-value":v.label,label:v.value??v.label??"",className:"select-none",rightIcon:s.jsx(B,{onClick:()=>f(v)})},v.id))}),N?s.jsx($,{size:16,className:"animate-spin shrink-0 text-gray-400"}):s.jsx(E,{className:h("w-4 h-4 transition-all duration-50 shrink-0 text-gray-400",b?"rotate-0":"rotate-180")})]}),s.jsx("input",{ref:x,type:"text",name:i,className:"hidden",readOnly:!0}),b?s.jsx(_,{}):null]})});R.displayName="MultiSelectDropdownWrapper";R.__docgenInfo={description:"",methods:[],displayName:"MultiSelectDropdownWrapper",props:{ref:{required:!1,tsType:{name:"ForwardedRef",elements:[{name:"HTMLInputElement"}],raw:"ForwardedRef<HTMLInputElement>"},description:""},theme:{required:!1,tsType:{name:"Theme"},description:""},placeholder:{defaultValue:{value:"''",computed:!1},required:!1}}};const W=o.forwardRef(({isLoading:t,multiselect:e,name:n,noOptionsText:r,options:i,value:a,onChange:u,onBlur:O,...k},g)=>s.jsx(P,{defaultOptions:i,multiselect:e,value:a,onChange:u,onBlur:O,name:n,isLoading:t,noOptionsText:r,children:s.jsx(R,{ref:g,name:n,...k})}));W.displayName="KonstructMultiSelectDropdown";W.__docgenInfo={description:`A dropdown component for selecting one or multiple options with search functionality.
Displays selected items as badges and supports loading states.

@example
\`\`\`tsx
const [selected, setSelected] = useState<MultiSelectDropdownOption[]>([]);

<MultiSelectDropdown
  label="Assign team members"
  placeholder="Search members..."
  options={teamMembers}
  value={selected}
  onChange={(e) => setSelected(e.target.value)}
  multiselect
/>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-multiselectdropdown--docs Storybook}`,methods:[],displayName:"KonstructMultiSelectDropdown",props:{isLoading:{required:!1,tsType:{name:"boolean"},description:"Whether the dropdown is in a loading state"},isRequired:{required:!1,tsType:{name:"boolean"},description:"Whether the field is required"},label:{required:!1,tsType:{name:"string"},description:"Label displayed above the dropdown"},labelClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the label"},labelWrapperClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the label wrapper"},multiselect:{required:!1,tsType:{name:"boolean"},description:"Whether multiple options can be selected"},name:{required:!1,tsType:{name:"string"},description:"Form field name"},noOptionsText:{required:!1,tsType:{name:"string"},description:"Text shown when no options match the search"},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Unique identifier for the option */
  id: string | number;
  /** Display label for the option */
  label: string;
  /** Optional badge text displayed next to the label */
  badge?: string;
  /** Optional value (defaults to label if not provided) */
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0},description:"Unique identifier for the option"},{key:"label",value:{name:"string",required:!0},description:"Display label for the option"},{key:"badge",value:{name:"string",required:!1},description:"Optional badge text displayed next to the label"},{key:"value",value:{name:"string",required:!1},description:"Optional value (defaults to label if not provided)"}]}}],raw:"MultiSelectDropdownOption[]"},description:"Available options to select from"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text when no selection"},value:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Unique identifier for the option */
  id: string | number;
  /** Display label for the option */
  label: string;
  /** Optional badge text displayed next to the label */
  badge?: string;
  /** Optional value (defaults to label if not provided) */
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0},description:"Unique identifier for the option"},{key:"label",value:{name:"string",required:!0},description:"Display label for the option"},{key:"badge",value:{name:"string",required:!1},description:"Optional badge text displayed next to the label"},{key:"value",value:{name:"string",required:!1},description:"Optional value (defaults to label if not provided)"}]}}],raw:"MultiSelectDropdownOption[]"},description:"Currently selected options"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the wrapper"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
  target: { value: MultiSelectDropdownOption[]; name: string };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: MultiSelectDropdownOption[]; name: string };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: MultiSelectDropdownOption[]; name: string }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Unique identifier for the option */
  id: string | number;
  /** Display label for the option */
  label: string;
  /** Optional badge text displayed next to the label */
  badge?: string;
  /** Optional value (defaults to label if not provided) */
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0},description:"Unique identifier for the option"},{key:"label",value:{name:"string",required:!0},description:"Display label for the option"},{key:"badge",value:{name:"string",required:!1},description:"Optional badge text displayed next to the label"},{key:"value",value:{name:"string",required:!1},description:"Optional value (defaults to label if not provided)"}]}}],raw:"MultiSelectDropdownOption[]",required:!0}},{key:"name",value:{name:"string",required:!0}}]},required:!0}}]}},name:"params"}],return:{name:"void"}}},description:"Callback fired when selection changes"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: HTMLInputElement | null;
  type?: string;
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: HTMLInputElement | null;
  type?: string;
}`,signature:{properties:[{key:"target",value:{name:"union",raw:"HTMLInputElement | null",elements:[{name:"HTMLInputElement"},{name:"null"}],required:!0}},{key:"type",value:{name:"string",required:!1}}]}},name:"event"}],return:{name:"void"}}},description:"Callback fired when the input loses focus"}},composes:["VariantProps","Omit"]};export{W as M};
