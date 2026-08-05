import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{r,t as i}from"./utils-BC5-UmL9.js";import{n as a,t as o}from"./dist-DJsSzQxH.js";var s;function c(){return(c=e((()=>{a(),s=o([`border`,`border-gray-200`,`disabled:cursor-not-allowed`,`disabled:opacity-50`,`focus-visible:outline-none`,`focus-visible:ring-1`,`focus-visible:ring-ring`,`p-2`,`placeholder:text-gray-300`,`resize-none`,`rounded-md`,`shadow-xs`,`w-full`,`focus:ring-kubefirst-primary`])})))()}var l,u,d;function f(){return(f=e((()=>{l=t(),r(),c(),u=n(),d=(0,l.forwardRef)(({initialValue:e,label:t,labelWrapperClassName:n,name:r,placeholder:a,rows:o=3,theme:c,className:d,...f},p)=>{let m=(0,l.useId)(),h=r?`${m}-name`:m;return(0,u.jsxs)(`div`,{className:`flex flex-col gap-2`,"data-theme":c,children:[t?(0,u.jsx)(`div`,{className:i(n),children:(0,u.jsx)(`label`,{htmlFor:h,className:`cursor-pointer`,children:t})}):null,(0,u.jsx)(`textarea`,{id:h,ref:p,className:i(s({className:d})),rows:o,placeholder:a,value:e??f.value,...f})]})}),d.__docgenInfo={description:`A multiline text input component with optional label.

@example
\`\`\`tsx
// Basic textarea
<TextArea label="Description" placeholder="Enter description..." />

// Textarea with more rows
<TextArea label="Notes" rows={5} />

// Controlled textarea
<TextArea
  label="Comments"
  value={comments}
  onChange={(e) => setComments(e.target.value)}
/>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-textarea--docs Storybook}`,methods:[],displayName:`TextArea`,props:{rows:{required:!1,tsType:{name:`number`},description:`Number of visible text rows (default: 3)`,defaultValue:{value:`3`,computed:!1}},label:{required:!1,tsType:{name:`union`,raw:`string | ReactNode`,elements:[{name:`string`},{name:`ReactNode`}]},description:`Label displayed above the textarea`},labelWrapperClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the label wrapper`},name:{required:!1,tsType:{name:`string`},description:`Form field name`},initialValue:{required:!1,tsType:{name:`string`},description:`Initial/default value`},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override for this component`}},composes:[`InputHTMLAttributes`,`VariantProps`]}})))()}var p,m,h,g;function _(){return(_=e((()=>{f(),p=n(),m={title:`In Review/TextArea`,component:d},h={args:{placeholder:`Type your message here.`},render:e=>(0,p.jsx)(`div`,{className:`w-87.5 flex flex-col gap-3`,children:(0,p.jsx)(d,{...e,label:`This is a textarea with Kubefirst theme`})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here.'
  },
  render: args => <div className="w-87.5 flex flex-col gap-3">
      <TextAreaComponent {...args} label="This is a textarea with Kubefirst theme" />
    </div>
}`,...h.parameters?.docs?.source}}},g=[`TextArea`]})))()}_();export{h as TextArea,g as __namedExportsOrder,m as default};