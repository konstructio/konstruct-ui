import{r as a,j as e}from"./iframe-CoBiGKUL.js";import{R as V,T as R,a as j,b as m}from"./index-CMiYRaV3.js";import{a as l,c as s}from"./index-BIgQ6y5l.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dt2jClfr.js";import"./index-Buesxbiu.js";import"./index-BG4t6Fzh.js";import"./index-D1HSvG2h.js";import"./index-CD5jxwaq.js";import"./index-Box-pd3H.js";import"./index-CVV1FKaE.js";import"./index-CWPEqVLx.js";const S=l(["relative","flex","items-center","w-full","border","border-gray-200","rounded-full","shadow-sm"]),T=l(["absolute","h-full","bg-kubefirst-secondary"]),N=l(["relative","flex-grow","bg-gray-100","rounded-full"],{variants:{size:{sm:["h-1"],md:["h-2"],lg:["h-3"]}},defaultVariants:{size:"md"}}),u=l(["block","w-5","h-5","rounded-full","cursor-pointer","focus-visible:outline-none","shadow-md","bg-white","border","border-gray-300"],{variants:{size:{sm:["w-5","h-5"],md:["w-6","h-6"],lg:["w-7","h-7"]}},defaultVariants:{size:"md"}}),d=a.forwardRef(({label:r,labelWrapperClassName:c,defaultValue:p=[0,100],name:f,theme:h,size:o,showValue:g,...x},b)=>{const t=a.useRef(null),[n,v]=a.useState(p);a.useImperativeHandle(b,()=>t.current,[t]),a.useEffect(()=>{t.current&&(t.current.value=`[${n.toString()}]`)},[n]);const w=a.useCallback(y=>v(y),[]);return e.jsxs("div",{className:"w-full relative flex flex-col gap-3","data-theme":h,children:[e.jsxs("div",{className:s("flex items-center",r?"justify-between":"justify-end",c),children:[r?e.jsx("label",{children:r}):null,g?e.jsxs("span",{className:"text-xs",children:[n[0]," - ",n[1]]}):null]}),e.jsx("input",{ref:t,name:f,className:"hidden",type:"text"}),e.jsxs(V,{value:n,className:s(S()),onValueChange:w,...x,children:[e.jsx(R,{className:s(N({size:o})),children:e.jsx(j,{className:s(T())})}),e.jsx(m,{className:s(u({size:o}))}),e.jsx(m,{className:s(u({size:o}))})]})]})});d.__docgenInfo={description:`A dual-thumb slider component for selecting a value range.
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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-range--docs Storybook}`,methods:[],displayName:"Range",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},defaultValue:{required:!1,tsType:{name:"SliderPropsBase['defaultValue']",raw:"SliderPropsBase['defaultValue']"},description:"Initial range values [min, max]",defaultValue:{value:"[0, 100]",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label displayed above the range slider"},labelWrapperClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the label wrapper"},max:{required:!1,tsType:{name:"SliderPropsBase['max']",raw:"SliderPropsBase['max']"},description:"Maximum value for the range"},min:{required:!1,tsType:{name:"SliderPropsBase['min']",raw:"SliderPropsBase['min']"},description:"Minimum value for the range"},name:{required:!1,tsType:{name:"string"},description:"Form field name for the hidden input"},showValue:{required:!1,tsType:{name:"boolean"},description:"Whether to display the current range values"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the slider track and thumbs"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"}},composes:["VariantProps"]};const M={title:"In Review/Range",component:d},i={args:{min:0,max:100,showValue:!0},render:r=>e.jsx("div",{className:"max-w-[350px]",children:e.jsx(d,{theme:"kubefirst",label:"Range with Kubefirst theme",defaultValue:[10,77],...r})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    showValue: true
  },
  render: args => <div className="max-w-[350px]">
      <RangeComponent theme="kubefirst" label="Range with Kubefirst theme" defaultValue={[10, 77]} {...args} />
    </div>
}`,...i.parameters?.docs?.source}}};const O=["Range"];export{i as Range,O as __namedExportsOrder,M as default};
