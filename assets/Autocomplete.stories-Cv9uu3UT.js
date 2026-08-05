import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,r as i,t as a}from"./utils-BC5-UmL9.js";import{n as o,t as s}from"./dist-DJsSzQxH.js";import{n as c,t as l}from"./useClickOutside-Bw56o4m_.js";var u,d;function f(){return(f=e((()=>{o(),u=s([`flex`,`w-full`,`rounded-md`,`border`,`border-zinc-200`,`bg-transparent`,`text-zinc-700`,`transition-colors`,`placeholder:text-muted-foreground`,`focus-visible:outline-none`,`focus-visible:ring-1`,`focus-visible:ring-ring`,`disabled:cursor-not-allowed`,`disabled:opacity-50`,`shadow-2xs`,`py-1`,`px-2`,`focus:ring-aurora-500`,`kubefirst:focus:ring-kubefirst-primary`]),d=s([`pl-1`,`text-base`,`cursor-pointer`])})))()}var p,m;function h(){return(h=e((()=>{p=t(),l(),i(),m=({options:e,inputRef:t,wrapperRef:n,onChange:i})=>{let[a,o]=(0,p.useState)(()=>e??[]),[s,l]=(0,p.useState)(!1),[u,d]=(0,p.useState)(``);(0,p.useEffect)(()=>{let e=new AbortController;return t.current?.addEventListener(`focus`,()=>l(!0),{signal:e.signal}),()=>{e.abort()}},[t]);let f=(0,p.useCallback)(()=>{l(!1)},[]);c(n,f),(0,p.useEffect)(()=>{let e=new AbortController;return document.addEventListener(`keydown`,e=>{e.key===`Escape`&&(l(!1),t.current?.blur())},{signal:e.signal}),()=>{e.abort()}},[t]),(0,p.useEffect)(()=>{let e=new AbortController;return n.current?.addEventListener(`focusout`,e=>{n.current?.contains(e.relatedTarget)||l(!1)},{signal:e.signal}),()=>{e.abort()}},[n]);let m=t=>{if(t.length===0)o(e);else{let n=e.map(({value:e})=>e),i=r(n,t).map(e=>({value:e}));o(i)}};return{inputRef:t,newOptions:a,showOptions:s,value:u,handleChange:e=>{d(e.target.value),m(e.target.value),i?.(e.target.value)},handleSelectValue:e=>{d(e),m(e),i?.(e),l(!1)}}}})))()}var g,_;function v(){return(v=e((()=>{g=t(),_=({ulRef:e,inputRef:t,wrapperRef:n,options:r})=>{let i=(0,g.useRef)(0);(0,g.useEffect)(()=>{let n=e.current?.querySelectorAll(`li`)??[],r=new AbortController,a=()=>{i.current<n.length-1?(i.current+=1,n[i.current].focus()):(i.current=0,n[0].focus())},o=()=>{i.current>0?(--i.current,n[i.current].focus()):(i.current=0,t.current?.focus())};return e.current?.addEventListener(`keydown`,e=>{switch(e.preventDefault(),e.key){case`ArrowDown`:a();break;case`Tab`:e.shiftKey?o():a();break;case`ArrowUp`:i.current===0?t.current?.focus():o();break;case`Enter`:case` `:n[i.current].click()}},{signal:r.signal}),()=>{r.abort()}},[t,e,r,i]),(0,g.useEffect)(()=>{let n=new AbortController;return t.current?.addEventListener(`keydown`,t=>{if(t.key===`ArrowDown`){let t=e.current?.querySelector(`li`);t&&t.focus()}},{signal:n.signal}),()=>{n.abort()}},[t,e,r]),(0,g.useEffect)(()=>{let t=new AbortController;return n.current?.addEventListener(`mouseenter`,()=>{(e.current?.querySelectorAll(`li`)??[]).forEach(e=>e.blur())},{signal:t.signal}),()=>{t.abort()}},[e,n])}})))()}var y,b,x;function S(){return(S=e((()=>{o(),y=s([`max-h-62.5`,`overflow-y-auto`,`bg-white`]),b=s([`p-1`,`text-center`,`w-full`,`block`,`bg-white`]),x=s([`focus-visible:outline-none`,`kubefirst:focus:bg-purple-100`,`kubefirst:hover:bg-purple-100`,`border-transparent`,`focus:bg-aurora-50`,`hover:bg-aurora-50`])})))()}var C,w,T;function E(){return(E=e((()=>{C=t(),i(),v(),S(),w=n(),T=({className:e,inputRef:t,options:n,placeholder:r,placeholderClassName:i,wrapperRef:o,onClick:s})=>{let c=(0,C.useRef)(null);return _({ulRef:c,inputRef:t,wrapperRef:o,options:n}),n.length===0?(0,w.jsx)(`span`,{className:a(b({className:i})),children:r}):(0,w.jsx)(`ul`,{ref:c,role:`listbox`,className:a(y({className:e})),children:n.map(({value:e})=>(0,w.jsx)(`li`,{role:`option`,"aria-selected":!1,tabIndex:0,className:a(x(),`cursor-pointer px-3 py-1.5 w-full text-left`),onClick:()=>s(e),children:e},e))})},T.__docgenInfo={description:``,methods:[],displayName:`List`,props:{className:{required:!1,tsType:{name:`string`},description:``},inputRef:{required:!0,tsType:{name:`RefObject`,elements:[{name:`union`,raw:`ComponentRef<'input'> | null`,elements:[{name:`ComponentRef`,elements:[{name:`literal`,value:`'input'`}],raw:`ComponentRef<'input'>`},{name:`null`}]}],raw:`RefObject<ComponentRef<'input'> | null>`},description:``},wrapperRef:{required:!0,tsType:{name:`RefObject`,elements:[{name:`union`,raw:`ComponentRef<'div'> | null`,elements:[{name:`ComponentRef`,elements:[{name:`literal`,value:`'div'`}],raw:`ComponentRef<'div'>`},{name:`null`}]}],raw:`RefObject<ComponentRef<'div'> | null>`},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  /** The value to display and select */
  value: string;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0},description:`The value to display and select`}]}}],raw:`Option[]`},description:``},placeholder:{required:!0,tsType:{name:`union`,raw:`string | ReactNode`,elements:[{name:`string`},{name:`ReactNode`}]},description:``},placeholderClassName:{required:!1,tsType:{name:`string`},description:``}},composes:[`VariantProps`]}})))()}var D,O,k;function A(){return(A=e((()=>{D=t(),i(),f(),E(),h(),O=n(),k=(0,D.forwardRef)(({autoComplete:e=`off`,className:t,label:n,labelClassName:r,labelWrapperClassName:i,name:o,options:s,placeholder:c,placeHolderEmptyValues:l=`No values...`,placeHolderEmptyValuesClassName:f,theme:p,onChange:h},g)=>{let _=(0,D.useRef)(null),v=(0,D.useRef)(null),y=(0,D.useId)();(0,D.useImperativeHandle)(g,()=>v.current,[v]);let b=m({options:s,inputRef:v,wrapperRef:_,onChange:h});return(0,O.jsxs)(`div`,{ref:_,className:`relative flex flex-col gap-2`,"data-theme":p,children:[n?(0,O.jsx)(`div`,{className:a(i),children:(0,O.jsx)(`label`,{htmlFor:o??y,className:a(d({className:r})),children:n})}):null,(0,O.jsx)(`input`,{ref:v,id:n?o??y:void 0,type:`text`,name:o,role:`combobox`,autoComplete:e,className:a(u({className:t})),onChange:b.handleChange,value:b.value,placeholder:c,"aria-expanded":b.showOptions?`true`:`false`}),b.showOptions&&(0,O.jsx)(`div`,{className:`absolute z-10 top-full w-full rounded-md mt-1 border shadow-sm border-zinc-200 overflow-hidden`,children:(0,O.jsx)(T,{className:t,inputRef:v,wrapperRef:_,options:b.newOptions,placeholder:l,placeholderClassName:f,onClick:b.handleSelectValue})})]})}),k.displayName=`Autocomplete`,k.__docgenInfo={description:`An autocomplete/typeahead input component that suggests options as you type.

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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-autocomplete--docs Storybook}`,methods:[],displayName:`Autocomplete`,props:{autoComplete:{required:!1,tsType:{name:`literal`,value:`'off'`},description:`Disable browser autocomplete (default: 'off')`,defaultValue:{value:`'off'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Additional CSS classes`},label:{required:!1,tsType:{name:`string`},description:`Label displayed above the input`},labelClassName:{required:!1,tsType:{name:`string`},description:`CSS classes for the label`},labelWrapperClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the label wrapper`},name:{required:!1,tsType:{name:`string`},description:`Form field name`},options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  /** The value to display and select */
  value: string;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0},description:`The value to display and select`}]}}],raw:`Option[]`},description:`Array of options to suggest`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text`},placeHolderEmptyValues:{required:!1,tsType:{name:`union`,raw:`string | ReactNode`,elements:[{name:`string`},{name:`ReactNode`}]},description:`Text shown when no options match`,defaultValue:{value:`'No values...'`,computed:!1}},placeHolderEmptyValuesClassName:{required:!1,tsType:{name:`string`},description:`CSS classes for empty state text`},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override for this component`}},composes:[`VariantProps`]}})))()}var j,M,N,P;function F(){return(F=e((()=>{A(),j=n(),M={title:`In Review/Autocomplete`,component:k},N={args:{placeholder:`Search...`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`},{value:`Option 6`}]},render:e=>(0,j.jsxs)(`div`,{className:`w-87.5 flex flex-col gap-3`,children:[(0,j.jsx)(k,{label:`Kubefirst colors`,theme:`kubefirst`,...e}),(0,j.jsx)(k,{label:`Civo colors`,...e})]})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
  render: args => <div className="w-87.5 flex flex-col gap-3">
      <AutocompleteComponent label="Kubefirst colors" theme="kubefirst" {...args} />
      <AutocompleteComponent label="Civo colors" {...args} />
    </div>
}`,...N.parameters?.docs?.source}}},P=[`Autocomplete`]})))()}F();export{N as Autocomplete,P as __namedExportsOrder,M as default};