import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-D4eurkNF.js";import{C as Z}from"./Checkbox-DrDHGA74.js";import{c as z,b as K}from"./index-BqFL9TN3.js";import{u as C,a as J}from"./index-DUfHYozX.js";import{c as D,R as Q,P as X,O as ee,W as te,C as ae,T as re,D as se,a as A,b as ne}from"./index-BBxghtXU.js";import{B as y}from"./Button-CmW-1P1p.js";import{a as f}from"./index-Cr-WShRT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DnrPPNVF.js";import"./index-DuZM0NEq.js";import"./index-BL4YB7VF.js";import"./index-BCQQQiaW.js";import"./index-TDqQY4_o.js";import"./useToggle-D-1Zefd9.js";import"./check-U1MSqhsI.js";import"./index-be20sKsB.js";import"./index-Cl0KiJP4.js";import"./index-Dn_tDej7.js";import"./index-Ds7eFSuw.js";import"./Combination-DNYie1UN.js";const h=t=>o.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("g",null,o.createElement("path",{d:"M9.16663 12.5H10.8333V14.1667H9.16663V12.5ZM9.16663 5.83335H10.8333V10.8334H9.16663V5.83335ZM9.99163 1.66669C5.39163 1.66669 1.66663 5.40002 1.66663 10C1.66663 14.6 5.39163 18.3334 9.99163 18.3334C14.6 18.3334 18.3333 14.6 18.3333 10C18.3333 5.40002 14.6 1.66669 9.99163 1.66669ZM9.99996 16.6667C6.31663 16.6667 3.33329 13.6834 3.33329 10C3.33329 6.31669 6.31663 3.33335 9.99996 3.33335C13.6833 3.33335 16.6666 6.31669 16.6666 10C16.6666 13.6834 13.6833 16.6667 9.99996 16.6667Z",fill:"currentColor"})));var j="AlertDialog",[oe,Le]=z(j,[D]),i=D(),T=t=>{const{__scopeAlertDialog:r,...a}=t,s=i(r);return e.jsx(Q,{...s,...a,modal:!0})};T.displayName=j;var ie="AlertDialogTrigger",k=o.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...s}=t,n=i(a);return e.jsx(ne,{...n,...s,ref:r})});k.displayName=ie;var le="AlertDialogPortal",P=t=>{const{__scopeAlertDialog:r,...a}=t,s=i(r);return e.jsx(X,{...s,...a})};P.displayName=le;var ce="AlertDialogOverlay",_=o.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...s}=t,n=i(a);return e.jsx(ee,{...n,...s,ref:r})});_.displayName=ce;var d="AlertDialogContent",[me,de]=oe(d),pe=J("AlertDialogContent"),O=o.forwardRef((t,r)=>{const{__scopeAlertDialog:a,children:s,...n}=t,l=i(a),m=o.useRef(null),v=C(r,m),g=o.useRef(null);return e.jsx(te,{contentName:d,titleName:R,docsSlug:"alert-dialog",children:e.jsx(me,{scope:a,cancelRef:g,children:e.jsxs(ae,{role:"alertdialog",...l,...n,ref:v,onOpenAutoFocus:K(n.onOpenAutoFocus,c=>{var p;c.preventDefault(),(p=g.current)==null||p.focus({preventScroll:!0})}),onPointerDownOutside:c=>c.preventDefault(),onInteractOutside:c=>c.preventDefault(),children:[e.jsx(pe,{children:s}),e.jsx(ge,{contentRef:m})]})})})});O.displayName=d;var R="AlertDialogTitle",E=o.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...s}=t,n=i(a);return e.jsx(re,{...n,...s,ref:r})});E.displayName=R;var S="AlertDialogDescription",q=o.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...s}=t,n=i(a);return e.jsx(se,{...n,...s,ref:r})});q.displayName=S;var ue="AlertDialogAction",I=o.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...s}=t,n=i(a);return e.jsx(A,{...n,...s,ref:r})});I.displayName=ue;var M="AlertDialogCancel",B=o.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...s}=t,{cancelRef:n}=de(M,a),l=i(a),m=C(r,n);return e.jsx(A,{...l,...s,ref:m})});B.displayName=M;var ge=({contentRef:t})=>{const r=`\`${d}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${d}\` by passing a \`${S}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${d}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return o.useEffect(()=>{var s;document.getElementById((s=t.current)==null?void 0:s.getAttribute("aria-describedby"))||console.warn(r)},[r,t]),null},xe=T,fe=k,ve=P,he=_,ye=O,Ne=I,we=B,be=E,Ce=q;const W=({"data-theme":t,className:r,text:a,onOpen:s})=>e.jsx(fe,{asChild:!0,children:e.jsx(y,{type:"button","data-theme":t,className:f(r),onClick:s,children:a})});W.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTrigger",props:{"data-theme":{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'colony'
| 'civo'
| 'kubefirst-dark'
| 'colony-dark'
| 'civo-dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'colony'"},{name:"literal",value:"'civo'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'colony-dark'"},{name:"literal",value:"'civo-dark'"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""}}};const De=({onConfirm:t})=>{const[r,a]=o.useState(!1),s=o.useCallback(()=>a(!0),[]),n=o.useCallback(()=>a(!1),[]),l=o.useCallback(()=>{t==null||t(),a(!1)},[t]);return{isOpen:r,handleCancel:n,handleConfirm:l,handleOpen:s}},u=({buttonCancel:{className:t,text:r="Cancel",...a}={},buttonConfirm:{className:s,text:n="OK",...l}={},buttonTriggerClassName:m,buttonTriggerText:v,description:g,showCancelButton:c=!0,theme:p,title:V,wrapperClassName:$,onConfirm:Y,...G})=>{const{isOpen:H,handleCancel:F,handleConfirm:L,handleOpen:U}=De({onConfirm:Y});return e.jsxs(xe,{open:H,...G,children:[e.jsx(W,{className:m,text:v,"data-theme":p,onOpen:U}),e.jsxs(ve,{children:[e.jsx(he,{className:"bg-black opacity-70 inset-0 fixed animate-in fade-in-0"}),e.jsxs(ye,{"data-theme":p,className:f("bg-white rounded-md fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 flex flex-col gap-8 p-8 animate-in fade-in-0 zoom-in-85",$),children:[e.jsx(be,{className:"text-base text-slate-700 font-semibold",children:V}),e.jsx(Ce,{className:"text-sm text-slate-800",children:g}),e.jsxs("div",{className:"flex flex-row gap-5 justify-end",children:[c&&e.jsx(we,{asChild:!0,children:e.jsx(y,{type:"button",variant:"secondary",className:f(t),onClick:F,...a,children:r})}),e.jsx(Ne,{asChild:!0,children:e.jsx(y,{type:"button",variant:"primary",className:f(s),onClick:L,...l,children:n})})]})]})]})]})};u.__docgenInfo={description:"",methods:[],displayName:"AlertDialog",props:{buttonCancel:{required:!1,tsType:{name:"intersection",raw:`Partial<ButtonProps> & {
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
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'colony'"},{name:"literal",value:"'civo'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'colony-dark'"},{name:"literal",value:"'civo-dark'"},{name:"undefined"}]},description:""},title:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["PropsWithChildren","AlertDialogPrimitiveProps"]};const Ue={title:"In Review/AlertDialog",component:u},x={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-[350px]",children:e.jsx(u,{buttonTriggerText:"Destroy machine",title:e.jsxs("span",{className:"flex flex-row gap-4 items-center font-semibold",children:[e.jsx(h,{className:"text-kubefirst-primary w-6 h-6"})," Delete image?"]}),description:e.jsx("div",{className:"text-sm text-slate-800 pl-9",children:e.jsx("p",{className:"mb-4",children:"Are you sure you want to delete image? Once deleted the image cannot be recovered."})}),wrapperClassName:"max-w-[500px] gap-4",buttonConfirm:{text:"Yes, delete"}})}),e.jsx("div",{className:"my-3"}),e.jsx("div",{className:"w-[350px]",children:e.jsx(u,{buttonTriggerText:"Destroy machine",theme:"civo",title:e.jsxs("span",{className:"flex flex-row gap-4 items-center font-semibold",children:[e.jsx(h,{className:"text-red-700 w-6 h-6"})," Delete image?"]}),description:e.jsx("div",{className:"text-sm text-slate-800 pl-9",children:e.jsx("p",{className:"mb-4",children:"Are you sure you want to delete image? Once deleted the image cannot be recovered."})}),wrapperClassName:"max-w-[500px] gap-4",buttonConfirm:{text:"Yes, delete",variant:"danger"}})}),e.jsx("div",{className:"my-3"}),e.jsx("div",{className:"w-[350px]",children:e.jsx(u,{buttonTriggerText:"Destroy",theme:"civo",title:e.jsxs("span",{className:"flex flex-row gap-4 items-center font-semibold",children:[e.jsx(h,{className:"text-civo-primary w-6 h-6"})," Upload will take a few minutes..."]}),description:e.jsxs("div",{className:"text-sm text-slate-800 pl-9",children:[e.jsx("p",{className:"mb-4",children:"Uploading an image may take up to a few minutes depending on image size and connection speed. We'll let you know when the import is complete."}),e.jsx(Z,{defaultChecked:!0,label:"This is a checkbox with colony colors"})]}),showCancelButton:!1,wrapperClassName:"max-w-[500px] gap-4",buttonConfirm:{text:"Got it!"}})})]})};var N,w,b;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
} satisfies Story`,...(b=(w=x.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const Ze=["AlertDialog"];export{x as AlertDialog,Ze as __namedExportsOrder,Ue as default};
