import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./react-C184PLS3.js";import{t as r}from"./jsx-runtime-De-1JGbp.js";import{a as i,n as a,r as o,t as s}from"./dist-CeciwoH6.js";var c,l=e((()=>{a(),c=s([`border`,`border-gray-200`,`disabled:cursor-not-allowed`,`disabled:opacity-50`,`focus-visible:outline-none`,`focus-visible:ring-1`,`focus-visible:ring-ring`,`p-2`,`placeholder:text-gray-300`,`resize-none`,`rounded-md`,`shadow-xs`,`w-full`,`focus:ring-kubefirst-primary`])})),u,d,f,p=e((()=>{u=t(n(),1),i(),l(),d=r(),f=(0,u.forwardRef)(({initialValue:e,label:t,labelWrapperClassName:n,name:r,placeholder:i,rows:a=3,theme:s,className:l,...f},p)=>{let m=(0,u.useId)(),h=r?`${m}-name`:m;return(0,d.jsxs)(`div`,{className:`flex flex-col gap-2`,"data-theme":s,children:[t?(0,d.jsx)(`div`,{className:o(n),children:(0,d.jsx)(`label`,{htmlFor:h,className:`cursor-pointer`,children:t})}):null,(0,d.jsx)(`textarea`,{id:h,ref:p,className:o(c({className:l})),rows:a,placeholder:i,value:e??f.value,...f})]})}),f.__docgenInfo={description:`A multiline text input component with optional label.

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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-textarea--docs Storybook}`,methods:[],displayName:`TextArea`,props:{rows:{required:!1,tsType:{name:`number`},description:`Number of visible text rows (default: 3)`,defaultValue:{value:`3`,computed:!1}},label:{required:!1,tsType:{name:`union`,raw:`string | ReactNode`,elements:[{name:`string`},{name:`ReactNode`}]},description:`Label displayed above the textarea`},labelWrapperClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the label wrapper`},name:{required:!1,tsType:{name:`string`},description:`Form field name`},initialValue:{required:!1,tsType:{name:`string`},description:`Initial/default value`},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override for this component`}},composes:[`InputHTMLAttributes`,`VariantProps`]}}));export{p as n,f as t};