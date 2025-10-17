import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-CG2DfsQt.js";import{C as F}from"./Checkbox-Bpk7Vz1G.js";import{c as L,b as U}from"./index-CbIRJwAc.js";import{u as y,a as Z}from"./index-3gJBM-4k.js";import{c as w,R as z,P as K,O as J,W as Q,C as X,T as ee,D as te,a as b,b as ae}from"./index-DPUaW74I.js";import{B as v}from"./Button-CD0QaLXM.js";import{a as x}from"./index-CJCZd66Q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSABc4xd.js";import"./index-fY_AC5UW.js";import"./index-OHXFAFxk.js";import"./index-DC8mK9Mf.js";import"./index-ByI6r3vR.js";import"./useToggle-CC2-RfgH.js";import"./check-CyPsDhxo.js";import"./index-ow5583xY.js";import"./index-DAFWjIOn.js";import"./index-8kdF_FHp.js";import"./index-8Qz30Rrf.js";import"./index-Dw632UUr.js";import"./Combination-9YEPRmfJ.js";const h=t=>n.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("g",null,n.createElement("path",{d:"M9.16663 12.5H10.8333V14.1667H9.16663V12.5ZM9.16663 5.83335H10.8333V10.8334H9.16663V5.83335ZM9.99163 1.66669C5.39163 1.66669 1.66663 5.40002 1.66663 10C1.66663 14.6 5.39163 18.3334 9.99163 18.3334C14.6 18.3334 18.3333 14.6 18.3333 10C18.3333 5.40002 14.6 1.66669 9.99163 1.66669ZM9.99996 16.6667C6.31663 16.6667 3.33329 13.6834 3.33329 10C3.33329 6.31669 6.31663 3.33335 9.99996 3.33335C13.6833 3.33335 16.6666 6.31669 16.6666 10C16.6666 13.6834 13.6833 16.6667 9.99996 16.6667Z",fill:"currentColor"})));var C="AlertDialog",[re,He]=L(C,[w]),o=w(),D=t=>{const{__scopeAlertDialog:r,...a}=t,s=o(r);return e.jsx(z,{...s,...a,modal:!0})};D.displayName=C;var se="AlertDialogTrigger",A=n.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...s}=t,i=o(a);return e.jsx(ae,{...i,...s,ref:r})});A.displayName=se;var ie="AlertDialogPortal",j=t=>{const{__scopeAlertDialog:r,...a}=t,s=o(r);return e.jsx(K,{...s,...a})};j.displayName=ie;var ne="AlertDialogOverlay",T=n.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...s}=t,i=o(a);return e.jsx(J,{...i,...s,ref:r})});T.displayName=ne;var d="AlertDialogContent",[oe,le]=re(d),ce=Z("AlertDialogContent"),k=n.forwardRef((t,r)=>{const{__scopeAlertDialog:a,children:s,...i}=t,l=o(a),m=n.useRef(null),f=y(r,m),u=n.useRef(null);return e.jsx(Q,{contentName:d,titleName:P,docsSlug:"alert-dialog",children:e.jsx(oe,{scope:a,cancelRef:u,children:e.jsxs(X,{role:"alertdialog",...l,...i,ref:f,onOpenAutoFocus:U(i.onOpenAutoFocus,c=>{c.preventDefault(),u.current?.focus({preventScroll:!0})}),onPointerDownOutside:c=>c.preventDefault(),onInteractOutside:c=>c.preventDefault(),children:[e.jsx(ce,{children:s}),e.jsx(de,{contentRef:m})]})})})});k.displayName=d;var P="AlertDialogTitle",_=n.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...s}=t,i=o(a);return e.jsx(ee,{...i,...s,ref:r})});_.displayName=P;var O="AlertDialogDescription",R=n.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...s}=t,i=o(a);return e.jsx(te,{...i,...s,ref:r})});R.displayName=O;var me="AlertDialogAction",E=n.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...s}=t,i=o(a);return e.jsx(b,{...i,...s,ref:r})});E.displayName=me;var S="AlertDialogCancel",q=n.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...s}=t,{cancelRef:i}=le(S,a),l=o(a),m=y(r,i);return e.jsx(b,{...l,...s,ref:m})});q.displayName=S;var de=({contentRef:t})=>{const r=`\`${d}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${d}\` by passing a \`${O}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${d}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return n.useEffect(()=>{document.getElementById(t.current?.getAttribute("aria-describedby"))||console.warn(r)},[r,t]),null},pe=D,ue=A,ge=j,xe=T,fe=k,he=E,ve=q,Ne=_,ye=R;const I=({"data-theme":t,className:r,text:a,onOpen:s})=>e.jsx(ue,{asChild:!0,children:e.jsx(v,{type:"button","data-theme":t,className:x(r),onClick:s,children:a})});I.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTrigger",props:{"data-theme":{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'light'
| 'kubefirst-dark'
| 'dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'light'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'dark'"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""}}};const we=({onConfirm:t})=>{const[r,a]=n.useState(!1),s=n.useCallback(()=>a(!0),[]),i=n.useCallback(()=>a(!1),[]),l=n.useCallback(()=>{t?.(),a(!1)},[t]);return{isOpen:r,handleCancel:i,handleConfirm:l,handleOpen:s}},p=({buttonCancel:{className:t,text:r="Cancel",...a}={},buttonConfirm:{className:s,text:i="OK",...l}={},buttonTriggerClassName:m,buttonTriggerText:f,description:u,showCancelButton:c=!0,theme:N,title:M,wrapperClassName:B,onConfirm:W,...V})=>{const{isOpen:$,handleCancel:Y,handleConfirm:G,handleOpen:H}=we({onConfirm:W});return e.jsxs(pe,{open:$,...V,children:[e.jsx(I,{className:m,text:f,"data-theme":N,onOpen:H}),e.jsxs(ge,{children:[e.jsx(xe,{className:"bg-black opacity-70 inset-0 fixed animate-in fade-in-0"}),e.jsxs(fe,{"data-theme":N,className:x("bg-white rounded-md fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 flex flex-col gap-8 p-8 animate-in fade-in-0 zoom-in-85",B),children:[e.jsx(Ne,{className:"text-base text-slate-700 font-semibold",children:M}),e.jsx(ye,{className:"text-sm text-slate-800",children:u}),e.jsxs("div",{className:"flex flex-row gap-5 justify-end",children:[c&&e.jsx(ve,{asChild:!0,children:e.jsx(v,{type:"button",variant:"secondary",className:x(t),onClick:Y,...a,children:r})}),e.jsx(he,{asChild:!0,children:e.jsx(v,{type:"button",variant:"primary",className:x(s),onClick:G,...l,children:i})})]})]})]})]})};p.__docgenInfo={description:"",methods:[],displayName:"AlertDialog",props:{buttonCancel:{required:!1,tsType:{name:"intersection",raw:`Partial<ButtonProps> & {
  className?: string;
  text?: string;
}`,elements:[{name:"Partial",elements:[{name:"ButtonProps"}],raw:"Partial<ButtonProps>"},{name:"signature",type:"object",raw:`{
  className?: string;
  text?: string;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"text",value:{name:"string",required:!1}}]}}]},description:"",defaultValue:{value:"{}",computed:!1}},buttonConfirm:{required:!1,tsType:{name:"intersection",raw:`Partial<ButtonProps> & {
  className?: string;
  text?: string;
}`,elements:[{name:"Partial",elements:[{name:"ButtonProps"}],raw:"Partial<ButtonProps>"},{name:"signature",type:"object",raw:`{
  className?: string;
  text?: string;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"text",value:{name:"string",required:!1}}]}}]},description:"",defaultValue:{value:"{}",computed:!1}},buttonTriggerText:{required:!1,tsType:{name:"string"},description:""},buttonTriggerClassName:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},showCancelButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'light'
| 'kubefirst-dark'
| 'dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'light'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'dark'"},{name:"undefined"}]},description:""},title:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["PropsWithChildren","AlertDialogPrimitiveProps"]};const Fe={title:"In Review/AlertDialog",component:p},g={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-[350px]",children:e.jsx(p,{buttonTriggerText:"Destroy machine",title:e.jsxs("span",{className:"flex flex-row gap-4 items-center font-semibold",children:[e.jsx(h,{className:"text-kubefirst-primary w-6 h-6"})," Delete image?"]}),description:e.jsx("div",{className:"text-sm text-slate-800 pl-9",children:e.jsx("p",{className:"mb-4",children:"Are you sure you want to delete image? Once deleted the image cannot be recovered."})}),wrapperClassName:"max-w-[500px] gap-4",buttonConfirm:{text:"Yes, delete"}})}),e.jsx("div",{className:"my-3"}),e.jsx("div",{className:"w-[350px]",children:e.jsx(p,{buttonTriggerText:"Destroy machine",theme:"light",title:e.jsxs("span",{className:"flex flex-row gap-4 items-center font-semibold",children:[e.jsx(h,{className:"text-red-700 w-6 h-6"})," Delete image?"]}),description:e.jsx("div",{className:"text-sm text-slate-800 pl-9",children:e.jsx("p",{className:"mb-4",children:"Are you sure you want to delete image? Once deleted the image cannot be recovered."})}),wrapperClassName:"max-w-[500px] gap-4",buttonConfirm:{text:"Yes, delete",variant:"danger"}})}),e.jsx("div",{className:"my-3"}),e.jsx("div",{className:"w-[350px]",children:e.jsx(p,{buttonTriggerText:"Destroy",theme:"light",title:e.jsxs("span",{className:"flex flex-row gap-4 items-center font-semibold",children:[e.jsx(h,{className:"text-civo-primary w-6 h-6"})," Upload will take a few minutes..."]}),description:e.jsxs("div",{className:"text-sm text-slate-800 pl-9",children:[e.jsx("p",{className:"mb-4",children:"Uploading an image may take up to a few minutes depending on image size and connection speed. We'll let you know when the import is complete."}),e.jsx(F,{defaultChecked:!0,label:"This is a checkbox with civo colors"})]}),showCancelButton:!1,wrapperClassName:"max-w-[500px] gap-4",buttonConfirm:{text:"Got it!"}})})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <div className="w-[350px]">
        <AlertDialogComponent buttonTriggerText="Destroy machine" title={<span className="flex flex-row gap-4 items-center font-semibold">
              <WarningIcon className="text-kubefirst-primary w-6 h-6" /> Delete
              image?
            </span>} description={<div className="text-sm text-slate-800 pl-9">
              <p className="mb-4">
                Are you sure you want to delete image? Once deleted the image
                cannot be recovered.
              </p>
            </div>} wrapperClassName="max-w-[500px] gap-4" buttonConfirm={{
        text: 'Yes, delete'
      }} />
      </div>

      <div className="my-3" />
      <div className="w-[350px]">
        <AlertDialogComponent buttonTriggerText="Destroy machine" theme="light" title={<span className="flex flex-row gap-4 items-center font-semibold">
              <WarningIcon className="text-red-700 w-6 h-6" /> Delete image?
            </span>} description={<div className="text-sm text-slate-800 pl-9">
              <p className="mb-4">
                Are you sure you want to delete image? Once deleted the image
                cannot be recovered.
              </p>
            </div>} wrapperClassName="max-w-[500px] gap-4" buttonConfirm={{
        text: 'Yes, delete',
        variant: 'danger'
      }} />
      </div>

      <div className="my-3" />

      <div className="w-[350px]">
        <AlertDialogComponent buttonTriggerText="Destroy" theme="light" title={<span className="flex flex-row gap-4 items-center font-semibold">
              <WarningIcon className="text-civo-primary w-6 h-6" /> Upload will
              take a few minutes...
            </span>} description={<div className="text-sm text-slate-800 pl-9">
              <p className="mb-4">
                Uploading an image may take up to a few minutes depending on
                image size and connection speed. We'll let you know when the
                import is complete.
              </p>

              <Checkbox defaultChecked label="This is a checkbox with civo colors" />
            </div>} showCancelButton={false} wrapperClassName="max-w-[500px] gap-4" buttonConfirm={{
        text: 'Got it!'
      }} />
      </div>
    </>
} satisfies Story`,...g.parameters?.docs?.source}}};const Le=["AlertDialog"];export{g as AlertDialog,Le as __namedExportsOrder,Fe as default};
