import{j as e}from"./iframe-CQUPapgb.js";import{W as s}from"./Warning-B3nu_ID6.js";import{C as r}from"./Checkbox-BFpPgTb_.js";import{T as l}from"./Typography-BOqb3Y-Y.js";import{A as a}from"./AlertDialog-CZudMZyv.js";import{C as o}from"./check-CadRXNMv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-15YaTtXl.js";import"./index-BLd5dFhW.js";import"./index-CGA3Cy4x.js";import"./index-Cj_TF1lr.js";import"./index-BIvasb16.js";import"./index-Deo0v7Fy.js";import"./index-BHnE5gDL.js";import"./useToggle-BYwGmJKb.js";import"./index-B-7A89sm.js";import"./check-hVNxjiVS.js";import"./index-B1MlFbps.js";import"./index-_aTYYMwY.js";import"./index-KaZVFcL5.js";import"./index-Cz21bcKG.js";import"./index-C_T0SOQg.js";import"./index-C08ZKF1J.js";import"./Combination-CAmjyLB3.js";import"./Button-LAv4szbU.js";import"./index-F5ZrBm5H.js";import"./createLucideIcon-DUXeN8v5.js";const O={title:"In Review/AlertDialog/Dark",component:a},t={parameters:{theme:"dark"},render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{buttonTriggerText:"Information",showCancelButton:!1,buttonTriggerClassName:"w-fit",title:e.jsxs("span",{className:"flex flex-row gap-3 items-center font-medium text-slate-200",children:[e.jsx(s,{className:"text-blue-600 w-6 h-6 rotate-180"}),"Upload will take a few minutes..."]}),description:e.jsxs("div",{className:"text-sm text-slate-50 pl-9 font-normal flex flex-col gap-6",children:[e.jsx("p",{children:"Uploading an image may take up to a few minutes depending on image size and connection speed. We'll let you know when the import is complete."}),e.jsx(r,{defaultChecked:!0,label:"Don't show this message again"})]}),wrapperClassName:"max-w-[500px]",buttonConfirm:{text:"Got it!"}}),e.jsx(a,{buttonTriggerText:"Delete",buttonTriggerVariant:"danger",buttonTriggerClassName:"w-fit",title:e.jsxs("span",{className:"flex flex-row gap-3 items-center font-semibold text-slate-200",children:[e.jsx(s,{className:"text-red-500 w-6 h-6"})," Delete"," ","<image name>","?"]}),description:e.jsx("div",{className:"text-sm pl-9 text-slate-50",children:e.jsxs("p",{children:["Are you sure you want to delete image ","<image name>","? Once deleted the image cannot be recovered."]})}),wrapperClassName:"max-w-[500px]",buttonConfirm:{text:"Yes, delete",variant:"danger"}}),e.jsx(a,{buttonTriggerText:"Centered",buttonTriggerClassName:"w-fit",title:e.jsxs("div",{className:"flex flex-col gap-4 items-center justify-center",children:[e.jsx("span",{className:"p-3 rounded-full bg-green-400/15 w-12 h-12 flex items-center justify-center",children:e.jsx(o,{className:"text-green-400"})}),e.jsx(l,{className:"font-normal",children:"Cluster successfully deleted"})]}),description:e.jsxs("div",{className:"text-sm text-slate-50 flex flex-col gap-6",children:[e.jsxs("p",{className:"text-center",children:["When you close the Cluster details drawer you can view the logs in"," ",e.jsx("span",{className:"text-aurora-500",children:"Cluster archives"}),"."]}),e.jsx(r,{defaultChecked:!0,label:"Don't show this message again"})]}),showCancelButton:!1,wrapperClassName:"max-w-[384px] gap-4",buttonConfirm:{text:"Got it!",className:"w-full mt-4"}})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: () => <div className="flex flex-col gap-3">
      <AlertDialogComponent buttonTriggerText="Information" showCancelButton={false} buttonTriggerClassName="w-fit" title={<span className="flex flex-row gap-3 items-center font-medium text-slate-200">
            <WarningIcon className="text-blue-600 w-6 h-6 rotate-180" />
            Upload will take a few minutes...
          </span>} description={<div className="text-sm text-slate-50 pl-9 font-normal flex flex-col gap-6">
            <p>
              Uploading an image may take up to a few minutes depending on image
              size and connection speed. We'll let you know when the import is
              complete.
            </p>

            <Checkbox defaultChecked label="Don't show this message again" />
          </div>} wrapperClassName="max-w-[500px]" buttonConfirm={{
      text: 'Got it!'
    }} />

      <AlertDialogComponent buttonTriggerText="Delete" buttonTriggerVariant="danger" buttonTriggerClassName="w-fit" title={<span className="flex flex-row gap-3 items-center font-semibold text-slate-200">
            <WarningIcon className="text-red-500 w-6 h-6" /> Delete{' '}
            {'<image name>'}?
          </span>} description={<div className="text-sm pl-9 text-slate-50">
            <p>
              Are you sure you want to delete image {'<image name>'}? Once
              deleted the image cannot be recovered.
            </p>
          </div>} wrapperClassName="max-w-[500px]" buttonConfirm={{
      text: 'Yes, delete',
      variant: 'danger'
    }} />

      <AlertDialogComponent buttonTriggerText="Centered" buttonTriggerClassName="w-fit" title={<div className="flex flex-col gap-4 items-center justify-center">
            <span className="p-3 rounded-full bg-green-400/15 w-12 h-12 flex items-center justify-center">
              <Check className="text-green-400" />
            </span>

            <Typography className="font-normal">
              Cluster successfully deleted
            </Typography>
          </div>} description={<div className="text-sm text-slate-50 flex flex-col gap-6">
            <p className="text-center">
              When you close the Cluster details drawer you can view the logs in{' '}
              <span className="text-aurora-500">Cluster archives</span>.
            </p>

            <Checkbox defaultChecked label="Don't show this message again" />
          </div>} showCancelButton={false} wrapperClassName="max-w-[384px] gap-4" buttonConfirm={{
      text: 'Got it!',
      className: 'w-full mt-4'
    }} />
    </div>
} satisfies Story`,...t.parameters?.docs?.source}}};const z=["Dark"];export{t as Dark,z as __namedExportsOrder,O as default};
