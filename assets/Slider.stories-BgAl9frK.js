import{r as s,j as e}from"./iframe-Bp60l9al.js";import{R as v,T as w,b as S}from"./index-B6xAu3Rp.js";import{a as n,c as i}from"./index-B-7A89sm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BcGdR1C3.js";import"./index-JTgYP6w4.js";import"./index-CRUFEqe3.js";import"./index-BTTMSvRg.js";import"./index-Bym0QXdL.js";import"./index-DpDBQaEL.js";import"./index-fpGmZfFV.js";import"./index-8ebUPkZ6.js";const y=n(["relative","flex","items-center","w-full"]),V=n(["relative","flex-grow","rounded-full","bg-kubefirst-secondary"],{variants:{size:{sm:["h-1"],md:["h-2"],lg:["h-3"]}},defaultVariants:{size:"md"}}),j=n(["block","w-5","h-5","rounded-full","cursor-pointer","focus-visible:outline-none","shadow-md","bg-white","border","border-gray-300"],{variants:{size:{sm:["w-5","h-5"],md:["w-6","h-6"],lg:["w-7","h-7"]}},defaultVariants:{size:"md"}}),o=s.forwardRef(({label:a,defaultValue:m=[0],name:u,theme:c,size:d,showValue:p,...f},h)=>{const r=s.useRef(null),[t,x]=s.useState(m);s.useImperativeHandle(h,()=>r.current,[r]),s.useEffect(()=>{r.current&&(r.current.value=t.toString())},[t]);const b=s.useCallback(g=>x(g),[]);return e.jsxs("div",{className:"w-full relative flex flex-col gap-3","data-theme":c,children:[e.jsxs("div",{className:i("flex items-center",a?"justify-between":"justify-end"),children:[a?e.jsx("label",{children:a}):null,p?e.jsx("span",{className:"text-xs",children:t}):null]}),e.jsx("input",{ref:r,name:u,className:"hidden",type:"number"}),e.jsxs(v,{value:t,className:i(y()),onValueChange:b,...f,children:[e.jsx(w,{className:i(V({size:d}))}),e.jsx(S,{className:i(j({size:d}))})]})]})});o.__docgenInfo={description:`A single-thumb slider component for selecting a value.
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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-slider--docs Storybook}`,methods:[],displayName:"Slider",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},defaultValue:{required:!1,tsType:{name:"SliderPropsBase['defaultValue']",raw:"SliderPropsBase['defaultValue']"},description:"Initial value as single-element array",defaultValue:{value:"[0]",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label displayed above the slider"},max:{required:!1,tsType:{name:"SliderPropsBase['max']",raw:"SliderPropsBase['max']"},description:"Maximum value for the slider"},min:{required:!1,tsType:{name:"SliderPropsBase['min']",raw:"SliderPropsBase['min']"},description:"Minimum value for the slider"},name:{required:!1,tsType:{name:"string"},description:"Form field name for the hidden input"},showValue:{required:!1,tsType:{name:"boolean"},description:"Whether to display the current value"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the slider track and thumb"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"}},composes:["VariantProps"]};const A={title:"In Review/Slider",component:o},l={args:{showValue:!0},render:a=>e.jsx("div",{className:"max-w-[350px]",children:e.jsx(o,{theme:"kubefirst",label:"Slider with Kubefirst theme",defaultValue:[50],...a})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    showValue: true
  },
  render: args => <div className="max-w-[350px]">
      <SliderComponent theme="kubefirst" label="Slider with Kubefirst theme" defaultValue={[50]} {...args} />
    </div>
}`,...l.parameters?.docs?.source}}};const K=["Slider"];export{l as Slider,K as __namedExportsOrder,A as default};
