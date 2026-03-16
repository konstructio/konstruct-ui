import{r as b,R as P,j as a}from"./iframe-DLrn8Gk9.js";import{c as z}from"./compiler-runtime-DxXHijtq.js";import{c as w}from"./index-CwGTy2we.js";import{B as L}from"./Button-CIavAXKE.js";import{P as N}from"./index-CE1qPSkB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-y1nNICkM.js";import"./index-CPvO_3XD.js";function _(){return _=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},_.apply(this,arguments)}function F(t,e){if(t==null)return{};var o=I(t,e),n,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function I(t,e){if(t==null)return{};var o={},n=Object.keys(t),r,s;for(s=0;s<n.length;s++)r=n[s],!(e.indexOf(r)>=0)&&(o[r]=t[r]);return o}var E=b.forwardRef(function(t,e){var o=t.color,n=o===void 0?"currentColor":o,r=t.size,s=r===void 0?24:r,h=F(t,["color","size"]);return P.createElement("svg",_({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},h),P.createElement("polyline",{points:"6 9 12 15 18 9"}))});E.propTypes={color:N.string,size:N.oneOfType([N.string,N.number])};E.displayName="ChevronDown";const R=t=>{const e=z.c(24),{buttonClassName:o,className:n,itemClassName:r,listClassName:s,options:h}=t,[l,g]=b.useState(!1),B=b.useRef(null),O=b.useRef(null);let y;e[0]===Symbol.for("react.memo_cache_sentinel")?(y=()=>g(V),e[0]=y):y=e[0];const T=y;let v;e[1]===Symbol.for("react.memo_cache_sentinel")?(v=i=>{g(!1),i?.()},e[1]=v):v=e[1];const A=v;let C,k;e[2]===Symbol.for("react.memo_cache_sentinel")?(C=()=>{const i=new AbortController,S=D=>{D.key==="Escape"&&g(!1)},q=D=>{O.current?.contains(D.target)||g(!1)};return document.addEventListener("keydown",S,{signal:i.signal}),document.addEventListener("mousedown",q,{signal:i.signal}),document.addEventListener("visibilitychange",()=>{document.hidden&&g(!1)},{signal:i.signal}),()=>{i.abort()}},k=[O],e[2]=C,e[3]=k):(C=e[2],k=e[3]),b.useEffect(C,k);let c;e[4]!==n?(c=w("relative w-full",n),e[4]=n,e[5]=c):c=e[5];let d;e[6]!==o?(d=w("flex gap-2 items-center justify-between w-full",o),e[6]=o,e[7]=d):d=e[7];let p;e[8]!==l?(p=w({"transform rotate-180":l,"transition-transform duration-200":!0}),e[8]=l,e[9]=p):p=e[9];let m;e[10]!==p?(m=a.jsx(E,{className:p}),e[10]=p,e[11]=m):m=e[11];let u;e[12]!==d||e[13]!==m?(u=a.jsxs(L,{ref:B,className:d,onClick:T,children:["Download Invoice as",m]}),e[12]=d,e[13]=m,e[14]=u):u=e[14];let f;e[15]!==l||e[16]!==r||e[17]!==s||e[18]!==h?(f=l&&a.jsx("ul",{className:w("absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow-xs animate-in fade-in-0 py-2",s),children:h.map((i,S)=>a.jsx("li",{className:w("hover:bg-gray-50 px-6 py-1.5 hover:cursor-pointer",r),onClick:()=>A(i.onClick),children:i.label},S))}),e[15]=l,e[16]=r,e[17]=s,e[18]=h,e[19]=f):f=e[19];let x;return e[20]!==f||e[21]!==c||e[22]!==u?(x=a.jsxs("div",{ref:O,className:c,children:[u,f]}),e[20]=f,e[21]=c,e[22]=u,e[23]=x):x=e[23],x};R.__docgenInfo={description:`A button with an attached dropdown menu for selecting actions.
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
}`,signature:{properties:[{key:"label",value:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}],required:!0},description:"The text or element displayed for this option"},{key:"onClick",value:{name:"VoidFunction",required:!1},description:"Callback fired when this option is selected"}]}}],raw:"Option[]"},description:"Array of options to display in the dropdown"}}};function V(t){return!t}const U={title:"In Review/DropdownButton",component:R},j={args:{options:[{label:"PDF"},{label:"CSV"}]},render:t=>a.jsx("div",{className:"max-w-50","data-theme":"civo",children:a.jsx(R,{...t})})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};const X=["DropdownButton"];export{j as DropdownButton,X as __namedExportsOrder,U as default};
