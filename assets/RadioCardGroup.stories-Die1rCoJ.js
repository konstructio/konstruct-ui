import{r as l,j as e}from"./iframe-B_Kp4Ap4.js";import{R as x,S as o}from"./civo-logo-DTHqKhxt.js";import{a as b,c as d}from"./index-B-7A89sm.js";import{T as s}from"./Typography-DYYI0ttp.js";import"./preload-helper-PPVm8Dsz.js";import"./Card-BwG-C-Qc.js";import"./Radio-InsB1H9O.js";const N=b(["flex"],{variants:{direction:{row:["flex-row","gap-8"],col:["flex-col","gap-4"]}},defaultVariants:{direction:"col"}}),n=({className:r,defaultChecked:m,direction:p,name:c,options:u,theme:C,wrapperClassName:h,onValueChange:i})=>{const[v,f]=l.useState(m),g=l.useCallback(a=>{f(a),i?.(a)},[i]);return e.jsx("div",{className:d(N({className:h,direction:p})),"data-theme":C,children:u.map(({value:a,...w})=>e.jsx(x,{value:a,name:c,className:d(r),checked:v===a,onChange:()=>g(a),...w},a))})};n.__docgenInfo={description:`A group of card-style radio buttons with shared state management.

@example
\`\`\`tsx
<RadioCardGroup
  name="plan"
  direction="row"
  options={[
    { value: 'starter', label: 'Starter', description: 'For individuals' },
    { value: 'team', label: 'Team', description: 'For small teams' },
    { value: 'business', label: 'Business', description: 'For organizations' },
  ]}
  defaultChecked="team"
  onValueChange={(value) => console.log(value)}
/>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-radiocardgroup--docs Storybook}`,methods:[],displayName:"RadioCardGroup",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},defaultChecked:{required:!1,tsType:{name:"string"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'col'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'col'"}]},description:""},name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<CardProps, 'canHover' | 'isActive'> &
Pick<
  RadioProps,
  | 'name'
  | 'value'
  | 'checked'
  | 'onChange'
  | 'label'
  | 'disabled'
  | 'defaultChecked'
  | 'labelTextClassName'
  | 'description'
  | 'descriptionClassName'
> & {
  labelWrapperClassName?: string;
  theme?: Theme;
}`,elements:[{name:"Omit",elements:[{name:"CardProps"},{name:"union",raw:"'canHover' | 'isActive'",elements:[{name:"literal",value:"'canHover'"},{name:"literal",value:"'isActive'"}]}],raw:"Omit<CardProps, 'canHover' | 'isActive'>"},{name:"Pick",elements:[{name:"RadioProps"},{name:"union",raw:`| 'name'
| 'value'
| 'checked'
| 'onChange'
| 'label'
| 'disabled'
| 'defaultChecked'
| 'labelTextClassName'
| 'description'
| 'descriptionClassName'`,elements:[{name:"literal",value:"'name'"},{name:"literal",value:"'value'"},{name:"literal",value:"'checked'"},{name:"literal",value:"'onChange'"},{name:"literal",value:"'label'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'defaultChecked'"},{name:"literal",value:"'labelTextClassName'"},{name:"literal",value:"'description'"},{name:"literal",value:"'descriptionClassName'"}]}],raw:`Pick<
  RadioProps,
  | 'name'
  | 'value'
  | 'checked'
  | 'onChange'
  | 'label'
  | 'disabled'
  | 'defaultChecked'
  | 'labelTextClassName'
  | 'description'
  | 'descriptionClassName'
>`},{name:"signature",type:"object",raw:`{
  labelWrapperClassName?: string;
  theme?: Theme;
}`,signature:{properties:[{key:"labelWrapperClassName",value:{name:"string",required:!1}},{key:"theme",value:{name:"Theme",required:!1}}]}}]},{name:"union",raw:"'name' | 'checked' | 'defaultChecked'",elements:[{name:"literal",value:"'name'"},{name:"literal",value:"'checked'"},{name:"literal",value:"'defaultChecked'"}]}],raw:"Omit<RadioCardProps, 'name' | 'checked' | 'defaultChecked'>"}],raw:"Omit<RadioCardProps, 'name' | 'checked' | 'defaultChecked'>[]"},description:""},theme:{required:!1,tsType:{name:"Theme"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const S={title:"In Review/RadioCardGroup",component:n},k=[{label:e.jsx(s,{variant:"subtitle3",className:"text-zinc-700",children:"Kubefirst template"}),value:"option-1",description:e.jsx(s,{variant:"body2",className:"text-zinc-700",children:"Provision a new cluster from a Kubefirst defined template"}),wrapperClassName:"rounded-lg w-full"},{label:e.jsx(s,{variant:"subtitle3",className:"text-zinc-700",children:"Custom template"}),value:"option-2",description:e.jsx(s,{variant:"body2",className:"text-zinc-700",children:"Provision a new cluster from a pre-defined custom template"}),wrapperClassName:"rounded-lg w-full"}],t={args:{defaultChecked:"option-1",options:[{label:e.jsx(o,{}),value:"option-1",wrapperClassName:"w-[200px]"},{label:e.jsx(o,{}),value:"option-2",wrapperClassName:"w-[200px]"},{label:e.jsx(o,{}),value:"option-3",wrapperClassName:"w-[200px]"}]},render:r=>e.jsxs("div",{className:"w-[635px] flex flex-col gap-3",children:[e.jsx("h6",{children:"Row"}),e.jsx(n,{...r,name:"radio-card-group-1",direction:"row"}),e.jsx("h6",{className:"mt-5",children:"Column"}),e.jsx(n,{...r,name:"radio-card-group-2"}),e.jsx("h6",{className:"mt-5",children:"Column with description"}),e.jsx(n,{defaultChecked:"option-1",options:k,wrapperClassName:"w-full",name:"radio-card-group-3"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: 'option-1',
    options: [{
      label: <CivoLogo />,
      value: 'option-1',
      wrapperClassName: 'w-[200px]'
    }, {
      label: <CivoLogo />,
      value: 'option-2',
      wrapperClassName: 'w-[200px]'
    }, {
      label: <CivoLogo />,
      value: 'option-3',
      wrapperClassName: 'w-[200px]'
    }]
  },
  render: args => <div className="w-[635px] flex flex-col gap-3">
      <h6>Row</h6>
      <RadioCardGroupComponent {...args} name="radio-card-group-1" direction="row" />

      <h6 className="mt-5">Column</h6>
      <RadioCardGroupComponent {...args} name="radio-card-group-2" />

      <h6 className="mt-5">Column with description</h6>
      <RadioCardGroupComponent defaultChecked="option-1" options={optionsWithDescription} wrapperClassName="w-full" name="radio-card-group-3" />
    </div>
} satisfies Story`,...t.parameters?.docs?.source}}};const O=["RadioCardGroup"];export{t as RadioCardGroup,O as __namedExportsOrder,S as default};
