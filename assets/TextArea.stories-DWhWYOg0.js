import{r as l,j as e}from"./iframe-B0ykOvC4.js";import{a as b,c as d}from"./index-BIgQ6y5l.js";import"./preload-helper-PPVm8Dsz.js";const g=b(["border","border-gray-200","disabled:cursor-not-allowed","disabled:opacity-50","focus-visible:outline-none","focus-visible:ring-1","focus-visible:ring-ring","p-2","placeholder:text-gray-300","resize-none","rounded-md","shadow-xs","w-full","focus:ring-kubefirst-primary"]),t=l.forwardRef(({initialValue:r,label:s,labelWrapperClassName:c,name:m,placeholder:p,rows:u=3,theme:x,className:f,...n},h)=>{const o=l.useId(),i=m?`${o}-name`:o;return e.jsxs("div",{className:"flex flex-col gap-2","data-theme":x,children:[s?e.jsx("div",{className:d(c),children:e.jsx("label",{htmlFor:i,className:"cursor-pointer",children:s})}):null,e.jsx("textarea",{id:i,ref:h,className:d(g({className:f})),rows:u,placeholder:p,value:r??n.value,...n})]})});t.__docgenInfo={description:`A multiline text input component with optional label.

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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-textarea--docs Storybook}`,methods:[],displayName:"TextArea",props:{rows:{required:!1,tsType:{name:"number"},description:"Number of visible text rows (default: 3)",defaultValue:{value:"3",computed:!1}},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Label displayed above the textarea"},labelWrapperClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the label wrapper"},name:{required:!1,tsType:{name:"string"},description:"Form field name"},initialValue:{required:!1,tsType:{name:"string"},description:"Initial/default value"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"}},composes:["InputHTMLAttributes","VariantProps"]};const y={title:"In Review/TextArea",component:t},a={args:{placeholder:"Type your message here."},render:r=>e.jsx("div",{className:"w-[350px] flex flex-col gap-3",children:e.jsx(t,{...r,label:"This is a textarea with Kubefirst theme"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here.'
  },
  render: args => <div className="w-[350px] flex flex-col gap-3">
      <TextAreaComponent {...args} label="This is a textarea with Kubefirst theme" />
    </div>
}`,...a.parameters?.docs?.source}}};const A=["TextArea"];export{a as TextArea,A as __namedExportsOrder,y as default};
