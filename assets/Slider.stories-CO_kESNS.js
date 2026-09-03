import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{i as r,t as i}from"./utils-0TJZseot.js";import{n as a,t as o}from"./dist-qtULYLvt.js";import{a as s,i as c,r as l,t as u}from"./dist-EohlFpl0.js";var d,f,p;function m(){return(m=e((()=>{a(),d=o([`relative`,`flex`,`items-center`,`w-full`]),f=o([`relative`,`flex-grow`,`rounded-full`,`bg-kubefirst-secondary`],{variants:{size:{sm:[`h-1`],md:[`h-2`],lg:[`h-3`]}},defaultVariants:{size:`md`}}),p=o([`block`,`w-5`,`h-5`,`rounded-full`,`cursor-pointer`,`focus-visible:outline-none`,`shadow-md`,`bg-white`,`border`,`border-gray-300`],{variants:{size:{sm:[`w-5`,`h-5`],md:[`w-6`,`h-6`],lg:[`w-7`,`h-7`]}},defaultVariants:{size:`md`}})})))()}var h,g,_;function v(){return(v=e((()=>{s(),h=t(),r(),m(),g=n(),_=(0,h.forwardRef)(({label:e,labelWrapperClassName:t,defaultValue:n=[0],name:r,theme:a,size:o,showValue:s,...m},_)=>{let v=(0,h.useRef)(null),[y,b]=(0,h.useState)(n);return(0,h.useImperativeHandle)(_,()=>v.current,[v]),(0,h.useEffect)(()=>{v.current&&(v.current.value=y.toString())},[y]),(0,g.jsxs)(`div`,{className:`w-full relative flex flex-col gap-3`,"data-theme":a,children:[(0,g.jsxs)(`div`,{className:i(`flex items-center`,e?`justify-between`:`justify-end`,t),children:[e?(0,g.jsx)(`label`,{children:e}):null,s?(0,g.jsx)(`span`,{className:`text-xs`,children:y}):null]}),(0,g.jsx)(`input`,{ref:v,name:r,className:`hidden`,type:`number`}),(0,g.jsxs)(u,{value:y,className:i(d()),onValueChange:e=>{b(e)},...m,children:[(0,g.jsx)(c,{className:i(f({size:o}))}),(0,g.jsx)(l,{className:i(p({size:o}))})]})]})}),_.__docgenInfo={description:`A single-thumb slider component for selecting a value.
Built on Radix UI Slider for accessibility.

@example
\`\`\`tsx
<Slider
  label="Brightness"
  min={0}
  max={100}
  defaultValue={[75]}
  showValue
  name="brightness"
/>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-slider--docs Storybook}`,methods:[],displayName:`Slider`,props:{className:{required:!1,tsType:{name:`string`},description:`Additional CSS classes`},defaultValue:{required:!1,tsType:{name:`SliderPropsBase['defaultValue']`,raw:`SliderPropsBase['defaultValue']`},description:`Initial value as single-element array`,defaultValue:{value:`[0]`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Label displayed above the slider`},labelWrapperClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the label wrapper`},max:{required:!1,tsType:{name:`SliderPropsBase['max']`,raw:`SliderPropsBase['max']`},description:`Maximum value for the slider`},min:{required:!1,tsType:{name:`SliderPropsBase['min']`,raw:`SliderPropsBase['min']`},description:`Minimum value for the slider`},name:{required:!1,tsType:{name:`string`},description:`Form field name for the hidden input`},showValue:{required:!1,tsType:{name:`boolean`},description:`Whether to display the current value`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Size of the slider track and thumb`},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override for this component`}},composes:[`VariantProps`]}})))()}var y,b,x,S;function C(){return(C=e((()=>{v(),y=n(),b={title:`In Review/Slider`,component:_},x={args:{showValue:!0},render:e=>(0,y.jsx)(`div`,{className:`max-w-87.5`,children:(0,y.jsx)(_,{theme:`kubefirst`,label:`Slider with Kubefirst theme`,defaultValue:[50],...e})})},S=[`Slider`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    showValue: true
  },
  render: args => <div className="max-w-87.5">
      <SliderComponent theme="kubefirst" label="Slider with Kubefirst theme" defaultValue={[50]} {...args} />
    </div>
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as Slider,S as __namedExportsOrder,b as default};