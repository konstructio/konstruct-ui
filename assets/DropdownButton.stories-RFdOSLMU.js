import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{n as i,t as a}from"./Loader-BQKWeyFh.js";import{t as o}from"./prop-types-D9WxI36-.js";import{i as s,t as c}from"./utils-Bwr2iEcD.js";import{n as l,t as u}from"./Button-DqiKM02x.js";import{a as d,i as f,n as p,r as m,t as h}from"./dist-BWLBnM2Q.js";function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function _(e,t){if(e==null)return{};var n=v(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function v(e,t){if(e==null)return{};for(var n={},r=Object.keys(e),i,a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var y,b,x;function S(){return(S=e((()=>{y=t(n()),b=t(o()),x=(0,y.forwardRef)(function(e,t){var n=e.color,r=n===void 0?`currentColor`:n,i=e.size,a=i===void 0?24:i,o=_(e,[`color`,`size`]);return y.createElement(`svg`,g({ref:t,xmlns:`http://www.w3.org/2000/svg`,width:a,height:a,viewBox:`0 0 24 24`,fill:`none`,stroke:r,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},o),y.createElement(`polyline`,{points:`6 9 12 15 18 9`}))}),x.propTypes={color:b.default.string,size:b.default.oneOfType([b.default.string,b.default.number])},x.displayName=`ChevronDown`})))()}var C,w;function T(){return(T=e((()=>{d(),S(),i(),s(),l(),C=r(),w=({appearance:e,buttonClassName:t,className:n,disabled:r=!1,isLoading:i=!1,itemClassName:o,label:s=`Download Invoice as`,listClassName:l,options:d,variant:g,version:_})=>(0,C.jsx)(h,{modal:!1,children:(0,C.jsxs)(`div`,{className:c(`relative w-full`,n),children:[(0,C.jsx)(f,{asChild:!0,disabled:r||i,children:(0,C.jsxs)(u,{appearance:e,variant:g,version:_,disabled:r||i,"aria-busy":i||void 0,className:c(`group flex gap-2 items-center justify-between w-full`,t),children:[s,i?(0,C.jsx)(a,{size:16,className:`animate-spin shrink-0`}):(0,C.jsx)(x,{className:`transition-transform duration-200 group-data-[state=open]:rotate-180`})]})}),(0,C.jsx)(p,{align:`start`,sideOffset:4,loop:!0,className:c(`z-10 bg-white border border-gray-200 rounded shadow-xs animate-in fade-in-0 py-2`,l),style:{width:`var(--radix-dropdown-menu-trigger-width)`},children:d.map((e,t)=>(0,C.jsx)(m,{className:c(`hover:bg-gray-50 focus:bg-gray-50 outline-none px-6 py-1.5 hover:cursor-pointer`,o),onSelect:()=>{e.onClick?.()},children:e.label},t))})]})}),w.__docgenInfo={description:`A button with an attached dropdown menu for selecting actions.
Built on Radix DropdownMenu: closes on outside click or Escape, and
supports full keyboard navigation.

@example
\`\`\`tsx
<DropdownButton
  label="Download Invoice as"
  options={[
    { label: 'PDF', onClick: () => downloadPdf() },
    { label: 'CSV', onClick: () => downloadCsv() },
  ]}
/>
\`\`\``,methods:[],displayName:`DropdownButton`,props:{appearance:{required:!1,tsType:{name:`ButtonProps['appearance']`,raw:`ButtonProps['appearance']`},description:`Appearance of the trigger button`},buttonClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the trigger button`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the wrapper container`},disabled:{required:!1,tsType:{name:`boolean`},description:`Disable the trigger and keep the menu closed`,defaultValue:{value:`false`,computed:!1}},isLoading:{required:!1,tsType:{name:`boolean`},description:`Show a spinner in place of the chevron and disable the trigger`,defaultValue:{value:`false`,computed:!1}},itemClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for each dropdown item`},label:{required:!1,tsType:{name:`union`,raw:`string | ReactNode`,elements:[{name:`string`},{name:`ReactNode`}]},description:`Content of the trigger button`,defaultValue:{value:`'Download Invoice as'`,computed:!1}},listClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the dropdown list`},options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  /** The text or element displayed for this option */
  label: string | ReactNode;
  /** Callback fired when this option is selected */
  onClick?: VoidFunction;
}`,signature:{properties:[{key:`label`,value:{name:`union`,raw:`string | ReactNode`,elements:[{name:`string`},{name:`ReactNode`}],required:!0},description:`The text or element displayed for this option`},{key:`onClick`,value:{name:`VoidFunction`,required:!1},description:`Callback fired when this option is selected`}]}}],raw:`Option[]`},description:`Array of options to display in the dropdown`},variant:{required:!1,tsType:{name:`ButtonProps['variant']`,raw:`ButtonProps['variant']`},description:`Variant of the trigger button`},version:{required:!1,tsType:{name:`ButtonProps['version']`,raw:`ButtonProps['version']`},description:`Version of the trigger button`}}}})))()}var E,D,O,k,A;function j(){return(j=e((()=>{T(),E=r(),D={title:`In Review/DropdownButton`,component:w},O={args:{options:[{label:`PDF`},{label:`CSV`}]},render:e=>(0,E.jsx)(`div`,{className:`max-w-50`,"data-theme":`civo`,children:(0,E.jsx)(w,{...e})})},k={parameters:{docs:{description:{story:"`isLoading` swaps the chevron for a spinner and disables the trigger while a download is in flight; `disabled` keeps the menu closed. `variant`, `appearance` and `version` are forwarded to the trigger Button. Billing fell back to a plain Button for the loading state before."}}},args:{label:`Download invoice as`,options:[{label:`PDF`},{label:`CSV`}]},render:e=>(0,E.jsxs)(`div`,{className:`flex flex-col gap-4 max-w-60`,children:[(0,E.jsx)(w,{...e,isLoading:!0}),(0,E.jsx)(w,{...e,disabled:!0}),(0,E.jsx)(w,{...e,variant:`secondary`}),(0,E.jsx)(w,{...e,variant:`tertiary`,appearance:`compact`})]})},A=[`DropdownButton`,`States`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`isLoading\` swaps the chevron for a spinner and disables the trigger while a download is in flight; \`disabled\` keeps the menu closed. \`variant\`, \`appearance\` and \`version\` are forwarded to the trigger Button. Billing fell back to a plain Button for the loading state before.'
      }
    }
  },
  args: {
    label: 'Download invoice as',
    options: [{
      label: 'PDF'
    }, {
      label: 'CSV'
    }]
  },
  render: args => <div className="flex flex-col gap-4 max-w-60">
      <DropdownButtonComponent {...args} isLoading />
      <DropdownButtonComponent {...args} disabled />
      <DropdownButtonComponent {...args} variant="secondary" />
      <DropdownButtonComponent {...args} variant="tertiary" appearance="compact" />
    </div>
}`,...k.parameters?.docs?.source}}}})))()}j();export{O as DropdownButton,k as States,A as __namedExportsOrder,D as default};