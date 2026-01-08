import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-BGwmaRjd.js";import{C as b}from"./Checkbox-tPhJwbHh.js";import{b as J,c as Q}from"./index-D1nWtdiS.js";import{u as D}from"./index-DSOR8ClC.js";import{c as T,R as X,P as ee,O as te,W as ae,C as se,T as re,D as oe,a as j,b as ie}from"./index-Bf5NruoO.js";import{B as w}from"./Button-B8yaZBj9.js";import{a as f}from"./index-Bn42e07n.js";import{T as C}from"./Typography-DkHtPRyc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-eQTbRXNY.js";import"./index-BY2q3nj6.js";import"./index-R6OPKUfv.js";import"./useToggle-CMA1_lWM.js";import"./check-BHbjVL-Y.js";import"./index-yAXLIQqm.js";import"./index-C4btcfwZ.js";import"./index-Dmsf0UbK.js";import"./index-DzINymAX.js";import"./index-BOW-FjgO.js";import"./index-0MtASGR8.js";import"./index-CPWWge0h.js";import"./Combination-Fu-FRt-7.js";import"./index-DN3W3g5b.js";const p=t=>o.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("g",null,o.createElement("path",{d:"M9.16663 12.5H10.8333V14.1667H9.16663V12.5ZM9.16663 5.83335H10.8333V10.8334H9.16663V5.83335ZM9.99163 1.66669C5.39163 1.66669 1.66663 5.40002 1.66663 10C1.66663 14.6 5.39163 18.3334 9.99163 18.3334C14.6 18.3334 18.3333 14.6 18.3333 10C18.3333 5.40002 14.6 1.66669 9.99163 1.66669ZM9.99996 16.6667C6.31663 16.6667 3.33329 13.6834 3.33329 10C3.33329 6.31669 6.31663 3.33335 9.99996 3.33335C13.6833 3.33335 16.6666 6.31669 16.6666 10C16.6666 13.6834 13.6833 16.6667 9.99996 16.6667Z",fill:"currentColor"})));var ne=Symbol("radix.slottable");function le(t){const a=({children:s})=>e.jsx(e.Fragment,{children:s});return a.displayName=`${t}.Slottable`,a.__radixId=ne,a}var A="AlertDialog",[ce,Qe]=J(A,[T]),l=T(),k=t=>{const{__scopeAlertDialog:a,...s}=t,r=l(a);return e.jsx(X,{...r,...s,modal:!0})};k.displayName=A;var me="AlertDialogTrigger",_=o.forwardRef((t,a)=>{const{__scopeAlertDialog:s,...r}=t,i=l(s);return e.jsx(ie,{...i,...r,ref:a})});_.displayName=me;var de="AlertDialogPortal",P=t=>{const{__scopeAlertDialog:a,...s}=t,r=l(a);return e.jsx(ee,{...r,...s})};P.displayName=de;var pe="AlertDialogOverlay",O=o.forwardRef((t,a)=>{const{__scopeAlertDialog:s,...r}=t,i=l(s);return e.jsx(te,{...i,...r,ref:a})});O.displayName=pe;var g="AlertDialogContent",[ge,xe]=ce(g),ue=le("AlertDialogContent"),R=o.forwardRef((t,a)=>{const{__scopeAlertDialog:s,children:r,...i}=t,c=l(s),d=o.useRef(null),h=D(a,d),x=o.useRef(null);return e.jsx(ae,{contentName:g,titleName:E,docsSlug:"alert-dialog",children:e.jsx(ge,{scope:s,cancelRef:x,children:e.jsxs(se,{role:"alertdialog",...c,...i,ref:h,onOpenAutoFocus:Q(i.onOpenAutoFocus,m=>{m.preventDefault(),x.current?.focus({preventScroll:!0})}),onPointerDownOutside:m=>m.preventDefault(),onInteractOutside:m=>m.preventDefault(),children:[e.jsx(ue,{children:r}),e.jsx(he,{contentRef:d})]})})})});R.displayName=g;var E="AlertDialogTitle",S=o.forwardRef((t,a)=>{const{__scopeAlertDialog:s,...r}=t,i=l(s);return e.jsx(re,{...i,...r,ref:a})});S.displayName=E;var I="AlertDialogDescription",q=o.forwardRef((t,a)=>{const{__scopeAlertDialog:s,...r}=t,i=l(s);return e.jsx(oe,{...i,...r,ref:a})});q.displayName=I;var fe="AlertDialogAction",B=o.forwardRef((t,a)=>{const{__scopeAlertDialog:s,...r}=t,i=l(s);return e.jsx(j,{...i,...r,ref:a})});B.displayName=fe;var W="AlertDialogCancel",M=o.forwardRef((t,a)=>{const{__scopeAlertDialog:s,...r}=t,{cancelRef:i}=xe(W,s),c=l(s),d=D(a,i);return e.jsx(j,{...c,...r,ref:d})});M.displayName=W;var he=({contentRef:t})=>{const a=`\`${g}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${g}\` by passing a \`${I}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${g}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return o.useEffect(()=>{document.getElementById(t.current?.getAttribute("aria-describedby"))||console.warn(a)},[a,t]),null},Ne=k,ve=_,we=P,ye=O,be=R,Ce=B,De=M,Te=S,je=q;const Y=o.forwardRef(({"data-theme":t,className:a,text:s,onOpen:r},i)=>e.jsx(ve,{asChild:!0,children:e.jsx(w,{ref:i,type:"button","data-theme":t,className:f(a),onClick:r,children:s})}));Y.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTrigger",props:{"data-theme":{required:!1,tsType:{name:"Theme"},description:""},className:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""}}};const Ae=({onConfirm:t})=>{const[a,s]=o.useState(!1),r=o.useCallback(()=>s(!0),[]),i=o.useCallback(()=>s(!1),[]),c=o.useCallback(()=>{t?.(),s(!1)},[t]);return{isOpen:a,handleCancel:i,handleConfirm:c,handleOpen:r}},n=({buttonCancel:{className:t,text:a="Cancel",...s}={},buttonConfirm:{className:r,text:i="OK",...c}={},buttonTriggerClassName:d,buttonTriggerText:h,description:x,showCancelButton:m=!0,theme:N,title:L,wrapperClassName:U,onConfirm:V,...$})=>{const v=o.useRef(null),[G,F]=o.useState(null),{isOpen:z,handleCancel:H,handleConfirm:Z,handleOpen:K}=Ae({onConfirm:V});return o.useEffect(()=>{if(!v.current||N)return;const y=v.current.closest("[data-theme]");y&&F(y)},[]),e.jsxs(Ne,{open:z,...$,children:[e.jsx(Y,{ref:v,className:d,text:h,"data-theme":N,onOpen:K}),e.jsxs(we,{container:G,children:[e.jsx(ye,{className:"bg-black opacity-70 dark:opacity-85 inset-0 fixed animate-in fade-in-0"}),e.jsxs(be,{"data-theme":N,className:f("bg-white","rounded-md","fixed","top-1/2","left-1/2","-translate-y-2/4","-translate-x-2/4","flex","flex-col","gap-8","p-8","animate-in","fade-in-0","zoom-in-85","border","border-transparent","dark:bg-metal-800","dark:border-metal-700","dark:border-slate-700",U),children:[e.jsx(Te,{className:"text-base text-slate-700 font-semibold",children:L}),e.jsx(je,{className:"text-sm text-slate-800",children:x}),e.jsxs("div",{className:"flex flex-row gap-5 justify-end",children:[m&&e.jsx(De,{asChild:!0,children:e.jsx(w,{type:"button",variant:"secondary",className:f(t),onClick:H,...s,children:a})}),e.jsx(Ce,{asChild:!0,children:e.jsx(w,{type:"button",variant:"primary",className:f(r),onClick:Z,...c,children:i})})]})]})]})]})};n.displayName="KonstructAlertDialog";n.__docgenInfo={description:"",methods:[],displayName:"KonstructAlertDialog",props:{buttonCancel:{required:!1,tsType:{name:"intersection",raw:`Partial<ButtonProps> & {
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
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"text",value:{name:"string",required:!1}}]}}]},description:"",defaultValue:{value:"{}",computed:!1}},buttonTriggerText:{required:!1,tsType:{name:"string"},description:""},buttonTriggerClassName:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},showCancelButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},theme:{required:!1,tsType:{name:"Theme"},description:""},title:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["PropsWithChildren","AlertDialogPrimitiveProps"]};const Xe={title:"In Review/AlertDialog",component:n},u={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(C,{className:"my-6 text-lg font-semibold",children:"Light Theme"}),e.jsx("div",{className:"w-[350px]",children:e.jsx(n,{buttonTriggerText:"Destroy machine",title:e.jsxs("span",{className:"flex flex-row gap-4 items-center font-semibold",children:[e.jsx(p,{className:"text-kubefirst-primary w-6 h-6"})," Delete image?"]}),description:e.jsx("div",{className:"text-sm text-slate-800 pl-9",children:e.jsx("p",{className:"mb-4",children:"Are you sure you want to delete image? Once deleted the image cannot be recovered."})}),wrapperClassName:"max-w-[500px] gap-4",buttonConfirm:{text:"Yes, delete"}})}),e.jsx("div",{className:"my-3"}),e.jsx("div",{className:"w-[350px]",children:e.jsx(n,{buttonTriggerText:"Destroy machine",theme:"light",title:e.jsxs("span",{className:"flex flex-row gap-4 items-center font-semibold",children:[e.jsx(p,{className:"text-red-700 w-6 h-6"})," Delete image?"]}),description:e.jsx("div",{className:"text-sm text-slate-800 pl-9",children:e.jsx("p",{className:"mb-4",children:"Are you sure you want to delete image? Once deleted the image cannot be recovered."})}),wrapperClassName:"max-w-[500px] gap-4",buttonConfirm:{text:"Yes, delete",variant:"danger"}})}),e.jsx("div",{className:"my-3"}),e.jsx("div",{className:"w-[350px]",children:e.jsx(n,{buttonTriggerText:"Destroy",theme:"light",title:e.jsxs("span",{className:"flex flex-row gap-4 items-center font-semibold",children:[e.jsx(p,{className:"text-civo-primary w-6 h-6"})," Upload will take a few minutes..."]}),description:e.jsxs("div",{className:"text-sm text-slate-800 pl-9",children:[e.jsx("p",{className:"mb-4",children:"Uploading an image may take up to a few minutes depending on image size and connection speed. We'll let you know when the import is complete."}),e.jsx(b,{defaultChecked:!0,label:"This is a checkbox with civo colors"})]}),showCancelButton:!1,wrapperClassName:"max-w-[500px] gap-4",buttonConfirm:{text:"Got it!"}})}),e.jsx(C,{className:"my-6 text-lg font-semibold",children:"Dark Theme"}),e.jsx("div",{className:"w-[350px]","data-theme":"dark",children:e.jsx(n,{buttonTriggerText:"Destroy machine",title:e.jsxs("span",{className:"flex flex-row gap-4 items-center font-semibold text-slate-200",children:[e.jsx(p,{className:"text-aurora-500 w-6 h-6"})," Delete image?"]}),description:e.jsx("div",{className:"text-sm text-slate-50 pl-9",children:e.jsx("p",{className:"mb-4",children:"Are you sure you want to delete image? Once deleted the image cannot be recovered."})}),wrapperClassName:"max-w-[500px] gap-4",buttonConfirm:{text:"Yes, delete"}})}),e.jsx("div",{className:"my-3"}),e.jsx("div",{className:"w-[350px]","data-theme":"dark",children:e.jsx(n,{buttonTriggerText:"Destroy machine",title:e.jsxs("span",{className:"flex flex-row gap-4 items-center font-semibold text-slate-200",children:[e.jsx(p,{className:"text-red-700 w-6 h-6"})," Delete image?"]}),description:e.jsx("div",{className:"text-sm pl-9 text-slate-50",children:e.jsx("p",{className:"mb-4",children:"Are you sure you want to delete image? Once deleted the image cannot be recovered."})}),wrapperClassName:"max-w-[500px] gap-4",buttonConfirm:{text:"Yes, delete",variant:"danger"}})}),e.jsx("div",{className:"my-3"}),e.jsx("div",{className:"w-[350px]","data-theme":"dark",children:e.jsx(n,{buttonTriggerText:"Destroy",title:e.jsxs("span",{className:"flex flex-row gap-4 items-center font-semibold text-slate-200",children:[e.jsx(p,{className:"text-civo-primary w-6 h-6"})," Upload will take a few minutes..."]}),description:e.jsxs("div",{className:"text-sm text-slate-50 pl-9",children:[e.jsx("p",{className:"mb-4",children:"Uploading an image may take up to a few minutes depending on image size and connection speed. We'll let you know when the import is complete."}),e.jsx(b,{defaultChecked:!0,label:"This is a checkbox with civo colors"})]}),showCancelButton:!1,wrapperClassName:"max-w-[500px] gap-4",buttonConfirm:{text:"Got it!"}})})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Typography className="my-6 text-lg font-semibold">
        Light Theme
      </Typography>

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

      <Typography className="my-6 text-lg font-semibold">Dark Theme</Typography>

      <div className="w-[350px]" data-theme="dark">
        <AlertDialogComponent buttonTriggerText="Destroy machine" title={<span className="flex flex-row gap-4 items-center font-semibold text-slate-200">
              <WarningIcon className="text-aurora-500 w-6 h-6" /> Delete image?
            </span>} description={<div className="text-sm text-slate-50 pl-9">
              <p className="mb-4">
                Are you sure you want to delete image? Once deleted the image
                cannot be recovered.
              </p>
            </div>} wrapperClassName="max-w-[500px] gap-4" buttonConfirm={{
        text: 'Yes, delete'
      }} />
      </div>

      <div className="my-3" />

      <div className="w-[350px]" data-theme="dark">
        <AlertDialogComponent buttonTriggerText="Destroy machine" title={<span className="flex flex-row gap-4 items-center font-semibold text-slate-200">
              <WarningIcon className="text-red-700 w-6 h-6" /> Delete image?
            </span>} description={<div className="text-sm pl-9 text-slate-50">
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

      <div className="w-[350px]" data-theme="dark">
        <AlertDialogComponent buttonTriggerText="Destroy" title={<span className="flex flex-row gap-4 items-center font-semibold text-slate-200">
              <WarningIcon className="text-civo-primary w-6 h-6" /> Upload will
              take a few minutes...
            </span>} description={<div className="text-sm text-slate-50 pl-9">
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
} satisfies Story`,...u.parameters?.docs?.source}}};const et=["AlertDialog"];export{u as AlertDialog,et as __namedExportsOrder,Xe as default};
