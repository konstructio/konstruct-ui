import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as N,S as s}from"./RadioCard-B37LQbAf.js";import{r as o}from"./iframe-DLdgmZt4.js";import{c as y,a as d}from"./index-Cr-WShRT.js";import{T as i}from"./Typography-CcKPdbSl.js";import"./Card-BHjYbf0A.js";import"./Radio-D7UvFLw6.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CSJ8DwjV.js";const j=y(["flex"],{variants:{direction:{row:["flex-row","gap-8"],col:["flex-col","gap-4"]}},defaultVariants:{direction:"col"}}),r=({className:n,defaultChecked:u,direction:v,name:C,options:f,theme:h,wrapperClassName:k,onValueChange:l})=>{const[w,x]=o.useState(u),b=o.useCallback(a=>{x(a),l==null||l(a)},[l]);return e.jsx("div",{className:d(j({className:k,direction:v})),"data-theme":h,children:f.map(({value:a,...g})=>e.jsx(N,{value:a,name:C,className:d(n),checked:w===a,onChange:()=>b(a),...g},a))})};r.__docgenInfo={description:"",methods:[],displayName:"RadioCardGroup",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},defaultChecked:{required:!1,tsType:{name:"string"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'col'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'col'"}]},description:""},name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<CardProps, 'canHover' | 'isActive'> &
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
}`,signature:{properties:[{key:"labelWrapperClassName",value:{name:"string",required:!1}},{key:"theme",value:{name:"union",raw:`| 'kubefirst'
| 'colony'
| 'civo'
| 'kubefirst-dark'
| 'colony-dark'
| 'civo-dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'colony'"},{name:"literal",value:"'civo'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'colony-dark'"},{name:"literal",value:"'civo-dark'"},{name:"undefined"}],required:!1}}]}}]},{name:"union",raw:"'name' | 'checked' | 'defaultChecked'",elements:[{name:"literal",value:"'name'"},{name:"literal",value:"'checked'"},{name:"literal",value:"'defaultChecked'"}]}],raw:"Omit<RadioCardProps, 'name' | 'checked' | 'defaultChecked'>"}],raw:"Omit<RadioCardProps, 'name' | 'checked' | 'defaultChecked'>[]"},description:""},theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'colony'
| 'civo'
| 'kubefirst-dark'
| 'colony-dark'
| 'civo-dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'colony'"},{name:"literal",value:"'civo'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'colony-dark'"},{name:"literal",value:"'civo-dark'"},{name:"undefined"}]},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const H={title:"In Review/RadioCardGroup",component:r},R=[{label:e.jsx(i,{variant:"subtitle3",className:"text-zinc-700",children:"Kubefirst template"}),value:"option-1",description:e.jsx(i,{variant:"body2",className:"text-zinc-700",children:"Provision a new cluster from a Kubefirst defined template"}),wrapperClassName:"rounded-lg w-full"},{label:e.jsx(i,{variant:"subtitle3",className:"text-zinc-700",children:"Custom template"}),value:"option-2",description:e.jsx(i,{variant:"body2",className:"text-zinc-700",children:"Provision a new cluster from a pre-defined custom template"}),wrapperClassName:"rounded-lg w-full"}],t={args:{defaultChecked:"option-1",options:[{label:e.jsx(s,{}),value:"option-1",wrapperClassName:"w-[200px]"},{label:e.jsx(s,{}),value:"option-2",wrapperClassName:"w-[200px]"},{label:e.jsx(s,{}),value:"option-3",wrapperClassName:"w-[200px]"}]},render:n=>e.jsxs("div",{className:"w-[635px] flex flex-col gap-3",children:[e.jsx("h6",{children:"Row"}),e.jsx(r,{...n,name:"radio-card-group-1",direction:"row"}),e.jsx("h6",{className:"mt-5",children:"Column"}),e.jsx(r,{...n,name:"radio-card-group-2"}),e.jsx("h6",{className:"mt-5",children:"Column with description"}),e.jsx(r,{defaultChecked:"option-1",theme:"kubefirst",options:R,wrapperClassName:"w-full",name:"radio-card-group-3"})]})};var m,c,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      <RadioCardGroupComponent defaultChecked="option-1" theme="kubefirst" options={optionsWithDescription} wrapperClassName="w-full" name="radio-card-group-3" />
    </div>
} satisfies Story`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const L=["RadioCardGroup"];export{t as RadioCardGroup,L as __namedExportsOrder,H as default};
