import{r as N,j as m}from"./iframe-DLrn8Gk9.js";import{c as j}from"./compiler-runtime-DxXHijtq.js";import{a as C,c as A}from"./index-CwGTy2we.js";import"./preload-helper-PPVm8Dsz.js";const q=C(["border","border-gray-200","disabled:cursor-not-allowed","disabled:opacity-50","focus-visible:outline-none","focus-visible:ring-1","focus-visible:ring-ring","p-2","placeholder:text-gray-300","resize-none","rounded-md","shadow-xs","w-full","focus:ring-kubefirst-primary"]),w=N.forwardRef((p,g)=>{const e=j.c(28);let s,x,t,r,f,l,a,u,o;e[0]!==p?({initialValue:x,label:t,labelWrapperClassName:r,name:f,placeholder:l,rows:u,theme:o,className:s,...a}=p,e[0]=p,e[1]=s,e[2]=x,e[3]=t,e[4]=r,e[5]=f,e[6]=l,e[7]=a,e[8]=u,e[9]=o):(s=e[1],x=e[2],t=e[3],r=e[4],f=e[5],l=e[6],a=e[7],u=e[8],o=e[9]);const T=u===void 0?3:u,y=N.useId(),i=f?`${y}-name`:y;let n;e[10]!==i||e[11]!==t||e[12]!==r?(n=t?m.jsx("div",{className:A(r),children:m.jsx("label",{htmlFor:i,className:"cursor-pointer",children:t})}):null,e[10]=i,e[11]=t,e[12]=r,e[13]=n):n=e[13];let c;e[14]!==s?(c=A(q({className:s})),e[14]=s,e[15]=c):c=e[15];const v=x??a.value;let d;e[16]!==i||e[17]!==l||e[18]!==a||e[19]!==g||e[20]!==T||e[21]!==c||e[22]!==v?(d=m.jsx("textarea",{id:i,ref:g,className:c,rows:T,placeholder:l,value:v,...a}),e[16]=i,e[17]=l,e[18]=a,e[19]=g,e[20]=T,e[21]=c,e[22]=v,e[23]=d):d=e[23];let h;return e[24]!==n||e[25]!==d||e[26]!==o?(h=m.jsxs("div",{className:"flex flex-col gap-2","data-theme":o,children:[n,d]}),e[24]=n,e[25]=d,e[26]=o,e[27]=h):h=e[27],h});w.__docgenInfo={description:`A multiline text input component with optional label.

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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-textarea--docs Storybook}`,methods:[],displayName:"TextArea",props:{rows:{required:!1,tsType:{name:"number"},description:"Number of visible text rows (default: 3)",defaultValue:{value:"3",computed:!1}},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Label displayed above the textarea"},labelWrapperClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the label wrapper"},name:{required:!1,tsType:{name:"string"},description:"Form field name"},initialValue:{required:!1,tsType:{name:"string"},description:"Initial/default value"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"}},composes:["InputHTMLAttributes","VariantProps"]};const V={title:"In Review/TextArea",component:w},b={args:{placeholder:"Type your message here."},render:p=>m.jsx("div",{className:"w-[350px] flex flex-col gap-3",children:m.jsx(w,{...p,label:"This is a textarea with Kubefirst theme"})})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here.'
  },
  render: args => <div className="w-[350px] flex flex-col gap-3">
      <TextAreaComponent {...args} label="This is a textarea with Kubefirst theme" />
    </div>
}`,...b.parameters?.docs?.source}}};const S=["TextArea"];export{b as TextArea,S as __namedExportsOrder,V as default};
