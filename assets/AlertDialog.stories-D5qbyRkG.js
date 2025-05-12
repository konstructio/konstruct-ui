import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as h}from"./warning-DNnwd2DX.js";import{C as H}from"./Checkbox-BkCLF7qe.js";import{r as i}from"./index-CDlOlYQx.js";import{c as K,b as J}from"./index-C1roXhr_.js";import{u as D,a as Q}from"./index-DZ1mZqx3.js";import{c as A,R as X,P as Z,O as ee,W as te,C as ae,T as re,D as se,a as C,b as ne}from"./index-6MCjp4gJ.js";import{B as y}from"./Button-CVvxyy9j.js";import{a as f}from"./index-DJQVxuCM.js";import"./index-DwzNJtFx.js";import"./index-7gOVJOz6.js";import"./index-Bp4iR40-.js";import"./index-BGZCjPBa.js";import"./index-CA2ozmjx.js";import"./useToggle-BALwLbl6.js";import"./check-DSazg7jv.js";import"./index-_3p-ol44.js";import"./index-Cd1lzb2-.js";import"./index-D2rhkl1L.js";import"./index-BxP5C9qI.js";import"./Combination-CcQGLv6V.js";var j="AlertDialog",[ie,Ve]=K(j,[A]),o=A(),T=t=>{const{__scopeAlertDialog:r,...a}=t,s=o(r);return e.jsx(X,{...s,...a,modal:!0})};T.displayName=j;var oe="AlertDialogTrigger",k=i.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...s}=t,n=o(a);return e.jsx(ne,{...n,...s,ref:r})});k.displayName=oe;var le="AlertDialogPortal",P=t=>{const{__scopeAlertDialog:r,...a}=t,s=o(r);return e.jsx(Z,{...s,...a})};P.displayName=le;var ce="AlertDialogOverlay",_=i.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...s}=t,n=o(a);return e.jsx(ee,{...n,...s,ref:r})});_.displayName=ce;var d="AlertDialogContent",[me,de]=ie(d),pe=Q("AlertDialogContent"),O=i.forwardRef((t,r)=>{const{__scopeAlertDialog:a,children:s,...n}=t,l=o(a),m=i.useRef(null),v=D(r,m),g=i.useRef(null);return e.jsx(te,{contentName:d,titleName:R,docsSlug:"alert-dialog",children:e.jsx(me,{scope:a,cancelRef:g,children:e.jsxs(ae,{role:"alertdialog",...l,...n,ref:v,onOpenAutoFocus:J(n.onOpenAutoFocus,c=>{var p;c.preventDefault(),(p=g.current)==null||p.focus({preventScroll:!0})}),onPointerDownOutside:c=>c.preventDefault(),onInteractOutside:c=>c.preventDefault(),children:[e.jsx(pe,{children:s}),e.jsx(ge,{contentRef:m})]})})})});O.displayName=d;var R="AlertDialogTitle",S=i.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...s}=t,n=o(a);return e.jsx(re,{...n,...s,ref:r})});S.displayName=R;var E="AlertDialogDescription",q=i.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...s}=t,n=o(a);return e.jsx(se,{...n,...s,ref:r})});q.displayName=E;var ue="AlertDialogAction",I=i.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...s}=t,n=o(a);return e.jsx(C,{...n,...s,ref:r})});I.displayName=ue;var B="AlertDialogCancel",M=i.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...s}=t,{cancelRef:n}=de(B,a),l=o(a),m=D(r,n);return e.jsx(C,{...l,...s,ref:m})});M.displayName=B;var ge=({contentRef:t})=>{const r=`\`${d}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${d}\` by passing a \`${E}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${d}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return i.useEffect(()=>{var s;document.getElementById((s=t.current)==null?void 0:s.getAttribute("aria-describedby"))||console.warn(r)},[r,t]),null},xe=T,fe=k,ve=P,he=_,ye=O,Ne=I,be=M,we=S,De=q;const W=({"data-theme":t,className:r,text:a,onOpen:s})=>e.jsx(fe,{asChild:!0,children:e.jsx(y,{type:"button","data-theme":t,className:f(r),onClick:s,children:a})});W.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTrigger",props:{"data-theme":{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'colony'
| 'civo'
| 'kubefirst-dark'
| 'colony-dark'
| 'civo-dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'colony'"},{name:"literal",value:"'civo'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'colony-dark'"},{name:"literal",value:"'civo-dark'"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""}}};const Ae=({onConfirm:t})=>{const[r,a]=i.useState(!1),s=i.useCallback(()=>a(!0),[]),n=i.useCallback(()=>a(!1),[]),l=i.useCallback(()=>{t==null||t(),a(!1)},[t]);return{isOpen:r,handleCancel:n,handleConfirm:l,handleOpen:s}},u=({buttonCancel:{className:t,text:r="Cancel",...a}={},buttonConfirm:{className:s,text:n="OK",...l}={},buttonTriggerClassName:m,buttonTriggerText:v,description:g,showCancelButton:c=!0,theme:p,title:$,wrapperClassName:Y,onConfirm:G,...F})=>{const{isOpen:L,handleCancel:U,handleConfirm:V,handleOpen:z}=Ae({onConfirm:G});return e.jsxs(xe,{open:L,...F,children:[e.jsx(W,{className:m,text:v,"data-theme":p,onOpen:z}),e.jsxs(ve,{children:[e.jsx(he,{className:"bg-black opacity-70 inset-0 fixed animate-in fade-in-0"}),e.jsxs(ye,{"data-theme":p,className:f("bg-white rounded-md fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 flex flex-col gap-8 p-8 animate-in fade-in-0 zoom-in-85",Y),children:[e.jsx(we,{className:"text-base text-slate-700 font-semibold",children:$}),e.jsx(De,{className:"text-sm text-slate-800",children:g}),e.jsxs("div",{className:"flex flex-row gap-5 justify-end",children:[c&&e.jsx(be,{asChild:!0,children:e.jsx(y,{type:"button",variant:"secondary",className:f(t),onClick:U,...a,children:r})}),e.jsx(Ne,{asChild:!0,children:e.jsx(y,{type:"button",variant:"primary",className:f(s),onClick:V,...l,children:n})})]})]})]})]})};u.__docgenInfo={description:"",methods:[],displayName:"AlertDialog",props:{buttonCancel:{required:!1,tsType:{name:"intersection",raw:`Partial<ButtonProps> & {
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
| 'colony'
| 'civo'
| 'kubefirst-dark'
| 'colony-dark'
| 'civo-dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'colony'"},{name:"literal",value:"'civo'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'colony-dark'"},{name:"literal",value:"'civo-dark'"},{name:"undefined"}]},description:""},title:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["PropsWithChildren","AlertDialogPrimitiveProps"]};const ze={title:"In Review/AlertDialog",component:u},x={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-[350px]",children:e.jsx(u,{buttonTriggerText:"Destroy machine",title:e.jsxs("span",{className:"flex flex-row gap-4 items-center font-semibold",children:[e.jsx(h,{className:"text-kubefirst-primary w-6 h-6"})," Delete image?"]}),description:e.jsx("div",{className:"text-sm text-slate-800 pl-9",children:e.jsx("p",{className:"mb-4",children:"Are you sure you want to delete image? Once deleted the image cannot be recovered."})}),wrapperClassName:"max-w-[500px] gap-4",buttonConfirm:{text:"Yes, delete"}})}),e.jsx("div",{className:"my-3"}),e.jsx("div",{className:"w-[350px]",children:e.jsx(u,{buttonTriggerText:"Destroy machine",theme:"civo",title:e.jsxs("span",{className:"flex flex-row gap-4 items-center font-semibold",children:[e.jsx(h,{className:"text-red-700 w-6 h-6"})," Delete image?"]}),description:e.jsx("div",{className:"text-sm text-slate-800 pl-9",children:e.jsx("p",{className:"mb-4",children:"Are you sure you want to delete image? Once deleted the image cannot be recovered."})}),wrapperClassName:"max-w-[500px] gap-4",buttonConfirm:{text:"Yes, delete",variant:"danger"}})}),e.jsx("div",{className:"my-3"}),e.jsx("div",{className:"w-[350px]",children:e.jsx(u,{buttonTriggerText:"Destroy",theme:"civo",title:e.jsxs("span",{className:"flex flex-row gap-4 items-center font-semibold",children:[e.jsx(h,{className:"text-civo-primary w-6 h-6"})," Upload will take a few minutes..."]}),description:e.jsxs("div",{className:"text-sm text-slate-800 pl-9",children:[e.jsx("p",{className:"mb-4",children:"Uploading an image may take up to a few minutes depending on image size and connection speed. We'll let you know when the import is complete."}),e.jsx(H,{defaultChecked:!0,label:"This is a checkbox with colony colors"})]}),showCancelButton:!1,wrapperClassName:"max-w-[500px] gap-4",buttonConfirm:{text:"Got it!"}})})]})};var N,b,w;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
        <AlertDialogComponent buttonTriggerText="Destroy machine" theme="civo" title={<span className="flex flex-row gap-4 items-center font-semibold">
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
        <AlertDialogComponent buttonTriggerText="Destroy" theme="civo" title={<span className="flex flex-row gap-4 items-center font-semibold">
              <WarningIcon className="text-civo-primary w-6 h-6" /> Upload will
              take a few minutes...
            </span>} description={<div className="text-sm text-slate-800 pl-9">
              <p className="mb-4">
                Uploading an image may take up to a few minutes depending on
                image size and connection speed. We'll let you know when the
                import is complete.
              </p>

              <Checkbox defaultChecked label="This is a checkbox with colony colors" />
            </div>} showCancelButton={false} wrapperClassName="max-w-[500px] gap-4" buttonConfirm={{
        text: 'Got it!'
      }} />
      </div>
    </>
} satisfies Story`,...(w=(b=x.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const He=["AlertDialog"];export{x as AlertDialog,He as __namedExportsOrder,ze as default};
