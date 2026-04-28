import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./iframe-C2WQCK3e.js";import{a as n,t as r}from"./components-BkVvmWTd.js";import{n as i,t as a}from"./Typography-Cf7quBSs.js";import{f as o,t as s}from"./lucide-react-DFv13dRC.js";import{n as c,t as l}from"./Checkbox-C5SrvWV8.js";import{n as u,t as d}from"./AlertDialog-XigSNkkq.js";var f,p,m,h;e((()=>{s(),r(),c(),i(),u(),f=t(),p={title:`In Review/AlertDialog/Dark`,component:d},m={parameters:{theme:`dark`},render:()=>(0,f.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,f.jsx)(d,{buttonTriggerText:`Information`,showCancelButton:!1,buttonTriggerClassName:`w-fit`,title:(0,f.jsxs)(`span`,{className:`flex flex-row gap-3 items-center font-medium text-slate-200`,children:[(0,f.jsx)(n,{className:`text-blue-600 w-6 h-6 rotate-180`}),`Upload will take a few minutes...`]}),description:(0,f.jsxs)(`div`,{className:`text-sm text-slate-50 pl-9 font-normal flex flex-col gap-6`,children:[(0,f.jsx)(`p`,{children:`Uploading an image may take up to a few minutes depending on image size and connection speed. We'll let you know when the import is complete.`}),(0,f.jsx)(l,{defaultChecked:!0,label:`Don't show this message again`})]}),wrapperClassName:`max-w-[500px]`,buttonConfirm:{text:`Got it!`}}),(0,f.jsx)(d,{buttonTriggerText:`Delete`,buttonTriggerVariant:`danger`,buttonTriggerClassName:`w-fit`,title:(0,f.jsxs)(`span`,{className:`flex flex-row gap-3 items-center font-semibold text-slate-200`,children:[(0,f.jsx)(n,{className:`text-red-500 w-6 h-6`}),` Delete`,` `,`<image name>`,`?`]}),description:(0,f.jsx)(`div`,{className:`text-sm pl-9 text-slate-50`,children:(0,f.jsxs)(`p`,{children:[`Are you sure you want to delete image `,`<image name>`,`? Once deleted the image cannot be recovered.`]})}),wrapperClassName:`max-w-[500px]`,buttonConfirm:{text:`Yes, delete`,variant:`danger`}}),(0,f.jsx)(d,{buttonTriggerText:`Centered`,buttonTriggerClassName:`w-fit`,title:(0,f.jsxs)(`div`,{className:`flex flex-col gap-4 items-center justify-center`,children:[(0,f.jsx)(`span`,{className:`p-3 rounded-full bg-green-400/15 w-12 h-12 flex items-center justify-center`,children:(0,f.jsx)(o,{className:`text-green-400`})}),(0,f.jsx)(a,{className:`font-normal`,children:`Cluster successfully deleted`})]}),description:(0,f.jsxs)(`div`,{className:`text-sm text-slate-50 flex flex-col gap-6`,children:[(0,f.jsxs)(`p`,{className:`text-center`,children:[`When you close the Cluster details drawer you can view the logs in`,` `,(0,f.jsx)(`span`,{className:`text-aurora-500`,children:`Cluster archives`}),`.`]}),(0,f.jsx)(l,{defaultChecked:!0,label:`Don't show this message again`})]}),showCancelButton:!1,wrapperClassName:`max-w-[384px] gap-4`,buttonConfirm:{text:`Got it!`,className:`w-full mt-4`}})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...m.parameters?.docs?.source}}},h=[`Dark`]}))();export{m as Dark,h as __namedExportsOrder,p as default};