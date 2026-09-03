import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{i as r,t as i}from"./utils-0TJZseot.js";import{n as a,t as o}from"./dist-qtULYLvt.js";import{a as s,i as c,n as l,r as u,t as d}from"./dist-EohlFpl0.js";var f,p,m,h;function g(){return(g=e((()=>{a(),f=o([`relative`,`flex`,`items-center`,`w-full`,`border`,`border-gray-200`,`rounded-full`,`shadow-sm`]),p=o([`absolute`,`h-full`,`bg-kubefirst-secondary`]),m=o([`relative`,`flex-grow`,`bg-gray-100`,`rounded-full`],{variants:{size:{sm:[`h-1`],md:[`h-2`],lg:[`h-3`]}},defaultVariants:{size:`md`}}),h=o([`block`,`w-5`,`h-5`,`rounded-full`,`cursor-pointer`,`focus-visible:outline-none`,`shadow-md`,`bg-white`,`border`,`border-gray-300`],{variants:{size:{sm:[`w-5`,`h-5`],md:[`w-6`,`h-6`],lg:[`w-7`,`h-7`]}},defaultVariants:{size:`md`}})})))()}var _,v,y;function b(){return(b=e((()=>{s(),_=t(),r(),g(),v=n(),y=(0,_.forwardRef)(({label:e,labelWrapperClassName:t,defaultValue:n=[0,100],name:r,theme:a,size:o,showValue:s,...g},y)=>{let b=(0,_.useRef)(null),[x,S]=(0,_.useState)(n);return(0,_.useImperativeHandle)(y,()=>b.current,[b]),(0,_.useEffect)(()=>{b.current&&(b.current.value=`[${x.toString()}]`)},[x]),(0,v.jsxs)(`div`,{className:`w-full relative flex flex-col gap-3`,"data-theme":a,children:[(0,v.jsxs)(`div`,{className:i(`flex items-center`,e?`justify-between`:`justify-end`,t),children:[e?(0,v.jsx)(`label`,{children:e}):null,s?(0,v.jsxs)(`span`,{className:`text-xs`,children:[x[0],` - `,x[1]]}):null]}),(0,v.jsx)(`input`,{ref:b,name:r,className:`hidden`,type:`text`}),(0,v.jsxs)(d,{value:x,className:i(f()),onValueChange:e=>{S(e)},...g,children:[(0,v.jsx)(c,{className:i(m({size:o})),children:(0,v.jsx)(l,{className:i(p())})}),(0,v.jsx)(u,{className:i(h({size:o}))}),(0,v.jsx)(u,{className:i(h({size:o}))})]})]})}),y.__docgenInfo={description:`A dual-thumb slider component for selecting a value range.
Built on Radix UI Slider for accessibility.

@example
\`\`\`tsx
<Range
  label="Budget"
  min={0}
  max={10000}
  defaultValue={[2000, 8000]}
  showValue
  name="budget"
/>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-range--docs Storybook}`,methods:[],displayName:`Range`,props:{className:{required:!1,tsType:{name:`string`},description:`Additional CSS classes`},defaultValue:{required:!1,tsType:{name:`SliderPropsBase['defaultValue']`,raw:`SliderPropsBase['defaultValue']`},description:`Initial range values [min, max]`,defaultValue:{value:`[0, 100]`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Label displayed above the range slider`},labelWrapperClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the label wrapper`},max:{required:!1,tsType:{name:`SliderPropsBase['max']`,raw:`SliderPropsBase['max']`},description:`Maximum value for the range`},min:{required:!1,tsType:{name:`SliderPropsBase['min']`,raw:`SliderPropsBase['min']`},description:`Minimum value for the range`},name:{required:!1,tsType:{name:`string`},description:`Form field name for the hidden input`},showValue:{required:!1,tsType:{name:`boolean`},description:`Whether to display the current range values`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Size of the slider track and thumbs`},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override for this component`}},composes:[`VariantProps`]}})))()}var x,S,C,w;function T(){return(T=e((()=>{b(),x=n(),S={title:`In Review/Range`,component:y},C={args:{min:0,max:100,showValue:!0},render:e=>(0,x.jsx)(`div`,{className:`max-w-87.5`,children:(0,x.jsx)(y,{theme:`kubefirst`,label:`Range with Kubefirst theme`,defaultValue:[10,77],...e})})},w=[`Range`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    showValue: true
  },
  render: args => <div className="max-w-87.5">
      <RangeComponent theme="kubefirst" label="Range with Kubefirst theme" defaultValue={[10, 77]} {...args} />
    </div>
}`,...C.parameters?.docs?.source}}}})))()}T();export{C as Range,w as __namedExportsOrder,S as default};