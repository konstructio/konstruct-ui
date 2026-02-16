import{r as s,j as e}from"./iframe-BXO_EhpM.js";import{R as w,T as S,b as y}from"./index-Bgf2PWLy.js";import{a as n,c as i}from"./index-BIgQ6y5l.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CcJZc0wx.js";import"./index-vvKf7FSZ.js";import"./index-CUjo4IK2.js";import"./index-D_E6ICQ7.js";import"./index-Dqw6vhoR.js";import"./index-Bn_ZaH7x.js";import"./index-dPD-S0LF.js";import"./index-CkmwOmd_.js";const V=n(["relative","flex","items-center","w-full"]),T=n(["relative","flex-grow","rounded-full","bg-kubefirst-secondary"],{variants:{size:{sm:["h-1"],md:["h-2"],lg:["h-3"]}},defaultVariants:{size:"md"}}),j=n(["block","w-5","h-5","rounded-full","cursor-pointer","focus-visible:outline-none","shadow-md","bg-white","border","border-gray-300"],{variants:{size:{sm:["w-5","h-5"],md:["w-6","h-6"],lg:["w-7","h-7"]}},defaultVariants:{size:"md"}}),o=s.forwardRef(({label:a,labelWrapperClassName:m,defaultValue:u=[0],name:c,theme:p,size:d,showValue:f,...h},x)=>{const r=s.useRef(null),[t,b]=s.useState(u);s.useImperativeHandle(x,()=>r.current,[r]),s.useEffect(()=>{r.current&&(r.current.value=t.toString())},[t]);const g=s.useCallback(v=>b(v),[]);return e.jsxs("div",{className:"w-full relative flex flex-col gap-3","data-theme":p,children:[e.jsxs("div",{className:i("flex items-center",a?"justify-between":"justify-end",m),children:[a?e.jsx("label",{children:a}):null,f?e.jsx("span",{className:"text-xs",children:t}):null]}),e.jsx("input",{ref:r,name:c,className:"hidden",type:"number"}),e.jsxs(w,{value:t,className:i(V()),onValueChange:g,...h,children:[e.jsx(S,{className:i(T({size:d}))}),e.jsx(y,{className:i(j({size:d}))})]})]})});o.__docgenInfo={description:`A single-thumb slider component for selecting a value.
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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-slider--docs Storybook}`,methods:[],displayName:"Slider",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},defaultValue:{required:!1,tsType:{name:"SliderPropsBase['defaultValue']",raw:"SliderPropsBase['defaultValue']"},description:"Initial value as single-element array",defaultValue:{value:"[0]",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label displayed above the slider"},labelWrapperClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the label wrapper"},max:{required:!1,tsType:{name:"SliderPropsBase['max']",raw:"SliderPropsBase['max']"},description:"Maximum value for the slider"},min:{required:!1,tsType:{name:"SliderPropsBase['min']",raw:"SliderPropsBase['min']"},description:"Minimum value for the slider"},name:{required:!1,tsType:{name:"string"},description:"Form field name for the hidden input"},showValue:{required:!1,tsType:{name:"boolean"},description:"Whether to display the current value"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the slider track and thumb"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"}},composes:["VariantProps"]};const K={title:"In Review/Slider",component:o},l={args:{showValue:!0},render:a=>e.jsx("div",{className:"max-w-[350px]",children:e.jsx(o,{theme:"kubefirst",label:"Slider with Kubefirst theme",defaultValue:[50],...a})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    showValue: true
  },
  render: args => <div className="max-w-[350px]">
      <SliderComponent theme="kubefirst" label="Slider with Kubefirst theme" defaultValue={[50]} {...args} />
    </div>
}`,...l.parameters?.docs?.source}}};const M=["Slider"];export{l as Slider,M as __namedExportsOrder,K as default};
