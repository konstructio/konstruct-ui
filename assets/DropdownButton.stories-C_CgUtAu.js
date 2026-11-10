import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{t as n}from"./react-BWPDF9mI.js";import{t as r}from"./jsx-runtime-BB9-612F.js";import{n as i,t as a}from"./Loader-BfpOVA7N.js";import{t as o}from"./prop-types-oqrMGvqW.js";import{i as s,t as c}from"./utils-DWfjJEhS.js";import{n as l,t as u}from"./Button-1ow6AtAL.js";import{n as d,t as f}from"./useMediaQuery-CVTOZWe_.js";import{a as p,i as m,n as h,o as g,r as _,t as v}from"./dist-mrPFh3zb.js";import{n as y,t as b}from"./ActionSheet-B4W_5c68.js";function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function S(e,t){if(e==null)return{};var n=C(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function C(e,t){if(e==null)return{};for(var n={},r=Object.keys(e),i,a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}var w,T,E;function D(){return(D=e((()=>{w=t(n()),T=t(o()),E=(0,w.forwardRef)(function(e,t){var n=e.color,r=n===void 0?`currentColor`:n,i=e.size,a=i===void 0?24:i,o=S(e,[`color`,`size`]);return w.createElement(`svg`,x({ref:t,xmlns:`http://www.w3.org/2000/svg`,width:a,height:a,viewBox:`0 0 24 24`,fill:`none`,stroke:r,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},o),w.createElement(`polyline`,{points:`6 9 12 15 18 9`}))}),E.propTypes={color:T.default.string,size:T.default.oneOfType([T.default.string,T.default.number])},E.displayName=`ChevronDown`})))()}var O,k,A,j;function M(){return(M=e((()=>{g(),O=n(),D(),i(),f(),s(),l(),y(),k=r(),A=`(max-width: 767.98px), (pointer: coarse)`,j=({align:e=`start`,appearance:t,buttonClassName:n,className:r,disabled:i=!1,isLoading:o=!1,itemClassName:s,label:l=`Download Invoice as`,listClassName:f,options:g,sheetTitle:y,sheetQuery:x=A,sheetPosition:S=`bottom`,sheetClassName:C,sheetHeaderClassName:w,sheetTitleClassName:T,theme:D,variant:j,version:M})=>{let[N,P]=(0,O.useState)(!1),F=d(x),I=y!==void 0&&F,L=i||o,R=(0,k.jsxs)(u,{appearance:t,variant:j,version:M,disabled:L,"aria-busy":o||void 0,className:c(`group flex gap-2 items-center justify-between w-full`,n),...I?{"aria-haspopup":`dialog`,"aria-expanded":N,onClick:()=>P(!0)}:{},children:[l,o?(0,k.jsx)(a,{size:16,className:`animate-spin shrink-0`}):(0,k.jsx)(E,{className:c(`transition-transform duration-200 group-data-[state=open]:rotate-180`,I&&N&&`rotate-180`)})]});return I?(0,k.jsxs)(`div`,{className:c(`relative w-full`,r),children:[R,(0,k.jsx)(b,{isOpen:N,onClose:()=>P(!1),title:y,options:g,itemClassName:s,position:S,className:C,headerClassName:w,titleClassName:T,theme:D})]}):(0,k.jsx)(v,{modal:!1,children:(0,k.jsxs)(`div`,{className:c(`relative w-full`,r),"data-theme":D,children:[(0,k.jsx)(p,{asChild:!0,disabled:L,children:R}),(0,k.jsx)(h,{align:e,sideOffset:4,loop:!0,className:c(`z-10 bg-white border border-gray-200 rounded shadow-xs animate-in fade-in-0 py-2`,`dark:bg-metal-800 dark:border-metal-700 dark:text-metal-50`,f),style:{minWidth:`var(--radix-dropdown-menu-trigger-width)`},children:g.map((e,t)=>{let n=e.disabled||!!e.disabledReason;return(0,k.jsxs)(O.Fragment,{children:[e.separator&&(0,k.jsx)(m,{className:`my-2 border-t border-gray-200 dark:border-metal-700`}),(0,k.jsxs)(_,{disabled:n,className:c(`flex items-center justify-between gap-4 whitespace-nowrap outline-none px-6 py-1.5`,`hover:bg-gray-50 focus:bg-gray-50 hover:cursor-pointer`,`dark:text-metal-50 dark:hover:bg-metal-700 dark:focus:bg-metal-700`,`data-[disabled]:cursor-not-allowed data-[disabled]:text-gray-400 data-[disabled]:hover:bg-transparent`,`dark:data-[disabled]:text-metal-400`,e.destructive&&`text-red-600 dark:text-red-400`,s,e.className),onSelect:()=>{e.onClick?.()},children:[(0,k.jsx)(`span`,{children:e.label}),e.disabledReason&&(0,k.jsx)(`span`,{className:`shrink-0 text-xs text-gray-400 dark:text-metal-400`,children:e.disabledReason})]})]},t)})})]})})},j.__docgenInfo={description:`A button with an attached dropdown menu for selecting actions.
Built on Radix DropdownMenu: closes on outside click or Escape, and
supports full keyboard navigation. With \`sheetTitle\` the menu becomes an
action sheet docked to the bottom of the screen on touch devices.

@example
\`\`\`tsx
<DropdownButton
  label="Download Invoice as"
  options={[
    { label: 'PDF', onClick: () => downloadPdf() },
    { label: 'CSV', onClick: () => downloadCsv() },
  ]}
/>
\`\`\``,methods:[],displayName:`DropdownButton`,props:{align:{required:!1,tsType:{name:`union`,raw:`'start' | 'end'`,elements:[{name:`literal`,value:`'start'`},{name:`literal`,value:`'end'`}]},description:`Edge of the trigger the menu aligns to (default: 'start')`,defaultValue:{value:`'start'`,computed:!1}},appearance:{required:!1,tsType:{name:`ButtonProps['appearance']`,raw:`ButtonProps['appearance']`},description:`Appearance of the trigger button`},buttonClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the trigger button`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the wrapper container`},disabled:{required:!1,tsType:{name:`boolean`},description:`Disable the trigger and keep the menu closed`,defaultValue:{value:`false`,computed:!1}},isLoading:{required:!1,tsType:{name:`boolean`},description:`Show a spinner in place of the chevron and disable the trigger`,defaultValue:{value:`false`,computed:!1}},itemClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for each dropdown item`},label:{required:!1,tsType:{name:`union`,raw:`string | ReactNode`,elements:[{name:`string`},{name:`ReactNode`}]},description:`Content of the trigger button`,defaultValue:{value:`'Download Invoice as'`,computed:!1}},listClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the dropdown list`},options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  /** The text or element displayed for this option */
  label: string | ReactNode;
  /** Callback fired when this option is selected */
  onClick?: VoidFunction;
  /** Keep the option visible but inert */
  disabled?: boolean;
  /** Why the option is disabled; rendered beside the label and implies \`disabled\` */
  disabledReason?: ReactNode;
  /** Style the option as a destructive action */
  destructive?: boolean;
  /** Draw a divider above this option */
  separator?: boolean;
  /** Additional CSS classes for this option */
  className?: string;
}`,signature:{properties:[{key:`label`,value:{name:`union`,raw:`string | ReactNode`,elements:[{name:`string`},{name:`ReactNode`}],required:!0},description:`The text or element displayed for this option`},{key:`onClick`,value:{name:`VoidFunction`,required:!1},description:`Callback fired when this option is selected`},{key:`disabled`,value:{name:`boolean`,required:!1},description:`Keep the option visible but inert`},{key:`disabledReason`,value:{name:`ReactNode`,required:!1},description:"Why the option is disabled; rendered beside the label and implies `disabled`"},{key:`destructive`,value:{name:`boolean`,required:!1},description:`Style the option as a destructive action`},{key:`separator`,value:{name:`boolean`,required:!1},description:`Draw a divider above this option`},{key:`className`,value:{name:`string`,required:!1},description:`Additional CSS classes for this option`}]}}],raw:`Option[]`},description:`Array of options to display in the dropdown`},sheetTitle:{required:!1,tsType:{name:`ReactNode`},description:"Render the options as an action sheet docked to the bottom of the screen\ninstead of a dropdown while `sheetQuery` matches. The title heads the sheet."},sheetQuery:{required:!1,tsType:{name:`string`},description:`Media query that switches to the action sheet (default: touch pointers and
viewports under 768px).`,defaultValue:{value:`'(max-width: 767.98px), (pointer: coarse)'`,computed:!1}},sheetPosition:{required:!1,tsType:{name:`union`,raw:`'bottom' | 'top'`,elements:[{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'top'`}]},description:`Screen edge the action sheet docks to (default: 'bottom')`,defaultValue:{value:`'bottom'`,computed:!1}},sheetClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the action sheet panel`},sheetHeaderClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the action sheet header row`},sheetTitleClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the action sheet title`},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override for the dropdown and the sheet`},variant:{required:!1,tsType:{name:`ButtonProps['variant']`,raw:`ButtonProps['variant']`},description:`Variant of the trigger button`},version:{required:!1,tsType:{name:`ButtonProps['version']`,raw:`ButtonProps['version']`},description:`Version of the trigger button`}}}})))()}var N,P,F,I,L,R;function z(){return(z=e((()=>{M(),N=r(),P={title:`In Review/DropdownButton`,component:j},F={args:{options:[{label:`PDF`},{label:`CSV`}]},render:e=>(0,N.jsx)(`div`,{className:`max-w-50`,"data-theme":`civo`,children:(0,N.jsx)(j,{...e})})},I={parameters:{docs:{description:{story:"`isLoading` swaps the chevron for a spinner and disables the trigger while a download is in flight; `disabled` keeps the menu closed. `variant`, `appearance` and `version` are forwarded to the trigger Button. Billing fell back to a plain Button for the loading state before."}}},args:{label:`Download invoice as`,options:[{label:`PDF`},{label:`CSV`}]},render:e=>(0,N.jsxs)(`div`,{className:`flex flex-col gap-4 max-w-60`,children:[(0,N.jsx)(j,{...e,isLoading:!0}),(0,N.jsx)(j,{...e,disabled:!0}),(0,N.jsx)(j,{...e,variant:`secondary`}),(0,N.jsx)(j,{...e,variant:`tertiary`,appearance:`compact`})]})},L={args:{label:`Actions`,variant:`secondary`,sheetTitle:`web-server-prod`,options:[{label:`Shutdown`},{label:`Reboot`},{label:`Start`,disabledReason:`Already running`},{label:`Delete instance`,destructive:!0,separator:!0}]},render:e=>(0,N.jsx)(`div`,{className:`max-w-40`,"data-theme":`civo`,children:(0,N.jsx)(j,{...e})})},R=[`DropdownButton`,`States`,`ActionsMenu`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    variant: 'secondary',
    sheetTitle: 'web-server-prod',
    options: [{
      label: 'Shutdown'
    }, {
      label: 'Reboot'
    }, {
      label: 'Start',
      disabledReason: 'Already running'
    }, {
      label: 'Delete instance',
      destructive: true,
      separator: true
    }]
  },
  render: args => <div className="max-w-40" data-theme="civo">
      <DropdownButtonComponent {...args} />
    </div>
}`,...L.parameters?.docs?.source},description:{story:"Options can stay listed while unavailable (`disabledReason` prints why beside\nthe label), open a new group (`separator`) or read as destructive. With\n`sheetTitle` the same options become an action sheet docked to the bottom of\nthe screen on touch devices and viewports under 768px; resize the preview\nto see it.",...L.parameters?.docs?.description}}}})))()}z();export{L as ActionsMenu,F as DropdownButton,I as States,R as __namedExportsOrder,P as default};