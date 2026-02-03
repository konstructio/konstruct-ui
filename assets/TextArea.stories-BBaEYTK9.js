import{r as l,j as e}from"./iframe-CYvr-DNT.js";import{a as f,c as h}from"./index-B-7A89sm.js";import"./preload-helper-PPVm8Dsz.js";const b=f(["border","border-gray-200","disabled:cursor-not-allowed","disabled:opacity-50","focus-visible:outline-none","focus-visible:ring-1","focus-visible:ring-ring","p-2","placeholder:text-gray-300","resize-none","rounded-md","shadow-xs","w-full","focus:ring-kubefirst-primary"]),r=l.forwardRef(({initialValue:a,label:s,name:d,placeholder:c,rows:m=3,theme:p,className:u,...o},x)=>{const n=l.useId(),i=d?`${n}-name`:n;return e.jsxs("div",{className:"flex flex-col gap-2","data-theme":p,children:[s?e.jsx("label",{htmlFor:i,className:"cursor-pointer",children:s}):null,e.jsx("textarea",{id:i,ref:x,className:h(b({className:u})),rows:m,placeholder:c,value:a??o.value,...o})]})});r.__docgenInfo={description:`A multiline text input component with optional label.

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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-textarea--docs Storybook}`,methods:[],displayName:"TextArea",props:{rows:{required:!1,tsType:{name:"number"},description:"Number of visible text rows (default: 3)",defaultValue:{value:"3",computed:!1}},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Label displayed above the textarea"},name:{required:!1,tsType:{name:"string"},description:"Form field name"},initialValue:{required:!1,tsType:{name:"string"},description:"Initial/default value"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"}},composes:["InputHTMLAttributes","VariantProps"]};const w={title:"In Review/TextArea",component:r},t={args:{placeholder:"Type your message here."},render:a=>e.jsx("div",{className:"w-[350px] flex flex-col gap-3",children:e.jsx(r,{...a,label:"This is a textarea with Kubefirst theme"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here.'
  },
  render: args => <div className="w-[350px] flex flex-col gap-3">
      <TextAreaComponent {...args} label="This is a textarea with Kubefirst theme" />
    </div>
}`,...t.parameters?.docs?.source}}};const y=["TextArea"];export{t as TextArea,y as __namedExportsOrder,w as default};
