import{r as s,j as c}from"./iframe-B0ykOvC4.js";import{a as v,f as N,c as g}from"./index-BIgQ6y5l.js";import"./preload-helper-PPVm8Dsz.js";const A=v(["flex","w-full","rounded-md","border","border-zinc-200","bg-transparent","text-zinc-700","transition-colors","placeholder:text-muted-foreground","focus-visible:outline-none","focus-visible:ring-1","focus-visible:ring-ring","disabled:cursor-not-allowed","disabled:opacity-50","shadow-2xs","py-1","px-2","focus:ring-aurora-500","kubefirst:focus:ring-kubefirst-primary"]),T=v(["pl-1","text-base","cursor-pointer"]),O=({options:r,inputRef:a,wrapperRef:l,onChange:u})=>{const[n,t]=s.useState(()=>r??[]),[p,o]=s.useState(!1),[m,f]=s.useState("");s.useEffect(()=>{const e=new AbortController;return a.current?.addEventListener("focus",()=>o(!0),{signal:e.signal}),()=>{e.abort()}},[a]),s.useEffect(()=>{const e=new AbortController,d=i=>{i.key==="Escape"&&(o(!1),a.current?.blur())},h=i=>{l.current?.contains(i.target)||o(!1)};return document.addEventListener("keydown",d,{signal:e.signal}),document.addEventListener("mousedown",h,{signal:e.signal}),()=>{e.abort()}},[a,l]),s.useEffect(()=>{const e=new AbortController;return l.current?.addEventListener("focusout",d=>{l.current?.contains(d.relatedTarget)||o(!1)},{signal:e.signal}),()=>{e.abort()}},[l]);const b=s.useCallback(e=>{if(e.length===0)t(r);else{const d=r.map(({value:i})=>i),h=N(d,e).map(i=>({value:i}));t(h)}},[r]),x=s.useCallback(e=>{f(e.target.value),b(e.target.value),u?.(e.target.value)},[b,u]),C=s.useCallback(e=>{f(e),b(e),u?.(e),o(!1)},[b,u]);return{inputRef:a,newOptions:n,showOptions:p,value:m,handleChange:x,handleSelectValue:C}},S=({ulRef:r,inputRef:a,wrapperRef:l,options:u})=>{const n=s.useRef(0);s.useEffect(()=>{const t=r.current?.querySelectorAll("li")??[],p=new AbortController,o=()=>{n.current<t.length-1?(n.current=n.current+1,t[n.current].focus()):(n.current=0,t[0].focus())},m=()=>{n.current>0?(n.current=n.current-1,t[n.current].focus()):(n.current=0,a.current?.focus())};return r.current?.addEventListener("keydown",f=>{switch(f.preventDefault(),f.key){case"ArrowDown":{o();break}case"Tab":{f.shiftKey?m():o();break}case"ArrowUp":{n.current===0?a.current?.focus():m();break}case"Enter":{t[n.current].querySelector("button")?.click();break}}},{signal:p.signal}),()=>{p.abort()}},[a,r,u,n]),s.useEffect(()=>{const t=new AbortController;return a.current?.addEventListener("keydown",p=>{if(p.key==="ArrowDown"){const o=r.current?.querySelector("li");o&&o.focus()}},{signal:t.signal}),()=>{t.abort()}},[a,r,u]),s.useEffect(()=>{const t=new AbortController;return l.current?.addEventListener("mouseenter",()=>{(r.current?.querySelectorAll("li")??[]).forEach(o=>o.blur())},{signal:t.signal}),()=>{t.abort()}},[r,l])},q=v(["max-h-[250px]","overflow-y-auto","bg-white"]),E=v(["p-1","text-center","w-full","block","bg-white"]),j=v(["focus-visible:outline-none","kubefirst:focus:bg-purple-100","kubefirst:hover:bg-purple-100","border-transparent","focus:bg-aurora-50","hover:bg-aurora-50"]),V=v(["cursor-pointer","focus-visible:outline-none","px-3","py-1.5","w-full","text-left","focus:bg-aurora-50","hover:bg-aurora-50","kubefirst:focus:bg-purple-100","kubefirst:hover:bg-purple-100"]),k=({className:r,inputRef:a,options:l,placeholder:u,placeholderClassName:n,wrapperRef:t,onClick:p})=>{const o=s.useRef(null);return S({ulRef:o,inputRef:a,wrapperRef:t,options:l}),l.length===0?c.jsx("span",{className:g(E({className:n})),children:u}):c.jsx("ul",{ref:o,role:"listbox",className:g(q({className:r})),children:l.map(({value:m})=>c.jsx("li",{role:"option",tabIndex:0,className:g(j()),children:c.jsx("button",{type:"button",role:"button",className:g(V()),onClick:()=>p(m),children:m})},m))})};k.__docgenInfo={description:"",methods:[],displayName:"List",props:{className:{required:!1,tsType:{name:"string"},description:""},inputRef:{required:!0,tsType:{name:"RefObject",elements:[{name:"union",raw:"ComponentRef<'input'> | null",elements:[{name:"ComponentRef",elements:[{name:"literal",value:"'input'"}],raw:"ComponentRef<'input'>"},{name:"null"}]}],raw:"RefObject<ComponentRef<'input'> | null>"},description:""},wrapperRef:{required:!0,tsType:{name:"RefObject",elements:[{name:"union",raw:"ComponentRef<'div'> | null",elements:[{name:"ComponentRef",elements:[{name:"literal",value:"'div'"}],raw:"ComponentRef<'div'>"},{name:"null"}]}],raw:"RefObject<ComponentRef<'div'> | null>"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** The value to display and select */
  value: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0},description:"The value to display and select"}]}}],raw:"Option[]"},description:""},placeholder:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},placeholderClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["VariantProps"]};const y=s.forwardRef(({autoComplete:r="off",className:a,label:l,labelClassName:u,labelWrapperClassName:n,name:t,options:p,placeholder:o,placeHolderEmptyValues:m="No values...",placeHolderEmptyValuesClassName:f,theme:b,onChange:x},C)=>{const e=s.useRef(null),d=s.useRef(null),h=s.useId();s.useImperativeHandle(C,()=>d.current,[d]);const i=O({options:p,inputRef:d,wrapperRef:e,onChange:x});return c.jsxs("div",{ref:e,className:"relative flex flex-col gap-2","data-theme":b,children:[l?c.jsx("div",{className:g(n),children:c.jsx("label",{htmlFor:t??h,className:g(T({className:u})),children:l})}):null,c.jsx("input",{ref:d,id:l?t??h:void 0,type:"text",name:t,role:"combobox",autoComplete:r,className:g(A({className:a})),onChange:i.handleChange,value:i.value,placeholder:o,"aria-expanded":i.showOptions?"true":"false"}),i.showOptions&&c.jsx("div",{className:"absolute z-10 top-full w-full rounded-md mt-1 border shadow-sm border-zinc-200 overflow-hidden",children:c.jsx(k,{className:a,inputRef:d,wrapperRef:e,options:i.newOptions,placeholder:m,placeholderClassName:f,onClick:i.handleSelectValue})})]})});y.displayName="Autocomplete";y.__docgenInfo={description:`An autocomplete/typeahead input component that suggests options as you type.

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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-autocomplete--docs Storybook}`,methods:[],displayName:"Autocomplete",props:{autoComplete:{required:!1,tsType:{name:"literal",value:"'off'"},description:"Disable browser autocomplete (default: 'off')",defaultValue:{value:"'off'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},label:{required:!1,tsType:{name:"string"},description:"Label displayed above the input"},labelClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the label"},labelWrapperClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the label wrapper"},name:{required:!1,tsType:{name:"string"},description:"Form field name"},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** The value to display and select */
  value: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0},description:"The value to display and select"}]}}],raw:"Option[]"},description:"Array of options to suggest"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text"},placeHolderEmptyValues:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Text shown when no options match",defaultValue:{value:"'No values...'",computed:!1}},placeHolderEmptyValuesClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for empty state text"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"}},composes:["VariantProps"]};const P={title:"In Review/Autocomplete",component:y},w={args:{placeholder:"Search...",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"},{value:"Option 6"}]},render:r=>c.jsxs("div",{className:"w-[350px] flex flex-col gap-3",children:[c.jsx(y,{label:"Kubefirst colors",theme:"kubefirst",...r}),c.jsx(y,{label:"Civo colors",...r})]})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const _=["Autocomplete"];export{w as Autocomplete,_ as __namedExportsOrder,P as default};
