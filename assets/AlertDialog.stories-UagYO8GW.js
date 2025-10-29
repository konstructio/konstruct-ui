import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-O5lPoKbF.js";import{C as F}from"./Checkbox-CQCvdRwb.js";import{c as L,b as U}from"./index-CHvxO7Yr.js";import{u as y,a as Z}from"./index-DA835mMW.js";import{c as w,R as z,P as K,O as J,W as Q,C as X,T as ee,D as te,a as C,b as ae}from"./index-BlxcWR02.js";import{B as v}from"./Button-Dz8KtsDW.js";import{a as x}from"./index-CJCZd66Q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C7njtB83.js";import"./index-mYI2w_Xz.js";import"./index-DCTgqHuv.js";import"./index-CjcJmT8Z.js";import"./index-CL7kMfgf.js";import"./useToggle-CT0aNPAq.js";import"./check-txTRB8cJ.js";import"./index-DJ4QSJ0y.js";import"./index-P-GVuQX_.js";import"./index-DDtmOLzv.js";import"./index-btsaqUhh.js";import"./index-Clyk1Phd.js";import"./Combination-CfjVQH46.js";const h=t=>i.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",null,i.createElement("path",{d:"M9.16663 12.5H10.8333V14.1667H9.16663V12.5ZM9.16663 5.83335H10.8333V10.8334H9.16663V5.83335ZM9.99163 1.66669C5.39163 1.66669 1.66663 5.40002 1.66663 10C1.66663 14.6 5.39163 18.3334 9.99163 18.3334C14.6 18.3334 18.3333 14.6 18.3333 10C18.3333 5.40002 14.6 1.66669 9.99163 1.66669ZM9.99996 16.6667C6.31663 16.6667 3.33329 13.6834 3.33329 10C3.33329 6.31669 6.31663 3.33335 9.99996 3.33335C13.6833 3.33335 16.6666 6.31669 16.6666 10C16.6666 13.6834 13.6833 16.6667 9.99996 16.6667Z",fill:"currentColor"})));var b="AlertDialog",[se,He]=L(b,[w]),n=w(),D=t=>{const{__scopeAlertDialog:s,...a}=t,r=n(s);return e.jsx(z,{...r,...a,modal:!0})};D.displayName=b;var re="AlertDialogTrigger",A=i.forwardRef((t,s)=>{const{__scopeAlertDialog:a,...r}=t,o=n(a);return e.jsx(ae,{...o,...r,ref:s})});A.displayName=re;var oe="AlertDialogPortal",j=t=>{const{__scopeAlertDialog:s,...a}=t,r=n(s);return e.jsx(K,{...r,...a})};j.displayName=oe;var ie="AlertDialogOverlay",T=i.forwardRef((t,s)=>{const{__scopeAlertDialog:a,...r}=t,o=n(a);return e.jsx(J,{...o,...r,ref:s})});T.displayName=ie;var p="AlertDialogContent",[ne,le]=se(p),ce=Z("AlertDialogContent"),P=i.forwardRef((t,s)=>{const{__scopeAlertDialog:a,children:r,...o}=t,l=n(a),m=i.useRef(null),f=y(s,m),g=i.useRef(null);return e.jsx(Q,{contentName:p,titleName:_,docsSlug:"alert-dialog",children:e.jsx(ne,{scope:a,cancelRef:g,children:e.jsxs(X,{role:"alertdialog",...l,...o,ref:f,onOpenAutoFocus:U(o.onOpenAutoFocus,c=>{c.preventDefault(),g.current?.focus({preventScroll:!0})}),onPointerDownOutside:c=>c.preventDefault(),onInteractOutside:c=>c.preventDefault(),children:[e.jsx(ce,{children:r}),e.jsx(pe,{contentRef:m})]})})})});P.displayName=p;var _="AlertDialogTitle",O=i.forwardRef((t,s)=>{const{__scopeAlertDialog:a,...r}=t,o=n(a);return e.jsx(ee,{...o,...r,ref:s})});O.displayName=_;var R="AlertDialogDescription",E=i.forwardRef((t,s)=>{const{__scopeAlertDialog:a,...r}=t,o=n(a);return e.jsx(te,{...o,...r,ref:s})});E.displayName=R;var me="AlertDialogAction",k=i.forwardRef((t,s)=>{const{__scopeAlertDialog:a,...r}=t,o=n(a);return e.jsx(C,{...o,...r,ref:s})});k.displayName=me;var S="AlertDialogCancel",q=i.forwardRef((t,s)=>{const{__scopeAlertDialog:a,...r}=t,{cancelRef:o}=le(S,a),l=n(a),m=y(s,o);return e.jsx(C,{...l,...r,ref:m})});q.displayName=S;var pe=({contentRef:t})=>{const s=`\`${p}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${p}\` by passing a \`${R}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${p}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return i.useEffect(()=>{document.getElementById(t.current?.getAttribute("aria-describedby"))||console.warn(s)},[s,t]),null},de=D,ge=A,ue=j,xe=T,fe=P,he=k,ve=q,Ne=O,ye=E;const I=({"data-theme":t,className:s,text:a,onOpen:r})=>e.jsx(ge,{asChild:!0,children:e.jsx(v,{type:"button","data-theme":t,className:x(s),onClick:r,children:a})});I.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTrigger",props:{"data-theme":{required:!1,tsType:{name:"Theme"},description:""},className:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""}}};const we=({onConfirm:t})=>{const[s,a]=i.useState(!1),r=i.useCallback(()=>a(!0),[]),o=i.useCallback(()=>a(!1),[]),l=i.useCallback(()=>{t?.(),a(!1)},[t]);return{isOpen:s,handleCancel:o,handleConfirm:l,handleOpen:r}},d=({buttonCancel:{className:t,text:s="Cancel",...a}={},buttonConfirm:{className:r,text:o="OK",...l}={},buttonTriggerClassName:m,buttonTriggerText:f,description:g,showCancelButton:c=!0,theme:N,title:M,wrapperClassName:B,onConfirm:W,...V})=>{const{isOpen:$,handleCancel:Y,handleConfirm:G,handleOpen:H}=we({onConfirm:W});return e.jsxs(de,{open:$,...V,children:[e.jsx(I,{className:m,text:f,"data-theme":N,onOpen:H}),e.jsxs(ue,{children:[e.jsx(xe,{className:"bg-black opacity-70 inset-0 fixed animate-in fade-in-0"}),e.jsxs(fe,{"data-theme":N,className:x("bg-white rounded-md fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 flex flex-col gap-8 p-8 animate-in fade-in-0 zoom-in-85",B),children:[e.jsx(Ne,{className:"text-base text-slate-700 font-semibold",children:M}),e.jsx(ye,{className:"text-sm text-slate-800",children:g}),e.jsxs("div",{className:"flex flex-row gap-5 justify-end",children:[c&&e.jsx(ve,{asChild:!0,children:e.jsx(v,{type:"button",variant:"secondary",className:x(t),onClick:Y,...a,children:s})}),e.jsx(he,{asChild:!0,children:e.jsx(v,{type:"button",variant:"primary",className:x(r),onClick:G,...l,children:o})})]})]})]})]})};d.__docgenInfo={description:"",methods:[],displayName:"AlertDialog",props:{buttonCancel:{required:!1,tsType:{name:"intersection",raw:`Partial<ButtonProps> & {
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
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"text",value:{name:"string",required:!1}}]}}]},description:"",defaultValue:{value:"{}",computed:!1}},buttonTriggerText:{required:!1,tsType:{name:"string"},description:""},buttonTriggerClassName:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},showCancelButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},theme:{required:!1,tsType:{name:"Theme"},description:""},title:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["PropsWithChildren","AlertDialogPrimitiveProps"]};const Fe={title:"In Review/AlertDialog",component:d},u={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-[350px]",children:e.jsx(d,{buttonTriggerText:"Destroy machine",title:e.jsxs("span",{className:"flex flex-row gap-4 items-center font-semibold",children:[e.jsx(h,{className:"text-kubefirst-primary w-6 h-6"})," Delete image?"]}),description:e.jsx("div",{className:"text-sm text-slate-800 pl-9",children:e.jsx("p",{className:"mb-4",children:"Are you sure you want to delete image? Once deleted the image cannot be recovered."})}),wrapperClassName:"max-w-[500px] gap-4",buttonConfirm:{text:"Yes, delete"}})}),e.jsx("div",{className:"my-3"}),e.jsx("div",{className:"w-[350px]",children:e.jsx(d,{buttonTriggerText:"Destroy machine",theme:"light",title:e.jsxs("span",{className:"flex flex-row gap-4 items-center font-semibold",children:[e.jsx(h,{className:"text-red-700 w-6 h-6"})," Delete image?"]}),description:e.jsx("div",{className:"text-sm text-slate-800 pl-9",children:e.jsx("p",{className:"mb-4",children:"Are you sure you want to delete image? Once deleted the image cannot be recovered."})}),wrapperClassName:"max-w-[500px] gap-4",buttonConfirm:{text:"Yes, delete",variant:"danger"}})}),e.jsx("div",{className:"my-3"}),e.jsx("div",{className:"w-[350px]",children:e.jsx(d,{buttonTriggerText:"Destroy",theme:"light",title:e.jsxs("span",{className:"flex flex-row gap-4 items-center font-semibold",children:[e.jsx(h,{className:"text-civo-primary w-6 h-6"})," Upload will take a few minutes..."]}),description:e.jsxs("div",{className:"text-sm text-slate-800 pl-9",children:[e.jsx("p",{className:"mb-4",children:"Uploading an image may take up to a few minutes depending on image size and connection speed. We'll let you know when the import is complete."}),e.jsx(F,{defaultChecked:!0,label:"This is a checkbox with civo colors"})]}),showCancelButton:!1,wrapperClassName:"max-w-[500px] gap-4",buttonConfirm:{text:"Got it!"}})})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...u.parameters?.docs?.source}}};const Le=["AlertDialog"];export{u as AlertDialog,Le as __namedExportsOrder,Fe as default};
