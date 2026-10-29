import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{t as n}from"./react-BlIEEezU.js";import{t as r}from"./jsx-runtime-BB9-612F.js";import{n as i,t as a}from"./Loader-Cu4Hswv-.js";import{t as o}from"./prop-types-oqrMGvqW.js";import{i as s,t as c}from"./utils-DWfjJEhS.js";import{n as l,t as u}from"./Button-BDsJAASj.js";import{n as ee,t as d}from"./useMediaQuery-B1J8CYO9.js";import{a as f,o as p,r as m,s as te,t as ne,u as h}from"./dist-CUYlavF0.js";import{a as g,i as _,n as v,o as y,r as b,t as x}from"./dist-DIINEc0e.js";import{a as S,i as C,n as w,t as T}from"./react-BcXdl6AZ.js";function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function D(e,t){if(e==null)return{};var n=O(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function O(e,t){if(e==null)return{};for(var n={},r=Object.keys(e),i,a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var k,A,j;function M(){return(M=e((()=>{k=t(n()),A=t(o()),j=(0,k.forwardRef)(function(e,t){var n=e.color,r=n===void 0?`currentColor`:n,i=e.size,a=i===void 0?24:i,o=D(e,[`color`,`size`]);return k.createElement(`svg`,E({ref:t,xmlns:`http://www.w3.org/2000/svg`,width:a,height:a,viewBox:`0 0 24 24`,fill:`none`,stroke:r,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},o),k.createElement(`polyline`,{points:`6 9 12 15 18 9`}))}),j.propTypes={color:A.default.string,size:A.default.oneOfType([A.default.string,A.default.number])},j.displayName=`ChevronDown`})))()}var N,P,F,I,L,R,z;function B(){return(B=e((()=>{h(),T(),N=n(),s(),P=r(),F={duration:.2,ease:`easeOut`},I={duration:.6,ease:[.4,0,.2,1]},L=`100%`,R={enter:e=>({opacity:0,x:e>0?L:`-${L}`}),center:{opacity:1,x:0},exit:e=>({opacity:0,x:e>0?`-${L}`:L})},z=({isOpen:e,onClose:t,title:n,hideTitle:r=!1,leading:i,position:a=`bottom`,step:o=0,className:s,bodyClassName:l,headerClassName:u,titleClassName:ee,theme:d,children:h})=>{let g=C(),_=(0,N.useRef)(null),v=(0,N.useRef)(null),y=(0,N.useRef)(null),[b,x]=(0,N.useState)(`auto`),[T,E]=(0,N.useState)(!1),[D,O]=(0,N.useState)({step:o,direction:1});D.step!==o&&O({step:o,direction:o>D.step?1:-1});let{direction:k}=D,A=a===`bottom`?`100%`:`-100%`,j=g?{initial:!1,animate:{y:0},exit:{y:0}}:{initial:{y:A},animate:{y:0},exit:{y:A}},M=(0,N.useCallback)(e=>{v.current?.disconnect(),v.current=null,y.current!==null&&(cancelAnimationFrame(y.current),y.current=null),e?(x(e.getBoundingClientRect().height),typeof ResizeObserver<`u`&&(v.current=new ResizeObserver(([e])=>{e&&x(e.contentRect.height)}),v.current.observe(e)),y.current=requestAnimationFrame(()=>{E(!0)})):(E(!1),x(`auto`))},[]);return(0,P.jsx)(ne,{open:e,onOpenChange:e=>!e&&t(),children:(0,P.jsx)(S,{children:e&&(0,P.jsx)(p,{forceMount:!0,children:(0,P.jsxs)(`div`,{"data-theme":d,className:`contents`,children:[(0,P.jsx)(f,{asChild:!0,forceMount:!0,children:(0,P.jsx)(w.div,{className:`fixed inset-0 z-50 bg-black/55`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:F})}),(0,P.jsx)(m,{asChild:!0,forceMount:!0,onOpenAutoFocus:e=>{e.preventDefault(),_.current?.focus()},children:(0,P.jsxs)(w.div,{ref:_,tabIndex:-1,className:c(`konstruct-sheet fixed inset-x-0 z-50 flex max-h-[calc(100dvh-4rem)] flex-col`,`bg-white text-slate-800 shadow-xl outline-none`,`dark:bg-metal-800 dark:text-metal-50`,a===`bottom`?`bottom-0 rounded-t-lg pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))]`:`top-0 rounded-b-lg pb-4 pt-[calc(1rem+env(safe-area-inset-top))]`,s),"data-position":a,"data-step":o,transition:F,...j,children:[(0,P.jsxs)(`div`,{className:c(`flex min-h-9 shrink-0 items-center gap-2 px-6 pb-2`,u,r&&`sr-only`),children:[i,(0,P.jsx)(te,{className:c(`text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-metal-400`,ee),children:n})]}),(0,P.jsx)(w.div,{className:c(`flex min-h-0 flex-col overflow-y-auto overflow-x-hidden`,l),animate:{height:b},transition:g||!T?{duration:0}:I,children:(0,P.jsx)(`div`,{ref:M,className:`relative`,children:(0,P.jsx)(S,{mode:`popLayout`,initial:!1,custom:k,children:(0,P.jsx)(w.div,{custom:k,className:`flex w-full flex-col`,variants:g?void 0:R,initial:!g&&`enter`,animate:`center`,exit:g?void 0:`exit`,transition:I,children:h},o)})})})]})})]})})})})},z.displayName=`KonstructSheet`,z.__docgenInfo={description:`A dialog docked to the bottom (or top) edge of the screen, full width: the
touch-screen counterpart of a dropdown or a popover menu. It slides in and
out, dims the page behind a scrim, and keeps its content scrollable within
the viewport. Radix unmounts closed dialogs, so the portal is force-mounted
and AnimatePresence keeps it around for the exit animation.

Multi-step sheets pass a \`step\`: when it changes the content slides across
(forward for a higher step, back for a lower one) and the panel height
animates to the new content.

@example
\`\`\`tsx
<Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} title="Region">
  <button type="button">London</button>
</Sheet>
\`\`\``,methods:[],displayName:`KonstructSheet`,props:{hideTitle:{defaultValue:{value:`false`,computed:!1},required:!1},position:{defaultValue:{value:`'bottom'`,computed:!1},required:!1},step:{defaultValue:{value:`0`,computed:!1},required:!1}}}})))()}var V,H,U;function W(){return(W=e((()=>{V=n(),B(),s(),H=r(),U=({isOpen:e,onClose:t,title:n,options:r,itemClassName:i,className:a,headerClassName:o,titleClassName:s,position:l=`bottom`,theme:u})=>(0,H.jsx)(z,{isOpen:e,onClose:t,title:n,position:l,theme:u,className:c(`px-4`,a),headerClassName:c(`px-2`,o),titleClassName:s,bodyClassName:`overflow-visible`,children:(0,H.jsx)(`div`,{className:`flex flex-col`,children:r.map((e,n)=>{let r=e.disabled||!!e.disabledReason;return(0,H.jsxs)(V.Fragment,{children:[e.separator&&(0,H.jsx)(`hr`,{className:`-mx-4 my-2 border-slate-200 dark:border-metal-700`}),(0,H.jsxs)(`button`,{type:`button`,disabled:r,className:c(`flex min-h-11 w-full items-center justify-between gap-4 rounded px-2 text-left text-base`,`hover:bg-slate-50 focus-visible:bg-slate-50 dark:hover:bg-metal-700 dark:focus-visible:bg-metal-700`,`outline-none disabled:cursor-not-allowed disabled:hover:bg-transparent`,e.destructive&&`text-red-600 dark:text-red-400`,r&&`text-slate-400 dark:text-metal-400`,i),onClick:()=>{e.onClick?.(),t()},children:[(0,H.jsx)(`span`,{children:e.label}),e.disabledReason&&(0,H.jsx)(`span`,{className:`shrink-0 text-xs text-slate-400 dark:text-metal-400`,children:e.disabledReason})]})]},n)})})}),U.__docgenInfo={description:`The touch-screen counterpart of the dropdown menu: a Sheet with one 44px
button per option.`,methods:[],displayName:`ActionSheet`,props:{isOpen:{required:!0,tsType:{name:`boolean`},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},title:{required:!0,tsType:{name:`ReactNode`},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`label`,value:{name:`union`,raw:`string | ReactNode`,elements:[{name:`string`},{name:`ReactNode`}],required:!0},description:`The text or element displayed for this option`},{key:`onClick`,value:{name:`VoidFunction`,required:!1},description:`Callback fired when this option is selected`},{key:`disabled`,value:{name:`boolean`,required:!1},description:`Keep the option visible but inert`},{key:`disabledReason`,value:{name:`ReactNode`,required:!1},description:"Why the option is disabled; rendered beside the label and implies `disabled`"},{key:`destructive`,value:{name:`boolean`,required:!1},description:`Style the option as a destructive action`},{key:`separator`,value:{name:`boolean`,required:!1},description:`Draw a divider above this option`}]}}],raw:`Option[]`},description:``},itemClassName:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},headerClassName:{required:!1,tsType:{name:`string`},description:``},titleClassName:{required:!1,tsType:{name:`string`},description:``},position:{required:!1,tsType:{name:`union`,raw:`'bottom' | 'top'`,elements:[{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'top'`}]},description:``,defaultValue:{value:`'bottom'`,computed:!1}},theme:{required:!1,tsType:{name:`Theme`},description:``}}}})))()}var G,K,q,J;function Y(){return(Y=e((()=>{y(),G=n(),M(),i(),d(),s(),l(),W(),K=r(),q=`(max-width: 767.98px), (pointer: coarse)`,J=({align:e=`start`,appearance:t,buttonClassName:n,className:r,disabled:i=!1,isLoading:o=!1,itemClassName:s,label:l=`Download Invoice as`,listClassName:d,options:f,sheetTitle:p,sheetQuery:m=q,sheetPosition:te=`bottom`,sheetClassName:ne,sheetHeaderClassName:h,sheetTitleClassName:y,theme:S,variant:C,version:w})=>{let[T,E]=(0,G.useState)(!1),D=ee(m),O=p!==void 0&&D,k=i||o,A=(0,K.jsxs)(u,{appearance:t,variant:C,version:w,disabled:k,"aria-busy":o||void 0,className:c(`group flex gap-2 items-center justify-between w-full`,n),...O?{"aria-haspopup":`dialog`,"aria-expanded":T,onClick:()=>E(!0)}:{},children:[l,o?(0,K.jsx)(a,{size:16,className:`animate-spin shrink-0`}):(0,K.jsx)(j,{className:c(`transition-transform duration-200 group-data-[state=open]:rotate-180`,O&&T&&`rotate-180`)})]});return O?(0,K.jsxs)(`div`,{className:c(`relative w-full`,r),children:[A,(0,K.jsx)(U,{isOpen:T,onClose:()=>E(!1),title:p,options:f,itemClassName:s,position:te,className:ne,headerClassName:h,titleClassName:y,theme:S})]}):(0,K.jsx)(x,{modal:!1,children:(0,K.jsxs)(`div`,{className:c(`relative w-full`,r),"data-theme":S,children:[(0,K.jsx)(g,{asChild:!0,disabled:k,children:A}),(0,K.jsx)(v,{align:e,sideOffset:4,loop:!0,className:c(`z-10 bg-white border border-gray-200 rounded shadow-xs animate-in fade-in-0 py-2`,`dark:bg-metal-800 dark:border-metal-700 dark:text-metal-50`,d),style:{minWidth:`var(--radix-dropdown-menu-trigger-width)`},children:f.map((e,t)=>{let n=e.disabled||!!e.disabledReason;return(0,K.jsxs)(G.Fragment,{children:[e.separator&&(0,K.jsx)(_,{className:`my-2 border-t border-gray-200 dark:border-metal-700`}),(0,K.jsxs)(b,{disabled:n,className:c(`flex items-center justify-between gap-4 whitespace-nowrap outline-none px-6 py-1.5`,`hover:bg-gray-50 focus:bg-gray-50 hover:cursor-pointer`,`dark:text-metal-50 dark:hover:bg-metal-700 dark:focus:bg-metal-700`,`data-[disabled]:cursor-not-allowed data-[disabled]:text-gray-400 data-[disabled]:hover:bg-transparent`,`dark:data-[disabled]:text-metal-400`,e.destructive&&`text-red-600 dark:text-red-400`,s),onSelect:()=>{e.onClick?.()},children:[(0,K.jsx)(`span`,{children:e.label}),e.disabledReason&&(0,K.jsx)(`span`,{className:`shrink-0 text-xs text-gray-400 dark:text-metal-400`,children:e.disabledReason})]})]},t)})})]})})},J.__docgenInfo={description:`A button with an attached dropdown menu for selecting actions.
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
}`,signature:{properties:[{key:`label`,value:{name:`union`,raw:`string | ReactNode`,elements:[{name:`string`},{name:`ReactNode`}],required:!0},description:`The text or element displayed for this option`},{key:`onClick`,value:{name:`VoidFunction`,required:!1},description:`Callback fired when this option is selected`},{key:`disabled`,value:{name:`boolean`,required:!1},description:`Keep the option visible but inert`},{key:`disabledReason`,value:{name:`ReactNode`,required:!1},description:"Why the option is disabled; rendered beside the label and implies `disabled`"},{key:`destructive`,value:{name:`boolean`,required:!1},description:`Style the option as a destructive action`},{key:`separator`,value:{name:`boolean`,required:!1},description:`Draw a divider above this option`}]}}],raw:`Option[]`},description:`Array of options to display in the dropdown`},sheetTitle:{required:!1,tsType:{name:`ReactNode`},description:"Render the options as an action sheet docked to the bottom of the screen\ninstead of a dropdown while `sheetQuery` matches. The title heads the sheet."},sheetQuery:{required:!1,tsType:{name:`string`},description:`Media query that switches to the action sheet (default: touch pointers and
viewports under 768px).`,defaultValue:{value:`'(max-width: 767.98px), (pointer: coarse)'`,computed:!1}},sheetPosition:{required:!1,tsType:{name:`union`,raw:`'bottom' | 'top'`,elements:[{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'top'`}]},description:`Screen edge the action sheet docks to (default: 'bottom')`,defaultValue:{value:`'bottom'`,computed:!1}},sheetClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the action sheet panel`},sheetHeaderClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the action sheet header row`},sheetTitleClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the action sheet title`},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override for the dropdown and the sheet`},variant:{required:!1,tsType:{name:`ButtonProps['variant']`,raw:`ButtonProps['variant']`},description:`Variant of the trigger button`},version:{required:!1,tsType:{name:`ButtonProps['version']`,raw:`ButtonProps['version']`},description:`Version of the trigger button`}}}})))()}var X,re,Z,Q,$,ie;function ae(){return(ae=e((()=>{Y(),X=r(),re={title:`In Review/DropdownButton`,component:J},Z={args:{options:[{label:`PDF`},{label:`CSV`}]},render:e=>(0,X.jsx)(`div`,{className:`max-w-50`,"data-theme":`civo`,children:(0,X.jsx)(J,{...e})})},Q={parameters:{docs:{description:{story:"`isLoading` swaps the chevron for a spinner and disables the trigger while a download is in flight; `disabled` keeps the menu closed. `variant`, `appearance` and `version` are forwarded to the trigger Button. Billing fell back to a plain Button for the loading state before."}}},args:{label:`Download invoice as`,options:[{label:`PDF`},{label:`CSV`}]},render:e=>(0,X.jsxs)(`div`,{className:`flex flex-col gap-4 max-w-60`,children:[(0,X.jsx)(J,{...e,isLoading:!0}),(0,X.jsx)(J,{...e,disabled:!0}),(0,X.jsx)(J,{...e,variant:`secondary`}),(0,X.jsx)(J,{...e,variant:`tertiary`,appearance:`compact`})]})},$={args:{label:`Actions`,variant:`secondary`,sheetTitle:`web-server-prod`,options:[{label:`Shutdown`},{label:`Reboot`},{label:`Start`,disabledReason:`Already running`},{label:`Delete instance`,destructive:!0,separator:!0}]},render:e=>(0,X.jsx)(`div`,{className:`max-w-40`,"data-theme":`civo`,children:(0,X.jsx)(J,{...e})})},ie=[`DropdownButton`,`States`,`ActionsMenu`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:"Options can stay listed while unavailable (`disabledReason` prints why beside\nthe label), open a new group (`separator`) or read as destructive. With\n`sheetTitle` the same options become an action sheet docked to the bottom of\nthe screen on touch devices and viewports under 768px; resize the preview\nto see it.",...$.parameters?.docs?.description}}}})))()}ae();export{$ as ActionsMenu,Z as DropdownButton,Q as States,ie as __namedExportsOrder,re as default};