import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as g,S as i}from"./civo-logo-B4wLzh9o.js";import{r as o}from"./iframe-d5463F2f.js";import{c as N,a as d}from"./index-Bn42e07n.js";import{T as s}from"./Typography-B0NnVuoh.js";import"./Card-DRex73aw.js";import"./Radio-BiocLpfL.js";import"./preload-helper-PPVm8Dsz.js";const b=N(["flex"],{variants:{direction:{row:["flex-row","gap-8"],col:["flex-col","gap-4"]}},defaultVariants:{direction:"col"}}),r=({className:n,defaultChecked:m,direction:p,name:c,options:u,theme:C,wrapperClassName:h,onValueChange:t})=>{const[v,f]=o.useState(m),w=o.useCallback(a=>{f(a),t?.(a)},[t]);return e.jsx("div",{className:d(b({className:h,direction:p})),"data-theme":C,children:u.map(({value:a,...x})=>e.jsx(g,{value:a,name:c,className:d(n),checked:v===a,onChange:()=>w(a),...x},a))})};r.__docgenInfo={description:"",methods:[],displayName:"RadioCardGroup",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},defaultChecked:{required:!1,tsType:{name:"string"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'col'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'col'"}]},description:""},name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<CardProps, 'canHover' | 'isActive'> &
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
}`,signature:{properties:[{key:"labelWrapperClassName",value:{name:"string",required:!1}},{key:"theme",value:{name:"Theme",required:!1}}]}}]},{name:"union",raw:"'name' | 'checked' | 'defaultChecked'",elements:[{name:"literal",value:"'name'"},{name:"literal",value:"'checked'"},{name:"literal",value:"'defaultChecked'"}]}],raw:"Omit<RadioCardProps, 'name' | 'checked' | 'defaultChecked'>"}],raw:"Omit<RadioCardProps, 'name' | 'checked' | 'defaultChecked'>[]"},description:""},theme:{required:!1,tsType:{name:"Theme"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const S={title:"In Review/RadioCardGroup",component:r},k=[{label:e.jsx(s,{variant:"subtitle3",className:"text-zinc-700",children:"Kubefirst template"}),value:"option-1",description:e.jsx(s,{variant:"body2",className:"text-zinc-700",children:"Provision a new cluster from a Kubefirst defined template"}),wrapperClassName:"rounded-lg w-full"},{label:e.jsx(s,{variant:"subtitle3",className:"text-zinc-700",children:"Custom template"}),value:"option-2",description:e.jsx(s,{variant:"body2",className:"text-zinc-700",children:"Provision a new cluster from a pre-defined custom template"}),wrapperClassName:"rounded-lg w-full"}],l={args:{defaultChecked:"option-1",options:[{label:e.jsx(i,{}),value:"option-1",wrapperClassName:"w-[200px]"},{label:e.jsx(i,{}),value:"option-2",wrapperClassName:"w-[200px]"},{label:e.jsx(i,{}),value:"option-3",wrapperClassName:"w-[200px]"}]},render:n=>e.jsxs("div",{className:"w-[635px] flex flex-col gap-3",children:[e.jsx("h6",{children:"Row"}),e.jsx(r,{...n,name:"radio-card-group-1",direction:"row"}),e.jsx("h6",{className:"mt-5",children:"Column"}),e.jsx(r,{...n,name:"radio-card-group-2"}),e.jsx("h6",{className:"mt-5",children:"Column with description"}),e.jsx(r,{defaultChecked:"option-1",options:k,wrapperClassName:"w-full",name:"radio-card-group-3"})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...l.parameters?.docs?.source}}};const A=["RadioCardGroup"];export{l as RadioCardGroup,A as __namedExportsOrder,S as default};
