import{r as a,j as e}from"./iframe-RzY5nVzv.js";import{R as y,T as V,a as R,b as d}from"./index-nv-_BX2c.js";import{a as l,c as s}from"./index-B-7A89sm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-4EHyxKTR.js";import"./index-G0SWjWY6.js";import"./index-rjmpviWI.js";import"./index-D4GvNxec.js";import"./index-C0eeyF75.js";import"./index-CAOwILyZ.js";import"./index-BJGDGsmh.js";import"./index-CLUDaT_k.js";const j=l(["relative","flex","items-center","w-full","border","border-gray-200","rounded-full","shadow-sm"]),S=l(["absolute","h-full","bg-kubefirst-secondary"]),T=l(["relative","flex-grow","bg-gray-100","rounded-full"],{variants:{size:{sm:["h-1"],md:["h-2"],lg:["h-3"]}},defaultVariants:{size:"md"}}),u=l(["block","w-5","h-5","rounded-full","cursor-pointer","focus-visible:outline-none","shadow-md","bg-white","border","border-gray-300"],{variants:{size:{sm:["w-5","h-5"],md:["w-6","h-6"],lg:["w-7","h-7"]}},defaultVariants:{size:"md"}}),m=a.forwardRef(({label:r,defaultValue:c=[0,100],name:p,theme:f,size:o,showValue:h,...g},x)=>{const t=a.useRef(null),[n,b]=a.useState(c);a.useImperativeHandle(x,()=>t.current,[t]),a.useEffect(()=>{t.current&&(t.current.value=`[${n.toString()}]`)},[n]);const v=a.useCallback(w=>b(w),[]);return e.jsxs("div",{className:"w-full relative flex flex-col gap-3","data-theme":f,children:[e.jsxs("div",{className:s("flex items-center",r?"justify-between":"justify-end"),children:[r?e.jsx("label",{children:r}):null,h?e.jsxs("span",{className:"text-xs",children:[n[0]," - ",n[1]]}):null]}),e.jsx("input",{ref:t,name:p,className:"hidden",type:"text"}),e.jsxs(y,{value:n,className:s(j()),onValueChange:v,...g,children:[e.jsx(V,{className:s(T({size:o})),children:e.jsx(R,{className:s(S())})}),e.jsx(d,{className:s(u({size:o}))}),e.jsx(d,{className:s(u({size:o}))})]})]})});m.__docgenInfo={description:`A dual-thumb slider component for selecting a value range.
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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-range--docs Storybook}`,methods:[],displayName:"Range",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},defaultValue:{required:!1,tsType:{name:"SliderPropsBase['defaultValue']",raw:"SliderPropsBase['defaultValue']"},description:"Initial range values [min, max]",defaultValue:{value:"[0, 100]",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label displayed above the range slider"},max:{required:!1,tsType:{name:"SliderPropsBase['max']",raw:"SliderPropsBase['max']"},description:"Maximum value for the range"},min:{required:!1,tsType:{name:"SliderPropsBase['min']",raw:"SliderPropsBase['min']"},description:"Minimum value for the range"},name:{required:!1,tsType:{name:"string"},description:"Form field name for the hidden input"},showValue:{required:!1,tsType:{name:"boolean"},description:"Whether to display the current range values"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the slider track and thumbs"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"}},composes:["VariantProps"]};const K={title:"In Review/Range",component:m},i={args:{min:0,max:100,showValue:!0},render:r=>e.jsx("div",{className:"max-w-[350px]",children:e.jsx(m,{theme:"kubefirst",label:"Range with Kubefirst theme",defaultValue:[10,77],...r})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    showValue: true
  },
  render: args => <div className="max-w-[350px]">
      <RangeComponent theme="kubefirst" label="Range with Kubefirst theme" defaultValue={[10, 77]} {...args} />
    </div>
}`,...i.parameters?.docs?.source}}};const M=["Range"];export{i as Range,M as __namedExportsOrder,K as default};
