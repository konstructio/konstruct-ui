import{r as j,j as a}from"./iframe-DLrn8Gk9.js";import{R as P,S as N}from"./civo-logo-CrN6r_0h.js";import{c as q}from"./compiler-runtime-DxXHijtq.js";import{a as G,c as b}from"./index-CwGTy2we.js";import{T as C}from"./Typography-CHpAwWZY.js";import"./preload-helper-PPVm8Dsz.js";import"./Card-C3ibiQrZ.js";import"./Radio-Bpj8wjdA.js";const S=G(["flex"],{variants:{direction:{row:["flex-row","gap-8"],col:["flex-col","gap-4"]}},defaultVariants:{direction:"col"}}),d=m=>{const e=q.c(20),{className:s,defaultChecked:k,direction:v,name:l,options:f,theme:g,wrapperClassName:w,onValueChange:x}=m,[o,y]=j.useState(k);let p;e[0]!==x?(p=n=>{y(n),x?.(n)},e[0]=x,e[1]=p):p=e[1];const i=p;let r;e[2]!==v||e[3]!==w?(r=b(S({className:w,direction:v})),e[2]=v,e[3]=w,e[4]=r):r=e[4];let t;if(e[5]!==s||e[6]!==i||e[7]!==l||e[8]!==f||e[9]!==o){let n;e[11]!==s||e[12]!==i||e[13]!==l||e[14]!==o?(n=R=>{const{value:u,...T}=R;return a.jsx(P,{value:u,name:l,className:b(s),checked:o===u,onChange:()=>i(u),...T},u)},e[11]=s,e[12]=i,e[13]=l,e[14]=o,e[15]=n):n=e[15],t=f.map(n),e[5]=s,e[6]=i,e[7]=l,e[8]=f,e[9]=o,e[10]=t}else t=e[10];let c;return e[16]!==r||e[17]!==t||e[18]!==g?(c=a.jsx("div",{className:r,"data-theme":g,children:t}),e[16]=r,e[17]=t,e[18]=g,e[19]=c):c=e[19],c};d.__docgenInfo={description:`A group of card-style radio buttons with shared state management.

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
}`,signature:{properties:[{key:"labelWrapperClassName",value:{name:"string",required:!1}},{key:"theme",value:{name:"Theme",required:!1}}]}}]},{name:"union",raw:"'name' | 'checked' | 'defaultChecked'",elements:[{name:"literal",value:"'name'"},{name:"literal",value:"'checked'"},{name:"literal",value:"'defaultChecked'"}]}],raw:"Omit<RadioCardProps, 'name' | 'checked' | 'defaultChecked'>"}],raw:"Omit<RadioCardProps, 'name' | 'checked' | 'defaultChecked'>[]"},description:""},theme:{required:!1,tsType:{name:"Theme"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const F={title:"In Review/RadioCardGroup",component:d},O=[{label:a.jsx(C,{variant:"subtitle3",className:"text-zinc-700",children:"Kubefirst template"}),value:"option-1",description:a.jsx(C,{variant:"body2",className:"text-zinc-700",children:"Provision a new cluster from a Kubefirst defined template"}),wrapperClassName:"rounded-lg w-full"},{label:a.jsx(C,{variant:"subtitle3",className:"text-zinc-700",children:"Custom template"}),value:"option-2",description:a.jsx(C,{variant:"body2",className:"text-zinc-700",children:"Provision a new cluster from a pre-defined custom template"}),wrapperClassName:"rounded-lg w-full"}],h={args:{defaultChecked:"option-1",options:[{label:a.jsx(N,{}),value:"option-1",wrapperClassName:"w-[200px]"},{label:a.jsx(N,{}),value:"option-2",wrapperClassName:"w-[200px]"},{label:a.jsx(N,{}),value:"option-3",wrapperClassName:"w-[200px]"}]},render:m=>a.jsxs("div",{className:"w-[635px] flex flex-col gap-3",children:[a.jsx("h6",{children:"Row"}),a.jsx(d,{...m,name:"radio-card-group-1",direction:"row"}),a.jsx("h6",{className:"mt-5",children:"Column"}),a.jsx(d,{...m,name:"radio-card-group-2"}),a.jsx("h6",{className:"mt-5",children:"Column with description"}),a.jsx(d,{defaultChecked:"option-1",options:O,wrapperClassName:"w-full",name:"radio-card-group-3"})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}};const D=["RadioCardGroup"];export{h as RadioCardGroup,D as __namedExportsOrder,F as default};
