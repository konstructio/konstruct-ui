import{j as e}from"./iframe-Bn_zYVkQ.js";import{W as s}from"./Warning-Cf3Crh7q.js";import{C as l}from"./Checkbox-9G0rq1R8.js";import{T as r}from"./Typography-BK75nqwC.js";import{A as a}from"./AlertDialog-CLnINBn5.js";import{C as o}from"./check-1boxZDs4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-aQzbjv51.js";import"./index-FCfS518D.js";import"./index-BPquQhIf.js";import"./index-BZrJoUPC.js";import"./index-D6mTTpc1.js";import"./index-BSgp__eO.js";import"./index-B44331KA.js";import"./useToggle-B6ckmTa_.js";import"./index-B-7A89sm.js";import"./check-BHxD8Znu.js";import"./index-DWQB616r.js";import"./index-Bsgix1K4.js";import"./index-CBa1Wc9B.js";import"./index-v9g7YqLf.js";import"./index-BdIZDC-Y.js";import"./index-BCZA9o_0.js";import"./Combination-D9BhjQ-h.js";import"./Button-1qVSaAO5.js";import"./index-C3wFPQlr.js";import"./createLucideIcon-Nq0w9UEh.js";const L={title:"In Review/AlertDialog/Light",component:a},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{buttonTriggerText:"Information",showCancelButton:!1,buttonTriggerClassName:"w-fit",title:e.jsxs("span",{className:"flex flex-row gap-3 items-center font-medium text-slate-700",children:[e.jsx(s,{className:"text-blue-600 w-6 h-6 rotate-180"}),"Upload will take a few minutes..."]}),description:e.jsxs("div",{className:"text-sm text-slate-800 pl-9 font-normal flex flex-col gap-6",children:[e.jsx("p",{children:"Uploading an image may take up to a few minutes depending on image size and connection speed. We'll let you know when the import is complete."}),e.jsx(l,{defaultChecked:!0,label:"Don't show this message again"})]}),wrapperClassName:"max-w-[500px]",buttonConfirm:{text:"Got it!"}}),e.jsx(a,{buttonTriggerText:"Delete",buttonTriggerVariant:"danger",buttonTriggerClassName:"w-fit",title:e.jsxs("span",{className:"flex flex-row gap-3 items-center font-semibold text-slate-700",children:[e.jsx(s,{className:"text-red-500 w-6 h-6"})," Delete"," ","<image name>","?"]}),description:e.jsx("div",{className:"text-sm pl-9 text-slate-800",children:e.jsxs("p",{children:["Are you sure you want to delete image ","<image name>","? Once deleted the image cannot be recovered."]})}),wrapperClassName:"max-w-[500px]",buttonConfirm:{text:"Yes, delete",variant:"danger"}}),e.jsx(a,{buttonTriggerText:"Centered",buttonTriggerClassName:"w-fit",title:e.jsxs("div",{className:"flex flex-col gap-4 items-center justify-center",children:[e.jsx("span",{className:"p-3 rounded-full bg-green-600/15 w-12 h-12 flex items-center justify-center",children:e.jsx(o,{className:"text-green-600"})}),e.jsx(r,{className:"font-normal text-slate-700",children:"Cluster successfully deleted"})]}),description:e.jsxs("div",{className:"text-sm text-slate-800 flex flex-col gap-6",children:[e.jsxs("p",{className:"text-center",children:["When you close the Cluster details drawer you can view the logs in"," ",e.jsx("span",{className:"text-blue-600",children:"Cluster archives"}),"."]}),e.jsx(l,{defaultChecked:!0,label:"Don't show this message again"})]}),showCancelButton:!1,wrapperClassName:"max-w-[384px] gap-4",buttonConfirm:{text:"Got it!",className:"w-full mt-4"}})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <AlertDialogComponent buttonTriggerText="Information" showCancelButton={false} buttonTriggerClassName="w-fit" title={<span className="flex flex-row gap-3 items-center font-medium text-slate-700">
            <WarningIcon className="text-blue-600 w-6 h-6 rotate-180" />
            Upload will take a few minutes...
          </span>} description={<div className="text-sm text-slate-800 pl-9 font-normal flex flex-col gap-6">
            <p>
              Uploading an image may take up to a few minutes depending on image
              size and connection speed. We'll let you know when the import is
              complete.
            </p>

            <Checkbox defaultChecked label="Don't show this message again" />
          </div>} wrapperClassName="max-w-[500px]" buttonConfirm={{
      text: 'Got it!'
    }} />

      <AlertDialogComponent buttonTriggerText="Delete" buttonTriggerVariant="danger" buttonTriggerClassName="w-fit" title={<span className="flex flex-row gap-3 items-center font-semibold text-slate-700">
            <WarningIcon className="text-red-500 w-6 h-6" /> Delete{' '}
            {'<image name>'}?
          </span>} description={<div className="text-sm pl-9 text-slate-800">
            <p>
              Are you sure you want to delete image {'<image name>'}? Once
              deleted the image cannot be recovered.
            </p>
          </div>} wrapperClassName="max-w-[500px]" buttonConfirm={{
      text: 'Yes, delete',
      variant: 'danger'
    }} />

      <AlertDialogComponent buttonTriggerText="Centered" buttonTriggerClassName="w-fit" title={<div className="flex flex-col gap-4 items-center justify-center">
            <span className="p-3 rounded-full bg-green-600/15 w-12 h-12 flex items-center justify-center">
              <Check className="text-green-600" />
            </span>

            <Typography className="font-normal text-slate-700">
              Cluster successfully deleted
            </Typography>
          </div>} description={<div className="text-sm text-slate-800 flex flex-col gap-6">
            <p className="text-center">
              When you close the Cluster details drawer you can view the logs in{' '}
              <span className="text-blue-600">Cluster archives</span>.
            </p>

            <Checkbox defaultChecked label="Don't show this message again" />
          </div>} showCancelButton={false} wrapperClassName="max-w-[384px] gap-4" buttonConfirm={{
      text: 'Got it!',
      className: 'w-full mt-4'
    }} />
    </div>
} satisfies Story`,...t.parameters?.docs?.source}}};const O=["Light"];export{t as Light,O as __namedExportsOrder,L as default};
