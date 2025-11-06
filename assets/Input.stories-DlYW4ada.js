import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as r}from"./Input-D2wPl80G.js";import{T as a}from"./Typography-C6rrIcRo.js";import"./iframe-BOabx110.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CJCZd66Q.js";import"./index-DhpUv4Ls.js";const d={title:"In Review/Input",component:r},s={args:{autoComplete:"off"},render:t=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-[350px] flex flex-col gap-4",children:[e.jsx(a,{variant:"h6",className:"my-5",theme:"kubefirst",children:"Input Component"}),e.jsx(r,{...t}),e.jsx(r,{...t,label:"This is a label",isRequired:!0,helperText:"This is a helper text.",theme:"kubefirst"}),e.jsx(r,{...t,type:"password",theme:"kubefirst"}),e.jsx(r,{...t,type:"password"}),e.jsx(r,{...t,error:"",theme:"kubefirst"}),e.jsx(r,{...t,helperText:"This is a helper text.",error:"This is an error."}),e.jsx(r,{...t,placeholder:"Search image name",isSearch:!0,theme:"kubefirst"}),e.jsx(r,{...t,placeholder:"Search image name",isSearch:!0,helperText:"This is a helper text."}),e.jsx(r,{...t,disabled:!0,theme:"kubefirst"})]}),e.jsx(a,{variant:"h6",className:"my-5",children:"Input Component Dark Mode"}),e.jsx("div",{className:"w-[400px] bg-slate-950 p-4 rounded-sm",children:e.jsxs("div",{className:"w-[350px] flex flex-col gap-4",children:[e.jsx(r,{...t,label:"This is a label",isRequired:!0,theme:"dark",helperText:"This is a helper text."}),e.jsx(r,{theme:"kubefirst-dark",...t}),e.jsx(r,{...t,theme:"dark"}),e.jsx(r,{...t,theme:"kubefirst-dark",type:"password"}),e.jsx(r,{...t,theme:"dark",type:"password"}),e.jsx(r,{...t,theme:"kubefirst-dark",error:""}),e.jsx(r,{...t,theme:"dark",helperText:"This is a helper text.",error:"This is an error."}),e.jsx(r,{...t,theme:"kubefirst-dark",placeholder:"Search image name",isSearch:!0}),e.jsx(r,{...t,placeholder:"Search image name",isSearch:!0,theme:"dark",helperText:"This is a helper text."}),e.jsx(r,{...t,disabled:!0,theme:"kubefirst-dark"})]})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    autoComplete: 'off'
  },
  render: args => <>
      <div className="w-[350px] flex flex-col gap-4">
        <Typography variant="h6" className="my-5" theme="kubefirst">
          Input Component
        </Typography>

        <InputComponent {...args} />

        <InputComponent {...args} label="This is a label" isRequired helperText="This is a helper text." theme="kubefirst" />

        <InputComponent {...args} type="password" theme="kubefirst" />
        <InputComponent {...args} type="password" />
        <InputComponent {...args} error="" theme="kubefirst" />
        <InputComponent {...args} helperText="This is a helper text." error="This is an error." />
        <InputComponent {...args} placeholder="Search image name" isSearch theme="kubefirst" />
        <InputComponent {...args} placeholder="Search image name" isSearch helperText="This is a helper text." />
        <InputComponent {...args} disabled theme="kubefirst" />
      </div>

      <Typography variant="h6" className="my-5">
        Input Component Dark Mode
      </Typography>

      <div className="w-[400px] bg-slate-950 p-4 rounded-sm">
        <div className="w-[350px] flex flex-col gap-4">
          <InputComponent {...args} label="This is a label" isRequired theme="dark" helperText="This is a helper text." />

          <InputComponent theme="kubefirst-dark" {...args} />
          <InputComponent {...args} theme="dark" />
          <InputComponent {...args} theme="kubefirst-dark" type="password" />
          <InputComponent {...args} theme="dark" type="password" />
          <InputComponent {...args} theme="kubefirst-dark" error="" />
          <InputComponent {...args} theme="dark" helperText="This is a helper text." error="This is an error." />
          <InputComponent {...args} theme="kubefirst-dark" placeholder="Search image name" isSearch />
          <InputComponent {...args} placeholder="Search image name" isSearch theme="dark" helperText="This is a helper text." />
          <InputComponent {...args} disabled theme="kubefirst-dark" />
        </div>
      </div>
    </>
}`,...s.parameters?.docs?.source}}};const u=["Input"];export{s as Input,u as __namedExportsOrder,d as default};
