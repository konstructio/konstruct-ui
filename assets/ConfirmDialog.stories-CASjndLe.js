import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Input-BRC_SP_8.js";import{n as a,t as o}from"./Warning-8ht_Y00X.js";import{i as s,t as c}from"./utils-Bwr2iEcD.js";import{n as l,t as u}from"./Typography-CdcJtpS2.js";import{n as d,t as f}from"./Button-DqiKM02x.js";import{n as p,t as m}from"./Alert-vf6U5vPC.js";import{n as h,t as g}from"./CopyButton-B5gRHuva.js";import{n as _,t as v}from"./Modal-DNTtpP74.js";var y,b,x;function S(){return(S=e((()=>{y=t(),a(),s(),d(),h(),r(),_(),l(),b=n(),x=({cancelLabel:e=`Cancel`,children:t,className:n,confirmationInputClassName:r,confirmationInputLabel:a,confirmationPrompt:s,confirmationText:l,confirmLabel:d=`Confirm`,containerClassName:p,copyLabel:m=`Copy`,description:h,icon:_,isOpen:x,isPending:S=!1,pendingLabel:C,theme:w,title:T,variant:E=`danger`,onClose:D,onConfirm:O})=>{let k=(0,y.useId)(),A=`${k}-title`,[j,M]=(0,y.useState)(``),N=!!l,P=!N||j===l;(0,y.useEffect)(()=>{x&&M(``)},[x]);let F=()=>{S||D()},I=e=>{e.preventDefault(),!S&&P&&O()},L=_===void 0?(0,b.jsx)(o,{size:24,"aria-hidden":`true`,className:c(`shrink-0`,E===`danger`?`text-red-600 dark:text-red-500`:`text-aurora-500`)}):_;return(0,b.jsx)(v,{isOpen:x,theme:w,showCloseButton:!1,ariaLabelledBy:A,containerClassName:p,className:c(`max-w-125 min-h-0 min-w-0 gap-0 p-6`,n),onClose:F,children:(0,b.jsxs)(`form`,{id:k,noValidate:!0,className:`flex flex-col gap-6`,onSubmit:I,children:[(0,b.jsxs)(v.Header,{className:`flex items-start gap-4`,children:[L,(0,b.jsxs)(`div`,{className:`flex min-w-0 flex-1 flex-col gap-4`,children:[(0,b.jsx)(u,{id:A,variant:`subtitle3`,component:`h2`,className:`text-slate-800 dark:text-slate-200`,children:T}),h?(0,b.jsx)(u,{variant:`body2`,className:`text-slate-700 dark:text-slate-50`,children:h}):null,t]})]}),N?(0,b.jsxs)(v.Body,{className:`flex flex-col gap-2 pl-10`,children:[(0,b.jsx)(u,{variant:`body2`,component:`p`,className:`flex flex-wrap items-center gap-1 font-medium text-slate-800 dark:text-metal-50`,children:s??(0,b.jsxs)(b.Fragment,{children:[`Type`,(0,b.jsx)(g,{text:l,label:l,copyLabel:m,className:`rounded-xs border border-gray-200 bg-gray-50 px-1 py-0.5 font-medium hover:bg-gray-100 dark:border-metal-700 dark:bg-metal-700 dark:hover:bg-metal-600`,children:l}),`to confirm`]})}),(0,b.jsx)(i,{value:j,autoComplete:`off`,disabled:S,className:r,"aria-label":a??`Type ${l} to confirm`,onChange:e=>{M(e.target.value)}})]}):null,(0,b.jsxs)(v.Footer,{className:`flex justify-end gap-2`,children:[(0,b.jsx)(f,{type:`button`,variant:`secondary`,disabled:S,onClick:F,children:e}),(0,b.jsx)(f,{type:`submit`,form:k,variant:E,disabled:S||!P,children:S?C??d:d})]})]})})},x.displayName=`KonstructConfirmDialog`,x.__docgenInfo={description:`A confirmation dialog for destructive or important actions, optionally
gated behind typing a confirmation text (usually the resource name).

@example
\`\`\`tsx
<ConfirmDialog
  isOpen={isOpen}
  title={\`Delete \${cluster.name}?\`}
  description="This cannot be undone. All node pools will be removed."
  confirmationText={cluster.name}
  confirmLabel="Yes, delete"
  pendingLabel="Deleting…"
  isPending={isDeleting}
  onClose={() => setIsOpen(false)}
  onConfirm={deleteCluster}
/>
\`\`\``,methods:[],displayName:`KonstructConfirmDialog`,props:{cancelLabel:{required:!1,tsType:{name:`ReactNode`},description:`Label of the cancel button`,defaultValue:{value:`'Cancel'`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:`Extra content rendered below the description, e.g. an Alert`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the dialog panel`},confirmationInputClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the input the user types the confirmation into`},confirmationInputLabel:{required:!1,tsType:{name:`string`},description:`Accessible name of the confirmation input; defaults to "Type <text> to confirm"`},confirmationPrompt:{required:!1,tsType:{name:`ReactNode`},description:`Custom prompt rendered above the input; defaults to "Type <text> to confirm" with a copyable chip`},confirmationText:{required:!1,tsType:{name:`string`},description:`When set, the confirm button stays disabled until the user types this exact text`},confirmLabel:{required:!1,tsType:{name:`ReactNode`},description:`Label of the confirm button`,defaultValue:{value:`'Confirm'`,computed:!1}},containerClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the overlay container, e.g. to raise its z-index`},copyLabel:{required:!1,tsType:{name:`string`},description:`Accessible name of the copy button next to the confirmation text`,defaultValue:{value:`'Copy'`,computed:!1}},description:{required:!1,tsType:{name:`ReactNode`},description:`Secondary text below the title`},icon:{required:!1,tsType:{name:`ReactNode`},description:"Icon rendered next to the title; defaults to a warning icon coloured by `variant`"},isOpen:{required:!0,tsType:{name:`boolean`},description:`Whether the dialog is open`},isPending:{required:!1,tsType:{name:`boolean`},description:"Disables both buttons and swaps the confirm label for `pendingLabel`",defaultValue:{value:`false`,computed:!1}},pendingLabel:{required:!1,tsType:{name:`ReactNode`},description:"Label of the confirm button while `isPending`"},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override for this component`},title:{required:!0,tsType:{name:`ReactNode`},description:`Title of the dialog`},variant:{required:!1,tsType:{name:`Extract`,elements:[{name:`ButtonProps['variant']`,raw:`ButtonProps['variant']`},{name:`union`,raw:`'danger' | 'primary'`,elements:[{name:`literal`,value:`'danger'`},{name:`literal`,value:`'primary'`}]}],raw:`Extract<ButtonProps['variant'], 'danger' | 'primary'>`},description:`Variant of the confirm button; also colours the default icon`,defaultValue:{value:`'danger'`,computed:!1}},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the user cancels, presses Escape or clicks the overlay`},onConfirm:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the user confirms`}}}})))()}var C,w,T,E,D,O;function k(){return(k=e((()=>{C=t(),p(),d(),S(),w=n(),T={title:`In Review/ConfirmDialog`,component:x},E={parameters:{docs:{description:{story:"A destructive confirmation gated behind typing the resource name. The chip copies the name, Enter submits once it matches, and `isPending` locks the dialog while the request runs. Seven microfrontends carried their own copy of this modal."}}},render:function(){let[e,t]=(0,C.useState)(!1),[n,r]=(0,C.useState)(!1);return(0,w.jsxs)(`div`,{className:`flex gap-4`,children:[(0,w.jsx)(f,{variant:`danger`,onClick:()=>t(!0),children:`Delete cluster`}),(0,w.jsx)(x,{isOpen:e,title:`Delete prod-cluster?`,description:`Are you sure you want to permanently delete this cluster? All node pools and workloads will be removed.`,confirmationText:`prod-cluster`,confirmLabel:`Yes, delete`,pendingLabel:`Deleting…`,isPending:n,onClose:()=>t(!1),onConfirm:()=>{r(!0),setTimeout(()=>{r(!1),t(!1)},1500)},children:(0,w.jsx)(m,{type:`warning`,description:`This volume is attached to web-01 and will be detached first.`})})]})}},D={render:function(){let[e,t]=(0,C.useState)(!1);return(0,w.jsxs)(`div`,{className:`flex gap-4`,children:[(0,w.jsx)(f,{onClick:()=>t(!0),children:`Restart instance`}),(0,w.jsx)(x,{isOpen:e,variant:`primary`,title:`Restart web-01?`,description:`The instance will be unavailable for about a minute.`,confirmLabel:`Restart`,onClose:()=>t(!1),onConfirm:()=>t(!1)})]})}},O=[`TypeToConfirm`,`Simple`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A destructive confirmation gated behind typing the resource name. The chip copies the name, Enter submits once it matches, and \`isPending\` locks the dialog while the request runs. Seven microfrontends carried their own copy of this modal.'
      }
    }
  },
  render: function TypeToConfirmStory() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const handleConfirm = () => {
      setIsPending(true);
      setTimeout(() => {
        setIsPending(false);
        setIsOpen(false);
      }, 1500);
    };
    return <div className="flex gap-4">
        <Button variant="danger" onClick={() => setIsOpen(true)}>
          Delete cluster
        </Button>

        <ConfirmDialogComponent isOpen={isOpen} title="Delete prod-cluster?" description="Are you sure you want to permanently delete this cluster? All node pools and workloads will be removed." confirmationText="prod-cluster" confirmLabel="Yes, delete" pendingLabel="Deleting…" isPending={isPending} onClose={() => setIsOpen(false)} onConfirm={handleConfirm}>
          <Alert type="warning" description="This volume is attached to web-01 and will be detached first." />
        </ConfirmDialogComponent>
      </div>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function SimpleStory() {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="flex gap-4">
        <Button onClick={() => setIsOpen(true)}>Restart instance</Button>

        <ConfirmDialogComponent isOpen={isOpen} variant="primary" title="Restart web-01?" description="The instance will be unavailable for about a minute." confirmLabel="Restart" onClose={() => setIsOpen(false)} onConfirm={() => setIsOpen(false)} />
      </div>;
  }
}`,...D.parameters?.docs?.source}}}})))()}k();export{D as Simple,E as TypeToConfirm,O as __namedExportsOrder,T as default};