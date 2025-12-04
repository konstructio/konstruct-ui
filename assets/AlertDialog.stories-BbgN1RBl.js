import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-CPAdfmkW.js";import{C as G}from"./Checkbox-CSnZz5o6.js";import{c as H,b as U}from"./index-MEYe9NrG.js";import{u as y}from"./index-BVXJ1bDm.js";import{c as w,R as Z,P as z,O as K,W as J,C as Q,T as X,D as ee,a as b,b as te}from"./index-BfmDmoKW.js";import{B as v}from"./Button-ByC-SVYm.js";import{a as x}from"./index-Bn42e07n.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDXkd6Ph.js";import"./index-Dx3NjfAg.js";import"./index-CuC4zjgn.js";import"./useToggle-CH2fS-AW.js";import"./check-Cl4QDYT1.js";import"./index-csDfGvUF.js";import"./index-BoiKu0vs.js";import"./index-CjgPh0w-.js";import"./index-qSXcVPj0.js";import"./index-BcrDhPBA.js";import"./index-sEpiJ44R.js";import"./index-V7d4ibIi.js";import"./Combination-BTExSCyR.js";import"./index-Cqu8WUbq.js";const h=t=>i.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",null,i.createElement("path",{d:"M9.16663 12.5H10.8333V14.1667H9.16663V12.5ZM9.16663 5.83335H10.8333V10.8334H9.16663V5.83335ZM9.99163 1.66669C5.39163 1.66669 1.66663 5.40002 1.66663 10C1.66663 14.6 5.39163 18.3334 9.99163 18.3334C14.6 18.3334 18.3333 14.6 18.3333 10C18.3333 5.40002 14.6 1.66669 9.99163 1.66669ZM9.99996 16.6667C6.31663 16.6667 3.33329 13.6834 3.33329 10C3.33329 6.31669 6.31663 3.33335 9.99996 3.33335C13.6833 3.33335 16.6666 6.31669 16.6666 10C16.6666 13.6834 13.6833 16.6667 9.99996 16.6667Z",fill:"currentColor"})));var ae=Symbol("radix.slottable");function re(t){const a=({children:r})=>e.jsx(e.Fragment,{children:r});return a.displayName=`${t}.Slottable`,a.__radixId=ae,a}var C="AlertDialog",[se,He]=H(C,[w]),n=w(),D=t=>{const{__scopeAlertDialog:a,...r}=t,s=n(a);return e.jsx(Z,{...s,...r,modal:!0})};D.displayName=C;var oe="AlertDialogTrigger",A=i.forwardRef((t,a)=>{const{__scopeAlertDialog:r,...s}=t,o=n(r);return e.jsx(te,{...o,...s,ref:a})});A.displayName=oe;var ie="AlertDialogPortal",T=t=>{const{__scopeAlertDialog:a,...r}=t,s=n(a);return e.jsx(z,{...s,...r})};T.displayName=ie;var ne="AlertDialogOverlay",j=i.forwardRef((t,a)=>{const{__scopeAlertDialog:r,...s}=t,o=n(r);return e.jsx(K,{...o,...s,ref:a})});j.displayName=ne;var p="AlertDialogContent",[le,ce]=se(p),me=re("AlertDialogContent"),_=i.forwardRef((t,a)=>{const{__scopeAlertDialog:r,children:s,...o}=t,l=n(r),m=i.useRef(null),f=y(a,m),g=i.useRef(null);return e.jsx(J,{contentName:p,titleName:P,docsSlug:"alert-dialog",children:e.jsx(le,{scope:r,cancelRef:g,children:e.jsxs(Q,{role:"alertdialog",...l,...o,ref:f,onOpenAutoFocus:U(o.onOpenAutoFocus,c=>{c.preventDefault(),g.current?.focus({preventScroll:!0})}),onPointerDownOutside:c=>c.preventDefault(),onInteractOutside:c=>c.preventDefault(),children:[e.jsx(me,{children:s}),e.jsx(de,{contentRef:m})]})})})});_.displayName=p;var P="AlertDialogTitle",E=i.forwardRef((t,a)=>{const{__scopeAlertDialog:r,...s}=t,o=n(r);return e.jsx(X,{...o,...s,ref:a})});E.displayName=P;var O="AlertDialogDescription",R=i.forwardRef((t,a)=>{const{__scopeAlertDialog:r,...s}=t,o=n(r);return e.jsx(ee,{...o,...s,ref:a})});R.displayName=O;var pe="AlertDialogAction",S=i.forwardRef((t,a)=>{const{__scopeAlertDialog:r,...s}=t,o=n(r);return e.jsx(b,{...o,...s,ref:a})});S.displayName=pe;var k="AlertDialogCancel",q=i.forwardRef((t,a)=>{const{__scopeAlertDialog:r,...s}=t,{cancelRef:o}=ce(k,r),l=n(r),m=y(a,o);return e.jsx(b,{...l,...s,ref:m})});q.displayName=k;var de=({contentRef:t})=>{const a=`\`${p}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${p}\` by passing a \`${O}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${p}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return i.useEffect(()=>{document.getElementById(t.current?.getAttribute("aria-describedby"))||console.warn(a)},[a,t]),null},ge=D,ue=A,xe=T,fe=j,he=_,ve=S,Ne=q,ye=E,we=R;const I=({"data-theme":t,className:a,text:r,onOpen:s})=>e.jsx(ue,{asChild:!0,children:e.jsx(v,{type:"button","data-theme":t,className:x(a),onClick:s,children:r})});I.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTrigger",props:{"data-theme":{required:!1,tsType:{name:"Theme"},description:""},className:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""}}};const be=({onConfirm:t})=>{const[a,r]=i.useState(!1),s=i.useCallback(()=>r(!0),[]),o=i.useCallback(()=>r(!1),[]),l=i.useCallback(()=>{t?.(),r(!1)},[t]);return{isOpen:a,handleCancel:o,handleConfirm:l,handleOpen:s}},d=({buttonCancel:{className:t,text:a="Cancel",...r}={},buttonConfirm:{className:s,text:o="OK",...l}={},buttonTriggerClassName:m,buttonTriggerText:f,description:g,showCancelButton:c=!0,theme:N,title:B,wrapperClassName:M,onConfirm:W,...V})=>{const{isOpen:$,handleCancel:F,handleConfirm:L,handleOpen:Y}=be({onConfirm:W});return e.jsxs(ge,{open:$,...V,children:[e.jsx(I,{className:m,text:f,"data-theme":N,onOpen:Y}),e.jsxs(xe,{children:[e.jsx(fe,{className:"bg-black opacity-70 inset-0 fixed animate-in fade-in-0"}),e.jsxs(he,{"data-theme":N,className:x("bg-white rounded-md fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 flex flex-col gap-8 p-8 animate-in fade-in-0 zoom-in-85",M),children:[e.jsx(ye,{className:"text-base text-slate-700 font-semibold",children:B}),e.jsx(we,{className:"text-sm text-slate-800",children:g}),e.jsxs("div",{className:"flex flex-row gap-5 justify-end",children:[c&&e.jsx(Ne,{asChild:!0,children:e.jsx(v,{type:"button",variant:"secondary",className:x(t),onClick:F,...r,children:a})}),e.jsx(ve,{asChild:!0,children:e.jsx(v,{type:"button",variant:"primary",className:x(s),onClick:L,...l,children:o})})]})]})]})]})};d.__docgenInfo={description:"",methods:[],displayName:"AlertDialog",props:{buttonCancel:{required:!1,tsType:{name:"intersection",raw:`Partial<ButtonProps> & {
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
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"text",value:{name:"string",required:!1}}]}}]},description:"",defaultValue:{value:"{}",computed:!1}},buttonTriggerText:{required:!1,tsType:{name:"string"},description:""},buttonTriggerClassName:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},showCancelButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},theme:{required:!1,tsType:{name:"Theme"},description:""},title:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["PropsWithChildren","AlertDialogPrimitiveProps"]};const Ue={title:"In Review/AlertDialog",component:d},u={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-[350px]",children:e.jsx(d,{buttonTriggerText:"Destroy machine",title:e.jsxs("span",{className:"flex flex-row gap-4 items-center font-semibold",children:[e.jsx(h,{className:"text-kubefirst-primary w-6 h-6"})," Delete image?"]}),description:e.jsx("div",{className:"text-sm text-slate-800 pl-9",children:e.jsx("p",{className:"mb-4",children:"Are you sure you want to delete image? Once deleted the image cannot be recovered."})}),wrapperClassName:"max-w-[500px] gap-4",buttonConfirm:{text:"Yes, delete"}})}),e.jsx("div",{className:"my-3"}),e.jsx("div",{className:"w-[350px]",children:e.jsx(d,{buttonTriggerText:"Destroy machine",theme:"light",title:e.jsxs("span",{className:"flex flex-row gap-4 items-center font-semibold",children:[e.jsx(h,{className:"text-red-700 w-6 h-6"})," Delete image?"]}),description:e.jsx("div",{className:"text-sm text-slate-800 pl-9",children:e.jsx("p",{className:"mb-4",children:"Are you sure you want to delete image? Once deleted the image cannot be recovered."})}),wrapperClassName:"max-w-[500px] gap-4",buttonConfirm:{text:"Yes, delete",variant:"danger"}})}),e.jsx("div",{className:"my-3"}),e.jsx("div",{className:"w-[350px]",children:e.jsx(d,{buttonTriggerText:"Destroy",theme:"light",title:e.jsxs("span",{className:"flex flex-row gap-4 items-center font-semibold",children:[e.jsx(h,{className:"text-civo-primary w-6 h-6"})," Upload will take a few minutes..."]}),description:e.jsxs("div",{className:"text-sm text-slate-800 pl-9",children:[e.jsx("p",{className:"mb-4",children:"Uploading an image may take up to a few minutes depending on image size and connection speed. We'll let you know when the import is complete."}),e.jsx(G,{defaultChecked:!0,label:"This is a checkbox with civo colors"})]}),showCancelButton:!1,wrapperClassName:"max-w-[500px] gap-4",buttonConfirm:{text:"Got it!"}})})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...u.parameters?.docs?.source}}};const Ze=["AlertDialog"];export{u as AlertDialog,Ze as __namedExportsOrder,Ue as default};
