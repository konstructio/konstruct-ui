import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as N}from"./index-G7pYqrZ8.js";import{r as l}from"./iframe-R6RX4IC6.js";import{c as C,a as d}from"./index-Cr-WShRT.js";import{R as b}from"./Radio-DH0zpZ6w.js";import{I as j}from"./info-1Ymmoq7o.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CslSlgow.js";const q=C(["flex"],{variants:{direction:{row:["flex-row","gap-8"],col:["flex-col","gap-4"]}},defaultVariants:{direction:"col"}}),i=({asChild:o,className:t,defaultChecked:r,name:u,options:f,theme:x,wrapperClassName:v,direction:h,onValueChange:n})=>{const g=o?N:"div",[k,w]=l.useState(()=>r),R=l.useCallback(a=>{w(a),n==null||n(a)},[n]);return e.jsx(g,{className:d(q({className:v,direction:h})),"data-theme":x,children:f.map(({value:a,...y})=>e.jsx(b,{value:a,name:u,className:d(t),checked:k===a,onChange:()=>R(a),...y},a))})};i.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"RadioProps['className']",raw:"RadioProps['className']"},description:""},defaultChecked:{required:!1,tsType:{name:"string"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'col'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'col'"}]},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"RadioProps"},{name:"union",raw:"'name' | 'checked' | 'defaultChecked'",elements:[{name:"literal",value:"'name'"},{name:"literal",value:"'checked'"},{name:"literal",value:"'defaultChecked'"}]}],raw:"Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>"}],raw:"Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>[]"},description:""},theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'colony'
| 'civo'
| 'kubefirst-dark'
| 'colony-dark'
| 'civo-dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'colony'"},{name:"literal",value:"'civo'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'colony-dark'"},{name:"literal",value:"'civo-dark'"},{name:"undefined"}]},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const A={title:"In Review/RadioGroup",component:i},s={args:{options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:e.jsxs("span",{className:"flex items-center gap-1.5",children:["Option 3 ",e.jsx(j,{className:"w-[15px] h-[15px] text-slate-400"})]}),value:"option3"}]},render:o=>e.jsxs("div",{className:"w-[350px] flex flex-col gap-3 text-slate-700",children:[e.jsx("h6",{children:"Row"}),e.jsx(i,{...o,direction:"row",name:"radio-group-row",defaultChecked:"option1",options:o.options.map(({value:t,...r})=>({...r,value:t}))}),e.jsx("h6",{className:"mt-5",children:"Column"}),e.jsx(i,{...o,name:"radio-group-col",defaultChecked:"option1",options:o.options.map(({value:t,...r})=>({...r,value:t}))})]})};var p,m,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Option 1',
      value: 'option1'
    }, {
      label: 'Option 2',
      value: 'option2'
    }, {
      label: <span className="flex items-center gap-1.5">
            Option 3 <Info className="w-[15px] h-[15px] text-slate-400" />
          </span>,
      value: 'option3'
    }]
  },
  render: args => <div className="w-[350px] flex flex-col gap-3 text-slate-700">
      <h6>Row</h6>

      <RadioGroupComponent {...args} direction="row" name="radio-group-row" defaultChecked="option1" options={args.options.map(({
      value,
      ...delegated
    }) => ({
      ...delegated,
      value
    }))} />

      <h6 className="mt-5">Column</h6>

      <RadioGroupComponent {...args} name="radio-group-col" defaultChecked="option1" options={args.options.map(({
      value,
      ...delegated
    }) => ({
      ...delegated,
      value
    }))} />
    </div>
} satisfies Story`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const $=["RadioGroup"];export{s as RadioGroup,$ as __namedExportsOrder,A as default};
