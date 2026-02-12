import{r as l,R as y,j as d}from"./iframe-C4Xa0_Vd.js";import{c}from"./index-B-7A89sm.js";import{B as j}from"./Button-ig9r9gr0.js";import{P as p}from"./index-umurZPFM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BtEsH0n3.js";import"./index-DM4VC6Ap.js";function g(){return g=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},g.apply(this,arguments)}function O(e,s){if(e==null)return{};var n=N(e,s),t,o;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],!(s.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function N(e,s){if(e==null)return{};var n={},t=Object.keys(e),o,r;for(r=0;r<t.length;r++)o=t[r],!(s.indexOf(o)>=0)&&(n[o]=e[o]);return n}var w=l.forwardRef(function(e,s){var n=e.color,t=n===void 0?"currentColor":n,o=e.size,r=o===void 0?24:o,i=O(e,["color","size"]);return y.createElement("svg",g({ref:s,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),y.createElement("polyline",{points:"6 9 12 15 18 9"}))});w.propTypes={color:p.string,size:p.oneOfType([p.string,p.number])};w.displayName="ChevronDown";const b=({buttonClassName:e,className:s,itemClassName:n,listClassName:t,options:o})=>{const[r,i]=l.useState(!1),v=l.useRef(null),m=l.useRef(null),C=l.useCallback(()=>i(a=>!a),[]),k=l.useCallback(a=>{i(!1),a?.()},[]);return l.useEffect(()=>{const a=new AbortController,f=h=>{h.key==="Escape"&&i(!1)},x=h=>{m.current?.contains(h.target)||i(!1)};return document.addEventListener("keydown",f,{signal:a.signal}),document.addEventListener("mousedown",x,{signal:a.signal}),document.addEventListener("visibilitychange",()=>{document.hidden&&i(!1)},{signal:a.signal}),()=>{a.abort()}},[m]),d.jsxs("div",{ref:m,className:c("relative w-full",s),children:[d.jsxs(j,{ref:v,className:c("flex gap-2 items-center justify-between w-full",e),onClick:C,children:["Download Invoice as",d.jsx(w,{className:c({"transform rotate-180":r,"transition-transform duration-200":!0})})]}),r&&d.jsx("ul",{className:c("absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow-xs animate-in fade-in-0 py-2",t),children:o.map((a,f)=>d.jsx("li",{className:c("hover:bg-gray-50 px-6 py-1.5 hover:cursor-pointer",n),onClick:()=>k(a.onClick),children:a.label},f))})]})};b.__docgenInfo={description:`A button with an attached dropdown menu for selecting actions.
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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-dropdownbutton--docs Storybook}`,methods:[],displayName:"DropdownButton",props:{buttonClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the trigger button"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the wrapper container"},itemClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for each dropdown item"},listClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the dropdown list"},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** The text or element displayed for this option */
  label: string | ReactNode;
  /** Callback fired when this option is selected */
  onClick?: VoidFunction;
}`,signature:{properties:[{key:"label",value:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}],required:!0},description:"The text or element displayed for this option"},{key:"onClick",value:{name:"VoidFunction",required:!1},description:"Callback fired when this option is selected"}]}}],raw:"Option[]"},description:"Array of options to display in the dropdown"}}};const A={title:"In Review/DropdownButton",component:b},u={args:{options:[{label:"PDF"},{label:"CSV"}]},render:e=>d.jsx("div",{className:"max-w-50","data-theme":"civo",children:d.jsx(b,{...e})})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'PDF'
    }, {
      label: 'CSV'
    }]
  },
  render: args => {
    return <div className="max-w-50" data-theme="civo">
        <DropdownButtonComponent {...args} />
      </div>;
  }
}`,...u.parameters?.docs?.source}}};const q=["DropdownButton"];export{u as DropdownButton,q as __namedExportsOrder,A as default};
