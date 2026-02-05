import{r as n,j as i}from"./iframe-CQUPapgb.js";import{a as v,f as N,c as h}from"./index-B-7A89sm.js";import"./preload-helper-PPVm8Dsz.js";const A=v(["flex","w-full","rounded-md","border","border-zinc-200","bg-transparent","text-zinc-700","transition-colors","placeholder:text-muted-foreground","focus-visible:outline-none","focus-visible:ring-1","focus-visible:ring-ring","disabled:cursor-not-allowed","disabled:opacity-50","shadow-2xs","py-1","px-2","focus:ring-aurora-500","kubefirst:focus:ring-kubefirst-primary"]),O=v(["pl-1","mb-2","text-base","cursor-pointer"]),T=({options:r,inputRef:a,wrapperRef:l,onChange:c})=>{const[t,o]=n.useState(()=>r??[]),[u,s]=n.useState(!1),[p,m]=n.useState("");n.useEffect(()=>{const e=new AbortController;return a.current?.addEventListener("focus",()=>s(!0),{signal:e.signal}),()=>{e.abort()}},[a]),n.useEffect(()=>{const e=new AbortController,f=g=>{g.key==="Escape"&&(s(!1),a.current?.blur())},d=g=>{l.current?.contains(g.target)||s(!1)};return document.addEventListener("keydown",f,{signal:e.signal}),document.addEventListener("mousedown",d,{signal:e.signal}),()=>{e.abort()}},[a,l]),n.useEffect(()=>{const e=new AbortController;return l.current?.addEventListener("focusout",f=>{l.current?.contains(f.relatedTarget)||s(!1)},{signal:e.signal}),()=>{e.abort()}},[l]);const b=n.useCallback(e=>{if(e.length===0)o(r);else{const f=r.map(({value:g})=>g),d=N(f,e).map(g=>({value:g}));o(d)}},[r]),C=n.useCallback(e=>{m(e.target.value),b(e.target.value),c?.(e.target.value)},[b,c]),y=n.useCallback(e=>{m(e),b(e),c?.(e),s(!1)},[b,c]);return{inputRef:a,newOptions:t,showOptions:u,value:p,handleChange:C,handleSelectValue:y}},S=({ulRef:r,inputRef:a,wrapperRef:l,options:c})=>{const t=n.useRef(0);n.useEffect(()=>{const o=r.current?.querySelectorAll("li")??[],u=new AbortController,s=()=>{t.current<o.length-1?(t.current=t.current+1,o[t.current].focus()):(t.current=0,o[0].focus())},p=()=>{t.current>0?(t.current=t.current-1,o[t.current].focus()):(t.current=0,a.current?.focus())};return r.current?.addEventListener("keydown",m=>{switch(m.preventDefault(),m.key){case"ArrowDown":{s();break}case"Tab":{m.shiftKey?p():s();break}case"ArrowUp":{t.current===0?a.current?.focus():p();break}case"Enter":{o[t.current].querySelector("button")?.click();break}}},{signal:u.signal}),()=>{u.abort()}},[a,r,c,t]),n.useEffect(()=>{const o=new AbortController;return a.current?.addEventListener("keydown",u=>{if(u.key==="ArrowDown"){const s=r.current?.querySelector("li");s&&s.focus()}},{signal:o.signal}),()=>{o.abort()}},[a,r,c]),n.useEffect(()=>{const o=new AbortController;return l.current?.addEventListener("mouseenter",()=>{(r.current?.querySelectorAll("li")??[]).forEach(s=>s.blur())},{signal:o.signal}),()=>{o.abort()}},[r,l])},q=v(["max-h-[250px]","overflow-y-auto","bg-white"]),E=v(["p-1","text-center","w-full","block","bg-white"]),j=v(["focus-visible:outline-none","kubefirst:focus:bg-purple-100","kubefirst:hover:bg-purple-100","border-transparent","focus:bg-aurora-50","hover:bg-aurora-50"]),V=v(["cursor-pointer","focus-visible:outline-none","px-3","py-1.5","w-full","text-left","focus:bg-aurora-50","hover:bg-aurora-50","kubefirst:focus:bg-purple-100","kubefirst:hover:bg-purple-100"]),k=({className:r,inputRef:a,options:l,placeholder:c,placeholderClassName:t,wrapperRef:o,onClick:u})=>{const s=n.useRef(null);return S({ulRef:s,inputRef:a,wrapperRef:o,options:l}),l.length===0?i.jsx("span",{className:h(E({className:t})),children:c}):i.jsx("ul",{ref:s,role:"listbox",className:h(q({className:r})),children:l.map(({value:p})=>i.jsx("li",{role:"option",tabIndex:0,className:h(j()),children:i.jsx("button",{type:"button",role:"button",className:h(V()),onClick:()=>u(p),children:p})},p))})};k.__docgenInfo={description:"",methods:[],displayName:"List",props:{className:{required:!1,tsType:{name:"string"},description:""},inputRef:{required:!0,tsType:{name:"RefObject",elements:[{name:"union",raw:"ComponentRef<'input'> | null",elements:[{name:"ComponentRef",elements:[{name:"literal",value:"'input'"}],raw:"ComponentRef<'input'>"},{name:"null"}]}],raw:"RefObject<ComponentRef<'input'> | null>"},description:""},wrapperRef:{required:!0,tsType:{name:"RefObject",elements:[{name:"union",raw:"ComponentRef<'div'> | null",elements:[{name:"ComponentRef",elements:[{name:"literal",value:"'div'"}],raw:"ComponentRef<'div'>"},{name:"null"}]}],raw:"RefObject<ComponentRef<'div'> | null>"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** The value to display and select */
  value: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0},description:"The value to display and select"}]}}],raw:"Option[]"},description:""},placeholder:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},placeholderClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["VariantProps"]};const w=n.forwardRef(({autoComplete:r="off",className:a,label:l,labelClassName:c,name:t,options:o,placeholder:u,placeHolderEmptyValues:s="No values...",placeHolderEmptyValuesClassName:p,theme:m,onChange:b},C)=>{const y=n.useRef(null),e=n.useRef(null),f=n.useId();n.useImperativeHandle(C,()=>e.current,[e]);const d=T({options:o,inputRef:e,wrapperRef:y,onChange:b});return i.jsxs("div",{ref:y,className:"relative flex flex-col","data-theme":m,children:[l?i.jsx("label",{htmlFor:t??f,className:h(O({className:c})),children:l}):null,i.jsx("input",{ref:e,id:l?t??f:void 0,type:"text",name:t,role:"combobox",autoComplete:r,className:h(A({className:a})),onChange:d.handleChange,value:d.value,placeholder:u,"aria-expanded":d.showOptions?"true":"false"}),d.showOptions&&i.jsx("div",{className:"absolute z-10 top-full w-full rounded-md mt-1 border shadow-sm border-zinc-200 overflow-hidden",children:i.jsx(k,{className:a,inputRef:e,wrapperRef:y,options:d.newOptions,placeholder:s,placeholderClassName:p,onClick:d.handleSelectValue})})]})});w.displayName="Autocomplete";w.__docgenInfo={description:`An autocomplete/typeahead input component that suggests options as you type.

@example
\`\`\`tsx
// Basic autocomplete
<Autocomplete
  label="Programming Language"
  options={[
    { value: 'JavaScript' },
    { value: 'TypeScript' },
    { value: 'Python' },
  ]}
  placeholder="Type to search..."
  onChange={(value) => setLanguage(value)}
/>

// With custom empty state
<Autocomplete
  options={users}
  placeholder="Search users..."
  placeHolderEmptyValues="No users found"
  onChange={handleUserSelect}
/>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-autocomplete--docs Storybook}`,methods:[],displayName:"Autocomplete",props:{autoComplete:{required:!1,tsType:{name:"literal",value:"'off'"},description:"Disable browser autocomplete (default: 'off')",defaultValue:{value:"'off'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},label:{required:!1,tsType:{name:"string"},description:"Label displayed above the input"},labelClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the label"},name:{required:!1,tsType:{name:"string"},description:"Form field name"},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** The value to display and select */
  value: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0},description:"The value to display and select"}]}}],raw:"Option[]"},description:"Array of options to suggest"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text"},placeHolderEmptyValues:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Text shown when no options match",defaultValue:{value:"'No values...'",computed:!1}},placeHolderEmptyValuesClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for empty state text"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"}},composes:["VariantProps"]};const P={title:"In Review/Autocomplete",component:w},x={args:{placeholder:"Search...",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"},{value:"Option 6"}]},render:r=>i.jsxs("div",{className:"w-[350px] flex flex-col gap-3",children:[i.jsx(w,{label:"Kubefirst colors",theme:"kubefirst",...r}),i.jsx(w,{label:"Civo colors",...r})]})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    options: [{
      value: 'Option 1'
    }, {
      value: 'Option 2'
    }, {
      value: 'Option 3'
    }, {
      value: 'Option 4'
    }, {
      value: 'Option 5'
    }, {
      value: 'Option 6'
    }]
  },
  render: args => <div className="w-[350px] flex flex-col gap-3">
      <AutocompleteComponent label="Kubefirst colors" theme="kubefirst" {...args} />
      <AutocompleteComponent label="Civo colors" {...args} />
    </div>
}`,...x.parameters?.docs?.source}}};const _=["Autocomplete"];export{x as Autocomplete,_ as __namedExportsOrder,P as default};
