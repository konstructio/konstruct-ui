import{r as l,R,j as s}from"./iframe-Bp60l9al.js";import{u as F}from"./useToggle-Blrvcrxi.js";import{L as $}from"./Loader-BEaIynbA.js";import{B as U}from"./Badge-BY88OgKn.js";import{T as D}from"./Typography-B_faiLY2.js";import{a as S,c as w}from"./index-B-7A89sm.js";import{X as B}from"./x-DGsy2Izm.js";import{P as j}from"./index-9yVhKgGp.js";function I(){return I=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},I.apply(this,arguments)}function K(t,e){if(t==null)return{};var r=J(t,e),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function J(t,e){if(t==null)return{};var r={},n=Object.keys(t),i,a;for(a=0;a<n.length;a++)i=n[a],!(e.indexOf(i)>=0)&&(r[i]=t[i]);return r}var C=l.forwardRef(function(t,e){var r=t.color,n=r===void 0?"currentColor":r,i=t.size,a=i===void 0?24:i,u=K(t,["color","size"]);return R.createElement("svg",I({ref:e,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),R.createElement("polyline",{points:"18 15 12 9 6 15"}))});C.propTypes={color:j.string,size:j.oneOfType([j.string,j.number])};C.displayName="ChevronUp";const X={options:[],selectedOptions:[],isOpen:!1,inputRef:null,onSelectOption(){throw new Error("Function not implemented.")},onRemoveOption(){throw new Error("Function not implemented.")},onOpen(){throw new Error("Function not implemented.")},isLoading:!1,noOptionsText:void 0},V=l.createContext(X),M=()=>{const t=l.useContext(V);if(!t)throw new Error("useMultiSelectDropdown must be used within a MultiSelectDropdownProvider");return t},P=({children:t,defaultOptions:e=[],multiselect:r=!0,value:n,onChange:i,onBlur:a,name:u,isLoading:x,noOptionsText:q})=>{const m=l.useRef(null),[v,T]=F(!1),[O,h]=l.useState(e),[g,k]=l.useState([]),f=n!==void 0;l.useEffect(()=>{if(!f){const p=new Set(g.map(o=>o.id));h(r?e.filter(o=>!p.has(o.id)):e.map(o=>({...o,isSelected:p.has(o.id)})))}},[e,r,f,g]),l.useEffect(()=>{if(f){const p=n||[];k(p);const o=new Set(p.map(c=>c.id));h(r?e.filter(c=>!o.has(c.id)):e.map(c=>({...c,isSelected:o.has(c.id)})))}},[n,f,e,r]);const y=l.useCallback(p=>{const o=p.map(({id:d,value:N,label:z})=>({id:d,value:N??z})),c=JSON.stringify(o);m.current&&(m.current.value=c),i&&i({target:{value:p,name:u??""}})},[i,u]),b=l.useCallback(p=>{const o=v;T(p),o&&p===!1&&a&&m.current&&a({target:m.current,type:"blur"})},[v,T,a,m]),H=l.useCallback(p=>{if(f){const d=[...r?g:[],p];y(d),b(!1);return}const o=[...r?g:[],p];k(o);const c=o.map(d=>d.id);h(()=>r?e.filter(d=>!c.includes(d.id)):e.map(d=>({...d,isSelected:c.includes(d.id)}))),y(o),b(!1)},[e,y,r,g,b,f]),W=l.useCallback(p=>{if(f){const d=g.filter(N=>N.id!==p.id);y(d);return}const o=g.filter(d=>d.id!==p.id);k(o);const c=o.map(d=>d.id);h(()=>e.filter(d=>!c.includes(d.id))),y(o)},[e,y,g,f]);return s.jsx(V.Provider,{value:{options:O,selectedOptions:g,isOpen:v,inputRef:m,onSelectOption:H,onRemoveOption:W,onOpen:b,isLoading:x,noOptionsText:q},children:t})};P.__docgenInfo={description:"",methods:[],displayName:"MultiSelectDropdownProvider",props:{defaultOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0},description:"Unique identifier for the option"},{key:"label",value:{name:"string",required:!0},description:"Display label for the option"},{key:"badge",value:{name:"string",required:!1},description:"Optional badge text displayed next to the label"},{key:"value",value:{name:"string",required:!1},description:"Optional value (defaults to label if not provided)"}]}}],raw:"MultiSelectDropdownOption[]",required:!0}},{key:"name",value:{name:"string",required:!0}}]},required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: HTMLInputElement | null; type?: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: HTMLInputElement | null; type?: string }",signature:{properties:[{key:"target",value:{name:"union",raw:"HTMLInputElement | null",elements:[{name:"HTMLInputElement"},{name:"null"}],required:!0}},{key:"type",value:{name:"string",required:!1}}]}},name:"event"}],return:{name:"void"}}},description:""}}};const G=S(["cursor-pointer","py-1.5","px-2","last:pb-2","first:pt-2","h-full","flex","items-center","gap-2","hover:bg-gray-50","focus:bg-gray-50","dark:hover:bg-metal-700","dark:focus:bg-metal-700"],{variants:{isSelected:{true:"",false:""}},compoundVariants:[{isSelected:!0,class:["bg-slate-50","dark:bg-metal-700"]}],defaultVariants:{isSelected:!1}}),L=({option:t,theme:e,isSelected:r,className:n})=>{const{onSelectOption:i}=M();return s.jsxs("li",{role:"option","data-theme":e,className:w(G({isSelected:r}),n),onClick:()=>i(t),children:[s.jsx(D,{variant:"body2",children:t.label}),t.badge&&s.jsx(U,{label:t.badge})]})};L.__docgenInfo={description:"",methods:[],displayName:"Item",props:{option:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /** Unique identifier for the option */
  id: string | number;
  /** Display label for the option */
  label: string;
  /** Optional badge text displayed next to the label */
  badge?: string;
  /** Optional value (defaults to label if not provided) */
  value?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0},description:"Unique identifier for the option"},{key:"label",value:{name:"string",required:!0},description:"Display label for the option"},{key:"badge",value:{name:"string",required:!1},description:"Optional badge text displayed next to the label"},{key:"value",value:{name:"string",required:!1},description:"Optional value (defaults to label if not provided)"}]}},description:""},theme:{required:!1,tsType:{name:"Theme"},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Q=S(["absolute","bg-white","border","duration-100","flex","flex-col","mt-0.5","rounded","shadow-xs","top-full","transition-all","w-full","z-10","animate-in","fade-in-50","overflow-hidden","border-gray-200","dark:border-metal-700","dark:bg-metal-800"]),_=({theme:t})=>{const{options:e,selectedOptions:r,isLoading:n,noOptionsText:i}=M();return s.jsx("ul",{role:"listbox","data-theme":t,className:w(Q()),children:n?s.jsx(L,{option:{id:"loading",label:"Loading..."},className:"select-none pointer-events-none",isSelected:!1},"loading"):e.length>0?e.map(a=>s.jsx(L,{option:a,isSelected:r.some(u=>u.id===a.id)},a.id)):s.jsx("li",{className:"select-none",children:s.jsx(D,{variant:"body2",className:"italic px-2 py-2",children:i??"No options"})})})};_.__docgenInfo={description:"",methods:[],displayName:"List",props:{theme:{required:!1,tsType:{name:"Theme"},description:""}}};const Y=()=>{const t=l.useRef(null),{onOpen:e}=M();l.useEffect(()=>{const n=new AbortController,i=u=>{u.key==="Escape"&&e(!1)},a=u=>{t.current?.contains(u.target)||e(!1)};return document.addEventListener("keydown",i,{signal:n.signal}),document.addEventListener("mousedown",a,{signal:n.signal}),()=>{n.abort()}},[e,t]);const r=l.useCallback(n=>{n.target?.closest("[data-value]")||e(!0)},[e]);return{wrapperRef:t,handleOpen:r}},Z=S(["flex","flex-col","w-full","relative","cursor-pointer"]),ee=S(["cursor-pointer","mb-1","select-none"]),te=S(["min-h-9","border","cursor-pointer","duration-250","ease-in-out","flex","items-center","justify-between","px-2","py-1","rounded-md","transition-all","w-full","border-gray-200","dark:border-metal-700","dark:bg-metal-800"]),E=l.forwardRef(({isRequired:t,label:e,labelClassName:r,name:n,placeholder:i="",theme:a,wrapperClassName:u},x)=>{const q=l.useId(),m=n?`${q}-name`:"id",{inputRef:v,isLoading:T,isOpen:O,selectedOptions:h,onOpen:g,onRemoveOption:k}=M(),{wrapperRef:f,handleOpen:y}=Y();return l.useImperativeHandle(x,()=>v.current,[v]),s.jsxs("div",{ref:f,className:w(Z({className:u})),"data-theme":a,children:[e?s.jsxs(D,{component:"label",variant:"labelLarge",htmlFor:m,className:w(ee({className:r})),onClick:()=>g(!0),children:[e," ",t&&s.jsx(D,{component:"span",className:"text-red-500 dark:text-red-500 text-sm font-normal",children:"*"})]}):null,s.jsxs("div",{id:m,className:w(te()),role:"combobox",onClick:y,"aria-expanded":O,children:[h.length===0?s.jsx("span",{className:"text-base text-inherit select-none",children:i}):s.jsx("div",{className:"flex flex-wrap gap-2",children:h.map(b=>s.jsx(U,{"data-value":b.label,label:b.value??b.label??"",className:"select-none",rightIcon:s.jsx(B,{onClick:()=>k(b)})},b.id))}),T?s.jsx($,{size:16,className:"animate-spin shrink-0 text-gray-400"}):s.jsx(C,{className:w("w-4 h-4 transition-all duration-50 shrink-0 text-gray-400",O?"rotate-0":"rotate-180")})]}),s.jsx("input",{ref:v,type:"text",name:n,className:"hidden",readOnly:!0}),O?s.jsx(_,{}):null]})});E.displayName="MultiSelectDropdownWrapper";E.__docgenInfo={description:"",methods:[],displayName:"MultiSelectDropdownWrapper",props:{ref:{required:!1,tsType:{name:"ForwardedRef",elements:[{name:"HTMLInputElement"}],raw:"ForwardedRef<HTMLInputElement>"},description:""},theme:{required:!1,tsType:{name:"Theme"},description:""},placeholder:{defaultValue:{value:"''",computed:!1},required:!1}}};const A=l.forwardRef(({isLoading:t,multiselect:e,name:r,noOptionsText:n,options:i,value:a,onChange:u,onBlur:x,...q},m)=>s.jsx(P,{defaultOptions:i,multiselect:e,value:a,onChange:u,onBlur:x,name:r,isLoading:t,noOptionsText:n,children:s.jsx(E,{ref:m,name:r,...q})}));A.displayName="KonstructMultiSelectDropdown";A.__docgenInfo={description:`A dropdown component for selecting one or multiple options with search functionality.
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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-multiselectdropdown--docs Storybook}`,methods:[],displayName:"KonstructMultiSelectDropdown",props:{isLoading:{required:!1,tsType:{name:"boolean"},description:"Whether the dropdown is in a loading state"},isRequired:{required:!1,tsType:{name:"boolean"},description:"Whether the field is required"},label:{required:!1,tsType:{name:"string"},description:"Label displayed above the dropdown"},labelClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the label"},multiselect:{required:!1,tsType:{name:"boolean"},description:"Whether multiple options can be selected"},name:{required:!1,tsType:{name:"string"},description:"Form field name"},noOptionsText:{required:!1,tsType:{name:"string"},description:"Text shown when no options match the search"},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"target",value:{name:"union",raw:"HTMLInputElement | null",elements:[{name:"HTMLInputElement"},{name:"null"}],required:!0}},{key:"type",value:{name:"string",required:!1}}]}},name:"event"}],return:{name:"void"}}},description:"Callback fired when the input loses focus"}},composes:["VariantProps","Omit"]};export{A as M};
