import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./Typography-Dr4qxqZo.js";import{n as i,t as a}from"./CopyButton-DW_Vpc3o.js";var o,s,c,l;function u(){return(u=e((()=>{n(),i(),o=t(),s={title:`In Review/CopyButton/Dark`,component:a},c={parameters:{theme:`dark`},render:()=>(0,o.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,o.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,o.jsx)(r,{variant:`body2`,className:`dark:text-metal-50`,children:`192.168.0.1`}),(0,o.jsx)(a,{text:`192.168.0.1`,label:`Public IP`})]}),(0,o.jsxs)(r,{variant:`body2`,className:`flex items-center gap-1 dark:text-metal-50`,children:[`Type`,(0,o.jsx)(a,{text:`my-volume`,label:`my-volume`,className:`border dark:border-metal-700 dark:bg-metal-700 p-1 dark:hover:bg-metal-600`,children:`my-volume`}),`to confirm`]}),(0,o.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,o.jsx)(r,{variant:`body2`,className:`dark:text-metal-50`,children:`ssh root@192.168.0.1`}),(0,o.jsx)(a,{text:`ssh root@192.168.0.1`,label:`SSH command`,copyLabel:`Copiar`,copiedLabel:`¡Copiado!`})]}),(0,o.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,o.jsx)(r,{variant:`body2`,className:`dark:text-metal-50`,children:`Disabled`}),(0,o.jsx)(a,{text:`disabled`,label:`disabled value`,disabled:!0})]})]})},l=[`Dark`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: () => <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Typography variant="body2" className="dark:text-metal-50">
          192.168.0.1
        </Typography>
        <CopyButtonComponent text="192.168.0.1" label="Public IP" />
      </div>

      <Typography variant="body2" className="flex items-center gap-1 dark:text-metal-50">
        Type
        <CopyButtonComponent text="my-volume" label="my-volume" className="border dark:border-metal-700 dark:bg-metal-700 p-1 dark:hover:bg-metal-600">
          my-volume
        </CopyButtonComponent>
        to confirm
      </Typography>

      <div className="flex items-center gap-2">
        <Typography variant="body2" className="dark:text-metal-50">
          ssh root@192.168.0.1
        </Typography>
        <CopyButtonComponent text="ssh root@192.168.0.1" label="SSH command" copyLabel="Copiar" copiedLabel="¡Copiado!" />
      </div>

      <div className="flex items-center gap-2">
        <Typography variant="body2" className="dark:text-metal-50">
          Disabled
        </Typography>
        <CopyButtonComponent text="disabled" label="disabled value" disabled />
      </div>
    </div>
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Dark,l as __namedExportsOrder,s as default};