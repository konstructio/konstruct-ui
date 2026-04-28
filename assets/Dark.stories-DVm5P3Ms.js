import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./iframe-C2WQCK3e.js";import{n,p as r,t as i}from"./dist-BSOGlkT-.js";import{n as a,t as o}from"./Typography-Cf7quBSs.js";import{n as s,t as c}from"./ButtonGroup-DapHwGWx.js";var l,u,d,f;e((()=>{i(),a(),s(),l=t(),u={title:`In Review/ButtonGroup/Dark`,component:c},d={parameters:{theme:`dark`},render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-8 w-200`,children:[(0,l.jsxs)(`section`,{className:`flex flex-col gap-3`,children:[(0,l.jsx)(o,{component:`h6`,children:`Simple Toggle`}),(0,l.jsx)(c,{name:`processor`,options:[{value:`cpu`,label:`CPU`},{value:`gpu`,label:`GPU`}],defaultValue:`cpu`,labelAlign:`center`})]}),(0,l.jsxs)(`section`,{className:`flex flex-col gap-3`,children:[(0,l.jsx)(o,{component:`h6`,children:`With Icons`}),(0,l.jsx)(c,{name:`processor-icons`,options:[{value:`cpu`,label:`CPU`,icon:(0,l.jsx)(r,{className:`w-4 h-4`})},{value:`gpu`,label:`GPU`,icon:(0,l.jsx)(n,{className:`w-4 h-4`})}],defaultValue:`cpu`})]}),(0,l.jsxs)(`section`,{className:`flex flex-col gap-3`,children:[(0,l.jsx)(o,{component:`h6`,children:`With Descriptions`}),(0,l.jsx)(c,{name:`instance-type`,label:`Instance Type`,isRequired:!0,options:[{value:`standard`,label:`Standard`,secondaryLabel:`$0.10/hr`,description:`Guaranteed availability for your workloads.`},{value:`spot`,label:`Spot`,secondaryLabel:`$0.03/hr`,description:`Lower cost, may be interrupted with 48h notice.`}],defaultValue:`standard`})]})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: () => <div className="flex flex-col gap-8 w-200">
      <section className="flex flex-col gap-3">
        <Typography component="h6">Simple Toggle</Typography>
        <ButtonGroupComponent name="processor" options={[{
        value: 'cpu',
        label: 'CPU'
      }, {
        value: 'gpu',
        label: 'GPU'
      }]} defaultValue="cpu" labelAlign="center" />
      </section>

      <section className="flex flex-col gap-3">
        <Typography component="h6">With Icons</Typography>
        <ButtonGroupComponent name="processor-icons" options={[{
        value: 'cpu',
        label: 'CPU',
        icon: <Cpu className="w-4 h-4" />
      }, {
        value: 'gpu',
        label: 'GPU',
        icon: <Zap className="w-4 h-4" />
      }]} defaultValue="cpu" />
      </section>

      <section className="flex flex-col gap-3">
        <Typography component="h6">With Descriptions</Typography>
        <ButtonGroupComponent name="instance-type" label="Instance Type" isRequired options={[{
        value: 'standard',
        label: 'Standard',
        secondaryLabel: '$0.10/hr',
        description: 'Guaranteed availability for your workloads.'
      }, {
        value: 'spot',
        label: 'Spot',
        secondaryLabel: '$0.03/hr',
        description: 'Lower cost, may be interrupted with 48h notice.'
      }]} defaultValue="standard" />
      </section>
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Default`]}))();export{d as Default,f as __namedExportsOrder,u as default};