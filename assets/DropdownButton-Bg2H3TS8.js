import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./react-C184PLS3.js";import{t as r}from"./jsx-runtime-De-1JGbp.js";import{h as i,t as a}from"./dist-CfJvWfhr.js";import{a as o,r as s}from"./dist-CeciwoH6.js";import{n as c,t as l}from"./Button-BPcFTE3U.js";var u,d,f,p=e((()=>{u=t(n(),1),a(),o(),c(),d=r(),f=({buttonClassName:e,className:t,itemClassName:n,listClassName:r,options:a})=>{let[o,c]=(0,u.useState)(!1),f=(0,u.useRef)(null),p=(0,u.useRef)(null),m=(0,u.useCallback)(()=>c(e=>!e),[]),h=(0,u.useCallback)(e=>{c(!1),e?.()},[]);return(0,u.useEffect)(()=>{let e=new AbortController;return document.addEventListener(`keydown`,e=>{e.key===`Escape`&&c(!1)},{signal:e.signal}),document.addEventListener(`mousedown`,e=>{p.current?.contains(e.target)||c(!1)},{signal:e.signal}),document.addEventListener(`visibilitychange`,()=>{document.hidden&&c(!1)},{signal:e.signal}),()=>{e.abort()}},[p]),(0,d.jsxs)(`div`,{ref:p,className:s(`relative w-full`,t),children:[(0,d.jsxs)(l,{ref:f,className:s(`flex gap-2 items-center justify-between w-full`,e),onClick:m,children:[`Download Invoice as`,(0,d.jsx)(i,{className:s({"transform rotate-180":o,"transition-transform duration-200":!0})})]}),o&&(0,d.jsx)(`ul`,{className:s(`absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow-xs animate-in fade-in-0 py-2`,r),children:a.map((e,t)=>(0,d.jsx)(`li`,{className:s(`hover:bg-gray-50 px-6 py-1.5 hover:cursor-pointer`,n),onClick:()=>h(e.onClick),children:e.label},t))})]})},f.__docgenInfo={description:`A button with an attached dropdown menu for selecting actions.
Closes automatically on outside click, Escape key, or tab visibility change.

@example
\`\`\`tsx
<DropdownButton
  options={[
    { label: 'Download PDF', onClick: handlePdf },
    { label: 'Download CSV', onClick: handleCsv },
  ]}
  buttonClassName="w-64"
/>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-dropdownbutton--docs Storybook}`,methods:[],displayName:`DropdownButton`,props:{buttonClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the trigger button`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the wrapper container`},itemClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for each dropdown item`},listClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the dropdown list`},options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  /** The text or element displayed for this option */
  label: string | ReactNode;
  /** Callback fired when this option is selected */
  onClick?: VoidFunction;
}`,signature:{properties:[{key:`label`,value:{name:`union`,raw:`string | ReactNode`,elements:[{name:`string`},{name:`ReactNode`}],required:!0},description:`The text or element displayed for this option`},{key:`onClick`,value:{name:`VoidFunction`,required:!1},description:`Callback fired when this option is selected`}]}}],raw:`Option[]`},description:`Array of options to display in the dropdown`}}}}));export{p as n,f as t};